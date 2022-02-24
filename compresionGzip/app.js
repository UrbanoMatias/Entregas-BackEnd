import express from "express";
import compression from "compression";

const app = express();
const server = app.listen(8080,()=>console.log("Listening for gzip"))

let sentence = "hola que tal esto es una prueba";

app.use(compression());

app.get("/info",(req,res)=>{
    let response = ""
    for(let i=0;i<1000;i++){
        response+=sentence;
    }
    res.send({message:response});
})

app.get("/infogzip",(req,res)=>{
    let response = ""
    for(let i=0;i<1000;i++){
        response+=sentence;
    }
    res.send({message:response});
})