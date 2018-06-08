const path = require('path');
const express =  require('express');
const http = require('http');
const app = express();
const server =  http.createServer(app);
const io=require('socket.io')(server);
io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
       console.log(msg);
        socket.broadcast.emit('server-message',msg);
    })
})
const PORT=3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'node_modules')));
server.listen(PORT, () =>{
    console.log(`Server is  listening on ${PORT}`);
})