const next = require('next')
const Koa = require('koa')
// const Router = require('koa-router')
const router = require('koa-route')
const userAgent = require('koa-useragent')
const koaStaticPlus  = require('koa-static-plus')
const convert = require('koa-convert')
const path = require('path')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const test = process.env.NODE_TEST === 'test'
const app = next({ dev })
const handle = app.getRequestHandler()
const config = require('config-lite')({
	config_basedir: __dirname,
  	config_dir: 'config'
})


// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
	max: 100,
	maxAge: 1000 * 60 * 60 // 1hour
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(ctx) {
	return ctx.url
}

function renderAndCache(ctx, pagePath, noCache, queryParams = null) {
	queryParams = {
		userAgent: ctx.userAgent
	}
	if (dev || test) ssrCache.reset()
	if (noCache === 'noCache') {
		return app
			.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
			.then(html => {
				// Let's cache this page
				console.info('no cache')
				ctx.body = html
			})
			.catch(err => {
				ctx.redirect('https://www.trip.com/404')
				// console.info('ERRR', err)
				// return app.renderError(
				// 	err,
				// 	ctx.req,
				// 	ctx.res,
				// 	pagePath,
				// 	queryParams
				// )
			})
	}

	const key = getCacheKey(ctx.req)
	
	// If we have a page in the cache, let's serve it
	if (ssrCache.has(key)) {
		console.info(`CACHE HIT: ${key}`)
		ctx.body = ssrCache.get(key)
		return Promise.resolve()
	}

	// If not let's render the page into HTML
	return app
		.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
		.then(html => {
			// Let's cache this page
			console.info(`CACHE MISS: ${key}`)
			ssrCache.set(key, html)
			ctx.body = html
		})
		.catch(err => {
			ctx.redirect('https://www.trip.com/404')
			// console.info('ERRR', err)
			// return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
		})
}
const InitKoa = () => {
	app.prepare().then(() => {
		const server = new Koa()
		// const router = new Router()
		// server.use(convert(koaStaticPlus(path.join(__dirname, './.next'), {
		// 	pathPrefix: '/dist'
		// })))
	
		server.use(userAgent)
		// let prefixrouter = router.prefix(config.prefix)
		server.use(router.get('/you/slbhealthcheck.html', ctx => {
			ctx.body = `App is running!`
		}))
		server.use(router.get('/you', ctx => renderAndCache(ctx, '/index')))
		server.use(router.get('/you/other', ctx => renderAndCache(ctx, '/other')))
		// prefixrouter.get('/slbhealthcheck.html', ctx => {
		// 	ctx.body = `App is running!`
		// })
		// prefixrouter.get('/', ctx => renderAndCache(ctx, '/index'))
		// prefixrouter.get('/other', ctx => renderAndCache(ctx, '/other'))
		// server.use(router.routes())

		server.use(async ctx => {
			await handle(ctx.req, ctx.res)
			ctx.respond = false
		})

		server.use(async (ctx, next) => {
			ctx.res.statusCode = 200
			await next()
		})
		server.listen(port, err => {
			if (err) throw err
			console.info(`> Ready on http://localhost:${port}`)
		})
	})
}

const init = async () => {
	// await Promise.all([cargo.init(), shark.init()])

	InitKoa()
}
init()
