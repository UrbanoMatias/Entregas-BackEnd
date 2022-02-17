import express from "express";
import cluster from "cluster";
import os from "os";

const isCluster = process.argv[2] === "CLUSTER";

if(isCluster&&cluster.isPrimary){
    console.log(`Proceso primario con pid ${process.pid} corriendo`)
    const app = express();
    const server = app.listen(8080,()=>console.log("Listening"));
    app.get('/info',(req,res)=>{
        res.send({PROCESS:os.cpus().length})
    })
}else{
    const app = express();
    const server = app.listen(8080,()=>console.log("Listening"));
    app.get('/info',(req,res)=>{
        res.send({PROCESS:os.cpus().length})
    })
}

