// console.log("연결 확인");
window.addEventListener('resize', convert);
var section3 = document.querySelector("#section3");
var section4 = document.querySelector("#section4");
var section5 = document.querySelector("#section5");
var section6 = document.querySelector("#section6");

var toretaFixHeight = section3.offsetTop;
var section4Height = section4.offsetTop;
var section5Height = section5.offsetTop;
var section6Height = section6.offsetTop;

window.onload = function () {
    function onScrollW(e) {
        function toretaFix() {
            if ($(window).scrollTop() >= toretaFixHeight) {
                $('.sweetStk').addClass("stickerAni")
                $('.melt').addClass("ani");
                $('.ToretaBottleFloat').removeClass("blind");
            }
            if ($(window).scrollTop() >= toretaFixHeight - 10) {
                // console.log(toretaFixHeight);
                $('.ToretaBottleFloat').addClass("fix");
                $('.ToretaBottleFloat').removeClass("blind");
            } if ($(window).scrollTop() < toretaFixHeight) {
                $('.ToretaBottleFloat').removeClass("fix");
                $('.ToretaBottleFloat').removeClass("blind");
            } if ($(window).scrollTop() > section4Height - 400) {
                $('.moisture').addClass("stickerAni");
                $('.ToretaBottleFloat').removeClass("blind");
            } if ($(window).scrollTop() > section5Height - 800) {
                $('.collStr').addClass("stickerAni");
                $('.ToretaBottleFloat').removeClass("blind");
            } if ($(window).scrollTop() > section6Height - 700) {
                $('.zero').addClass("stickerAni");
                $('.ToretaBottleFloat').removeClass("blind");
            } if ($(window).scrollTop() > section6Height - 750) {
                $('.ToretaBottleFloat').addClass("blind");
            }
        }
        toretaFix();
    }
    function addEvent() {
        window.addEventListener('mousewheel', onScrollW);
    }
    function init() {
        addEvent();
    }
    init();
}
