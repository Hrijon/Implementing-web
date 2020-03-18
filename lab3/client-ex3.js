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
    // console.log(response.headers);

    var string = qs.stringify(response.headers);
    var stringisyObject = qs.parse(string);
    var contentType = stringisyObject["content-type"];
    var date = stringisyObject["date"];

    console.log("Content-Type = " + contentType);
    console.log("Date = " + date);


    // console.log(qs.stringify(response.headers));
    // qs.parse("", null,null,
    //     { decodeURIComponent: response });


    }).end();//end request method



    