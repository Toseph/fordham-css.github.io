$(document).ready(function(){
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	if( isMobile.any() ){
	    $(document).ready(function(){
			$("header").removeClass("attach");
		    $("header").css({height:600});

		    $(".team-member").toggleClass("hovered");
		    $(".team-overlay").css({"padding-top":"15%"});
		});
	}
	else {
    	var screenHeight = $(window).height();
    	var screenWidth = $(window).width();
        if (screenWidth > 767) {
        	$('header').css({ height: screenHeight });
        }
	}
});