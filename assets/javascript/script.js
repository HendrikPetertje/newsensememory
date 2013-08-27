// Script sheet for Newsense Memory all rights reserved. If you plan to copy stuff from this file contact me using www.picoreclame.nl or www.kaboomreclame.nl. Use is free, but I like to know where my code goes ;)

$( document ).ready(function(){

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
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
		};
		if ($('.news-item-1').is(":visible")) {
		}
		else {
			$('.news-item-1').fadeIn();
		};

		$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-1.png)');
		
	})

	// nieuwsitem 2 weergeven
	$('.button-newsitem-2').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
		};
		if ($('.news-item-2').is(":visible")) {
		}
		else {
			$('.news-item-2').fadeIn();
		};

		$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-2.png)');
		
	})

	// nieuwsitem 3 weergeven
	$('.button-newsitem-3').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
		};
		if ($('.news-item-3').is(":visible")) {
		}
		else {
			$('.news-item-3').fadeIn();
		};

		$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-3.png)');
		
	})

	// nieuwsitem 4 weergeven
	$('.button-newsitem-4').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
		};
		if ($('.news-item-5').is(":visible")) {
			$('.news-item-5').hide();
		};
		if ($('.news-item-4').is(":visible")) {
		}
		else {
			$('.news-item-4').fadeIn();
		};

		$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-4.png)');
		
	})

	// nieuwsitem 4 weergeven
	$('.button-newsitem-5').click(function(){
		if ($('.news-item-1').is(":visible")) {
			$('.news-item-1').hide();
		};
		if ($('.news-item-2').is(":visible")) {
			$('.news-item-2').hide();
		};
		if ($('.news-item-3').is(":visible")) {
			$('.news-item-3').hide();
		};
		if ($('.news-item-4').is(":visible")) {
			$('.news-item-4').hide();
		};
		if ($('.news-item-5').is(":visible")) {
		}
		else {
			$('.news-item-5').fadeIn();
		};

		$('.newspage-container').css('background-image', 'url(/assets/images/newspage-background-5.png)');
		
	})
})