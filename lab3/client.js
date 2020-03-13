// import http core module using require method
// assign return object to var http
var http = require('http');
// set options for client request with object literal
// here setting url, port, path, and method
var options = {
host: 'localhost',
port: 40310,
path: '/', // application root
method: 'HTTP' // no comma
};

function onResponse(response){
    console.log(response.setEncoding('utf8'));
    // event listener with 2 parameters
    response.on('data', // data event
    function(data){ // incoming data
    console.log(data);
    } // end anonymous function
    ); // end event listener
    } // end anonymous function

    var client = http.request(options,onResponse);
    client.end(); // end request method
    console.log("hello from client ..");
