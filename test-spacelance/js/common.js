$(document).ready(function(){
	//$(window).on("load", function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
	});

	$('.slider').slick({
		//infinite: true,
		slidesToShow: 3,
	  	arrows: true,
		speed: 500,
		slidesToScroll: 3,
		responsive:[
			{
				breakpoint: 992,
				settings:{
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	 });
	
});