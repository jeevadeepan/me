//myprofile.js - Javascript for the profile site goes here.

(function( window, undefined ) {
   $(document).ready(function() {
     var viewportHeight = $('section.body_container').height();
	 var viewportWidth = $('section.body_container').width();
	 var translateDistance = viewportWidth/2;
	 
	 //var positionLeft = (viewportWidth - viewportHeight)/2;
	 
	 //$('div#left,div#right').css("left",positionLeft+"px"); 
	 
	 $('div#current_page_container').css({"-webkit-transform":"translateZ(-" + translateDistance + "px)","-moz-transform":"translateZ(-" + translateDistance + "px)"});
	 
	 
	 $('div#front').css("-webkit-transform","rotateY(0deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateY(0deg) translateZ(" + translateDistance + "px)");

     $('div#left').css("-webkit-transform","rotateY(-90deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateY(-90deg) translateZ(" + translateDistance + "px)");

     $('div#right').css("-webkit-transform","rotateY(90deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateY(90deg) translateZ(" + translateDistance + "px)");

     $('div#bottom').css("-webkit-transform","rotateX(-90deg) translateZ(" + viewportHeight/2 + "px)")
		           .css("-moz-transform", "rotateX(-90deg) translateZ(" + viewportHeight/2 + "px)");

     $('div#top').css("-webkit-transform","rotateX(90deg) translateZ(" + viewportHeight/2 + "px)")
		           .css("-moz-transform", "rotateX(90deg) translateZ(" + viewportHeight/2 + "px)");

     $('div#back').css("-webkit-transform","rotateX(180deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateX(180deg) translateZ(" + translateDistance + "px)");				   
				   
	 
   });
})( window );