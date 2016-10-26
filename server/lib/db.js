"use strict";

//copied from mongo_example.js

const initialTweets = require("./tweets");

const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = "mongodb://127.0.0.1/tweetr";

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);



module.exports = {

  connect: (onConnect) => {

    MongoClient.connect(MONGODB_URI, (err, db) => {

      if (err) {
        throw err;
        console.log("There has been an error connecting")
      }

      console.log('Connected to the MongoDB!');
   

    const dbMethods = {

    saveTweet: (data, cb) => {
      let allTweets = db.collection("tweets");
      allTweets.insertOne(data);
      return true;
    },

    getTweets: (completionHandler) => {
      let allTweets = db.collection("tweets");
        return allTweets.find().toArray(function (err, results) {
          if (err) {
            throw err;
            console.log("There has been an error getting tweets through completionHandler")
          }
          completionHandler(results);
          });
        }
    }
     onConnect(dbMethods);
    });
  }
}


  

