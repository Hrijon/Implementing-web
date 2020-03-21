// import http core module using require method
// assign return object to var http
var http = require('http');
// set options for client request with object literal
// here setting url, port, path, and method
var options = {
host: 'localhost',
port: 40310,
path: '/index.html', // application root
method: 'HTTP' // no comma
};

var accData;
function onResponse(response){
    console.log(response.setEncoding('utf8'));
    // event listener with 2 parameters
    response.on('data', // data event
    function(data){ // incoming data
    accData = data;
    } // end anonymous function
    ); // end event listener

    response.on('end', //end event
    function(){ //empty function
    console.log(accData); //data stored in accumulated var
    } //end anonymous function 2
    );  //end 2nd event
    } // end onResponse function

    var client = http.request(options,onResponse);
    client.end(); // end request method
    console.log("hello from client ..");
