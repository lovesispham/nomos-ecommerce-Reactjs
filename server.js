const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3000;
server.use(middlewares);
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
  })
  
  // To handle POST, PUT and PATCH you need to use a body-parser
  // You can use the one used by JSON Server
  server.use(jsonServer.bodyParser)
  server.use((req, res, next) => {
    if (req.method === 'POST') {
      req.body.createdAt = Date.now();
      req.body.updateAt = Date.now()
    }
    // Continue to JSON Server router
    next()
  })
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

