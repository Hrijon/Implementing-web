var http = require("http"); // import http core modules
var url = require("url"); // import url core modules
function startServer(route)
{
      http.createServer( function (request, response) {
            //        use url module to get pathname of requested resource 
            var pathname = url.parse(request.url).pathname;
            route(pathname);

            console.log("Request for " + pathname + " received.");
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello World");
            response.end();
            }).listen(40310,'localhost');
            console.log("Server has started.");

}

exports.startServer = startServer;