console.log("연결 확인");

var slide1 = document.querySelector('#sectionFour .imageSliderContainer .slide:nth-child(1) .img');
var slide2 = document.querySelector('#sectionFour .imageSliderContainer .slide:nth-child(2) .img');
var slide3 = document.querySelector('#sectionFour .imageSliderContainer .slide:nth-child(3) .img');
var slide4 = document.querySelector('#sectionFour .imageSliderContainer .slide:nth-child(4) .img');
var slide5 = document.querySelector('#sectionFour .imageSliderContainer .slide:nth-child(5) .img');
// img에 마우스 오버 시
// 해당 슬라이드의 h4 텍스트 변경
// h3의 마진값 등 다 제거

function textTransform1 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h3').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h4').css('margin-top', '0');
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h4').html('악의에 흠뻑 젖은 칼로 순수한 약자를 상처 입히지 않도록 바뀌는거야. <br><br>제발 바뀌어줘...');
}
function textDefault1 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h3').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h4').css('margin-top', 'calc(100vw * 20 / 1920)');
  $('#sectionFour .imageSliderContainer .slide:nth-child(1) .textBox .title h4').html('충격적인 학원 미스터리 개막!');
}
slide1.addEventListener('mouseover', textTransform1);
slide1.addEventListener('mouseleave', textDefault1);

function textTransform2 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h3').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h4').css('margin-top', '0');
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h4').html('너에게 부족했던 건 상상력이야. <br><br> 거짓 글로 근거 없는 모함을 당한다면 얼마나 상처 받을까? <br><br> 넌 그 아픔을 상상하지 못한거야.');
}
function textDefault2 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h3').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h4').css('margin-top', 'calc(100vw * 20 / 1920)');
  $('#sectionFour .imageSliderContainer .slide:nth-child(2) .textBox .title h4').html('진상 발각!? 마음을 떨게하는 영혼의 수업');
}
slide2.addEventListener('mouseover', textTransform2);
slide2.addEventListener('mouseleave', textDefault2);

function textTransform3 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h3').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h4').css('margin-top', '0');
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h4').html('진실을 밝혀 내일과 싸워라 맞서라고! <br><br> 발버둥치면서 붙잡아! <br><br> 살아있는 너에겐 가능한 일이야.');
}
function textDefault3 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h3').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h4').css('margin-top', 'calc(100vw * 20 / 1920)');
  $('#sectionFour .imageSliderContainer .slide:nth-child(3) .textBox .title h4').html('사건은 핵심으로―. 꼭 봐야하는 제4화');
}
slide3.addEventListener('mouseover', textTransform3);
slide3.addEventListener('mouseleave', textDefault3);

function textTransform4 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h3').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h4').css('margin-top', '0');
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h4').html('치욕도 겪지 않고 강해질 수 있을거라 생각하지 마!');
}
function textDefault4 () {
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h3').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h4').css('margin-top', 'calc(100vw * 20 / 1920)');
  $('#sectionFour .imageSliderContainer .slide:nth-child(4) .textBox .title h4').html('학생 도주!? 경찰 진입! 운명의 1시간');
}
slide4.addEventListener('mouseover', textTransform4);
slide4.addEventListener('mouseleave', textDefault4);

function textTransform5 () {
  $('#sectionFour .imageSliderContainer .slide .textBox .stroke5').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h3').css('display', 'none');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h4').css('margin-top', '0');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h4').html('모두 좋은 얼굴들을 하고 있네. <br><br> 졸업을 축하한다.');
}
function textDefault5 () {
  $('#sectionFour .imageSliderContainer .slide .textBox .stroke5').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h3').css('display', 'block');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h4').css('margin-top', 'calc(100vw * 20 / 1920)');
  $('#sectionFour .imageSliderContainer .slide:nth-child(5) .textBox .title h4').html('종막. 이 날을 위해 모든 게 있었다');
}
slide5.addEventListener('mouseover', textTransform5);
slide5.addEventListener('mouseleave', textDefault5);

////////////////

var sectionTwo = document.querySelector('#sectionTwo');
var sectionTwoTop = sectionTwo.offsetTop;

function sectionTwoScrollAni () {
  if ($(window).scrollTop() > sectionTwoTop - 200) {
    $('#sectionTwo .articleContainer .article:nth-child(1)').css('width', '100%');
    $('#sectionTwo .articleContainer .article:nth-child(1)').css('opacity', '1');
    $('#sectionTwo .articleContainer .article:nth-child(1) .textBox').css('opacity', '1');
    $('#sectionTwo .articleContainer .article:nth-child(2)').css('width', '100%');
    $('#sectionTwo .articleContainer .article:nth-child(2)').css('opacity', '1');
    $('#sectionTwo .articleContainer .article:nth-child(2) .textBox').css('opacity', '1');
    $('#sectionTwo .articleContainer .article:nth-child(3)').css('width', '100%');
    $('#sectionTwo .articleContainer .article:nth-child(3)').css('opacity', '1');
    $('#sectionTwo .articleContainer .article:nth-child(3) .textBox').css('opacity', '1');
  }

}
window.addEventListener("mousewheel", sectionTwoScrollAni);

//////////////
function chatAni () {
  $('#sectionOne .chatConatiner .chat:nth-child(1)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(1)').css('opacity', '0.8');
  $('#sectionOne .chatConatiner .chat:nth-child(2)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(2)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(3)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(3)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(4)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(4)').css('opacity', '0.8');
  $('#sectionOne .chatConatiner .chat:nth-child(5)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(5)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(6)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(6)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(7)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(7)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(8)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(8)').css('opacity', '1');
  $('#sectionOne .chatConatiner .chat:nth-child(9)').css('margin-top', '0');
  $('#sectionOne .chatConatiner .chat:nth-child(9)').css('opacity', '1');
}

chatAni();

//////////////
var sectionTwo = document.querySelector('#sectionTwo');
var sectionTwoTop = sectionTwo.offsetTop;
var sectionThree = document.querySelector('#sectionThree');
var sectionThreeTop = sectionThree.offsetTop;
var sectionFour = document.querySelector('#sectionFour');
var sectionFourTop = sectionFour.offsetTop;

function navActive () {
  if ($(window).scrollTop() > 0) {
    $('header .right ul li:nth-child(1) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(1) a').css('font-weight', '300');
    $('header .right ul li:nth-child(2) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(2) a').css('font-weight', '300');
    $('header .right ul li:nth-child(3) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(3) a').css('font-weight', '300');
  }
  if ($(window).scrollTop() > sectionTwoTop - 200) {
    $('header .right ul li:nth-child(2) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(2) a').css('font-weight', '300');
    $('header .right ul li:nth-child(3) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(3) a').css('font-weight', '300');
    $('header .right ul li:nth-child(1) a').css('color', 'red');
    $('header .right ul li:nth-child(1) a').css('font-weight', '600');
  }
  if ($(window).scrollTop() > sectionThreeTop - 200) {
    $('header .right ul li:nth-child(1) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(1) a').css('font-weight', '300');
    $('header .right ul li:nth-child(3) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(3) a').css('font-weight', '300');
    $('header .right ul li:nth-child(2) a').css('color', 'red');
    $('header .right ul li:nth-child(2) a').css('font-weight', '600');
  }
  if ($(window).scrollTop() > sectionFourTop - 200) {
    $('header .right ul li:nth-child(1) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(1) a').css('font-weight', '300');
    $('header .right ul li:nth-child(2) a').css('color', '#D1D1D1');
    $('header .right ul li:nth-child(2) a').css('font-weight', '300');
    $('header .right ul li:nth-child(3) a').css('color', 'red');
    $('header .right ul li:nth-child(3) a').css('font-weight', '600');
  }

}
window.addEventListener("mousewheel", navActive);

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
/////////////


let slider = document.querySelector("#sectionFour .imageSliderContainer");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);


function grabSlider(e){
  e.preventDefault();
  isGrab = true;
  startX = e.x;
  scrollLeft = slider.scrollLeft;
}

function grabMove(e){
  e.preventDefault();
  if(!isGrab) return;
  let moveX = e.x;
  let walk = (moveX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}