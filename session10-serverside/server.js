// we are going to write server app calling one html  page
//express is web framework for node. it uses http server 
const http= require('http');
const express = require('express');// loading thrid party module
const path =  require('path');
const bodyParser = require('body-parser'); // to process the body of req object
const app = express();
const server = http.createServer(app); // connects http server via express
const PORT = 3040;
app.use(express.static(path.join(__dirname,'public'))); // loading the static file
app.use(bodyParser.urlencoded(
    {
        extended: true  // if false parsing only for string and array 
    }
))  // to read any type of data from request object
app.post('/myaction',function(req,res){
    res.send('You have typed name as '+ req.body.uname);
})
server.listen(PORT);
console.log(`Server is running on ${PORT}`);
