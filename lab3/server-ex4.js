var http = require("http"); // import http core modules
var url = require("url"); // import url core modules
var qs = require('querystring'); //import querystring 

http.createServer( function (request, response) {
      //        use url module to get pathname of requested resource 
         var pathname = url.parse(request.url).pathname;

         console.log("Request for " + pathname + " received.");
      //    console.log(qs.stringify(request.headers)); //display header information sent by client

         response.writeHead(200, {"Content-Type": "text/plain"});
         response.write("Hello World");
         response.end();

         var string = qs.stringify(request.headers);
         var stringisyObject = qs.parse(string);
         var host = stringisyObject["host"];
         var port = stringisyObject["port"];
     
         console.log("Host:Port = " + host);

         }).listen(40310,'localhost');
         console.log("Server has started.");
