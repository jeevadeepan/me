//myprofile.js - Javascript for the profile site goes here.

(function( window, undefined ) {
   $(document).ready(function() {
     //Caching cuboid div.
	 var cuboidDiv = $('div#current_page_container');
	 
	 var rotateUpAngle = 0;
     // Get viewport's height and width to create cuboid of pages.
     var viewportHeight = $('section.body_container').height();
	 var viewportWidth = $('section.body_container').width();
	 
	 // using viewportHeight as cuboid's depth. Calculate translate distance to push page divs to their respective sides.
	 var translateDistance = viewportHeight/2;
	 
	 //Set width of left and right sides to depth(ie., viewportHeight here) of the cuboid.
	 $("div.sides").width(viewportHeight);
	 
	 //Calculate positionleft of side divs and push them to their sides. 
	 var positionLeft = (viewportWidth - viewportHeight)/2;
	 $('div.left,div.right').css("left",positionLeft+"px");
	 
	 //Push the cuboid back to resolve distortion and get a better view.
	 cuboidDiv.css({"-webkit-transform":"translateZ(-" + translateDistance + "px)","-moz-transform":"translateZ(-" + translateDistance + "px)"});
	 
	 
	 //Initiate cuboid setup - rotate and translate sides.
	 $('div.front').css("-webkit-transform","rotateY(0deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateY(0deg) translateZ(" + translateDistance + "px)");

     $('div.left').css("-webkit-transform","rotateY(-90deg) translateZ(" + viewportWidth/2 + "px)")
		           .css("-moz-transform", "rotateY(-90deg) translateZ(" + viewportWidth/2 + "px)");

     $('div.right').css("-webkit-transform","rotateY(90deg) translateZ(" + viewportWidth/2 + "px)")
		           .css("-moz-transform", "rotateY(90deg) translateZ(" + viewportWidth/2 + "px)");

     $('div.bottom').css("-webkit-transform","rotateX(-90deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateX(-90deg) translateZ(" + translateDistance + "px)");

     $('div.top').css("-webkit-transform","rotateX(90deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateX(90deg) translateZ(" + translateDistance + "px)");

     $('div.back').css("-webkit-transform","rotateX(180deg) translateZ(" + translateDistance + "px)")
		           .css("-moz-transform", "rotateX(180deg) translateZ(" + translateDistance + "px)");

    				   
	 //Add event handler for arrow keys to navigate between pages.
     $(document).on('keyup',function (event) {
	    switch(event.keyCode){
		   case 38:
		      cuboidDiv.css({"-webkit-transform":"translateZ(-" + translateDistance + "px) scale3d(0.5,0.5,0.5)","-moz-transform":"translateZ(-" + translateDistance + "px) scale3d(0.5,0.5,0.5)"});
			  window.setTimeout(rotateUp,1000);
			  break;

		   case 40:
		      cuboidDiv.css({"-webkit-transform":"translateZ(-" + translateDistance + "px) scale3d(0.5,0.5,0.5)","-moz-transform":"translateZ(-" + translateDistance + "px) scale3d(0.5,0.5,0.5)"});
			  window.setTimeout(rotateDown,1000);
			  break;
		}
	 });

     //Rotate Functions.
     var rotateUp = function(){
	     rotateUpAngle+=90;
	     cuboidDiv.css("-webkit-transform","translateZ(" + (-translateDistance) + "px) rotateX(" + (rotateUpAngle%360) + "deg)")
		                                .css("-moz-transform", "translateZ(" + (-translateDistance) + "px) rotateX(" + (rotateUpAngle%360) + "deg)");
	 };

     var rotateDown = function(){
	     rotateUpAngle-=90;
	     cuboidDiv.css("-webkit-transform","translateZ(" + (-translateDistance) + "px) rotateX(" + (rotateUpAngle%360) + "deg)")
		                                .css("-moz-transform", "translateZ(" + (-translateDistance) + "px) rotateX(" + (rotateUpAngle%360) + "deg)");
	 };	 
	 
   });
})( window );