var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7127, lng: -74.0059},
          zoom: 16
        });
      }

      initMap()