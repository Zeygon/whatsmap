//Animations with jQuery
var $searchOverlay = $('#search');
var $searchTrigger = $('#fab');
var $search = $('#input');
var $fabi = $('#fab--i');
var $input = $('#input');

var search_points = L.layerGroup();

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

$input.keypress(function (e) {
    //enter key
    if (e.which == 13) {
        searchPoints($input.val());
    }
});

function searchPoints(searchString) {
    var searchtags = searchString.split(" ");
    var allPoints = $.getJSON('marker.json', function (data) {
        return data;
    });
    for (var i = 0; i < allPoints.length; i++) {
        if (){
            var marker_content = '<h4 class="center" style="margin:0;">' + data.marker[i].name + '</h4><br><b>' + data.marker[i].opening + '</b><br>' + data.marker[i].description + "<br><p>";
            for (var tag_count = 0; tag_count < data.marker[i].tags.length; tag_count++) {
                marker_content += '<span class="uppercase white-text badge ' + get_color(data.marker[i].tags[tag_count]) + '">';
                marker_content += data.marker[i].tags[tag_count] + "</span>";
            }
            marker_content += '</p><i class="material-icons tiny" style="vertical-align: middle;">phone</i>' + data.marker[i].phone + '<br><i class="material-icons tiny"  style="vertical-align: middle;">public</i>' + data.marker[i].url + '<br><i class="material-icons tiny"  style="vertical-align: middle;">mail</i>' + data.marker[i].email + '';
            var point = L.marker(data.marker[i].coordinates, { icon: blackIcon }).bindPopup(marker_content);
            search_points.addLayer(point);
        }
    }
};