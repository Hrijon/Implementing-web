function reqStart(){
    console.log("Request handler 'start' was called.");
}

function reqUpload(){
    console.log("Request handler 'upload' was called.");
}

exports.reqStart = reqStart;
exports.reqUpload = reqUpload;
