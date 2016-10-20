/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
	var createTweetElement = (tweetData) => {
		var $tweet = `<article><header><img class="profilePicture" src=${tweetData.user.avatars.small}><h3> ${tweetData.user.name}</h3><h4>${tweetData.user.handle}</h4></header><p class="the-tweet">${tweetData.content.text}</p><footer><p class="time-stamp">${tweetData.created_at}</p></footer></article><span class="fa fa-flag" aria-hidden="true"></span><span class="fa fa-retweet" aria-hidden="true"></span><span class="fa fa-heart" aria-hidden="true"></span>`;
		$('.tweet-feed').append($tweet);
		return tweetData
	} 
	var $tweetNew = createTweetElement(tweetData);
	$('.tweet-feed').append($tweetNew);

});

var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}



// Test / driver code (temporary)
