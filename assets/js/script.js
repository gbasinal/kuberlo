$(document).ready(function() {
    window.app.init()
});

$(window).on('load', function() {
    console.log('load')
    var headerHeight = $(".header-container").outerHeight();
    var catSliderHeight = $(".categories-slider-container").outerHeight();
    var totalHt = catSliderHeight + headerHeight + 10;

    if($("main").length > 0){
        if($(window).outerWidth() > 767){
            // This will add automatically a top margin for the main element
            $("main").css("padding-top", (totalHt+ headerHeight));
        }else {
            $("main").css("padding-top", (totalHt));
        }

        

        // This will add automatically a top margin for slider category component
		$(".categories-slider-container").css("margin-top", (headerHeight));
    }
    window.app.load();
});

// scroll to top when page loads
window.onbeforeunload = function () {
    $('body').hide();
    window.scrollTo(0, 0);
};