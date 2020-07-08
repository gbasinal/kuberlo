(function(app) { 
	'use strict'; 
	
    var Functions = function() {};
    
	Functions.prototype.init = function() {
        var self = this;
        self.clickToCopy();
    };
    

    Functions.prototype.clickToCopy = function(){
        var flag = false;
        $(".copy-btn").on("click", function(e){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(this).text()).select();
            document.execCommand("copy");
            $temp.remove();

            $(".copy-notification").addClass("active");
            $(".coupon").removeClass("active")
            $(this).parent().toggleClass("active")
            setTimeout(function(){
                $(".copy-notification").removeClass("active");
            },900)

        })

        $(".copy-btn-text").on("click", function(e){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(this).siblings(".coupon").find(".copy-btn").text()).select();
            document.execCommand("copy");
            $temp.remove();

            $(".copy-notification").addClass("active");
            $(".coupon").removeClass("active")
            $(this).siblings(".coupon").toggleClass("active")
            setTimeout(function(){
                $(".copy-notification").removeClass("active");
            },900)
            
        })

    }

    app.Functions = Functions;

    app.ready(function () {
        Functions.prototype.init()
    })

})(window.app);