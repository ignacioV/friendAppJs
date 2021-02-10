const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;

const HOST = 'localhost';
const PORT = 3000;

const mongoUrl = `mongodb://${HOST}:27017/mydb`;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/src', express.static('src'))

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
      // console.log(result);
      res.json(result);
      db.close();
    })
  })
})

app.post('/friends', (req, res) => {
  // const newFriend = JSON.parse(req);
  const newFriend = req.body;
  console.log('new friend request body', newFriend)
  res.status(200).json({message: 'created'})  

  const mongoNewFriend = {
    first_name: newFriend.name,
    last_name: newFriend.tags
  }

  console.log("inserting this", mongoNewFriend);

  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
      throw err;
    }
    let testDB = db.db("test");
    testDB.collection("friend").insertOne(mongoNewFriend, (err, result) => {
      if (err) {
        throw err;
      }
      // console.log("inserting friend", result);
      // res.json(result);
      db.close();
    })
  })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
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