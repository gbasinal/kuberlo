(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var self = this;
        // self.expandSearchInputField();
        self.hamburgerAnimation();
        self.menuItemSetActiveState();
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
            // $(this).toggleClass("is-active");
            $(".nav-menu-container").addClass("active")
            $("body").addClass("no-scroll");
        })
        $(".menu-close-button").on("click", function(){
            $(".nav-menu-container").removeClass("active")
            $("body").removeClass("no-scroll");
        })
    }

    Menu.prototype.menuItemSetActiveState = function(){ 
        $(".nav-item").on("click", function(e){
            e.preventDefault();
        })

        $(".nav-item img").on("click", function(){
            $(this).toggleClass("active");
            $(this).parent().siblings(".sub-nav-container").toggleClass("active")
        })

        $(".menu-item-name").on("click", function(){
            var url = $(this).data("url");
            window.location.href = window.location.origin + url;
        })
    }

    app.Menu = Menu;

    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);