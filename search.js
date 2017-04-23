//Animations with jQuery
var $searchOverlay = $('#search');
var $searchReset = $('#btn-resetSearch');
var $searchTrigger = $('#fab');
var $search = $('#input');
var $fabi = $('#fab--i');
var $input = $('#input');

var search_points = L.layerGroup();
var allPoints;

var b = false;
$searchTrigger.click(function (e) {
    if (b) {
        $searchOverlay.fadeOut(500);
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

$searchReset.click(function (e) {
    resetMap();
    $searchOverlay.fadeOut(500);
    $fabi.text("search");
    b = false;
    map.setView([49.003008, 12.098255], 13);
});

function resetMap() {
    map.removeLayer(search_points);
    all_points.addTo(map);
}

$input.keypress(function (e) {
    //enter key
    if (e.which == 13) {
        searchPoints($input.val());
    }
});

$.getJSON('marker.json', function (data) {
    allPoints = data;
});

function searchPoints(searchString) {
    search_points = L.layerGroup();
    var searchCount = 0;
    resetMap();
    for (var i = 0; i < allPoints.marker.length; i++) {
        for (var tagCount = 0; tagCount < allPoints.marker[i].tags.length; tagCount++) {
            if (searchString.includes(allPoints.marker[i].tags[tagCount])) {
                var marker_content = '<h4 class="center" style="margin:0;">' + allPoints.marker[i].name + '</h4><br><b>' + allPoints.marker[i].opening + '</b><br>' + allPoints.marker[i].description + "<br><p>";
                for (var tag_count = 0; tag_count < allPoints.marker[i].tags.length; tag_count++) {
                    marker_content += '<span class="uppercase white-text badge ' + get_color(allPoints.marker[i].tags[tag_count]) + '">';
                    marker_content += allPoints.marker[i].tags[tag_count] + "</span>";
                }
                marker_content += '</p><hr style="margin-top:40px;visibility:hidden;"><i class="material-icons tiny" style="vertical-align: middle;">phone</i> ' + data.marker[i].phone + '<br><i class="material-icons tiny"  style="vertical-align: middle;">public</i> ' + data.marker[i].url + '<br><i class="material-icons tiny"  style="vertical-align: middle;">mail</i> ' + data.marker[i].email;
                var point = L.marker(allPoints.marker[i].coordinates, { icon: blackIcon }).bindPopup(marker_content);
                search_points.addLayer(point);
                searchCount++;
                break;
            }
        }
    }

    if (searchString.includes('aachen')) {
        map.setView([50.776, 6.082], 13);
        if (searchCount == 0) {
            $searchOverlay.fadeOut(500);
            $fabi.text("search");
            b = false;
            return;
        }
    }

    map.removeLayer(all_points);
    $searchOverlay.fadeOut(500);
    $fabi.text("search");
    b = false;
    search_points.addTo(map);
};
