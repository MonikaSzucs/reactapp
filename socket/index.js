const server=require("http").Server();
const port=10001;

var io=require("socket.io")(server);

//this sends a message called joined
io.on("connection",function(){
    io.emit("joined");
});

server.listen(port,function(err){
    if (err){
        console.log("there is a problem");
        return false;
    }
    else{
        console.log("all good head over to the server");
    }
});


