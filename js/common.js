$(window).scroll(function() {   // эффект паралакса 
var st = $(this).scrollTop();
	
	$(".header_text").css({
"transform" : "translate(0%, -" + st /2 +"%"
	});
});

$(".sect_2 img").css({
"transform" : "translate(0%, +" + st /20 +"%"
	});




