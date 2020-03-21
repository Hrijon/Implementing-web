function reqStart(){
    console.log("Request handler 'start' was called.");
}

function reqUpload(){
    console.log("Request handler 'upload' was called.");
}

expoets.reqStart = reqStart;
expoets.reqUpload = reqUpload;
