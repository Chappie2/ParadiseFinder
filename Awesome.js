$(() => {
    $(document).ready(function($){
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(23.1135925, -82.36659559999998),
            new google.maps.LatLng(23.0635925, -82.1259559999998)
        )
        var options = {
            bounds: defaultBounds
        };
        var latlng;
        var input = document.getElementById('Banana');
        var ac = new google.maps.places.Autocomplete(input);
        console.log(ac);
        google.maps.event.addListener(ac, 'place_changed', function(){
            var place = ac.getPlace();
             latitude = place.geometry.location.lat();
             longitude = place.geometry.location.lng();
            var latlng = place.geometry.location
            console.log(place.formatted_address);
            console.log(place.url);
            console.log(latlng);
            console.log(latitude);
            console.log(longitude);

           $('#buttonSearch').on('click', function(e){
           console.log('I am clicked');
           addCoord(latlng);
         })})
         google.maps.event.addDomListener(window,'load')
        });
        
            var styledMapType = new google.maps.StyledMapType(
                    [
                      {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
                      {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
                      {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
                      {
                        featureType: 'administrative',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#c9b2a6'}]
                      },
                      {
                        featureType: 'administrative.land_parcel',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#dcd2be'}]
                      },
                      {
                        featureType: 'administrative.land_parcel',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#ae9e90'}]
                      },
                      {
                        featureType: 'landscape.natural',
                        elementType: 'geometry',
                        stylers: [{color: '#dfd2ae'}]
                      },
                      {
                        featureType: 'poi',
                        elementType: 'geometry',
                        stylers: [{color: '#dfd2ae'}]
                      },
                      {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#93817c'}]
                      },
                      {
                        featureType: 'poi.park',
                        elementType: 'geometry.fill',
                        stylers: [{color: '#a5b076'}]
                      },
                      {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#447530'}]
                      },
                      {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f1e6'}]
                      },
                      {
                        featureType: 'road.arterial',
                        elementType: 'geometry',
                        stylers: [{color: '#fdfcf8'}]
                      },
                      {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{color: '#f8c967'}]
                      },
                      {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#e9bc62'}]
                      },
                      {
                        featureType: 'road.highway.controlled_access',
                        elementType: 'geometry',
                        stylers: [{color: '#e98d58'}]
                      },
                      {
                        featureType: 'road.highway.controlled_access',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#db8555'}]
                      },
                      {
                        featureType: 'road.local',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#806b63'}]
                      },
                      {
                        featureType: 'transit.line',
                        elementType: 'geometry',
                        stylers: [{color: '#dfd2ae'}]
                      },
                      {
                        featureType: 'transit.line',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#8f7d77'}]
                      },
                      {
                        featureType: 'transit.line',
                        elementType: 'labels.text.stroke',
                        stylers: [{color: '#ebe3cd'}]
                      },
                      {
                        featureType: 'transit.station',
                        elementType: 'geometry',
                        stylers: [{color: '#dfd2ae'}]
                      },
                      {
                        featureType: 'water',
                        elementType: 'geometry.fill',
                        stylers: [{color: '#2ee0bd'}]
                      },
                      {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{color: '#92998d'}]
                      }
                    ],
                    {name: 'Styled Map'});
                function addCoord(latlng){
                // Create a map object, and include the MapTypeId to add
                // to the map type control.
                var map = new google.maps.Map(document.getElementById('map'), {
                  center: latlng,
                  zoom: 9,
                  mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                            'styled_map']
                  }
                });
                // Add Marker
                var marker = new google.maps.Marker({
                  position: latlng,
                  map: map,
                  icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                })
                //Associate the styled map with the MapTypeId and set it to display.
                map.mapTypes.set('styled_map', styledMapType);
                map.setMapTypeId('styled_map');
              }

              addCoord(latlng)
              console.log(latitude,longitude)    
           
    // not working needs to show the map upon click (See class=Gmap in HTML)
    // $("#buttonSearch").on("click", () =>{
    //     $(".Gmap").load();
    // })
    // Not Working
    $("#buttonSearch").on("click", () =>{
        $(".Gmap").slideDown();
    })  
})
//how to click on and when click again than object will hide?
// modals

$(() => {
    $('#ExpandButton1').click(function(){
    $('#ExpandText1').toggle('slow');
    });  
    $('#ExpandButton2').click(function(){
    $('#ExpandText2').toggle('slow');
    });  
    $('#ExpandButton3').click(function(){
    $('#ExpandText3').toggle('slow');
    }); 
})