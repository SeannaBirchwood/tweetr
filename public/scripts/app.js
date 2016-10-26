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
 			<span class="fa fa-heart" aria-hidden="true">
 			</span>
 		</footer>
 		</article>`;
 		return $tweet;
 	} 



	//this loops through the json data and feeds it to the above function, then appends the result
	
	function renderTweets(tweetsList) {
		$('.tweet-feed').empty();

		var sortTweets = tweetsList.sort(function (a, b) {
			return a.created_at < b.created_at;
		});
		sortTweets.forEach(function (tweet) {
			$('.tweet-feed').append(createTweetElement(tweet));
		});
	}

	$('form').on("submit", function(event) {
		event.preventDefault();
		var postedTweet = $(this).serialize();
		var char = $(this).find('textarea').val();
		if (char.length > 140) {
			event.preventDefault();
			$('.manyChar').css("display", "inline");
			$('.emptyChar').css("display", "none");
		} else if (char == 0 || null || "   ") {
			event.preventDefault();
			$('.emptyChar').css("display", "inline");
			$('.manyChar').css("display", "none")
		} else if (char != 0) {
			$('.manyChar').css("display", "none");
			$('.emptyChar').css("display", "none");
		} else {
			$.ajax({
			url: '/tweets',
			method: 'POST',
			data: postedTweet,
			success: function(response) {
				loadTweets(response);
			}
		});
		}
		$('textarea').val('');
	});


	$('button').mouseleave(function() {
		$(this).css("background-color", "#E7FDFF").css("color", "#009F86");
	});

	$('button').mouseenter(function() {
		$(this).css("background-color", "white").css("color", "black");
	});

	$('.new-tweet').hide();
	$('button').on("click", () => {
		$('.new-tweet').slideToggle();
		$('textarea').focus();
	});



	var loadTweets = ($inputTweet) => {
		$.ajax({
			url: '/tweets',
			dataType: "json",
			success: function(response) {
				renderTweets(response);
			}
		});
	}

	loadTweets();

});