const express = require('express')
const path = require('path')
const fs = require('fs')
var MongoClient = require('mongodb').MongoClient;

let mongoUrl = "mongodb://localhost:27017/mydb";

const app = express()
app.use('/src', express.static('src'))
app.use('/data', express.static('data'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// let rawdata = fs.readFileSync('data/MOCK_DATA.json');
// let data = JSON.parse(rawdata);
// console.log(data);

// MongoClient.connect(mongoUrl, (err, db) => {
//   if (err) {
//     throw err;
//   }
//   let testDB = db.db("test");
//   testDB.collection("friend").insertMany(data)
//   db.close()
// })

app.get('/friends', (req, res) => {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
      throw err;
    }
    let testDB = db.db("test");
    testDB.collection("friend").find({}).toArray((err, result) => {
      if (err) {
        throw err;
      }
      console.log("result", result);
      res.json(result);
      db.close();
    })
  })
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