var map = L.map('map').setView([49.003008, 12.098255], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.003008, 12.098255]).addTo(map)
    .bindPopup('<b>Your</b> Location')
    .openPopup();

$.getJSON('http://gonnago.connecta-regensburg.org/marker.json', function (data) {
    var marker = JSON.parse(data);
    for (i in marker.test) {
        console.log(i.name);
    }
});


//Animations with jQuery
var $searchOverlay = $('#search');
var $searchTrigger = $('#fab');
var $search = $('#input');
var $fabi = $('#fab--i');

var b = false;
$searchTrigger.click(function (e) {
    if (b) {
        $searchOverlay.fadeOut(500);
        setTimeout(function () { }, 500);
        $fabi.text("search");

        b = false;
    } else {

        $searchOverlay.fadeIn(500);
        setTimeout(function () {
            $search.focus();
        }, 500);
        $fabi.text("arrow_back");

        b = true;
    }

});



var data = [];