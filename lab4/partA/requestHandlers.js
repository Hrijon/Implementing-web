// var exec = require("child_process").exec;

function reqStart(response, postData){
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

function reqUpload(response, postData){
    console.log("Request handler 'upload' was called.");
   
    function req(request, response) //req:function, resp:obj as para
    {
          //        use url module to get pathname of requested resource 
          request.setEncoding('utf8');
          // declare variable to accumulate incoming data
          var postData = "";
          request.addListener('data', function(dataChunk){
                //accumulate data here
                postData += dataChunk;
                // only display for testing purposes
                console.log("Recived POST chunk '" + dataChunk + "'.");
                response.writeHead(200, {"Content-type":"text/plain"});
                response.write("response from requpload");
                response.end
          });
    }

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("successfully uploaded: " + postData);
    response.end();
}

exports.reqStart = reqStart;
exports.reqUpload = reqUpload;
