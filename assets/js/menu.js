(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var self = this;
        // self.expandSearchInputField();
        self.hamburgerAnimation();
    };
    

    Menu.prototype.expandSearchInputField = function() {
        $(".search-wrapper").on("click", function(e){
            e.preventDefault();
            $(this).parent().siblings(".header-left-wrapper").find(".input-field-for-search-wrapper").toggleClass("is-active");
            $(this).parent().siblings(".header-left-wrapper").find(".page-title").toggleClass("is-active");
        })  
    }

    Menu.prototype.hamburgerAnimation = function(){
        $(".hamburger").on("click", function(){
            console.log("alksjdlaksj")
            $(this).toggleClass("is-active");
        })
    }

    app.Menu = Menu;

    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);