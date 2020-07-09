(function(app) { 
	'use strict'; 
	
    var Functions = function() {};
    
	Functions.prototype.init = function() {
        var self = this;
        self.clickToCopy();
        self.incrementOrDecrementQuantity();
        self.removeProductModal();
        self.viewDetailsWhenclicked();
        self.discountAppliedNotif();
    };
    

    Functions.prototype.clickToCopy = function(){
        var flag = false;
        $(".copy-btn").on("click", function(e){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(this).text()).select();
            document.execCommand("copy");
            $temp.remove();

            $(".copy-notification-wrapper.copied-notif").addClass("active");
            $(".coupon").removeClass("active")
            $(this).parent().toggleClass("active")
            setTimeout(function(){
                $(".copy-notification-wrapper.copied-notif").removeClass("active");
            },900)

        })

        $(".copy-btn-text").on("click", function(e){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(this).siblings(".coupon").find(".copy-btn").text()).select();
            document.execCommand("copy");
            $temp.remove();

            $(".copy-notification-wrapper.copied-notif").addClass("active");
            $(".coupon").removeClass("active")
            $(this).siblings(".coupon").toggleClass("active")
            setTimeout(function(){
                $(".copy-notification-wrapper.copied-notif").removeClass("active");
            },900)
            
        })
    }

    Functions.prototype.incrementOrDecrementQuantity = function(){
        var i = 0;
        

        $(".btn--qty").on("click", function(){
            
            if($(this).hasClass("inc")){
                i++;
                $("#qty").attr("value", i)
                
            }else if($(this).hasClass("dec") && i > 0){
                i--;
                $("#qty").attr("value", i);
                
            }
            
        })
    }

    Functions.prototype.removeProductModal = function(){
        $(".btn-remove-modal").on("click", function(){
            $(".remove-product-modal-container").addClass("is-active");
        })
        $(".remove-product-close").on("click", function() {
            $(".remove-product-modal-container").removeClass("is-active");
        })
    }

    Functions.prototype.viewDetailsWhenclicked = function(){
        $(".view-details").on("click", function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop: document.body.scrollHeight},500);
        })
    }

    Functions.prototype.discountAppliedNotif = function(){
        $(".apply-discount").on("click", function(e){
            e.preventDefault();

            if(!$(".coupon-field-wrapper input").val()) {
                $(".copy-notification-wrapper.empty-notif").addClass("active");
                $(".coupon-field-wrapper input").addClass("empty");
                setTimeout(function(){
                    $(".copy-notification-wrapper.empty-notif").removeClass("active");
                    $(".coupon-field-wrapper input").removeClass("empty");
                },900)
            }else {
                $(".copy-notification-wrapper.discount-notif").addClass("active");
                setTimeout(function(){
                    $(".copy-notification-wrapper.discount-notif").removeClass("active");
                },900)
            }


        })
    }

    app.Functions = Functions;

    app.ready(function () {
        Functions.prototype.init()
    })

})(window.app);