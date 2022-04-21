const express = require("express");

const app = express()

app.get('/', (req:any, res:any) => {
    res.end("hello")
})
app.listen(8080, ()=>{
    console.log("runnning")
})