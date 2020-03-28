var http = require("http"); // import http core modules
var url = require("url"); // import url core modules

/**
 * starts the server 
 * 
 * @param {Function} route 
 * @param {object} handle 
 */
function startServer(route, handle, postData)
{
      /**
       * use url module to get pathname of requested resource 
       * send status report to server
       * set encodign to utf8
       * accumulating incoming data using action listener
       * 
       * @param {obj} request 
       * @param {obj} response 
       * @param {obj} postData 
       */
      function onRequest(request, response, postData) 
      {
            var pathname = url.parse(request.url).pathname;

            console.log("Request for " + pathname + " received.");
            request.setEncoding('utf8');
            
            // declare variable to accumulate incoming data
            var postData = "";
            
            request.addListener('data', function(dataChunk){
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

//allow access to other files
exports.startServer = startServer;

