(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	
	
	Carousel.prototype.init = function(props) {
	
		var _self = this;
		_self.sliderCategoriesSettings();
		
	};

	Carousel.prototype.sliderCategoriesSettings = function(){
		// This is the settings for the slider of categories
	
		$('.categories-carousel').owlCarousel({
			loop:false,
			margin:15,
			nav:false,
			items: 4,
			stagePadding: 30,
			responsive : {
				768:{
					items:5,
					margin: 0
				},
				1024:{
					items:6,
				},
				1025:{
					items:8,
					margin: 0,
					loop: false
				},
			}
		})



		// This is for the additional functionality of categories slider when user is scrolling

		var lastScrollTop = 0;
		var headerHeight = $(".header-container").outerHeight();
		var catSliderHeight = $(".categories-slider-container").outerHeight();
		var totalHt = catSliderHeight + headerHeight + 10;
		var scrolledUpAlready = false;
		var scrolledDownAlready = false;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   
		   if (st > lastScrollTop){
				  
			// This is a flag to make sure the script below wont run again unless user scrolled up
				if(!scrolledDownAlready){
					TweenMax.to('.categories-slider-container' , .5 , {y : -totalHt, ease: "ease.easeOut", onComplete: function(){
						$(".categories-slider-container").hide();
					}})
					scrolledDownAlready = true;
					scrolledUpAlready = false;
				}


		   } else {

			// This is a flag to make sure the script below wont run again unless user scrolled down
				if(!scrolledUpAlready){
					TweenMax.to('.categories-slider-container' , .5 , {y : 0, ease: "ease.easeIn", onStart: function(){
						$(".categories-slider-container").show();
					}})
					scrolledUpAlready = true;
					scrolledDownAlready = false;
				}


		   }
		   lastScrollTop = st;
		});	
		
		
		// This will add automatically a top margin for slider category component
		$(".categories-slider-container").css("margin-top", (headerHeight + 5));

	}

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);