var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
  //req.response.end("Hello World!");
  //Tring sublime package addins
  req.response.end("First program with vert.x ... First Branch inside sublime");
}).listen(8080, 'localhost');