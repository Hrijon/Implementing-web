var http = require("http"); // import http core modules
var url = require("url"); // import url core modules

function startServer(route, handle) //route: function, handle:object in para
{
      function onRequest(request, response) //req:function, resp:obj as para
      {
            //        use url module to get pathname of requested resource 
            var pathname = url.parse(request.url).pathname;

            console.log("Request for " + pathname + " received.");
            request.setEncoding('utf8');
            // declare variable to accumulate incoming data
            var postData = "";
            request.addListener('data', function(dataChunk){
                  //accumulate data here
                  postData += dataChunk;
                  // only display for testing purposes
                  console.log("Recived POST chunk '" + dataChunk + "'.");
            });
            request.addListener('end', function(){
                  route(pathname, handle, response, postData);
            });
      }
      http.createServer(onRequest).listen(40310,'localhost');
            console.log("Server has started.");
}

exports.startServer = startServer;

