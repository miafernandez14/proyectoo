const express = require('express')
const app=express()
app.get('/inicio',(req,res)=>{
    res.sendFile('./index.html',{
        root: __dirname
    })
})
app.get('/nosotros',(req,res)=>{
    res.sendFile('./about.html',{
        root: __dirname
    })
})
app.listen(3000)
console.log('Server on port ${3000}')