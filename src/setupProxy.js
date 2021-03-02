const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gl-tradeapp.herokuapp.com',
      changeOrigin: true,
    })
  );
};