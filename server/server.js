const express = require("express");
var cors = require('cors');
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://localhost:27017");
const app = express();

let db, collection;

// client.connect(err => {
//   db = client.db("homework07");
//   collection = db.collection("lectures");
// });

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
    var doc = req.body;
    collection.insertOne(doc, (err, docInserted) => {
      res.end(docInserted + "Added!");
    });
  });

  app.get("/", (req, res) => {
    // collection.find({}).toArray(function(error, documents) {
    //   if (error) return next("Error!");  
    //   res.end(documents);
    // });
    console.log('********************');
   // const query =  req.params.keyword + " " + req.params.location;
   // console.log(query);
    console.log('********************');
    let documents = [{id:'1',name:'dave'},{id:'2',name:'girma'}];
    res.json(documents);

  });

  app.get("/findOne/:lecture", (req, res) => {
    const query = { lecture: req.params.lecture };
    collection.find(query).toArray((error, documents) => {
      if (error) return next("Error!");  
      res.end(documents);
    });
  });

  app.delete("/Delete/:lecture", (req, res) => {
    const query = { lecture: req.params.lecture };
    collection.deleteOne(query);
    res.end(`Lecture successfully deleted`);
  });



  app.get("/search/:q", (req, res) => {
    const query = { course: { $regex: req.params.q } };
  
    collection.find(query).toArray((error, documents) => {
      if (error) return next("Error!");  
      res.json(documents);
      res.end();
    });
  });


// app.use(function(err,req,res,next)
// {
//     res.status(500).end("Error!");
// });


app.listen(3000);