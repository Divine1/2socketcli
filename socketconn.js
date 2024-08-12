const {Server} = require("socket.io");
const http = require("http");
const express = require("express");


const socketconnInit = (PORT,callbackSocketEvents,client_name)=>{
    console.log(client_name+ " in socketconnInit")
    const httpserver = http.createServer();
    const io = new Server(httpserver,{
        cors : {
            origin : '*'
        },
        path: "/sock/"
    });

    io.on("connection", async (socket) => {
        console.log(client_name+ ' a peer connected socket ',socket.id);
        callbackSocketEvents(io,socket);
        socket.on("disconnect",async ()=>{
            console.log(client_name+ " recvd disconnect  socket.id ",socket.id);  
        })
    })
    httpserver.listen(PORT, () => {
       console.log(`${client_name} Node Express server listening on http://localhost:${PORT}`);
    });
}

module.exports=socketconnInit;