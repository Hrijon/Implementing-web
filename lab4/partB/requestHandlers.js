// var exec = require("child_process").exec;

/**
 * reqStart sends status report to server and display html form on client 
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} postData 
 */
function reqStart(request, response, postData){
    console.log("Request handler 'start' was called.");
   
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead( 200, {"Content-Type": "text/plain"} );
    response.write(body);
    response.end();
}

/**
 * reqUpload sends a status report as a response to the client and server
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} postData 
 */
function reqUpload(request, response, postData) {

    // declare variable to accumulate incoming data
    var postData = "";
    // request.addListener('data', function(dataChunk){
    //       //accumulate data here
    //       postData += dataChunk;
    //       // only display for testing purposes
    //       console.log("Recived POST chunk '" + dataChunk + "'.");
    // });
    
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + postData);
    response.end();
}

/**
 * shows the uploaded data
 * @param {object} response 
 * @param {object} postData 
 */
function reqShow(response, postData) 
{
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./test.png").pipe(response);
}

/**
// alternative code for the show function
function reqShow(response, postData) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    // open file for a readable stream
    var readStream = fs.createReadStream("./test.png");
    // wait until we know the readable stream is valid
    readStream.on('open', function() {
    // pipe read stream to response object (goes to client)
    readStream.pipe(response);
    });
    // catches errors (if any)
    readStream.on('error', function(err) {
    readStream.end(err);
    });
}
*/

//allow access on reqStart & reqUpload to other files
exports.reqStart = reqStart;
exports.reqUpload = reqUpload;
exports.reqShow = reqShow;
