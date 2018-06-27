const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
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
		webpack: function(config, { isServer }) {
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
