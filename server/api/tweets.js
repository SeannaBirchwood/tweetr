"use strict";

const User    = require("../lib/user-helper")
const express = require('express');
const tweets  = express.Router();

module.exports = function(db) {

  tweets.get("/", function(req, res) {
    console.log("Please let us be awesome");
    db.getTweets(function (tweets) {
      console.log(tweets, "I am tweets")
      return res.json(tweets);
    });
    console.log("We're awesome");
  });

  tweets.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400);
      return res.send("{'error': 'invalid request'}\n");
    }

    const user = req.body.user ? req.body.user : User.generateRandomUser();
    const tweets = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };
    db.saveTweet(tweets);
    return res.send();
  });

  return tweets;
}


