import express from "express";
import createLogger from "./utils.js";

const app = express();
const server = app.listen(8080,()=>console.log("Listening on logs"));
const logger = createLogger();

app.use((req,res,next)=>{
    logger.info(`${req.method} at ${req.path}`)
    next();
})

app.get("/info",(req,res)=>{
    logger.info(`${req.method} at ${req.path}`);
    res.send("Info")
})

app.get("/error",(req,res)=>{
    logger.error(`${req.method} at ${req.path}`);
    res.send("Error")
})

app.get("/*",(req,res)=>{
    logger.warn(`${req.method} at ${req.path}`);
    res.send("nonexistent path")
})


