function route(pathname, handle, response, postData) {
                
    // note access via associative array notation
    // if the path points to a function i.e. request handler
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,postData); // call the appropriate function && pass response argument
    } 
    else {
        console.log("No handler found for: " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Resource not found!");
        response.end();
    }
    }
    exports.route = route;
