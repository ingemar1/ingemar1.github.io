$(document).ready(function(){
	function map_styles(){
		var map_style = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"transit.station.bus","elementType":"labels.icon","stylers":[{"visibility":"on"},{"saturation":"-100"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}];
		return map_style;
	}
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 16,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(46.282489, 7.532631),

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles:map_styles()
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(46.282489, 7.532631),
			map: map,
			title: 'Snazzy!'
		});
	}
		function initialize() {
          var mapOptions = {
                  zoom: 16,
                  center: new google.maps.LatLng(46.282489, 7.532631),
				  styles: map_styles()
              },
              map = new google.maps.Map(document.getElementById('popup_map'),
              mapOptions),
              marker = new google.maps.Marker({
                  map: map,
                  position: map.getCenter()
              });
			
               $('#fancybutton_map').click(function () {
					  $.fancybox(map.getDiv(),

					  {
						  width: 600,
						  height: 400,
						  autoSize: false,
						  afterShow: function (a, z) {
							  google.maps.event.trigger(map, 'resize');
							  map.setCenter(this.content.data('center'));
						  },

						  beforeLoad: function (a) {
							  this.content.data({
								  parent: this.content.parent(),
								  center: map.getCenter()
							  })
						  }
					  });

			});

      }

      google.maps.event.addDomListener(window, 'load', initialize);
	
	$("#slider-ui1").slider({
		range: true,
		min: 150,
		max: 20000000,
		values: [150, 20000000],
		slide: function(event, ui){
			$("#filter-value_min").val("€ " + ui.values[0].toLocaleString());
			$("#filter-value_max").val("€ " + ui.values[1].toLocaleString());
		}
	});
	$("#filter-value_min").val("€ " + $("#slider-ui1").slider("values", 0).toLocaleString());
	$("#filter-value_max").val("€ " + $("#slider-ui1").slider("values", 1).toLocaleString());
	
	$("#slider-ui2").slider({
		range: true,
		min: 1500,
		max: 9000,
		values: [1500, 9000],
		slide: function(event, ui){
			$("#filter-value_min2").val(ui.values[0].toLocaleString() + " Sq. Ft.");
			$("#filter-value_max2").val(ui.values[1].toLocaleString() + " Sq. Ft.");
		}
	});
	$("#filter-value_min2").val($("#slider-ui2").slider("values", 0).toLocaleString() + " Sq. Ft.");
	$("#filter-value_max2").val($("#slider-ui2").slider("values", 1).toLocaleString() + " Sq. Ft.");
	
	$("#slider-ui3").slider({
		range: true,
		min: 4,
		max: 12,
		values: [4, 12],
		slide: function(event, ui){
			$("#filter-value_min3").val(ui.values[0] + " rooms");
			$("#filter-value_max3").val(ui.values[1] + " rooms");
		}
	});
	$("#filter-value_min3").val($("#slider-ui3").slider("values", 0) + " rooms");
	$("#filter-value_max3").val($("#slider-ui3").slider("values", 1) + " rooms");
	
	 //$( "#selectable1" ).selectable();
	 //$( "#selectable2" ).selectable();  
      //$(".chosen-select-width").chosen();
	  $(".chosen-select-width").chosenImage({
			disable_search_threshold: 10
		});
	function heightDetermination(select){
		var highColumn = 0;
		$(select).each(function(){
			var currentHeight = $(this).height();
			if(currentHeight > highColumn){
				highColumn = currentHeight;
			}
		});
		$(select).height(highColumn);
	}
	heightDetermination(".card_product-similar_products-description")
});
