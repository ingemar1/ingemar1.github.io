$(document).ready(function(){
	
	$('.select-show').select2({
		minimumResultsForSearch: Infinity,
		width: '100%'
	});

	$('.select-authorization').select2({
		minimumResultsForSearch: Infinity,
		width: '100%'
	});
	
	
	 $('.filter li > .filter-icon_check').on('click', function() {
    if($(this).prev('input').prop('checked')){
    	$(this).nextAll("ul").find(".checkbox").prop('checked', false);
    }else{
    	$(this).nextAll("ul").find(".checkbox").prop('checked', true);
    }
  });
		
	$(".filter .icon-next").on("click", function(){
			if($(this).nextAll("ul").is(':hidden')){
				$(this).nextAll("ul").css("display", "block");
				$(this).removeClass("icon-next");
				$(this).addClass("icon-down");
			}else{
				$(this).nextAll("ul").css("display", "none");
				$(this).removeClass("icon-down");
				$(this).addClass("icon-next");
			}
	});
	
});