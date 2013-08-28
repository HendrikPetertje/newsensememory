// Script sheet for Newsense Memory all rights reserved. If you plan to copy stuff from this file contact me using www.picoreclame.nl or www.kaboomreclame.nl. Use is free, but I like to know where my code goes ;)

$( document ).ready(function(){

	// Page-scrolling functies

	$(document).scroll(function(){
	    var scrollposition = $(this).scrollTop();

	    // Scroll variabelen voor berekenen paginahoogte
	    var tourdatapage = $(".newspage-container").height() - 1;
		var mediapage = $(".newspage-container").height() + tourdatapage;
		var socialmediapage = $('.tourdata-page').height() + mediapage;
	    
	    // nieuwspagina navigatie
	    if ((scrollposition > 0) && (scrollposition <= tourdatapage)){
	    	// remove classes
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-news').addClass("nav-active");
	    };

	    // tourdata navigatie
	    if ((scrollposition > tourdatapage) && (scrollposition <= mediapage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-media').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-tourdata').addClass("nav-active");
	    };

	    // mediapage navigatie
	    if ((scrollposition > mediapage) && (scrollposition <= socialmediapage)){
	    	// remove classes
	    	$('#nav-news').removeClass("nav-active");
	    	$('#nav-tourdata').removeClass("nav-active");
	    	$('#nav-socialmedia').removeClass("nav-active");
	    	$('#nav-bio').removeClass("nav-active");
	    	// add the right class
	    	$('#nav-media').addClass("nav-active");
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
		
	})
})