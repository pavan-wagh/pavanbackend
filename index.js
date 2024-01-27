//console.log("hello world")

const express = require("express");
const app = express();
const port = 4000;

require('dotenv').config()

app.get("/", (req,resp)=>{
resp.send('Hello world')
})

app.get('/twitter',(req,resp)=>{
    resp.send('pavanwagh')
})

app.get('/login',(req,resp)=>{
    resp.send('<h1> Please login to the page')
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})


