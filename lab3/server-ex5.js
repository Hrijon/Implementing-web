var http = require("http"); // import http core modules
var url = require("url"); // import url core modules
var qs = require('querystring'); //import querystring 

http.createServer( function (request, response) {
      //        use url module to get pathname of requested resource 
        //  var path = url.parse(request.url).pathname;

        var qstr = url.parse(request.url).query;
        var path = url.parse(request.url).pathname;
        var a = qs.parse(qstr)['foo'];
        var b = qs.parse(qstr)['hello'];

        console.log("Request for " + path + " received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(qstr + "\n");
        response.write(path + "\n");
        response.write(a + "\n" + b + "\n");

        response.end();
        }).listen(40310,'localhost');
        console.log("Server has started.");
           
        