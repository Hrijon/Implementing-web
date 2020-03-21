var http = require("http"); // import http core modules
var url = require("url"); // import url core modules
function startServer(route, handle) //route: function, handle:object in para
{
      http.createServer( function (request, response) //req:function, resp:obj as para
      {
            //        use url module to get pathname of requested resource 
            var pathname = url.parse(request.url).pathname;
            route(pathname, handle, response);

            console.log("Request for " + pathname + " received.");
            
      }).listen(40310,'localhost');
            console.log("Server has started.");
            
}

exports.startServer = startServer;
