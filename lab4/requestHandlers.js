var exec = require("child_process").exec;

function reqStart(response){
    console.log("Request handler 'start' was called.");
    exec("ls -lah",
        function (error, stdout, stderr) {
        response.writeHead( 200, {"Content-Type": "text/plain"} );
        response.write(stdout);
        response.end();
    });
}

function reqUpload(response){
    console.log("Request handler 'upload' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("success in upload");
    response.end();
}

exports.reqStart = reqStart;
exports.reqUpload = reqUpload;
