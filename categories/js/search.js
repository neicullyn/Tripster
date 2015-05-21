      var directionDisplay = new google.maps.DirectionsRenderer(
        {draggable: true
        });
      var directionService = new google.maps.DirectionsService();
      var mycenter = new google.maps.LatLng( 41.850033, -87.6500523);
      var map;

      function initialize() {
        var styles = [
                      {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#002733"}]},
                      {"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#77c9c4"}]},
                      {"featureType":"landscape","elementType":"all","stylers":[{"color":"#FFFFF5"}]},
                      {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
                      {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
                      {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
                      {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                      {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
                      {"featureType":"water","elementType":"all","stylers":[{"color":"#77c9c4"},{"visibility":"on"}]}]

        var mapProp = {
          center: mycenter,
          zoom: 8,
          disableDefaultUI: true
        };

        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});

        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapProp);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        directionDisplay.setMap(map);
      }

      var returned_data;
      var cluster_map = {};

      function clear_clustering(clustering_array){
        for (item in clustering_array){
          item.setMap(null);
        }
      };

      function draw_clustering(cluster_map){
        clear_clustering();
        for (cluster in cluster_map) {
            var circle_Options = {
              strokeColor: '#ECB368',
              strokeOpacity: 0.0,
              strokeWeight: 0,
              fillColor: '#ECB368',
              fillOpacity: 0.35,
              map: map,
              center: cluster_map[cluster].center,
              radius: (cluster_map[cluster].cluster_radius)
            };

            // Add the circle for this city to the map.
            cluster_Circle = new google.maps.Circle(circle_Options);
            clustering_array.push(cluster_Circle);
            google.maps.event.addListener(cluster_Circle, "click", function ()
            {
              map.setCenter(this.getCenter());
              // subject to change
              var r = this.getRadius()
              map.setZoom(15);
            });
        }
      }

      $(document).on('submit', function(e) {
          $.ajax({
            url: $('#myForm').attr('action'),
            type: $('#myForm').attr('method'),
            data: $('#myForm').serialize(),
            error: function(){
              window.alert("error");
            },

            success: function(return_data){
              returned_data = return_data;
              obj = JSON.parse(returned_data);
              for (var i = 0; i < obj.length; i++)
              {
                cluster_map[i] = {
                  center: new google.maps.LatLng(obj[i].center[0], obj[i].center[1]),
                  cluster_radius: obj[i].radius
                }
              }
              console.log(cluster_map);
              draw_clustering(cluster_map);
            }
          });
          e.preventDefault();
      });

      // test city circle
      var cluster_Circle;

      var cluster;
      var clustering_array = [];


      function read_query_data(data){

      }




      function draw_markers(){

      }

      function renderDirections(result, routeToDisplay){
        var tempDisplay = new google.maps.DirectionsRenderer({
          draggable: true
        });
        tempDisplay.setMap(map);
        tempDisplay.setDirections(result);
        tempDisplay.setRouteIndex(routeToDisplay);
      }

      function calcRoute(start, end) {
        var direction = {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true
        };
        directionService.route(direction,
          function(response, status)
          {
            if (status == google.maps.DirectionsStatus.OK) {
              for (var i = 0, len = response.routes.length; i < len; i++) {
                renderDirections(response);
              }
            }
          }
        );
      };

      function click_enter(){
        document.getElementById('end_var').addEventListener("keydown",function(event){
            if (event.keyCode === 13) {
                event.preventDefault();
                var start = document.getElementById('start_var').value;
                var end = document.getElementById('end_var').value;
                calcRoute(start, end);
                draw_clustering();
            }
        });
      };
      window.addEventListener("load", click_enter);

      google.maps.event.addDomListener(window, 'load', initialize);
