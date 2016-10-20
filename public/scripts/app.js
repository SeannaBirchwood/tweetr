/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 "Use Strict"

 /****************************************Functions*************************************/

 $(document).ready(function () {


 	//this takes json data and converts it to html friendly code
 	var createTweetElement = (tweetData) => {
 		var $tweet = `<article>
 			<header>
 				<img class="profilePicture" src=${tweetData.user.avatars.small}>
 				<h3> ${tweetData.user.name}</h3>
 				<h4>${tweetData.user.handle}</h4>
 			</header>
 				<p class="the-tweet">${tweetData.content.text}</p>
 			<footer>
 				<p class="time-stamp">${tweetData.created_at}</p>
 				<span class="fa fa-flag" aria-hidden="true">
 			</span>
 				<span class="fa fa-retweet" aria-hidden="true">
 			</span>
 			<span class="fa fa-heart" aria-hidden="true"></span></footer></article>`;
 			//$("<div>").text(textFromUser);
 		return $tweet;
 	} 



	
	//this loops through the json data and feeds it to the above function, then appends the result
	function renderTweets(tweetData) {
		tweetData.forEach(function (currentTweetObj) {
			$('.tweet-feed').append(createTweetElement(currentTweetObj));
		});	
	} 


	var $rendNewTweet = renderTweets(tweetData);


});

/****************************************************************************************/

/*****************************************Temp Database**********************************/ 

var tweetData = [
 {
 	"user": {
 		"name": "Newton",
 		"avatars": {
 			"small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
 			"regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
 			"large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
 		},
 		"handle": "@SirIsaac"
 	},
 	"content": {
 		"text": "If I have seen further it is by standing on the shoulders of giants"
 	},
 	"created_at": 1461116232227
 },
 {
 	"user": {
 		"name": "Descartes",
 		"avatars": {
 			"small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
 			"regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
 			"large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
 		},
 		"handle": "@rd" },
 		"content": {
 			"text": "Je pense , donc je suis"
 		},
 		"created_at": 1461113959088
 	},
 	{
 		"user": {
 			"name": "Johann von Goethe",
 			"avatars": {
 				"small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
 				"regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
 				"large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
 			},
 			"handle": "@johann49"
 		},
 		"content": {
 			"text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
 		},
 		"created_at": 1461113796368
 	}
 	];


// var tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }