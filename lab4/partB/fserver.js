var http = require('http');
var formidable = require('formidable');
var sys = require('sys');
const path = require('path');


http.createServer(function(request, response) {
if (request.url==='/upload' && request.method ==='POST'){
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = './tmp';
    // must include this line
    form.parse(request, function(error, field, file) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('Received upload:\n\n');
    response.end(sys.inspect({field: field, file: file}));
});
return;
} // end if
else{
    // show a file upload form
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('<form action="/upload"'+
    'enctype="multipart/form-data" method="POST">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    );
}
response.end();
}).listen(40310,"localhost");


