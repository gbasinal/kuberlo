(function(app) { 
	'use strict'; 
	
    var Menu = function() {};
    
	Menu.prototype.init = function() {
        var self = Menu.prototype;
        self.expandSearchInputField();
    };
    

    Menu.prototype.expandSearchInputField = function() {
        $(".search-wrapper").on("click", function(e){
            e.preventDefault();
            console.log("test")
            $(this).parent().siblings(".header-left-wrapper").find(".input-field-for-search-wrapper").toggleClass("is-active");
            $(this).parent().siblings(".header-left-wrapper").find(".page-title").toggleClass("is-active");
        })  
    }

    app.Menu = Menu;

    app.ready(function () {
        Menu.prototype.init()
    })

})(window.app);