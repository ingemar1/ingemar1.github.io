$(document).ready(function(){
	$(".top-button").on("click touchstart", function(e){
		//var elementClick = $(this).attr("href");
		//e.preventDefault(e);
		//var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: 0 }, 500);
	});
});