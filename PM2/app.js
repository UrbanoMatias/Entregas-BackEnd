const express = require('express');
const PORT = 8080;
const app = express();
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.get('/',(req,res)=>{
    console.log("Peticion recibida")
    res.send(`Servidor express en PORT ${PORT} - PID ${process.pid}`)
})

