(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	
	
	Carousel.prototype.init = function(props) {
	
		var _self = this;
		_self.sliderCategoriesSettings();
		_self.mainSliderSettings();
		_self.discountSliderSettings();
	};

	Carousel.prototype.sliderCategoriesSettings = function(){
		// This is the settings for the slider of categories
	
		$('.categories-carousel').owlCarousel({
			loop:false,
			margin:15,
			nav:false,
			items: 4,
			stagePadding: 30,
			dots: false,
			fluidSpeed: true,
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
		   console.log(st)

		   
		   if (st > lastScrollTop && st >= (catSliderHeight - 15)){
				  
			// This is a flag to make sure the script below wont run again unless user scrolled up
				if(!scrolledDownAlready){
					TweenMax.to('.categories-slider-container' , .5 , {y : -totalHt, ease: "ease.easeOut", onComplete: function(){
						$(".categories-slider-container").hide();
					}},)
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
		
		


	}

	Carousel.prototype.mainSliderSettings = function(){
		
		// This is the carousel/slider configuration for single slider option. 
		if($(".single-slide-active").length > 0) {
			$(".single-slide-active.slider-carousel").owlCarousel({
				loop:true,
				margin:15,
				nav:false,
				dots: true,
				items: 1,
				fluidSpeed: true,
				autoplay: true
			})
		}


		// This is the carousel/slider configuration for double slider option. 

		if($(".double-slide-active").length > 0){
			$(".double-slide-active.slider-carousel").owlCarousel({
				loop:false,
				margin:10,
				nav:false,
				dots: false,
				items: 1,
				stagePadding: 90,
				fluidSpeed: true,
	
			})	
			
			console.log($(".double-slide-active.slider-carousel ").outerWidth())
			$(".double-slide-active.slider-carousel .owl-item").css("width", $(".double-slide-active.slider-carousel ").outerWidth() )
		}
	
	}

	Carousel.prototype.discountSliderSettings = function(){
		
		// This is the carousel/slider configuration for discount slider option. 

		if($(".discount-carousel").length > 0){
			$(".discount-carousel").owlCarousel({
				loop:false,
				margin:10,
				nav:false,
				dots: false,
				items: 1,
				stagePadding : 50,
			})	
		}
	
	}

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);