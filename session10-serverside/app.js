// main file to run the application
let http = require('http');  // loading core module
const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h1>Welcome to Server Programing</h1></body></html>');
    res.end();
});
server.listen(3000); 
console.log("server is listening at port 3000...");