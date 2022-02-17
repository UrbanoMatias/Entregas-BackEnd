const express = require('express');

const app = express();

const PORT = parseInt(process.argv[2]||8080);

app.use(express.static('public'))

app.get('/info',(req,res)=>{
    let numbers=[];
    for(let i=0;i<10000;i++){
        let random = Math.floor(Math.random()*9);
        numbers.push(random)
    }
    res.send({Puerto:PORT,Process:process.pid,randoms:numbers})
})

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))