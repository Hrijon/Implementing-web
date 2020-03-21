function route(pathname, handle) {
    // note access via associative array notation
    // if the path points to a function i.e. request handler
    if (typeof handle[pathname] === 'function') {
    handle[pathname](); // call the appropriate function
    } 
    
    else {
    console.log("No handler found for: " + pathname);
    }
    }
    exports.route = route;