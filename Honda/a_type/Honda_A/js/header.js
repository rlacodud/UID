$(".float-menu #quote").on('click', function() {
  $('.dropup-content').toggleClass("on");
  $(this).toggleClass('on');
});

var sectionTwo = document.querySelector('#section2');
var sectionTwoTop = sectionTwo.offsetTop;

window.onload = function () {
  function onScrollW(e) {
    if (e.wheelDelta < 0) {
      console.log("마우스아래");
      $('header').addClass('on');
      $('header nav .center ul li a').addClass('on');
      $('header nav .right li a').addClass('on');
      $('header nav .right li:nth-child(1) .icon').addClass('on');
      $('header nav .right li:nth-child(2) .icon').addClass('on');
      $('header nav .right li:nth-child(3) .icon').addClass('on');
    } else if (e.wheelDelta > 0) {
      console.log("마우스위");
      if ($(window).scrollTop() <= 0) {
        $('header').removeClass('on');
        $('header nav .center ul li a').removeClass('on');
        $('header nav .right li a').removeClass('on');
        $('header nav .right li:nth-child(1) .icon').removeClass('on');
        $('header nav .right li:nth-child(2) .icon').removeClass('on');
        $('header nav .right li:nth-child(3) .icon').removeClass('on');
      }
    }
  }
  function addEvent() {
      window.addEventListener('mousewheel', onScrollW);
  }
  function init() {
      addEvent();
  }
  init();
}

$(".widthOn").on('mouseover', function() {
  $(this).addClass("on");
});
$(".widthOn").on('mouseout', function() {
  $(this).removeClass("on");
});