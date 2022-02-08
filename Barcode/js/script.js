console.log('연결 확인');

// 메인 바코드 애니메이션
let barcodeSpans = $("#barcode").children();

function barcodeAnimation()
{
  barcodeSpans.each(function(i)
  {
    let span = $(this);
    setTimeout(function()
    {
      // highlight each individual span with 200ms between each
      span.toggleClass('highlighted');
      // span.fadeToggle("slow");
    }, 200*i);});
  
  barcodeSpans.each(function(i)
  {
    let span = $(this);
    setTimeout(function()
    {
      // remove the highlighting from each span with 20ms between each
      span.toggleClass('highlighted');
      
    }, 20*i);});
}

$(document).ready(function()
{
  setInterval(barcodeAnimation, 2000);
});

// 헤더 스크롤 이벤트
$(function () {

  "use strict";

  var lastScrollTop = 0;
  $(window).on("scroll", function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      console.log("downscroll");
      $("header").stop().slideUp();
    } else {
      console.log("upscroll");
      $("header").stop().slideDown();
    }
    lastScrollTop = st;
  });
});

// 섹션 스크롤 이벤트
var transitionX = 0;
var sectionTwo = document.querySelector('#sectionTwo');
var sectionTwoTop = sectionTwo.offsetTop;
var sectionThree = document.querySelector('#sectionThree');
var sectionThreeTop = sectionThree.offsetTop;
var sectionFour = document.querySelector('#sectionFour');
var sectionFourTop = sectionFour.offsetTop;
var projectContents = document.querySelector('.projectContents');
var projectContentsTop = projectContents.offsetTop;

var sectionFive = document.querySelector('#sectionFive');
var sectionFiveTop = sectionFive.offsetTop;
var sectionSix = document.querySelector('#sectionSix');
var sectionSixTop = sectionSix.offsetTop;
var sectionEight = document.querySelector('#sectionEight');
var sectionEightTop = sectionEight.offsetTop;
var sectionNine = document.querySelector('#sectionNine');
var sectionNineTop = sectionNine.offsetTop;
var sectionEleven = document.querySelector('#sectionEleven');
var sectionElevenTop = sectionEleven.offsetTop;
var sectionTwelve = document.querySelector('#sectionTwelve');
var sectionTwelveTop = sectionTwelve.offsetTop;
var sectionThirteen = document.querySelector('#sectionThirteen');
var sectionThirteenTop = sectionThirteen.offsetTop;
// console.log(sectionSixTop, '섹션4');

function scrollTextMove(e) {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > sectionTwoTop - 200) {
    if (e.wheelDelta < 0) {
      // 마우스 아래 = 이동
      console.log("마우스아래");
      transitionX --;
      $('#sectionTwo .textBox:nth-child(1) h2').css({
        'transform': "translateX(" + transitionX + "%)"
      });
      $('#sectionTwo .textBox:nth-child(2) h2').css({
        'transform': "translateX(" + transitionX * -1 + "%)"
      });
      $('#sectionTwo .textBox:nth-child(3) h2').css({
        'transform': "translateX(" + transitionX + "%)"
      });
    } else if (e.wheelDelta > 0) {
      // 미우스 위 = 원래대로
      console.log("마우스위");
      transitionX ++;
      $('#sectionTwo .textBox:nth-child(1) h2').css({
        'transform': "translateX(" + transitionX + "%)"
      });
      $('#sectionTwo .textBox:nth-child(2) h2').css({
        'transform': "translateX(" + transitionX * -1 + "%)"
      });
      $('#sectionTwo .textBox:nth-child(3) h2').css({
        'transform': "translateX(" + transitionX + "%)"
      });
    }
  }
};

function typingAni() {
  if ($(window).scrollTop() > sectionThreeTop - 200) {
    $('#cursor-bg').addClass('on');
  window.addEventListener("mousewheel", scrollCursor);
    $('#sectionThree .textBox .title h2').addClass('on');
  } else {
    $('#cursor-bg').removeClass('on');
  }
  if($(window).scrollTop() >= projectContentsTop) {
    $('#cursor-bg').removeClass('on');
    window.addEventListener("mousewheel", cursor);
  }
}
console.log(projectContentsTop);

var menu = document.querySelector('#work');

$('.projectIndexSection .projectIndex .contents ul li').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})
$('.logo').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})

$('#about').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})

function menuActive(e) {
  e.preventDefault();
  $('.projectIndexSection').toggleClass('on');
  $('#contactSection').removeClass('on'); 
}
menu.addEventListener('click', menuActive);

var contact = document.querySelector('#contact');

function contactActive(e) {
  e.preventDefault();
  $('#contactSection').toggleClass('on');
}
contact.addEventListener('click', contactActive);

var textTransitionX = 0;
var sectionTransitionY = 0;
var transitionAvailable = 0;

function sectionFix(e) {
  // 마우스를 아래로 내리면
  if (e.wheelDelta < 0) {
    // transition 애니메이션 추가
    if ($(window).scrollTop() >= sectionFiveTop) {
      $('#sectionFive').addClass('on');
      $('#sectionFive .imageBox').addClass('on');
      $('#sectionFive .informationContainer .useTool li').addClass('on');
      $('#sectionFive .textBox').addClass('on');
      $('#sectionFive .textBox h3').addClass('on');
      $('#sectionFive .code').addClass('on');
      $('#sectionFive .informationContainer').addClass('on');
    }
    if ($(window).scrollTop() >= sectionEightTop) {
      $('#sectionEight').addClass('on');
      $('#sectionEight .imageBox').addClass('on');
      $('#sectionEight .informationContainer .useTool li').addClass('on');
      $('#sectionEight .textBox').addClass('on');
      $('#sectionEight .textBox h3').addClass('on');
      $('#sectionEight .code').addClass('on');
      $('#sectionEight .informationContainer').addClass('on');
    }
    if ($(window).scrollTop() >= sectionNineTop) {
      $('#sectionNine .imageBox').addClass('on');
      $('#sectionNine .textBox h3').addClass('on');
      $('#sectionNine .informationContainer').addClass('on');
    }
    if ($(window).scrollTop() >= sectionElevenTop) {
      $('#sectionEleven').addClass('on');
      $('#sectionEleven .imageBox').addClass('on');
      $('#sectionEleven .informationContainer .useTool li').addClass('on');
      $('#sectionEleven .textBox').addClass('on');
      $('#sectionEleven .textBox h3').addClass('on');
      $('#sectionEleven .code').addClass('on');
      $('#sectionEleven .informationContainer').addClass('on');
    }
    if ($(window).scrollTop() >= sectionTwelveTop) {
      $('#sectionTwelve .imageBox').addClass('on');
      $('#sectionTwelve .textBox h3').addClass('on');
      $('#sectionTwelve .informationContainer').addClass('on');
    }
    if ($(window).scrollTop() >= sectionThirteenTop) {
      $('#sectionThirteen').addClass('on');
      $('#sectionThirteen .imageBox').addClass('on');
      $('#sectionThirteen .informationContainer .useTool li').addClass('on');
      $('#sectionThirteen .textBox').addClass('on');
      $('#sectionThirteen .textBox h3').addClass('on');
      $('#sectionThirteen .code').addClass('on');
      $('#sectionThirteen .informationContainer').addClass('on');
    }
    // 다음 섹션으로 넘어갈 수 있도록
    // transitionAvailable를 true로 변경
    transitionAvailable = 1;
  }
  // 마우스를 위로 올리면
  if (e.wheelDelta > 0) {
    // transition 애니메이션 제거
    if ($(window).scrollTop() >= sectionFiveTop) {
      $('#sectionFive').removeClass('on');
      $('#sectionFive .imageBox').removeClass('on');
      $('#sectionFive .informationContainer .useTool li').removeClass('on');
      $('#sectionFive .textBox').removeClass('on');
      $('#sectionFive .textBox h3').removeClass('on');
      $('#sectionFive .code').removeClass('on');
      $('#sectionFive .informationContainer').removeClass('on');
    }
    if ($(window).scrollTop() >= sectionEightTop) {
      $('#sectionEight').removeClass('on');
      $('#sectionEight .imageBox').removeClass('on');
      $('#sectionEight .informationContainer .useTool li').removeClass('on');
      $('#sectionEight .textBox').removeClass('on');
      $('#sectionEight .textBox h3').removeClass('on');
      $('#sectionEight .code').removeClass('on');
      $('#sectionEight .informationContainer').removeClass('on');
    }
    if ($(window).scrollTop() >= sectionNineTop) {
      $('#sectionNine .imageBox').removeClass('on');
      $('#sectionNine .textBox h3').removeClass('on');
      $('#sectionNine .informationContainer').removeClass('on');
    }
    if ($(window).scrollTop() >= sectionElevenTop) {
      $('#sectionEleven').removeClass('on');
      $('#sectionEleven .imageBox').removeClass('on');
      $('#sectionEleven .informationContainer .useTool li').removeClass('on');
      $('#sectionEleven .textBox').removeClass('on');
      $('#sectionEleven .textBox h3').removeClass('on');
      $('#sectionEleven .code').removeClass('on');
      $('#sectionEleven .informationContainer').removeClass('on');
    }
    if ($(window).scrollTop() >= sectionTwelveTop) {
      $('#sectionTwelve .imageBox').removeClass('on');
      $('#sectionTwelve .textBox h3').removeClass('on');
      $('#sectionTwelve .informationContainer').removeClass('on');
    }
    if ($(window).scrollTop() >= sectionThirteenTop) {
      $('#sectionThirteen').removeClass('on');
      $('#sectionThirteen .imageBox').removeClass('on');
      $('#sectionThirteen .informationContainer .useTool li').removeClass('on');
      $('#sectionThirteen .textBox').removeClass('on');
      $('#sectionThirteen .textBox h3').removeClass('on');
      $('#sectionThirteen .code').removeClass('on');
      $('#sectionThirteen .informationContainer').removeClass('on');
    }
    // 다음 섹션으로 못 넘어가도록
    // transitionAvailable를 false로 변경
    transitionAvailable = 0;
  }
  //////////////////////////
  if ($(window).scrollTop() >= sectionSixTop) {
    if (e.wheelDelta < 0) { // 마우스 아래
      $('#sectionSix .imageBox').addClass('on');
      $('#sectionSix .textBox h3').addClass('on');
      $('#sectionSix .informationContainer').addClass('on');
    }
    if (e.wheelDelta > 0) { // 마우스 위
      $('#sectionSix .imageBox').removeClass('on');
      $('#sectionSix .textBox h3').removeClass('on');
      $('#sectionSix .informationContainer').removeClass('on');
    }
  }
}

// 바코드 애니메이션
function mouseOver5() {
  $('#sectionFive .barcode').removeClass('off');
  $('#sectionFive .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionFive .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionFive .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave5() {
  $('#sectionFive .barcode').addClass('off');
  $('#sectionFive .barcode .barcodeContainer .number').addClass('off');
  $('#sectionFive .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionFive .barcode .barcodeContainer .index').addClass('off');
}
var barcode5 = document.querySelector('#sectionFive .barcode');

barcode5.addEventListener('mouseover', mouseOver5);
barcode5.addEventListener('mouseleave', mouseLeave5);

function mouseOver6() {
  $('#sectionSix .barcode').removeClass('off');
  $('#sectionSix .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionSix .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionSix .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave6() {
  $('#sectionSix .barcode').addClass('off');
  $('#sectionSix .barcode .barcodeContainer .number').addClass('off');
  $('#sectionSix .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionSix .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionSix .barcode');

barcode.addEventListener('mouseover', mouseOver6);
barcode.addEventListener('mouseleave', mouseLeave6);

function mouseOver8() {
  $('#sectionEight .barcode').removeClass('off');
  $('#sectionEight .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionEight .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionEight .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave8() {
  $('#sectionEight .barcode').addClass('off');
  $('#sectionEight .barcode .barcodeContainer .number').addClass('off');
  $('#sectionEight .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionEight .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionEight .barcode');

barcode.addEventListener('mouseover', mouseOver8);
barcode.addEventListener('mouseleave', mouseLeave8);

function mouseOver9() {
  $('#sectionNine .barcode').removeClass('off');
  $('#sectionNine .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionNine .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionNine .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave9() {
  $('#sectionNine .barcode').addClass('off');
  $('#sectionNine .barcode .barcodeContainer .number').addClass('off');
  $('#sectionNine .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionNine .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionNine .barcode');

barcode.addEventListener('mouseover', mouseOver9);
barcode.addEventListener('mouseleave', mouseLeave9);

function mouseOver11() {
  $('#sectionEleven .barcode').removeClass('off');
  $('#sectionEleven .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionEleven .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionEleven .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave11() {
  $('#sectionEleven .barcode').addClass('off');
  $('#sectionEleven .barcode .barcodeContainer .number').addClass('off');
  $('#sectionEleven .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionEleven .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionEleven .barcode');

barcode.addEventListener('mouseover', mouseOver11);
barcode.addEventListener('mouseleave', mouseLeave11);

function mouseOver12() {
  $('#sectionTwelve .barcode').removeClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave12() {
  $('#sectionTwelve .barcode').addClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .number').addClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionTwelve .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionTwelve .barcode');

barcode.addEventListener('mouseover', mouseOver12);
barcode.addEventListener('mouseleave', mouseLeave12);

function mouseOver13() {
  $('#sectionThirteen .barcode').removeClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .number').removeClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .projectNumer').removeClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .index').removeClass('off');
}

function mouseLeave13() {
  $('#sectionThirteen .barcode').addClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .number').addClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .projectNumer').addClass('off');
  $('#sectionThirteen .barcode .barcodeContainer .index').addClass('off');
}
var barcode = document.querySelector('#sectionThirteen .barcode');

barcode.addEventListener('mouseover', mouseOver13);
barcode.addEventListener('mouseleave', mouseLeave13);

window.addEventListener("mousewheel", scrollTextMove);
window.addEventListener("mousewheel", typingAni);
window.addEventListener("mousewheel", sectionFix);


// 마우스 오버
// 폰트 코드 -> 글리치 -> 해당 폰트
$('#sectionThree .ability .html h3').on('mouseover', function () {
  $('#sectionThree .ability .html h3').addClass('glitch');
  $('#sectionThree .ability .html h6').addClass('on');
  $('#sectionThree .ability .html h3').css({
    'font-family': "NewYork"
  });
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-1");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+97",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});
$('#sectionThree .ability .Photoshop h3').on('mouseover', function () {
  $('#sectionThree .ability .Photoshop h3').addClass('glitch');
  $('#sectionThree .ability .Photoshop h6').addClass('on');
  $('#sectionThree .ability .Photoshop h3').removeClass('code');
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-2");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+60",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});
$('#sectionThree .ability .css h3').on('mouseover', function () {
  $('#sectionThree .ability .css h3').addClass('glitch');
  $('#sectionThree .ability .css h6').addClass('on');
  $('#sectionThree .ability .css h3').css({
    'font-family': "NewYork"
  });
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-3");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+90",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});
$('#sectionThree .ability .Javascript h3').on('mouseover', function () {
  $('#sectionThree .ability .Javascript h3').addClass('glitch');
  $('#sectionThree .ability .Javascript h6').addClass('on');
  $('#sectionThree .ability .Javascript h3').css({
    'font-family': "NewYork"
  });
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-4");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+60",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});
$('#sectionThree .ability .Illustrator h3').on('mouseover', function () {
  $('#sectionThree .ability .Illustrator h3').addClass('glitch');
  $('#sectionThree .ability .Illustrator h6').addClass('on');
  $('#sectionThree .ability .Illustrator h3').removeClass('code');
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-5");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+90",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});
$('#sectionThree .ability .jQuery h3').on('mouseover', function () {
  $('#sectionThree .ability .jQuery h3').addClass('glitch');
  $('#sectionThree .ability .jQuery h6').addClass('on');
  $('#sectionThree .ability .jQuery h3').css({
    'font-family': "NewYork"
  });
  var game = {
      score: 0
    },
    scoreDisplay = document.getElementById("score-6");

  function updateHandler() {
    scoreDisplay.innerHTML = game.score;
  }

  var c1Section3 = new TimelineLite();

  c1Section3
    .to(game, 2, {
      score: "+50",
      roundProps: "score",
      onUpdate: updateHandler,
      ease: Expo.easeNone
    }, 0);
});

console.log(sectionThreeTop);
function scrollCursor(e) {
    var cursorBGEl = document.querySelector('#cursor-bg');

    function onMoveWindow(e) {
      var posX = e.clientX;
      var posY = e.clientY;

      gsap.killTweensOf(cursorBGEl);
      gsap.to(cursorBGEl, {
        top: posY,
        left: posX,
        duration: 0.2
      });
    }

    function addEvent() {
      // window mouse event
      window.addEventListener('mousemove', onMoveWindow);
    }

    function init() {
      addEvent();
    }
    init();
  }

function cursor (e) {
    var cursorDotEl = document.querySelector('#cursor-dot');
    var progressEl = document.querySelector('#progress');

    var btnListItemEl = document.querySelectorAll('.imageBox');

    function onMoveWindow(e){
    var posX = e.clientX;
    var posY = e.clientY;
  
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25});
}

  function onEnterBtnListItenEl(){
      console.log('enter');
      if(!cursorDotEl.classList.contains('active')){
        cursorDotEl.classList.add('active');
      }
      if(!cursorDotEl.classList.contains('active')){
        cursorDotEl.classList.add('active');
      }
  }

  function onLeaveBtnListItenEl(){
      console.log('leave');
      if(cursorDotEl.classList.contains('active')){
        cursorDotEl.classList.remove('active');
      }
      if(cursorDotEl.classList.contains('active')){
        cursorDotEl.classList.remove('active');
      }
  }

  function addEvent2(){
      // window mouse event
      window.addEventListener('mousemove', onMoveWindow);
      // mouse event
      for(var i = 0; i < btnListItemEl.length; i++){
          btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItenEl);
          btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItenEl);
      }
  }

  function init(){
      addEvent2();
  }
  init();
}
