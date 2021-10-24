const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: "https://us-central1-aivie-310903.cloudfunctions.net",
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
}