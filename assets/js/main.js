$(document).ready(function () {
	//preload
	$(window).load(function () {
		// makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
		$("body").delay(350).css({ overflow: "visible" });
	});
	new WOW().init();
	var scrol_view_screen_height = $(window).height() / 2,
		video = document.getElementById("cw40-opening");
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
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		// console.log(scroll, $('#cw40-opening').offset().top);
		if ( scroll + scrol_view_screen_height >= $("#cw40-opening").offset().top ) {
			video.play();
			// console.log('in');
		} else {
			video.pause();
			// console.log('out');
		}
	});
});
