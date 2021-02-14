const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId

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
  

  const mongoNewFriend = {
    first_name: newFriend.fn,
    last_name: newFriend.ln
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
      res.status(200).json({message: 'created'})  
    })
  })

})


app.put('/friends', (req, res) => {
  // const newFriend = JSON.parse(req);
  const updateFriend = req.body;
  console.log('update friend request body', updateFriend)
  
  const mongoUpdateFriend = {
    first_name: updateFriend.fn,
    last_name: updateFriend.ln
  }

  console.log("update this", mongoUpdateFriend);

  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
      throw err;
    }
    let testDB = db.db("test");

    let query = { _id: ObjectId(updateFriend.id) };
    let newValue = { $set: mongoUpdateFriend };

    testDB.collection("friend").findOneAndUpdate(query, newValue, (err, result) => {
      if (err) {
        throw err;
      }
      // console.log("inserting friend", result);
      // res.json(result);
      db.close();
      res.status(200).json({message: 'updated'}) 
    })
  })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
