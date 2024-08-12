const socketconnInit = require("./socketconn");
const client_name="Client2";
const PORT=5002;


const socketEventsFun=(io,socket)=>{
    console.log(client_name+ "in socketEventsFun start")


    socket.on("invite",(obj,callbackFn)=>{
        console.log(client_name+ " invite ",obj)
        callbackFn({
            status:"received by server",
            value : obj.value * obj.value
        })
    })
    
    console.log(client_name+"in socketEventsFun end")
}
socketconnInit(PORT,socketEventsFun,client_name)