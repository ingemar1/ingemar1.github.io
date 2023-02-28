$(document).ready(function(){
	//$(window).on("load", function(){
	$('.faq__item').click(function(event){
		$(this).children('.faq__item__content').slideToggle(250);
		$(this).find('.faq__item__icon').toggleClass('active');
		//$(this).find('.faq__item__content, .faq__item__icon').toggleClass('active')
	});

	
});