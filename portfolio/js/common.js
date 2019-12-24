$(document).ready(function(){
	
	$(".header-menu a").on("click touchstart", function(){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$("html, body").animate({ scrollTop: destination }, 1000);
	});

	$(".works-types a").on("click touchstart", function(e){
		e.preventDefault(e);
		$(".works-types a").removeClass("active");
		$(this).addClass("active");
		var elementClick = $(this).data("work");
		$(".portfolioContainer div").removeClass("worksFiltered");
		if(elementClick != "all") {
			$(".portfolioContainer div").not("." + elementClick).addClass("worksFiltered");
		}
	
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > $("#technology").offset().top-500){
			$(".technology__rectangle").each(function(indx){
		  	var elementPercent = $(this).data("percent");
				$(this).children(".rectangle-inner").css("width", "" + elementPercent + "");	
			});
		}
	});

});