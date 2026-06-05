(function($) {

	"use strict";

	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}

	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	function directionswitch() {
		if ($('.page_direction').length) {
			$('.direction_switch button').off('click.carneshop').on('click.carneshop', function() {
				$('body').toggleClass(function() {
					return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
				});
			});
		}
	}

	function initOwlCarousel(selector, options) {
		$(selector).each(function() {
			var $carousel = $(this);
			if (!$carousel.hasClass('owl-loaded')) {
				$carousel.owlCarousel(options);
			}
		});
	}

	function initCarneshopDom() {
		headerStyle();

		if ($('.main-header li.dropdown ul').length && !$('.main-header .navigation li.dropdown .dropdown-btn').length) {
			$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		}

		if ($('.mobile-menu').length) {
			if ($.fn.mCustomScrollbar && !$('.mobile-menu .menu-box').hasClass('mCustomScrollbar')) {
				$('.mobile-menu .menu-box').mCustomScrollbar();
			}

			if (!$('.mobile-menu .menu-outer').children().length) {
				var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
				$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
				$('.sticky-header .main-menu').append(mobileMenuContent);
			}

			$('.mobile-menu li.dropdown .dropdown-btn').off('click.carneshop').on('click.carneshop', function() {
				$(this).toggleClass('open');
				$(this).prev('ul').slideToggle(500);
			});

			$('.mobile-menu li.dropdown .dropdown-btn').off('click.carneshop-megamenu').on('click.carneshop-megamenu', function() {
				$(this).prev('.megamenu').slideToggle(900);
			});

			$('.mobile-nav-toggler').off('click.carneshop').on('click.carneshop', function() {
				$('body').addClass('mobile-menu-visible');
			});

			$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').off('click.carneshop').on('click.carneshop', function() {
				$('body').removeClass('mobile-menu-visible');
			});
		}

		if ($('.scroll-to-target').length) {
			$(".scroll-to-target").off('click.carneshop').on('click.carneshop', function() {
				var target = $(this).attr('data-target');
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1000);
			});
		}

		if ($('#contact-form').length && !$('#contact-form').data('validator')) {
			$('#contact-form').validate({
				rules: {
					username: { required: true },
					email: { required: true, email: true },
					phone: { required: true },
					subject: { required: true },
					message: { required: true }
				}
			});
		}

		if ($('.count-box').length) {
			$('.count-box').appear(function() {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
			}, { accY: 0 });
		}

		if ($('.lightbox-image').length) {
			$('.lightbox-image').fancybox({
				openEffect: 'fade',
				closeEffect: 'fade',
				helpers: {
					media: {}
				}
			});
		}

		if ($('.tabs-box').length) {
			$('.tabs-box .tab-buttons .tab-btn').off('click.carneshop').on('click.carneshop', function(e) {
				e.preventDefault();
				var target = $($(this).attr('data-tab'));

				if ($(target).is(':visible')) {
					return false;
				}

				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			});
		}

		if ($('.accordion-box').length) {
			$(".accordion-box").off('click.carneshop').on('click.carneshop', '.acc-btn', function() {
				var outerBox = $(this).parents('.accordion-box');
				var target = $(this).parents('.accordion');

				if ($(this).hasClass('active') !== true) {
					$(outerBox).find('.accordion .acc-btn').removeClass('active');
				}

				if ($(this).next('.acc-content').is(':visible')) {
					return false;
				}

				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			});
		}

		initOwlCarousel('.main-slider-carousel', {
			loop: true,
			margin: 0,
			nav: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
			responsive: {
				0: { items: 1 },
				600: { items: 1 },
				1200: { items: 1 }
			}
		});

		initOwlCarousel('.clients-carousel', {
			loop: true,
			margin: 70,
			nav: false,
			smartSpeed: 2000,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: { items: 1 },
				480: { items: 2 },
				600: { items: 3 },
				800: { items: 4 },
				1200: { items: 5 }
			}
		});

		initOwlCarousel('.single-item-carousel', {
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 1 },
				1200: { items: 1 }
			}
		});

		initOwlCarousel('.two-column-carousel', {
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="flaticon-left-1"></span>', '<span class="flaticon-right-1"></span>'],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 2 },
				1024: { items: 2 }
			}
		});

		initOwlCarousel('.three-item-carousel', {
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 2 },
				800: { items: 2 },
				1024: { items: 3 }
			}
		});

		initOwlCarousel('.four-item-carousel', {
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
			responsive: {
				0: { items: 1 },
				600: { items: 2 },
				800: { items: 3 },
				1024: { items: 3 },
				1200: { items: 4 }
			}
		});

		if ($('.scroll-nav').length) {
			$('.scroll-nav').onePageNav();
		}

		if ($('#search-popup').length) {
			$('.search-toggler').off('click.carneshop').on('click.carneshop', function() {
				$('#search-popup').addClass('popup-visible');
			});

			$(document).off('keydown.carneshop').on('keydown.carneshop', function(e) {
				if (e.keyCode === 27) {
					$('#search-popup').removeClass('popup-visible');
				}
			});

			$('.close-search,.search-popup .overlay-layer').off('click.carneshop').on('click.carneshop', function() {
				$('#search-popup').removeClass('popup-visible');
			});
		}

		if ($('.price-range-slider').length && !$('.price-range-slider').hasClass('ui-slider')) {
			$(".price-range-slider").slider({
				range: true,
				min: 0,
				max: 300,
				values: [50, 250],
				slide: function(event, ui) {
					$("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
				}
			});

			$("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
		}

		if ($('.product-details-content .bxslider').length && !$('.product-details-content .bxslider').data('bxSlider')) {
			$('.product-details-content .bxslider').bxSlider({
				nextSelector: '.product-details-content #slider-next',
				prevSelector: '.product-details-content #slider-prev',
				nextText: '<i class="fa fa-angle-right"></i>',
				prevText: '<i class="fa fa-angle-left"></i>',
				mode: 'fade',
				auto: 'true',
				speed: '700',
				pagerCustom: '.product-details-content .slider-pager .thumb-box'
			});
		}

		if ($('.quantity-spinner').length) {
			$("input.quantity-spinner").each(function() {
				if (!$(this).parent().hasClass('bootstrap-touchspin-injected')) {
					$(this).TouchSpin({
						verticalbuttons: true
					});
				}
			});
		}

		directionswitch();
		handlePreloader();
	}

	window.initCarneshopDom = initCarneshopDom;
	window.carneshopHandlePreloader = handlePreloader;

	$(window).on('scroll', function() {
		headerStyle();
	});

})(window.jQuery);
