$(document).ready(function(){
	$('.slick-slider').slick({
		dots: true
	});
});

function initMap() {
	        var uluru =  {lat: 23.0228171, lng: 72.5751378};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 13,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map,
	          icon: 'img/marker.png'
	        });
	        var infoWindow = new google.maps.InfoWindow({
	          content: 'HELLO!'
	        });
	        infoWindow.open(map, marker);
	      }

$(document).ready(function(){
    $(".qqq").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}); 	      