$(document).ready(function(){
	$(".top-button").click(function(){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 500);
        return false;
	});
});