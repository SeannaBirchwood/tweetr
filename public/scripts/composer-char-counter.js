$(document).ready( function() { 

	$("textarea").on("keyup", function(e) {
		var max = 140;
  	var len = $(this).val().length;
  	var char = max - len;
  	if (len > max) {
    	$(".counter").text(char).css("color", "red");
    	$(".counter").text(char).parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Hum Less!</div>");
    	$( "form" ).on( "submit", function( event ) {
        event.preventDefault();
      });
  	} else if (char === 140 || null || "") {
  		$(".counter").parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Hum something?</div>");
    	$( "form" ).on( "submit", function( event ) {
        event.preventDefault();
      });
  	} else {
    	$(".counter").text(char).parent().next(".validation").remove()
  	}
	});
 });