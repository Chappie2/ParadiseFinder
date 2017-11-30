var latitude = 51.9166667;
var longitude = 4.5;
$(() => {
    var ac = new google.maps.places.Autocomplete(document.getElementById('Banana'));

    console.log(ac);
    google.maps.event.addListener(ac, 'place_changed', function(){
        var place = ac.getPlace();
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        console.log(place.formatted_address);
        console.log(place.url);
        console.log(place.geometry.location);
        console.log(latitude);
        console.log(longitude);
    });
    
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
//how to click on and when click again than object will hide?
// modals
