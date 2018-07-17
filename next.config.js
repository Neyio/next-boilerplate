const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
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
const dev = process.env.NODE_ENV !== 'production'
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
		],
		[withImages]
	],
	{
		distDir: 'dist',
		generateBuildId: async () => {
			return 'v1'
		},
		webpack: (config, { isServer }) => {
			config.devtool = 'source-map'
			if (ANALYZE) {
				config.plugins.push(
					new BundleAnalyzerPlugin({
						analyzerMode: 'server',
						analyzerPort: isServer ? 8888 : 8889,
						openAnalyzer: true
					})
				)
			}
			config.plugins.push(
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
						drop_debugger: dev ? false : true,
						drop_console: dev ? false : true
					}
				})
			)
			return config
		}
	}
)
