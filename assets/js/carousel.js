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
			margin:5,
			nav:false,
			items: 4,
			stagePadding: 10,
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
		var slideritem = 1;
		if($(window).outerWidth() > 1024) {
			slideritem = 2
		}

		if($(".double-slide-active").length > 0){
			$(".double-slide-active.slider-carousel").owlCarousel({
				loop:false,
				margin:10,
				nav:false,
				dots: false,
				items: slideritem,
				stagePadding: 90,
				fluidSpeed: true,
				
			})	
			
			
			$(".double-slide-active.slider-carousel .owl-item").css("width", $(".double-slide-active.slider-carousel ").outerWidth() )
			var itemW = $(".double-slide-active.slider-carousel .owl-item").outerWidth();
			$(".double-slide-active.slider-carousel .owl-item .item-imageStyle").css("height", itemW )


			
			

		}
		
	
	}

	Carousel.prototype.discountSliderSettings = function(){
		
		// This is the carousel/slider configuration for discount slider option. 

		var slideritem = 1;
		if($(window).outerWidth() > 1024) {
			slideritem = 2
		}


		if($(".discount-carousel").length > 0){
			$(".discount-carousel").owlCarousel({
				loop:false,
				margin:10,
				nav:false,
				dots: false,
				items: slideritem,
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