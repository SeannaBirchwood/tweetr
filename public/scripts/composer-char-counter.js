$(document).ready( function() { 

	$("textarea").on("keyup", function(e) {
    
		var max = 140;
  	var len = $(this).val().length;
  	var char = max - len;

  	if (len > max) {
      $(".counter").text(char).css("color", "red");
    	//$(".counter").text(char).parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Hum Less!</div>");
  	} else {
    	$(".counter").text(char).css("color", "black"); //parent().next(".validation").remove()
  	}
	});
});