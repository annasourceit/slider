; (function ($) {
	"use strict";
	$(document).ready(function() {
     	
     	$('.slider').slick({
		  	slidesToShow:4,
		 	slidesToScroll: 2,
		  	arrows: false,
		 	dots: false,
		  	infinite: true,
		  	slide: ".slider__item",
		  	arrows: true,
		  	prevArrow:".button_prev",
		  	nextArrow:".button_next",
		    centerMode: true,
  			focusOnSelect: true,

		});

	});
})(jQuery);	