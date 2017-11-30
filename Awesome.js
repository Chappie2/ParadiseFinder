$(() => {
    var ac = new google.maps.places.Autocomplete(document.getElementById('Banana'));
    console.log(ac);
    google.maps.event.addListener(ac, 'place_changed', function(){
        var place = ac.getPlace();
        var latitude = place.geometry.location.lat;
        var longitude = place.geometry.location.lng;
        var googleUrl = place.url;
        var searchAdress = place.formatted_address;
        console.log(place.formatted_address);
        console.log(place.url);
        console.log(place.geometry.location);
        console.log(latitude);
        console.log(longitude);
    });
    //&callback=initMap
    /*
    $("#modal1").ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });
    // dropdown
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
    // datepicker
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    }); 
    $("#submit").on("click", () => {
       alert()
    })  */ 
    $('#ExpandButton1').click(function(){
        $('#ExpandText1').toggle();
    });  
    $('#ExpandButton2').click(function(){
        $('#ExpandText2').toggle();
    });  
    $('#ExpandButton3').click(function(){
        $('#ExpandText3').toggle();
    });  
})
//how to click on and when click again than object will hide?
// modals
