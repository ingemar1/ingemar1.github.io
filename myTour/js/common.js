$(document).ready(function(){
	$(".js-city").select2();

	function formatState (state) {
	  if (!state.id) {
	    return state.text;
	  }
	  var baseUrl = "img/flags";
	  var $state = $(
	    '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
	  );
	  return $state;
	};

	$(".js-country").select2({
	  templateResult: formatState,
	  templateSelection: formatState
	});

	//$(".filter__country").text($(".js-country optgroup").attr("label"));


	function formatState2 (state) {
	  if (!state.id) {
	    return state.text;
	  }
	  var $state = $(
	    '<span>Не ниже</span> <span class="icon-rating"></span> <span class=filter__ratingTopHotels__number>' + state.element.value.toLowerCase() + '</span>'
	  );
	  return $state;
	};


	$(".js-ratingTopHotels").select2({
	  templateResult: formatState2,
	  templateSelection: formatState2,
	  minimumResultsForSearch: Infinity
	});

	$(".js-typefood").select2({minimumResultsForSearch: Infinity});
	$(".js-location").select2({minimumResultsForSearch: Infinity});


	var currentDate = new Date();
	var dp = $(".js-datepicker").datepicker({
	    language: {
		    daysShort: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		  	dateFormat: "d MM, D",
		  	minDate: currentDate
	    }
	}).data('datepicker');
	dp.selectDate(new Date());

	$('.rating_star.small.hover span').on({
		mouseenter: function(){	   
			$(this).prevAll().addClass("selected");
			$(this).addClass("selected");
		},
		mouseleave: function(){
			$(".rating_star.small.hover span").removeClass("selected");
			if($(".rating_star.small.hover span").is(".click")){
				$(".click").prevAll().addClass("selected");
				$(".click").addClass("selected");
			}
		},
		click: function(){
			$(".rating_star.small.hover span").removeClass("selected");
			$(this).prevAll().addClass("selected");
			$(this).addClass("selected");
			$(".rating_star.small.hover span").removeClass("click");
			$(this).addClass("click");
		}
	});

	var sliderUiValue1, sliderUiValue2;
	$("#js-slider1").slider({
		range: true,
		min: 5000,
		max: 800000,
		values: [100000, 700000],
		create: function(event, ui) {
			sliderUiValue1 = String($("#js-slider1").slider("values",0)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			sliderUiValue2 = String($("#js-slider1").slider("values",1)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$("#filter__value-min").val(sliderUiValue1);
			$("#filter__value-max").val(sliderUiValue2);

			$(".filter__price-range").text(sliderUiValue1 + " Р — " + sliderUiValue2 + " Р");
    },
    slide: function(event, ui){
    	sliderUiValue1 = String(ui.values[0]).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    	sliderUiValue2 = String(ui.values[1]).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$("#filter__value-min").val(sliderUiValue1);
			$("#filter__value-max").val(sliderUiValue2);
    }
	});
		
	$("#js-filter__quantity").on("click", function(){
		if($(this).children().next().css("display") == "none"){
			$(this).children().next().show();
		}
		return false;
	});
	$("#js-close1").on("click", function(){
			$("#js-filter__quantity").children().next().hide();
			$(".filter__quantity__value").text($("#filter__quantity-adults").val() + " Взрослых, " +  $("#filter__quantity-children").val() + " детей");
			return false;
	});

	$("#js-filter__price").on("click", function(){
		if($(this).children().next().css("display") == "none"){
			$(this).children().next().show();
		}
		return false;
	});
	$("#js-close2").on("click", function(){
			$("#js-filter__price").children().next().hide();
			$(".filter__price-range").text($("#filter__value-min").val() + " Р — " +  $("#filter__value-max").val() + " Р");
			return false;
	});

	$("#js-filter__nights").on("click", function(){
		if($(this).children().next().css("display") == "none"){
			$(this).children().next().show();
		}
		return false;
	});
	$("#js-close3").on("click", function(){
			$("#js-filter__nights").children().next().hide();
			if(parseInt($(".filter__nights .start").text()) < parseInt($(".filter__nights .end").text())){
					$(".filter__nights__value").text($(".filter__nights .start").text() + " — " +  $(".filter__nights .end").text() + " ночей");
			}else {
					$(".filter__nights__value").text($(".filter__nights .end").text() + " — " +  $(".filter__nights .start").text() + " ночей");
			}
			return false;
	});


	$('.filter__nights__numbers div').on({
		"mouseenter touchstart": function(e){
			e.preventDefault();
			if($(".filter__nights__numbers div").is(".start") && $(this).is(":not(.start)")){
				if(!$(".filter__nights__numbers div").is(".end")){
					var startNumberIndex = $(".filter__nights__numbers .start").index();
					var endNumberIndex = $(".filter__nights__numbers div").last().index();
					var thisNumber = $(this).index();
					if(startNumberIndex < thisNumber){
						var elementsLeft = $(".filter__nights__numbers div").slice(0, startNumberIndex);
						elementsLeft.removeClass("selected");
						var qnumbers = $(".filter__nights__numbers div").slice(startNumberIndex, thisNumber);
					}else{
						var elementsRight = $(".filter__nights__numbers div").slice(startNumberIndex, endNumberIndex);
						elementsRight.removeClass("selected");
						var qnumbers = $(".filter__nights__numbers div").slice(thisNumber, startNumberIndex);
					}
					qnumbers.addClass("selected");
				}
			}
		},
		"click touchstart": function(e){
			e.preventDefault();
			if($(".filter__nights__numbers div").is(".start") && $(".filter__nights__numbers div").is(".end")){
					$(".filter__nights__numbers div").removeClass("start");
					$(".filter__nights__numbers div").removeClass("end");
					$(".filter__nights__numbers div").removeClass("selected");
					$(this).addClass("start");
			}
			else if($(this).is(":not(.start)")){
				$(this).removeClass("selected");
				$(this).addClass("end");
			}else{
					$(".filter__nights__numbers div").removeClass("start");
					$(".filter__nights__numbers div").removeClass("end");
					$(".filter__nights__numbers div").removeClass("selected");
					$(this).addClass("start");
			}
		}
	});

});