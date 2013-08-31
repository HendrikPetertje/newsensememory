// Script sheet for Newsense Memory all rights reserved. If you plan to copy stuff from this file contact me using www.picoreclame.nl or www.kaboomreclame.nl. Use is free, but I like to know where my code goes ;)

$( document ).ready(function(){

	// Page-scrolling functies

	$(document).scroll(function(){
	    var scrollposition = $(this).scrollTop();

	    // Scroll variabelen voor berekenen paginahoogte
	    
	    var newspage = $(".newspage-container").height() - 1;
	    var tourdatapage = $('.tourdata-page').height() + newspage;
	    var mediapage = $('.media-page-container').height() + tourdatapage;
	    var socialmediapage = $('.socialmedia-page-container').height() + mediapage;
	    var biografiepage = $('.biografie-page-container').height() + socialmediapage;
	    
	    // nieuwspagina navigatie
	    if ((scrollposition > 0) && (scrollposition <= newspage)){
	    	// remove classes
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-news').addClass("nav-active");
	    };

	    // tourdata navigatie
	    if ((scrollposition > newspage) && (scrollposition <= tourdatapage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-tourdata').addClass("nav-active");
	    };

	    // mediapage navigatie
	    if ((scrollposition > tourdatapage) && (scrollposition <= mediapage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-media').addClass("nav-active");
	    };

	    // socialmedia navigatie
	    if ((scrollposition > mediapage) && (scrollposition <= socialmediapage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-socialmedia').addClass("nav-active");
	    };

	     // biografie navigatie
	    if ((scrollposition > socialmediapage) && (scrollposition <= biografiepage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-bio').addClass("nav-active");
	    };
	});

	// Smooth scrolling bij het klikken op interne links
	jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});

	// Preloading Images on page load
	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	// Usage:

	$(['/assets/images/newspage-background-1.png','/assets/images/newspage-background-2.png','/assets/images/newspage-background-3.png','/assets/images/newspage-background-4.png','/assets/images/newspage-background-5.png']).preload();$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	// Usage:

	$(['/assets/images/newspage-background-1.png','/assets/images/newspage-background-2.png','/assets/images/newspage-background-3.png','/assets/images/newspage-background-4.png','/assets/images/newspage-background-5.png']).preload();


	// nieuwsitem 1 weergeven
	$('.button-newsitem-1').click(function(){
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
			$('.button-newsitem-2').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
			$('.button-newsitem-3').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
			$('.button-newsitem-4').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
			$('.button-newsitem-5').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-1').is(":visible")) {
		}
		else {
			$('.news-item-1').fadeIn();
			$('.button-newsitem-1').css('background-image', 'url(/assets/images/news-page-button-active.png)');
			$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-1.png)');
		};

		
	})

	// nieuwsitem 2 weergeven
	$('.button-newsitem-2').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
			$('.button-newsitem-1').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
			$('.button-newsitem-3').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
			$('.button-newsitem-4').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
			$('.button-newsitem-5').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-2').is(":visible")) {
		}
		else {
			$('.news-item-2').fadeIn();
			$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-2.png)');
			$('.button-newsitem-2').css('background-image', 'url(/assets/images/news-page-button-active.png)');
		};
		
	})

	// nieuwsitem 3 weergeven
	$('.button-newsitem-3').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
			$('.button-newsitem-1').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
			$('.button-newsitem-2').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
			$('.button-newsitem-4').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
			$('.button-newsitem-5').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-3').is(":visible")) {
		}
		else {
			$('.news-item-3').fadeIn();
			$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-3.png)');
			$('.button-newsitem-3').css('background-image', 'url(/assets/images/news-page-button-active.png)');
		};

	})

	// nieuwsitem 4 weergeven
	$('.button-newsitem-4').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
			$('.button-newsitem-1').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
			$('.button-newsitem-2').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
			$('.button-newsitem-3').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
			$('.button-newsitem-5').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-4').is(":visible")) {
		}
		else {
			$('.news-item-4').fadeIn();
			$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-4.png)');
			$('.button-newsitem-4').css('background-image', 'url(/assets/images/news-page-button-active.png)');
		};
		
	})

	// nieuwsitem 4 weergeven
	$('.button-newsitem-5').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
			$('.button-newsitem-1').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
			$('.button-newsitem-2').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
			$('.button-newsitem-3').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
			$('.button-newsitem-4').css('background-image', 'url(/assets/images/news-page-button.png)');
		};
		if ($('.news-item-5').is(":visible")) {
		}
		else {
			$('.news-item-5').fadeIn();
			$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-5.png)');
			$('.button-newsitem-5').css('background-image', 'url(/assets/images/news-page-button-active.png)');
		};
		
	});

	// PrettyPhoto laten werken
	$("area[rel^='prettyPhoto']").prettyPhoto();
	
	$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square'});
	$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

	$("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});

	$("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});

	// muziekspelertje tevoorschijn toveren

	$('#play-music').click(function(){
			$('.soundcloud-music-player').fadeIn();
			$('#play-music').hide();
			$('#stop-music').show();
			$('#.soundcloud-music-helper').hide();
			
	});

	$('#stop-music').click(function(){
			$('.soundcloud-music-player').hide();
			$('#play-music').show();
			$('#stop-music').hide();
	});

})