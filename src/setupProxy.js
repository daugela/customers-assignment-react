const createProxyMiddleware = require('http-proxy-middleware');

// This passes development env requests to Google Geocoding API

module.exports = function (app) {
    app.use(
        '/api/*',
        createProxyMiddleware({
            target: 'https://maps.googleapis.com/maps',
            changeOrigin: true,
        })
    );
};