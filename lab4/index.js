// import our exported modules
var server = require("./server");
var router = require("./router");
// call the startServer() function associated
// with the server object
// pass the route() function associated with
// the router object as its parameter
server.startServer(router.route);