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
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav:false,
    controlsContainer: ".controls",
    pausePlay:true
  });
  $('#mobileselect').mobileMenu({
				switchWidth: 770,
				topOptionText:"Navigation"
			});
});