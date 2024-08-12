//const socketconnInit = require("./socketconn");
const PORT=5001;
const client_name="Client1";



const socketEventsFun=(io,socket)=>{
    console.log(client_name+ "in socketEventsFun start")

    
    console.log(client_name+"in socketEventsFun end")
}
//socketconnInit(PORT,socketEventsFun,client_name)


const socketclient = require("socket.io-client");
const socket = socketclient.io("http://localhost:5002/",{
    path: "/sock/"
})
socket.on("connect", () => {
    console.log("connect id "+socket.id+" socket.connected "+socket.connected); // x8WIv7-mJelg7on_ALbx


    socket.emit("invite",{value:20},(response)=>{
        console.log("ack ",response)
    })
});

socket.on("disconnect", () => {
    console.log("disconnect id "+socket.id+" socket.connected "+socket.connected); // undefined
});


