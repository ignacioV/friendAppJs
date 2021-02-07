const express = require('express')
const path = require('path')

const app = express()
app.use('/src', express.static('src'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, () => {
  console.log("listening on port 3000");
  console.log("dirrname", __dirname);
})

// const http = require('http')
// const fs = require('fs')

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');

//   res.writeHead(200, { 'content-type': 'text/html' })
//   fs.createReadStream('index.html').pipe(res)
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });

// // export function addToFile() {
// //   console.log("addin to file");
// //   fs.appendFile("../data/MOCK_DATA.json", "lol", err => {console.error(err)})   
// // }