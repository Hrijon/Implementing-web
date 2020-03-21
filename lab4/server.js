var http = require("http");
var url = require("url");
9
// import http core modules
// import url core modules
function startServer(route){
      http.createServer( function (request, response) {
            var pathname = url.parse(request.url).pathname;
            route(pathname);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello World");
            response.end();
            }).listen(88888);
            console.log("Server has started.");
}
exports.startServer = startServer;