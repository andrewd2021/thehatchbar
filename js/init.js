/*
 * Copyright (c) 2022 The Hatch Bar Liverpool
 * Author: The Hatch Bar Liverpool
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	hatch_tm_picker();
	hatch_bg_picker();
	hatch_tm_page_transition();
	hatch_tm_trigger_menu();
	hatch_tm_about_popup();
	hatch_tm_portfolio_popup();
	hatch_tm_imgtosvg();
	hatch_tm_popup();
	hatch_tm_data_images();
	hashtag();
	hatch_tm_swiper();
	hatch_tm_headline();
	hatch_tm_location();
	hatch_tm_color_switcher();
	hatch_tm_bg_switcher();
	hatch_tm_switcher_opener();
	
	jQuery(window).load('body', function(){
		hatch_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------   COLOR PICKER    -------------------
// -----------------------------------------------------

function hatch_tm_picker(){
	
	"use strict";
	
	if(jQuery('.hatch_tm_settings').length){

		// attach background for all colors
		var list	= jQuery('.hatch_tm_settings .colors li a');
		list.each(function(){
			jQuery(this).css({backgroundColor: jQuery(this).data('color')});
		});

		// change root color
		list.on('click',function(){
			var element = jQuery(this);
			var color	= element.data('color');
			jQuery(':root').css('--main-color', color);
			return false;
		});	
	}
	
}
// -----------------------------------------------------
// ---------------   BG PICKER    -------------------
// -----------------------------------------------------

function hatch_bg_picker(){
	
	"use strict";
	
	if(jQuery('.hatch_tm_settings').length){

		// attach background for all bg
		var list	= jQuery('.hatch_tm_settings .bgs li a');
		list.each(function(){
			jQuery(this).css({backgroundImage: jQuery(this).data('bg')});
		});

		// change bg image
		list.on('click',function(){
			var element = jQuery(this);
			var bg	= element.data('bg');
			jQuery(':root').css('--main-bg', bg);
			return false;
		});	
	}
	
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function hatch_tm_my_progress(){
	
	"use strict";
	
	jQuery('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

function hatch_tm_circular_progress(){
	
	"use strict";
	
	var circVal 		= 110;
	
	var colorSchemes	= jQuery(':root').css('--main-color');	
	
	jQuery('.circular_progress_bar .myCircle').each(function(){
		var element	= jQuery(this);
		element.append('<span class="number"></span>');
		var value	= element.data('value');
		element.circleProgress({
			size: circVal,
			value: 0,
			animation: {duration: 1400},
			thickness: 2,
			fill: colorSchemes,
			emptyFill: 'rgba(0,0,0,0)',
			startAngle: -Math.PI/2
		  }).on('circle-animation-progress', function(event, progress, stepValue) {
				element.find('.number').text(parseInt(stepValue.toFixed(2)*100) + '%');
		  });
		  element.circleProgress('value', 1.0);
		  setTimeout(function() { element.circleProgress('value', value); }, 1400);
	});
}
// -----------------------------------------------------
// ---------------   CIRCULAR PROGRESS   ---------------
// -----------------------------------------------------

function hatch_tm_circular_progress(){
	
	"use strict";
	
	var circVal 		= 110;
	
	var colorSchemes	= jQuery(':root').css('--main-bg');	
	
	jQuery('.circular_progress_bar .myCircle').each(function(){
		var element	= jQuery(this);
		element.append('<span class="number"></span>');
		var value	= element.data('value');
		element.circleProgress({
			size: circVal,
			value: 0,
			animation: {duration: 1400},
			thickness: 2,
			fill: colorSchemes,
			emptyFill: 'rgba(0,0,0,0)',
			startAngle: -Math.PI/2
		  }).on('circle-animation-progress', function(event, progress, stepValue) {
				element.find('.number').text(parseInt(stepValue.toFixed(2)*100) + '%');
		  });
		  element.circleProgress('value', 1.0);
		  setTimeout(function() { element.circleProgress('value', value); }, 1400);
	});
}


// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function hatch_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.hatch_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.hatch_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('hatch_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function hatch_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.hatch_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.hatch_tm_mobile_menu');
	var mobileMenuList	= jQuery('.hatch_tm_mobile_menu ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.hatch_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// ---------------  ABOUT POPUP  -------------------
// -------------------------------------------------

function hatch_tm_about_popup(){
	
	"use strict";
	
	var button			= jQuery('.hatch_tm_about .hatch_tm_button a');
	var close			= jQuery('.hatch_tm_modalbox .close');
	var modalBox		= jQuery('.hatch_tm_modalbox');
	var hiddenContent	= jQuery('.hatch_tm_hidden_content').html();
	
	button.on('click',function(){
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(hiddenContent);
		hatch_tm_data_images();
		hatch_tm_my_progress();
		hatch_tm_circular_progress();
		hatch_tm_mycarousel();
		hatch_tm_location();
	});
	close.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function hatch_tm_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.hatch_tm_modalbox');
	var button			= jQuery('.hatch_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.hatch_tm_hidden_content').html();
		var image		= parent.find('.image .main').data('img-url');
		var title		= parent.find('.details h3').text();
		var category	= parent.find('.details span').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.portfolio_popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.portfolio_popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span><a href="#">'+category+'</a></span><div>');
		hatch_tm_data_images();
		hatch_tm_popup();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}


// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function hatch_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function hatch_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){hatch_tm_preloader();},speed);
}


// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function hatch_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function hatch_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});

}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function hatch_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// --------------    OWL CAROUSEL    -------------------
// -----------------------------------------------------

 function hatch_tm_mycarousel(){
	 
	 "use strict";
	 
	 var carousel			= jQuery('.hatch_tm_modalbox .owl-carousel');
	
	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 1
			}
		}
	});
	 
 }

// -----------------------------------------------------
// -------------------    HASHTAG    -------------------
// -----------------------------------------------------

function hashtag(){
	"use strict";
	var ccc 			= $('.hatch_tm_header .menu .ccc');
	var element 		= $('.hatch_tm_header .menu .active a');
	$('.hatch_tm_header .menu a').on('mouseenter',function(){
		var e 			= $(this);
		currentLink(ccc,e);
	});
	$('.hatch_tm_header .menu').on('mouseleave',function(){
		element 		= $('.hatch_tm_header .menu .active a');
		currentLink(ccc,element);
		element.parent().siblings().removeClass('mleave');
	});
	currentLink(ccc,element);
	
}

function currentLink(ccc,e){
	"use strict";
	if(!e.length){return false;}
	var left 		= e.offset().left;
	var width		= e.outerWidth();
	var menuleft 	= $('.hatch_tm_header .menu').offset().left;
	e.parent().removeClass('mleave');
	e.parent().siblings().addClass('mleave');
	ccc.css({left: (left-menuleft) + 'px',width: width + 'px'});
	
}

// -----------------------------------------------------
// ---------------   SWIPER SLIDER    ------------------
// -----------------------------------------------------

function hatch_tm_swiper(){
	"use strict";
	
	$('.swiper-section').each(function(){
		var element 	= $(this);
		var container 	= element.find('.swiper-container');
		var mySwiper 	= new Swiper (container, {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			loopAdditionalSlides: 1,
			autoplay: {
				delay: 6000,
			},
			
			navigation: {
				nextEl: '.my_next',
				prevEl: '.my_prev',
			  },
			
			pagination: {
				el: '.hatch_tm_swiper_progress',
				type: 'custom', // progressbar
				renderCustom: function (swiper,current,total) {


					// progress animation
					var scale,translateX;
					var progressDOM	= container.find('.hatch_tm_swiper_progress');
					if(progressDOM.hasClass('fill')){
						translateX 	= '0px';
						scale		= parseInt((current/total)*100)/100;
					}else{
						scale 		= parseInt((1/total)*100)/100;
						translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
					}


					progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
					if(current<10){current = '0' + current;}
					if(total<10){total = '0' + total;}
					progressDOM.find('.current').html(current);
					progressDOM.find('.total').html(total);
				}
			},
			breakpoints: {
				700: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			}
		});
	});
	hatch_tm_imgtosvg();
}

// -------------------------------------------------
// -----------------  LOCATION  --------------------
// -------------------------------------------------

function hatch_tm_location(){
	
	"use strict";
	
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function hatch_tm_color_switcher(){
	
	"use strict";
	
	var list	= jQuery('.hatch_tm_settings .colors li a');
	
	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.hatch_tm_all_wrap').attr('data-color',''+elval+'');
//		hatch_tm_circular_progress();
		return false;
	});	
}
function hatch_tm_bg_switcher(){
	
	"use strict";
	
	var list	= jQuery('.hatch_tm_settings .bgs li a');
	
	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.hatch_tm_all_wrap').attr('data-bg',''+elval+'');
//		hatch_tm_circular_progress();
		return false;
	});	
}

function hatch_tm_switcher_opener(){

	"use strict";

	var settings	= jQuery('.hatch_tm_settings');
	var button		= settings.find('.link');

	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.closest('.hatch_tm_settings').removeClass('opened');
		}else{
			element.addClass('opened');
			element.closest('.hatch_tm_settings').addClass('opened');
		}
		return false;
	});
}