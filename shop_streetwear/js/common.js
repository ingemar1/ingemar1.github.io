$(document).ready(function(){
	
	$("#video-img").on("click touchstart", function(){
		$(this).css("display", "none");
		$("#video").css("display", "block");
	});


	$('.main-slider').slick({
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 1,
	  mobileFirst: true,
	  arrows: false,
    speed: 500,
    dots: true,
    customPaging: function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return "<span class='main-slider-dots'>0"+(i+1)+"</span>";
    },

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

	
	$('.slider__goodsPopular').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerPadding: '0',
	  arrows: true,
	  prevArrow: '<div class="arrows product__arrow-l"></div>',
		nextArrow: '<div class="arrows product__arrow-r"></div>',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});

	$('.slider__goodsNew').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerPadding: '0',
	  arrows: true,
	  prevArrow: '<div class="arrows product__arrow-l"></div>',
		nextArrow: '<div class="arrows product__arrow-r"></div>',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});


	$('.slider__product').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  asNavFor: '.slider-nav__product',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.slider-nav__product').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider__product',
	  centerMode: true,
	  centerPadding: '0px',
	  focusOnSelect: true,
	  arrows: false,
	  infinite: true,
	  vertical: true,
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        vertical: false
	      }
	    }
	  ]
	});

	$('.slider__goodsInSet').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerPadding: '0',
	  arrows: true,
	  prevArrow: '<div class="arrows product__arrow-l"></div>',
		nextArrow: '<div class="arrows product__arrow-r"></div>',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});

	$('.slider__viewedGoods').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerPadding: '0',
	  arrows: true,
	  prevArrow: '<div class="arrows product__arrow-l"></div>',
		nextArrow: '<div class="arrows product__arrow-r"></div>',
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        centerMode: true
	      }
	    }
	  ]
	});

	
	$('input.quantity-entry').each(function() {
		var $input = $(this);
		$input.prev().click(function(e) {
			e.preventDefault();
			$input.val(Math.max(parseInt($input.val())-1, 1));
		});
		$input.next().click(function(e) {
			e.preventDefault();
			$input.val(parseInt($input.val())+1);
		});
	});

});