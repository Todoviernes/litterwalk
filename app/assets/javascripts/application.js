// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .



function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: (gon.all)[0]
  });


    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for( i = 0; i < (gon.all).length; i++ ) {
        var position = new google.maps.LatLng(((gon.all)[i]['lat']), ((gon.all)[i]['lng']));
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: (gon.all)[i][0]
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent((gon.all)[i]['typeOfCan']);
                infoWindow.open(map, marker);
            }
        })(marker, i));

    };

        infoWindow = new google.maps.InfoWindow;

 
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            $('#can_longitude').val(position.coords.longitude);
            $('#can_latitude').val(position.coords.latitude);
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {

          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
}
