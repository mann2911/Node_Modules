const EventEmitter = require("events");

const event = new EventEmitter();


event.on("myname",()=>{
    console.log("myname is mann patel");
})

event.on("myname",(msg,msg1)=>{
    console.log(`myname is gavr patel ${msg} ${msg1}`);
})
event.on("myname",(msg)=>{
    console.log(`myname is dhaval patel ${msg}`);
})

event.emit("myname","boy","mama")





