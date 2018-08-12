$( "body" ).on( "keydown", function( event ) {
  if(event.which=="65")
  {
  	$("#1").removeClass("unpressed");
  	$("#1").addClass("pressed");
  }
  else if(event.which=="83")
  {
  	$("#2").removeClass("unpressed");
  	$("#2").addClass("pressed");
  }
  else if(event.which=="68")
  {
  	$("#3").removeClass("unpressed");
  	$("#3").addClass("pressed");
  }
  else if(event.which=="70")
  {
  	$("#4").removeClass("unpressed");
  	$("#4").addClass("pressed");
  }
  else if(event.which=="71")
  {
  	$("#5").removeClass("unpressed");
  	$("#5").addClass("pressed");
  }
  else if(event.which=="72")
  {
  	$("#6").removeClass("unpressed");
  	$("#6").addClass("pressed");
  }
  else if(event.which=="74")
  {
  	$("#7").removeClass("unpressed");
  	$("#7").addClass("pressed");
  }
  else if(event.which=="75")
  {
  	$("#8").removeClass("unpressed");
  	$("#8").addClass("pressed");
  }
});
$( "body" ).on( "keyup", function( event ) {
  if(event.which=="65")
  {
  	$("#1").addClass("unpressed");
  	$("#1").removeClass("pressed");
  }
  else if(event.which=="83")
  {
  	$("#2").addClass("unpressed");
  	$("#2").removeClass("pressed");
  }
  else if(event.which=="68")
  {
  	$("#3").addClass("unpressed");
  	$("#3").removeClass("pressed");
  }
  else if(event.which=="70")
  {
  	$("#4").addClass("unpressed");
  	$("#4").removeClass("pressed");
  }
  else if(event.which=="71")
  {
  	$("#5").addClass("unpressed");
  	$("#5").removeClass("pressed");
  }
  else if(event.which=="72")
  {
  	$("#6").addClass("unpressed");
  	$("#6").removeClass("pressed");
  }
  else if(event.which=="74")
  {
  	$("#7").addClass("unpressed");
  	$("#7").removeClass("pressed");
  }
  else if(event.which=="75")
  {
  	$("#8").addClass("unpressed");
  	$("#8").removeClass("pressed");
  }
});