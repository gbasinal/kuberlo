(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	
	
	Carousel.prototype.init = function(props) {
	
		var _self = this;
		_self.sliderCategoriesSettings();
		
	};

	Carousel.prototype.sliderCategoriesSettings = function(){
		console.log("slider categories working");
		$('.categories-carousel').owlCarousel({
			loop:false,
			margin:15,
			nav:false,
			items: 4,
			stagePadding: 30
		})
	}

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);