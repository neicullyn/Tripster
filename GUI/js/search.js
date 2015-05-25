      var directionDisplay = new google.maps.DirectionsRenderer(
        {draggable: true
        });
      var directionService = new google.maps.DirectionsService();
      var mycenter = new google.maps.LatLng( 41.2324, -98.4160);
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
          zoom: 4,
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
        document.getElementById('back_button').style.visibility = 'hidden';
      }

      var returned_data;
      var cluster_map = {};
      var cluster_Circle;
      var cluster;
      var clustering_array = [];
      var business_info = {};

      function clear_clustering(clustering_array){

        for (var i = 0; i < clustering_array.length; i++)
        {
          clustering_array[i].setMap(null);
        }
      };

      function create_selection_buttons (value) {
        var b = document.createElement('button');
        b.style.width = "20px";
        b.style.height = "10px";
        b.value = value;
        return b;
      }

      var list = document.getElementById('buttons');

      function draw_clustering(cluster_map, business_info){
        clear_clustering(clustering_array);
        go_back(markers_array);

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
              var r = this.getRadius()
              var n_zoom;
              if (r < 3000)
              {
                n_zoom = 12;
              }
              else if(r < 6000)
              {
                n_zoom = 11;
              }
              else if (r < 10000)
              {
                n_zoom = 10;
              }
              else if (r < 20000)
              {
                n_zoom = 9;
              }

              map.setZoom(n_zoom);

              var current_center = this.getCenter();
              draw_markers(business_info[current_center]);
              document.getElementById('back_button').style.visibility = 'visible';
            });
        }

      }

      function open_yelp_window(op){
        window.open(op.name,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes, width=800, height=600");
      }

      var via_points_list;

      function add_to_route(address){
        var via = {}
        var values = address.name.split(",");

        console.log(value[0]);

        locations = new google.maps.LatLng(address.latitude, address.longtitude);
        if (typeof(via_points_list) == 'undefined')
        {
          via_points_list = {location: locations};
        }
        else
        {
          via_points_list.push({location: locations});
        }
        console.log(via_points_list);
      }

      var temp_center;

      $(document).on('submit', function(e) {
          $.ajax({
            url: $('#myForm').attr('action'),
            type: $('#myForm').attr('method'),
            data: $('#myForm').serialize()+
                  append_string,
            error: function(){
                window.alert("error");
            },

            success: function(return_data){
              if (typeof(append_string) == "undefined")
              {
                alert("Please select your preference")
              }
              else
              {
                returned_data = return_data;
                console.log($('#myForm').serialize()+
                    append_string);

                obj = JSON.parse(returned_data);

                for (var i = 0; i < 1; i++)
                {
                  for (var j = 0; j < obj[i].length; j++)
                  {
                    cluster_map[ i * obj[i].length + j] = {
                      center: new google.maps.LatLng(obj[i][j].center[0], obj[i][j].center[1]),
                      cluster_radius: obj[i][j].radius
                    }
                    business_info[new google.maps.LatLng(obj[i][j].center[0], obj[i][j].center[1])] = obj[i][j].businesses;
                  }
                }
                console.log(business_info);
                console.log(cluster_map);
                map.setZoom(8);

                temp_center = cluster_map[4].center;
                map.setCenter(temp_center);
                draw_clustering(cluster_map, business_info);
              }
            }
          });
          e.preventDefault();
      });

      var markers_array = [];
      var infowindow_array = [];

      function go_back(markers_array){
        for (var i = 0; i < markers_array.length; i++)
        {
          markers_array[i].setMap(null);
          infowindow_array[i] = null;
        }
      }

      function draw_markers(business){
        go_back(markers_array);
        console.log(business);

        var icon_active = 'icon/active.png';
        var icon_hotel = 'icon/hotel.png';
        var icon_restaurant = 'icon/fork.png';
        var icon_night = 'icon/night.png';
        var icon_shopping = 'icon/shopping.png';
        var icon_art = 'icon/paint-brush.png';

        for (var i = 0; i < business.length; i++)
        {

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(business[i].latitude, business[i].longitude),
            map: map,
            title: 'hi'
          });

          // var b = create_selection_buttons("s");
          // var li = document.createElement("li");
          // li.appendChild(b);
          // list.appendChild(li);

          if (business[i].all.location.address.length == 1)
          {
            var contentString = '<div id="content">'+'<div id="siteNotice">'+
              '</div>'+'<div id="bodyContent">'+'<p>' + business[i].name+
              '</p><p> <img src=' + business[i].rating_img_url + ' alt="some_text">' + ' ' +
              business[i].all.review_count + ' reviews' +
              '</p><p> Phone: '+ business[i].all.display_phone +
              '</p><p>'+ business[i].all.location.address[0] + '<br>'
              + business[i].all.location.city + '<br>'
              + business[i].all.location.state_code + ' ' + business[i].all.location.postal_code +
              '</p>'
              + '<input type="button" value="Open in Yelp" name=' + [business[i].latitude, business[i].longitude] + ' onclick="add_to_route(this)">'
              + '<input type="button" value="Add to Route" name=' + business[i] + 'onclick="add_to_route(this)"></div></div>';
          }
          else if (business[i].all.location.address.length == 2)
          {
            var contentString = '<div id="content">' + '<div id="siteNotice">' +
              '</div>' + '<div id="bodyContent">'+'<p>' + business[i].name +
              '</p><p> <img src=' + business[i].rating_img_url + ' alt="some_text">' + ' ' +
              business[i].all.review_count + ' reviews' +
              '</p><p> Phone: '+ business[i].all.display_phone +
              '</p><p>' + business[i].all.location.address[0] + ', '
              + business[i].all.location.address[1] + '<br>'
              + business[i].all.location.city + '<br>'
              + business[i].all.location.state_code + ' ' + business[i].all.location.postal_code +
              '</p>'
              + '<input type="button" value="Open in Yelp" name=' + [business[i].latitude, business[i].longitude] + ' onclick="add_to_route(this)">'
              + '<input type="button" value="Add to Route" name=' + business[i] + 'onclick="add_to_route(this)"></div></div>';
          }

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          infowindow_array.push(infowindow);

          markers_array.push(marker);

          google.maps.event.addListener(marker, 'click', (function(infowindow, marker, i) {
            return function(){
              infowindow.open(map, marker);
            }
          })(infowindow, marker, i));
        }
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




      // function click_enter(){
      //   document.getElementById('end_var').addEventListener("keydown",function(event){
      //       if (event.keyCode === 13) {
      //           event.preventDefault();
      //           var start = document.getElementById('start_var').value;
      //           var end = document.getElementById('end_var').value;
      //           calcRoute(start, end);
      //           draw_clustering();
      //       }
      //   });
      // };

      // window.addEventListener("load", click_enter);

      google.maps.event.addDomListener(window, 'load', initialize);
