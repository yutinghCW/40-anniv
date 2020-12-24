$(document).ready(function () {
	// Select all links with hashes
	$('a.smooth-scroll[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

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
		$('body').toggleClass("opened");
		$('nav').toggleClass("opened");
	});
	$(".scroll_fadeIn").each(function () {
		var placement = $(this).get(0).getBoundingClientRect();
		if (
			placement.top + scrol_view_screen_height < window.innerHeight &&
			placement.bottom > 0
		) {
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
	video.onended = function () {
		if (videoScroll == 0) {
			$("html, body").animate( {
				scrollTop: $("#essay").offset().top,
			}, 500);
		}
		$(".btn--skip").fadeOut();
	};
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		// console.log(scroll, $('#cw40-opening').offset().top);
		if (scroll > 0) {
			$(".kv_pc_mouse").fadeOut();
		}
		if (
			scroll >=
			$(".block--essay > p").eq(0).offset().top -
				scrol_view_screen_height
		) {
			if (videoScroll == 0) {
				new WOW().init();
			}
			videoScroll = 1;
		}
	});
});
