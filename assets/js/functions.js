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
        self.enableMiniCart();
        self.addTopMargin();
        self.unStickComponent();
        self.collapseItem();
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

    Functions.prototype.enableMiniCart = function(){
        $(".cart-open").on("click", function(e){
            e.preventDefault();

           
        

            $(".mini-cart-container main").css("padding-top", 0);
            $(".mini-cart-wrapper").addClass("active");

            setTimeout(function(){
                $(".recommended-slide-active.slider-carousel .owl-item").css("width", $(".recommended-slide-active.slider-carousel ").outerWidth()  )
                $(".mini-cart-wrapper").css("opacity", 1);
                
                var miniCartItemW = $(".recommended-slide-active.slider-carousel").outerWidth();
                console.log(miniCartItemW)
				// $(".recommended-slide-active.slider-carousel .owl-item .item-imageStyle").css("height", miniCartItemW/1.9 )
            },500)

            $("body, html").css("overflow", "hidden");
  
        })

        $(".btn-mini-cart-back").on("click", function(e){
            e.preventDefault();
            
            $(".mini-cart-wrapper").css("opacity", 0);
            setTimeout(function(){
                $(".mini-cart-wrapper").removeClass("active");
            },300)
            $("body, html").css("overflow", "auto");
        })
    }

    Functions.prototype.addTopMargin = function(){
        var headerHeight = $(".header-container").outerHeight();
        var catSliderHeight = $(".categories-slider-container").outerHeight();
        var totalHt = catSliderHeight + headerHeight + 10;
    
        // This margin will only work in homepage, or if a page has a categories slider component
        if($("main").length > 0 && $(".categories-slider-container").length > 0){
            if($(window).outerWidth() > 767){
                
                $("main").css("margin-top", (0));
            }else {
       
            }
    
            
    
        //     // This will add automatically a top margin for slider category component
            $(".categories-slider-container").css("margin-top", (headerHeight));
        }
        
        
        // This will work for all pages except homepage. 
        
        if( $("main").length > 0 && $(".categories-slider-container").length === 0 && $("main .single-slide-active").length >0){
        
            
            $("main section").eq(0).css("margin-top", headerHeight+10)
            $("main section .slider-component-wrapper").eq(0).css("padding-top", 0)
        
            
        }
    }

    Functions.prototype.unStickComponent = function() {
        var headerHeight = $(".header-container").outerHeight();

        $(window).on("scroll", function(){
            if( $(window).scrollTop() <= headerHeight){
                $(".sticky-v2").removeClass("unstick")
            }
        })


        $('.trigger-for-sticky').on('inview', function(event, isInView) {
            if(isInView){
               $(".sticky-v2").addClass("unstick")
            }
        });
    }


    Functions.prototype.collapseItem = function(){
        

        $(".view-more").on("click", function(){
            $(this).siblings(".collapse-item").addClass("active")
            $(this).hide();
        })

        $(".add-to-bag-btn").on("click", function(e){
            e.preventDefault();
            $(this).find(".bag-text").text("Go to Bag")
        })
    }

    app.Functions = Functions;

    app.ready(function () {
        Functions.prototype.init()
    })

})(window.app);