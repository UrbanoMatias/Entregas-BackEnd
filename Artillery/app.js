import express from "express";

const app = express();
const server = app.listen(8080,()=>console.log("Listening for artillery"))

app.get('/info',(req,res)=>{
    let numbers=[];
    for(let i=0;i<10000;i++){
        let random = Math.floor(Math.random()*9);
        numbers.push(random)
    }
    res.send({randoms:numbers})
})