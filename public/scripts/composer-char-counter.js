$(document).ready( function() { 
	$("textarea").on("keyup", function() {
		var max = 140;
  	var len = $(this).val().length;
  	var char = max - len;
  	if (len >= max) {
    $(".counter").text(char).css("color", "red");
  } else {
    $(".counter").text(char);
  }
	});
	// var icon = $(".fa-flag") + $('.fa-retweet') + $('.fa-heart')
	// $("article").on("hover", function() {
	// 	$("footer").children("icon").append
	// })
 });