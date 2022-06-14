const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
     res.end('<h1>Hello world</h1>')
})

server.listen(2005,()=>{
    console.log('server running 2005');
})