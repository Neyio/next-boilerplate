module.exports = {
	apps: [
		{
			name: 'next-boilerplate',
			script: './apps.js',
			watch: true,
			env: {
				NODE_ENV: 'dev'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
}
