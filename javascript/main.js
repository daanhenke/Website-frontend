var headOptions = ["websites.", "web apps.", "mobile applications.", "desktop applications."];
var headCurrent = 1;
var headElement = "#headText";
var headDelay = 2500;
var headFadeDuration = 900;

function changeHead() {
    $(headElement).fadeOut(headFadeDuration, function () {
        headCurrent++;
        if (headCurrent >= headOptions.length) headCurrent = 0;
        $(this).text(headOptions[headCurrent]);
    }).fadeIn(headFadeDuration, function () {
        setTimeout(changeHead, headDelay);
    });
}

setTimeout(changeHead, headDelay);

var pointAbout = new Waypoint({
    element: document.getElementById('basic'),
    handler: function (direction) {

    }
});