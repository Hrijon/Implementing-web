var http = require("http"); // import http core modules
var url = require("url"); // import url core modules
const fs = require('fs');//import fs filesystem

http.createServer( function (request, response) {
      //  use url module to get pathname of requested resource 
      //  var path = url.parse(request.url).pathname;

      var path = url.parse(request.url).pathname;

      const myURL = new URL("http://localhost:40310/startServer")

      console.log("Request for " + path + " received.");

      response.writeHead(200, {"Content-Type": "text/plain"});
      

      fs.readFile("." + path, 'utf8', (err, data) => {
      if (err) throw err;
      // response.err("Error occured");
      // response.headersSent("Successed");
      console.log(data);
      });

      response.end();
      }).listen(40310,'localhost');
      console.log("Server has started.");

        
      