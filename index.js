var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('we are  in AWS  Cloud. This is a demo project for load-balancer ric'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 4000
