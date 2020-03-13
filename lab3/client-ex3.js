// import http core module using require method
// assign return object to var http
var http = require('http');
var qs = require('querystring');
// set options for client request with object literal
// here setting url, port, path, and method
var options = {
    host: 'localhost',
    port: 40310,
    method: 'HEAD' // no comma
};

http.request(options, function(response){
    console.log(response.headers);

    console.log(qs.stringify(response.headers));

    }).end();//end request method


