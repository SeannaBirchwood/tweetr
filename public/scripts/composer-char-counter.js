$(document).ready( function() { 
	$("textarea").on("keyup", function() {
		var max = 140;
  	var len = $(this).val().length;
  	console.log(len);
  	console.log(max);
  	var char = max - len;
  	console.log(char);
  	if (len >= max) {
    $(".counter").text(char).css("color", "red");
  } else {
    $(".counter").text(char);
  }
	});
 });