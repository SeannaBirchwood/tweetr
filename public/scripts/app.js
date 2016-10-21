/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 "Use Strict"

 /****************************************Functions*************************************/

 $(document).ready(function () {


 	//this takes json data and converts it to html friendly code
 	var createTweetElement = (loadInput) => {
 		var $tweet = `<article>
 			<header>
 				<img class="profilePicture" src=${loadInput.user.avatars.small}>
 				<h3> ${loadInput.user.name}</h3>
 				<h4>${loadInput.user.handle}</h4>
 			</header>
 				<p class="the-tweet">${loadInput.content.text}</p>
 			<footer>
 				<p class="time-stamp">${loadInput.created_at}</p>
 				<span class="fa fa-flag" aria-hidden="true">
 			</span>
 				<span class="fa fa-retweet" aria-hidden="true">
 			</span>
 			<span class="fa fa-heart" aria-hidden="true"></span></footer></article>`;
 		return $tweet;
 	} 


	
	//this loops through the json data and feeds it to the above function, then appends the result
	// function renderTweets(loadInput) {
	// 	loadInput.forEach(function (currentTweetObj) {
	// 		$('.tweet-feed').append(createTweetElement(currentTweetObj));
	// 	});
	// }
		function renderTweets(tweetsList) {
      $('.tweet-feed').empty();

      var sortTweets = tweetsList.sort(function (a, b) {
        return a.created_at < b.created_at;
      });
      sortTweets.forEach(function (tweet) {
        $('.tweet-feed').append(createTweetElement(tweet));
      });
    }

	$('form').on("click", function(event) {
		event.preventDefault();
		var posting = $.post("/tweets/", {text: $(this).serialize()});
			$(".the-tweet").slideToggle("fast", () => {
				if($('.the-tweet').css('display') == 'block') {
					$("textarea").focus();	
				}
		});
	});



	var loadTweets = ($inputTweet) => {
		var $inputTweet = $('form');
        $('.tweet-feed').append();
			$.ajax({
				url: '/tweets',
				dataType: "json",
				success: function(response) {
					renderTweets(response);
				},
				fail: function(response) {
					console.log("You've got mail!");
				}
			});
	}

	loadTweets();

});