const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const rpconfig = require('config-lite')({
	// filename: `config.${process.env.NODE_ENV}`,
	config_basedir: __dirname,
  	config_dir: 'config'
})
// /* Without CSS Modules, with PostCSS */
module.exports = withPlugins(
	[
		[
			withLess,
			{
				cssModules: true
			}
		],
		[
			withCss,
			{
				cssModules: false
			}
		],
		[
			withSass,
			{
				cssModules: false
			}
		]
	],
	{
		distDir: 'build',
		// publicRuntimeConfig: { // Will be available on both server and client
		// staticFolder: '/static'
		// },
		// useFileSystemPublicRoutes: true,
		assetPrefix: '/you/dist',
		webpack: (config, { isServer }) => {
			// console.log(config)
			// config.output.path = __dirname + '/dist'
			if (ANALYZE) {
				config.plugins.push(
					new BundleAnalyzerPlugin({
						analyzerMode: 'server',
						analyzerPort: isServer ? 8888 : 8889,
						openAnalyzer: true
					})
				)
			}

			return config
		}
	}
)
