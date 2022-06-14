const http = require('http')
const path = require('path')
const fs = require('fs')


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//                   if(err) throw err
//                   res.writeHead(200,{'Content-Type': 'text/html'})
//                   res.end(data)
//         })
//     }
//     if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
//                   if(err) throw err
//                   res.writeHead(200,{'Content-Type': 'text/html'})
//                   res.end(data)
//         })
//     }
// })
// server.listen(2002, () => {
//     console.log('Server running');
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const books = [
            { auhtor: 'Pauolo', pages: 200, name: "Tugadi" },
            { auhtor: 'Tohir Malik', pages: 200, name: "Shaytanat" }
        ]
        res.writeHead(200, { 'Content-Type': 'aplication/json' })
        res.end(JSON.stringify(books))
    }
})
server.listen(2000, () => {
    console.log('Server running');
})