module.exports = {
    apps: [
        {
            name: 'next-boilerplate',
            script: "./server.js",
            watch: true,
            env: {
                "NODE_ENV": "dev",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
}