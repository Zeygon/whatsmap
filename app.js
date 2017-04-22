var map = L.map('map').setView([49.003008, 12.098255], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.003008, 12.098255]).addTo(map)
    .bindPopup('<b>Your</b> Location')
    .openPopup();



//Animations with jQuery
var $searchOverlay = $('#search');
var $searchTrigger = $('#fab');
var $search = $('#input');


$searchTrigger.click(function(e) {
    $searchOverlay.fadeIn(500);
    $search.focus();
});

$searchOverlay.find('.fa-times').click(function(e) {
    $searchOverlay.fadeOut(500);
});
