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