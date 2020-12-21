$(document).ready(function () {
	//preload
	$(window).load(function () {
		// makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
		$("body").delay(350).css({ overflow: "visible" });
	});
	var scrol_view_screen_height = $(window).height() / 2,
		video = document.getElementById("cw40-opening"),
		videoScroll = 0;
	$(".hamburger").click(function () {
		$(this).toggleClass("active");
	});
	$(".scroll_fadeIn").each(function () {
		var placement = $(this).get(0).getBoundingClientRect();
		if ( placement.top + scrol_view_screen_height < window.innerHeight && placement.bottom > 0 ) {
			$(this).addClass("show");
		} else {
			$(this).removeClass("show");
		}
	});
	$(".kv_pc_mouse").click(function () {
		if (videoScroll == 0) {
			new WOW().init();
		}
		videoScroll = 1;
	});
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		// console.log(scroll, $('#cw40-opening').offset().top);
		if (scroll > 0) {
			$(".kv_pc_mouse").fadeOut();
		}
		if ( scroll >= $(".block--essay > p").eq(0).offset().top - scrol_view_screen_height * 2 ) {
			if (videoScroll == 0) {
				new WOW().init();
			}
			videoScroll = 1;
		}
	});
});
