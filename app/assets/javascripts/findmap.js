
function initMapp() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    gestureHandling: 'greedy',
    disableDefaultUI: true
  });  


  $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    var  currentlat = (data['lat']);
    var  currentlon = (data['lon']);
    var currentlocation = {
          lat: (data['lat']),
          lng: (data['lon'])
        };
    console.log(currentlocation);
    map.setCenter(currentlocation);
  });
  gon.all.forEach(function(value, index){

    var position = new google.maps.LatLng(value['lat'], value['lng']);

    var bounds = new google.maps.LatLngBounds();

    bounds.extend(position);
    var marker = new google.maps.Marker({
      position: position,
      map: map,

    });

    var typeOfCan = value['typeOfCan'];
    var html = "<span class='fa fa-"+ iconForTypeOfCan(typeOfCan) +"'><span>" + typeOfCan + '  |  <a class="btn btn-info" href="/cans/'+ value['id'] + '">See Can</a>'
    marker.addListener('click', function() {
      var infowindow = new google.maps.InfoWindow({
        content: html
      });
      infowindow.open(map, marker);
    });
  });

        // var pinColor = "FE7569";
        // var pinImage = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        // new google.maps.Size(21, 34),
        // new google.maps.Point(0,0),
        // new google.maps.Point(10, 34));
        infoWindow = new google.maps.Marker({
            map: map,
            draggable: false,
            icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5
        }
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
            infoWindow.setDraggable(false);
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
  //      var marker = new google.maps.Marker({
  //      position: map.getCenter(),
  //      icon: {
  //      path: google.maps.SymbolPath.CIRCLE,
  //      scale: 10
  //       },
  //      // draggable: true,
  //      map: map
  // });

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
}


function iconForTypeOfCan(type){
  switch(type){
    case "Trash":
      return type.toLowerCase()
    case "Pet Waste":
      return "paw"
    case "Organic":
      return "envira"
    case "E-Waste":
      return "battery-empty"
    case "Recycling":
      return "recycle"
  }
}