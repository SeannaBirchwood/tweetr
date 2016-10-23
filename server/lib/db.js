"use strict";

//copied from mongo_example.js

const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = "mongodb://127.0.0.1/tweetr"

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);

MongoClient.connect(MONGODB_URI, (err, db) => {

  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    throw err;
  }

  console.log('Connected to the database!');

const dbMethods = {

  saveTweet: (data) => {
    db.tweets.push(data);
    return true;
  },

  getTweets: () => {
    return db.tweets.sort(function(a, b) { return a.created_at - b.created_at });
  }

}

module.exports = {

  connect: (onConnect) => {

    onConnect(dbMethods);

  }

}
