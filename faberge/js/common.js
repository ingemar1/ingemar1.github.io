$(document).ready(function(){
	
	$("#video-img").on("click touchstart", function(){
		$(this).css("display", "none");
		$("#video").css("display", "block");
	});

	var $mainSlider = $('.main-slider');

	$mainSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".slide-controls-active").text(i);
		$(".slide-controls-total").text(slick.slideCount);
	});


	$mainSlider.slick({
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  mobileFirst: true,
	  arrows: false,
    speed: 500,
    variableWidth: true,
    lazyLoad: 'progressive',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 0,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$("#mainSliderLeft").click(function(){
		//$mainSlider.trigger("prev.owl.carousel");
		$mainSlider.slick('slickPrev');
	});

	$("#mainSliderRight").click(function(){
		//$mainSlider.trigger("next.owl.carousel");
		$mainSlider.slick('slickNext');
	});

	$("#hamburger-wrap").on("click", function(){
			$(".menu").addClass("show");
	});

	function submenuClose(){
		if($(".has-childs").hasClass("opened")){
				$(".has-childs").removeClass("opened");
				$(".has-childs").removeClass("arrow-up");
				$(".has-childs").addClass("arrow-down");
				$(".has-childs").children(".submenu").css("display", "none");
		}
	}

	$("#menu__close").on("click touchstart", function(){
			$(".menu").removeClass("show");
			submenuClose();
	});
	
	$(".menu").on({
		mouseleave: function(){
			$(".menu").removeClass("show");
			submenuClose();
		}
	});

	$(".has-childs").on("click", function(){
			$(this).children(".submenu").slideToggle(200);
			//$(this).toggleClass("opened");
			if($(this).hasClass("opened")){
				$(this).removeClass("opened");
				$(this).removeClass("arrow-up");
				$(this).addClass("arrow-down");
			}else{
				$(this).addClass("opened");
				$(this).removeClass("arrow-down");
				$(this).addClass("arrow-up");
			}
	});


	$('.slider__product').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav__product',
	  adaptiveHeight: true,
	  centerMode: true,
    speed: 500,
    variableWidth: true,
	   responsive: [{
	          breakpoint: 1024,
	          settings: {
	              arrows: false,
	              centerMode: false,
	              //centerPadding: '40px',
	              variableWidth: false,
	              slidesToShow: 1
	          },
	          breakpoint: 3000,
	          settings: {
	              arrows: false,
	              centerMode: false,
	              //centerPadding: '40px',
	              variableWidth: false,
	              slidesToShow: 1
	          }
	      }]
	});

	$('.slider-nav__product').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  asNavFor: '.slider__product',
	  //dots: true,
	  prevArrow: '<div class="arrows product__arrow-l"></div>',
		nextArrow: '<div class="arrows product__arrow-r"></div>',
	  centerMode: false,
	  focusOnSelect: true,
	  arrows: true,
	  infinite: true,
	  responsive: [{
	          breakpoint: 1024,
	          settings: {
	              arrows: true,
	              centerMode: false,
	              variableWidth: false,
	              slidesToShow: 2
	          },
	          breakpoint: 3000,
	          settings: {
	              arrows: true,
	              centerMode: false,
	              variableWidth: false,
	              slidesToShow: 2
	          }
	  }]
	});


});