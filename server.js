var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
  //req.response.end("Hello World!");
  req.response.end("First program with vert.x")
}).listen(8080, 'localhost');