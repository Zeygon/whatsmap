var samplePopup = '<h4 class="center" style="margin:0;">Watfest</h4><br><b>17. April &bull; 16 - 19 Uhr</b><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><p><span class="white-text badge red">#PARTY</span><span class="white-text badge blue">#SWAG</span></p><p style="margin-top:48px;font-weight:600;">+49 203 371771 &bull; swagium.com</p>';



var map = L.map('map').setView([49.003008, 12.098255], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.003008, 12.098255]).addTo(map)
    .bindPopup(samplePopup)
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