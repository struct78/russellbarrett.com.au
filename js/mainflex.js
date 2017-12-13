/*(function($) {
$('#mobileselect').mobileMenu({
				switchWidth: 770,
				topOptionText:"Navigation"
			});
$('.flexslider').flexslider({controlNav:false, controlsContainer: ".controls",pausePlay:true});
$('.current-menu-item > .sub-menu').fadeIn(500);
$('.current-menu-ancestor > .sub-menu').fadeIn(500);
})(jQuery)*/

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').each(function (i, e) {
    var slideshow = $(e).data('slideshow');
    
    $(e).flexslider({
      animation: 'slide',
      controlNav: false,
      controlsContainer: '.controls',
      pausePlay: true,
      slideshow: slideshow
    });
  });

  $('#mobileselect').mobileMenu({
    switchWidth: 770,
    topOptionText:"Navigation"
  });
});
