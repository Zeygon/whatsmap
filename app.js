var map = L.map('map').setView([49.003008, 12.098255], 13);
var all_points = L.layerGroup();

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON('marker.json', function (data) {
    for (var i = 0; i < data.marker.length; i++) {
        var marker_content = '<h4 class="center" style="margin:0;">' + data.marker[i].name + '</h4><br><b>' + data.marker[i].opening + '</b><br>' + data.marker[i].description + "<br><p>";
        for (var tag_count = 0; tag_count < data.marker[i].tags.length; tag_count++) {
            marker_content += '<span class="uppercase white-text badge ' + get_color(data.marker[i].tags[tag_count]) + '">';
            marker_content += data.marker[i].tags[tag_count] + "</span>";
        }
        marker_content += '</p><i class="material-icons tiny" style="vertical-align: middle;">phone</i>' + data.marker[i].phone + '<br><i class="material-icons tiny"  style="vertical-align: middle;">public</i>' + data.marker[i].url + '<br><i class="material-icons tiny"  style="vertical-align: middle;">mail</i>' + data.marker[i].email + '';
        var point = L.marker(data.marker[i].coordinates, { icon: blackIcon }).bindPopup(marker_content);
        all_points.addLayer(point);
    }

    all_points.addTo(map);
});

function get_color(tag) {
    switch (tag) {
        case '#escalation':
            return 'blue';
        case '#party':
            return 'red';
        case '#music':
            return 'yellow';
        case '#action':
            return 'green';
        case '#sport':
            return 'grey';
        case '#adventure':
            return 'black';
        case '#nature':
            return 'pink';
        case '#kids':
            return 'orange';
        case '#education':
            return 'purple';
        case '#social':
            return 'navy';
        case '#talk':
            return 'aqua';
        default:
            return 'black';
    }
}




var rangeSlider = function() {
    var slider = $('#range--div'),
        range = $('#range'),
        value = $('#range--value');

    slider.each(function() {

        value.each(function() {
            var value = $(this).prev().attr('value');
            if (value === "23") {
                $(this).html("HEUTE");

            } else if (value === "24") {
                $(this).html("MORGEN");

            } else {

                $(this).html(value + ". April");
            }
        });

        range.on('input', function() {
            if (this.value === "23") {
                $(this).next(value).html("HEUTE");

            } else if (this.value === "24") {
                $(this).next(value).html("MORGEN");

            } else {

                $(this).next(value).html(this.value + ". April");
            }

        });
    });
};

rangeSlider();
