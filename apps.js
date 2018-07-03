const next = require('next')
const express = require('express')
const path = require('path') 
const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const resolve = file => path.resolve(__dirname, file)
const handle = app.getRequestHandler()
const config = require('config-lite')({
	config_basedir: __dirname,
  	config_dir: 'config'
})
let baseUrl = '/'

if(dev) {
    baseUrl = '/you'
} else {
    baseUrl = '/you'
}
const serve = (path, cache) => {
    express.static(resolve(path), {
        maxAge: cache && dev ? 0 : 60 * 60 * 24 * 30
    })
}
app.prepare()
  .then(() => {
    const server = express()
    // server.use(`${baseUrl}/dist`, serve("./build"))
    const router = express.Router()

  router.get(`${baseUrl}`, (req, res) => {
    return app.render(req, res, '/index', req.query)
  })

  router.get('*', (req, res) => {
    return handle(req, res)
  })

  // use next routes
  server.use(`${baseUrl}`, router)
  server.use(`${baseUrl}/dist`, express.static('dist'))
  server.use(handle)

    // server.use(`/_next/*`, (req, res) => {
    //   const neURL = req.originalUrl.replace('_next', 'you/next')
    //   res.redirect(newURL);
    // });
    // server.get(`${baseUrl}`, (req, res) => {
    //   return app.render(req, res, '/index', req.query)
    // })

    // server.get(`${baseUrl}/other`, (req, res) => {
    //     return app.render(req, res, '/other', req.query)
    //   })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // })

    server.get(`${baseUrl}*`, (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
