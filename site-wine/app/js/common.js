$(document).ready(function(){
	
	$(".header-menu a").on("click touchstart", function(){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$("html, body").animate({ scrollTop: destination }, 1000);
	});


});