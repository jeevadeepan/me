//myprofile.js - Javascript for the profile site goes here.
/*global jQuery*/

(function( window, $, undefined ) {
   $(document).ready(function() {
       $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - parseInt(target.css('margin-top'), 10)
        }, 1000);
        $(this).parent('li').addClass('active').siblings('li').removeClass('active');
        return false;
      }
    }
  });
   });
})( window, jQuery );