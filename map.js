function initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: {lat: 6.524, lng: 3.379}
        });
        let geocoder = new google.maps.Geocoder();

        document.getElementById('search').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('search-input').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

    function autocompleteSearch() {
      let input = document.getElementById('search-input');
      let autocompleteValue = new google.maps.places.Autocomplete(input);

    }

    
