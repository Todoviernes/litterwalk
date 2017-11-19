
var addCanPage = document.getElementsByClassName('.cans.new'); 



function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    gestureHandling: 'cooperative',
    center: (gon.all)[0]
  });
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
        infoWindow = new google.maps.Marker({
            map: map,
            icon: pinImage
        });

 
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            $('#can_longitude').val(position.coords.longitude);
            $('#can_latitude').val(position.coords.latitude);
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              enableHighAccuracy: true,
              timeout: 10 * 1000 // 10 seconds
            };

            infoWindow.setPosition(pos);
            infoWindow.setTitle('Your location');
            infoWindow.setDraggable(true);
            // infoWindow.open(map);
            map.setCenter(pos);

            google.maps.event.addListener(infoWindow, 'dragend', function (event) {
              var lat = this.getPosition().lat();
              var long = this.getPosition().lng();
              console.log(lat, long);
              $('#can_longitude').val(long);
              $('#can_latitude').val(lat);
            });
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
