const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // SpringBoot Proxy
  app.use(
    '/spring-boot',
    createProxyMiddleware({
      target: 'http://127.0.0.1:9000',
      changeOrigin: true,
      pathRewrite: {
        '^/spring-boot': '' // 将请求路径中的 "/spring-boot" 替换为 ""
      }
    })
  );
  // Flask Proxy
  app.use(
    '/flask',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/flask': '' // 将请求路径中的 "/flask" 替换为 ""
      }
    })
  );
  // Django Proxy
  app.use(
    '/django',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/django': '' // 将请求路径中的 "/django" 替换为 ""
      }
    })
  );
};