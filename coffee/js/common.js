$(document).ready(function(){
	$(".top-button").on("click touchstart touchend", function(e){
		//var elementClick = $(this).attr("href");
		//e.preventDefault();
		//var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: 0 }, 500);
	});
});