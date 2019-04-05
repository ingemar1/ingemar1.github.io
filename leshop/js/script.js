$(document).ready(function(){
    $("#fancy_mail").fancybox();
    $(".fancy_view_btn").fancybox();
    $("#fancy_call").fancybox();
	$("#fancy_password").fancybox();
	$("#fancy_password_answer").fancybox();
	// $(".fancy_basket_btn").fancybox();
	$(".fancy_basket_btn").submit(function(){
		$.fancybox({
			href: '#fancybox_basket', 
			modal: true
		});
		 return true;
	});
	tabs(".my_account", ".personalCabinet-tabs li", "active", 1, "tabLk_");
	tabs(".my_account-orders", ".my_account-menu li", "active", 0, "tabs_");
	tabs(".tab_content", "#product-tabs.tabs li", "active", 1, "tabs_");
	tabs(".basket_table", ".basket_tabs li", "active", 0, "tabs_");
	function tabs(tabs_content, tabs_menu, menu_tab_active, show_tab, id_tabs_content){
		$(tabs_content).hide();
		$(tabs_content).eq(show_tab).show();
		$(tabs_menu).eq(show_tab).addClass(menu_tab_active);
		$(tabs_menu).on("click", function(){
			$(tabs_menu).removeClass(menu_tab_active);
			$(this).addClass(menu_tab_active);
			$(tabs_content).hide();
			$(tabs_content + "#" + id_tabs_content + $(this).attr("id")).show();
		});
	}
	
	if($(".basket_table").children().is(".basket_empty")){
		$(".basket_btns.print").hide();
	}
	if($(".basket_table").children().is(".basket_empty")){
		$(".basket_btns.remove").hide();
	}
	$(".basket_tabs li").on("click", function(){
		if($(".basket_tabs li").eq(1).is(".active")){
			$(".basket_btns.print").hide();
		}else if($(".basket_table").children().is(".basket_empty")){
			$(".basket_btns.print").hide();
		}else{
			$(".basket_btns.print").show();
		}
		
		if($(".basket_table").children().is(".basket_empty") && $(".basket_tabs li").eq(0).is(".active")){
			$(".basket_btns.remove").hide();
		}else{
			$(".basket_btns.remove").show();
		}
	});
	
	$(".more").on("click", function(){
		if($(this).parent().nextAll(".my_account-order").css("display") == "none"){
			$(this).children().addClass("icon-triangle_top").next().text("свернуть");
			$(this).parent().nextAll(".my_account-order").show();
		}else{
			$(this).children().removeClass("icon-triangle_top").next().text("подробнее");
			$(this).parent().nextAll(".my_account-order").hide();
		}
	});
	
	$(".catalog-menu li").on("click", function(){
		if($(this).children().next().css("display") == "none"){
			$(this).children().next().show();
		}else{
			$(this).children().next().hide();
		}
		return false;
	});
	
	$(".menu li").hover(function(){
		$(".under_menu").hide();
		var idMenu = $(this).attr("id");
		$("#sub_" + idMenu).show();
		$(".top3").on({
			mouseleave: function(){
				$("#sub_" + idMenu).hide();
			}
		});
	});
	
	$("#give_feedback").on("click", function(){
		$(this).hide();
		$("#reviews").hide();
		$("#review-form").show();
		return false;
	});
	
	$('.rating_star.large.hover span').on({
		mouseenter: function(){	   
			$(this).prevAll().addClass("selected");
			$(this).addClass("selected");
		},
		mouseleave: function(){
			$(".rating_star.large.hover span").removeClass("selected");
			if($(".rating_star.large.hover span").is(".click")){
				$(".click").prevAll().addClass("selected");
				$(".click").addClass("selected");
			}
		},
		click: function(){
			$(".rating_star.large.hover span").removeClass("selected");
			$(this).prevAll().addClass("selected");
			$(this).addClass("selected");
			$(".rating_star.large.hover span").removeClass("click");
			$(this).addClass("click");
		}
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
	
	/*$("#slider-ui1").slider({
		range: true,
		min: 1,
		max: 700000,
		values: [4000, 80000],
		slide: function(event, ui){
			$("#filter-value_min").val(ui.values[0].toLocaleString());
			$("#filter-value_max").val(ui.values[1].toLocaleString());
		}
	});
	$("#filter-value_min").val($("#slider-ui1").slider("values", 0).toLocaleString());
	$("#filter-value_max").val($("#slider-ui1").slider("values", 1).toLocaleString());*/


})
// required — поле обязательное для заполнения (true или false)
// remote — указывается файл для проверки поля (например: check.php)
// email — проверяет корректность e-mail адреса (true или false)
// url — проверяет корректность url адреса (true или false)
// date — проверка корректности даты (true или false)
// dateISO — проверка корректности даты ISO (true или false)
// number — проверка на число (true или false)
// digits — только цифры (true или false)
// creditcard — корректность номера кредитной карты (true или false)
// equalTo — равное чему-то (например другому полю equalTo:»#pswd»)
// accept — проверка на правильное расширение (accept: «xls|csv»)
// maxlength — максимальное кол-во символов (число)
// minlength — минимальное кол-во символов (число)
// rangelength — кол-во символов от скольки и до скольки (rangelength: [2, 6])
// range — число должно быть в диапазоне от и до (range: [13, 23])
// max — максимальное значение числа (22)
// min — минимальное значение числа (11)
//
/*$(document).ready(function(){
	$("#loginform").validate({
		rules:{
			login:{
				required: true,
				minlength: 4,
				maxlength: 16,
			},
			pswd:{
				required: true,
				minlength: 6,
				maxlength: 16,
			},
		},
		messages:{
			login:{
				required: "Это поле обязательно для заполнения",
				minlength: "Логин должен быть минимум 4 символа",
				maxlength: "Максимальное число символо - 16",
			},
			pswd:{
				required: "Это поле обязательно для заполнения",
				minlength: "Пароль должен быть минимум 6 символа",
				maxlength: "Пароль должен быть максимум 16 символов",
			},
		}
	});
});*/