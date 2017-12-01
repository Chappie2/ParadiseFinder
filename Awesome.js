var latitude = 23.1135925;
var longitude = -82.36659559999998;
$(() => {
    var ac = new google.maps.places.Autocomplete(document.getElementById('Banana'));
    console.log(ac);
    google.maps.event.addListener(ac, 'place_changed', function(){
        var place = ac.getPlace();
         latitude = place.geometry.location.lat();
         longitude = place.geometry.location.lng();
        console.log(place.formatted_address);
        console.log(place.url);
        console.log(place.geometry.location);
        console.log(latitude);
        console.log(longitude);
    });
    // not working needs to show the map upon click (See class=Gmap in HTML)
    $("#buttonSearch").on("click", () =>{
        $(".Gmap").load();
    })
    // Not Working
    // $("#buttonSearch").on("click", () =>{
    //     $(".Gmap").fadeToggle();
    // }) 
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
