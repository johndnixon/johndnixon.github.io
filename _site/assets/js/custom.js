(function($) {

    "use strict";

    $(document).ready(function() {

		// PRELOADER
        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);

		// PORTFOLIO DIRECTION AWARE HOVER EFFECT
		var item = $("#bl-work-items>div");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		// TEXT ROTATOR
		$("#selector").animatedHeadline({
             animationType: "clip"
        });

		// BOX LAYOUT
        Boxlayout.init();

		// REMOVE # FROM URL
		$("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));

        // AJAX CONTACT FORM
        // $(".contactform").on("submit", function() {
        //     $(".output_message").text("Loading...");
        //
        //     var form = $(this);
        //     $.ajax({
        //         url: form.attr("action"),
        //         method: form.attr("method"),
        //         data: form.serialize(),
        //         success: function(result) {
        //             if (result == "success") {
        //                 $(".contactform").find(".output_message").addClass("success");
        //                 $(".output_message").text("Message Sent!");
        //             } else {
        //                 $(".contactform").find(".output_message").addClass("error");
        //                 $(".output_message").text("Error Sending!");
        //             }
        //         }
        //     });
        //
        //     return false;
        // });

		// MATERIAL CAROUSEL
        $(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true,
        });

		// pricing CARDS ANIMATION
		if ($(window).width() > 800) {
			$(".pricing-list-item, .pricing-card").on("click", function() {
				$(".pricing-list-item").removeClass("is-active");
				var e = parseInt($(this).data("index"),10);
				$("#pricing-list-item-" + e).addClass("is-active");
                if(e == 0){
    				var t = e + 1, //1
    					n = e + 2, //2
    					i = e + 3; //3
                } else if (e == 1){
                    var t = e + 1, //2
    					n = e + 2, //3
    					i = e - 1; //0
                } else if (e == 2){
                    var t = e + 1, //3
    					n = e - 2, //0
    					i = e - 1; //1
                } else if (e == 3){
                    var t = e - 3, //0
    					n = e - 2, //1
    					i = e - 1; //2
                }

				$(".pricing-card").removeClass("front back up-front up-up-front back-back back-back-back"), $(".pricing-card-" + e).addClass("front"),
                $(".pricing-card-" + t).addClass("back"),
                $(".pricing-card-" + n).addClass("back-back"),
                $(".pricing-card-" + i).addClass("back-back-back")
			});
		}

    });

})(jQuery);
