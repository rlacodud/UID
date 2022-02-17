console.log('연결 확인');

// 새로고침 시 최상단으로 이동
window.onload = function() {
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
};

// 메인 바코드 애니메이션
let barcodeSpans = $("#barcode").children();
function barcodeAnimation()
{
  barcodeSpans.each(function(i)
  {
    let span = $(this);
    setTimeout(function()
    {
      // 각 span에 highlighted 클래스가 텀을 두고 추가시킴
      span.toggleClass('highlighted');
    }, 200*i);});
  
  barcodeSpans.each(function(i)
  {
    let span = $(this);
    setTimeout(function()
    {
      // 각 span에 highlighted 클래스가 텀을 두고 제거함
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

// 제어용 변수 생성

// Text scroll x값으로 대입할 변수
var transitionX = 0;
// 스크롤 이벤트의 기준이 될 변수
var sectionTwo = document.querySelector('#sectionTwo');
var sectionTwoTop = sectionTwo.offsetTop;
var sectionThree = document.querySelector('#sectionThree');
var sectionThreeTop = sectionThree.offsetTop;
var sectionFour = document.querySelector('#sectionFour');
var sectionFourTop = sectionFour.offsetTop;
var projectContents = document.querySelector('.projectContents');
var projectContentsTop = projectContents.offsetTop;
// work nav 클릭 이벤트 변수
var workNav = document.querySelector('#work');
// contact nav 클릭 이벤트 변수
var contactNav = document.querySelector('#contact');

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

// sectionTwo의 Text scroll 애니메이션 이벤트
function scrollTextMove(e) {
  // 확인용 console
  // console.log($(window).scrollTop());
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

// sectionThree 도달 시 전개되는 typing 애니메이션 이벤트
function typingAni() {
  if ($(window).scrollTop() > sectionThreeTop - 200) {
    $('#sectionThree .textBox .title h2').addClass('on');
  }
}

// nav 클릭 이벤트
// logo 클릭 시 projectIndexSection과 contactSection display none 처리
$('.logo').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})
// about 클릭 시 projectIndexSection과 contactSection display none 처리
$('#about').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})
// projectIndex li 클릭 시 projectIndexSection과 contactSection display none 처리
$('.projectIndexSection .projectIndex .contents ul li').on('click', function () {
  $('.projectIndexSection').removeClass('on');
  $('#contactSection').removeClass('on'); 
})

// work nav 클릭 이벤트
function workActive(e) {
  e.preventDefault();
  // 매 클릭 시 projectIndexSection에 on class를 추가/제거하도록 함
  $('.projectIndexSection').toggleClass('on');
  // contactSection이 보일 경우를 고려하여 on class를 제거해 안 보이도록 함
  $('#contactSection').removeClass('on'); 
}
workNav.addEventListener('click', workActive);

// contact nav 클릭 이벤트
function contactActive(e) {
  e.preventDefault();
  // 매 클릭 시 contactSection에 on class를 추가/제거하도록 함
  $('#contactSection').toggleClass('on');
  // projectIndexSection이 보일 경우를 고려하여 on class를 제거해 안 보이도록 함
  $('.projectIndexSection').removeClass('on'); 
}
contactNav.addEventListener('click', contactActive);

// work section scroll 애니메이션 이벤트
$(function() {
  // typeA의 경우 scroll 애니메이션 이벤트
  $(".typeA").on('mousewheel', function(e) {
    var wheelDelta = e.originalEvent.wheelDelta;
      // 마우스를 아래로 내리면
      if (wheelDelta > 0) {
        $(this).addClass('on');
        $(this).find('.imageBox').addClass('on');
        $(this).find('.informationContainer .useTool li').addClass('on');
        $(this).find('.textBox').addClass('on');
        $(this).find('.textBox h3').addClass('on');
        $(this).find('.code').addClass('on');
        $(this).find('.informationContainer').addClass('on');
      }
      // 마우스를 위로 올리면
      else {     
        $(this).removeClass('on');
        $(this).find('.imageBox').removeClass('on');
        $(this).find('.informationContainer .useTool li').removeClass('on');
        $(this).find('.textBox').removeClass('on');
        $(this).find('.textBox h3').removeClass('on');
        $(this).find('.code').removeClass('on');
        $(this).find('.informationContainer').removeClass('on');
      }
    });

    // typeB의 경우 scroll 애니메이션 이벤트
    $(".typeB").on('mousewheel', function(e) {
      var wheelDelta = e.originalEvent.wheelDelta;
      // 마우스를 아래로 내리면
      if (wheelDelta > 0) {
        $(this).find('.imageBox').addClass('on');
        $(this).find('.textBox h3').addClass('on');
        $(this).find('.informationContainer').addClass('on');
      }
      // 마우스를 위로 올리면
      else {     
        $(this).find('.imageBox').removeClass('on');
        $(this).find('.textBox h3').removeClass('on');
        $(this).find('.informationContainer').removeClass('on');
      }
    });
})

// 바코드 애니메이션
// 바코드에 마우스 오버 시 해당 섹션의 바코드에 class가 add/remove됨
$(".barcode").on('mouseover', function() {
  $(this).removeClass('off');
  $(this).find('.barcodeContainer .number').removeClass('off');
  $(this).find('.barcodeContainer .projectNumber').removeClass('off');
  $(this).find('.barcodeContainer .index').removeClass('off');
});
$(".barcode").on('mouseleave', function() {
  $(this).addClass('off');
  $(this).find('.barcodeContainer .number').addClass('off');
  $(this).find('.barcodeContainer .projectNumber').addClass('off');
  $(this).find('.barcodeContainer .index').addClass('off');
});

window.addEventListener("mousewheel", scrollTextMove);
window.addEventListener("mousewheel", typingAni);

// 마우스 오버
// 폰트 코드 -> 글리치 -> 해당 폰트
// 애니메이션별로 분류(fontType | codeType)
$("#sectionThree .ability .fontType h3").on('mouseover', function() {
  $(this).addClass('glitch');
  $(this).css({'font-family': "NewYork"});
  $(this).next('h6').addClass('on');
});
$("#sectionThree .ability .codeType h3").on('mouseover', function() {
  $(this).addClass('glitch');
  $(this).removeClass('code');
  $(this).next('h6').addClass('on');
});


// 현재 index에 맞춰 TimelineLite 생성(abilityAni1)
// 안에 있는 설정값은 외부에서 지정한 각 score 변수를 대입하여 적용

// ability h3을 배열로 변환 후
var abilityH3 = document.querySelectorAll("#sectionThree .ability h3");
abilityH3 = Array.prototype.slice.call(abilityH3);

  $("#sectionThree .ability h3").on('mouseover', function(e) {
    var target = e.currentTarget;
    // 현재 마우스오버된 h3의 index값을 반환하여 변수에 대입
    // index는 0부터 카운팅되므로 1을 더함
    abilityH3In = abilityH3.indexOf(target) + 1;
    // console.log(abilityH3In);

    // score를 0으로 재설정
    var game = {
      score: 0
    },
    // score가 적용될 element의 id를 찾아 변수에 저장 
    scoreDisplay = document.getElementById("score-" + abilityH3In);
    // console.log(scoreDisplay);

    // 해당 element에 변경된 score값 적용
    function updateHandler() {
      scoreDisplay.innerHTML = game.score;
    }
    
    // gsap 전개를 위해 TimelineLite 생성
    var scoreAni = new TimelineLite();

    // switch문을 이용해 각 능력별 적용될 score값을 변수로 저장
    switch (abilityH3In) {
      case 1:
        Score = "97%";
      break;
      case 2:
        Score = "60%";
      break;
      case 3:
        Score = "90%";
      break;
      case 4:
        Score = "60%";
      break;
      case 5:
        Score = "90%";
      break;
      case 6:
        Score = "50%";
      break;
    };
    scoreAni
      .to(game, 1, {
        score: Score,
        roundProps: "score",
        onUpdate: updateHandler,
        ease: Expo.easeNone
      }, 0);
  });

// cursor 이벤트
function scrollCursor(e) {
  // cursor를 찾아서 cursorBGEl 변수에 저장
  var cursorBGEl = document.querySelector('#cursor-bg');

  // 마우스를 따라 cursor이 움직이도록 posX와 posY 변수에 대입
  function onMoveWindow(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {
      top: posY,
      left: posX,
      duration: 0.2
      });
  };

  function addEvent() {
    // 마우스를 움직일 때마다 onMoveWindow 이벤트를 실행시킴
    window.addEventListener('mousemove', onMoveWindow);
  }

  addEvent();
};

function cursor (e) {
    var cursorBgEl = document.querySelector('#cursor-bg');
    var cursorDotEl = document.querySelector('#cursor-dot');
    var btnListItemEl = document.querySelectorAll('.imageBox');

    function onMoveWindow(e){
    var posX = e.clientX;
    var posY = e.clientY;
  
    gsap.killTweensOf(cursorBgEl);
    gsap.to(cursorBgEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.2});
}

  function onEnterBtnListItemEl(){
      // console.log('enter');
      if(!cursorDotEl.classList.contains('active')) {
        cursorDotEl.classList.add('active');
      }
  }

  function onLeaveBtnListItemEl(){
      // console.log('leave');
      if(cursorDotEl.classList.contains('active')){
        cursorDotEl.classList.remove('active');
      }
  }

  // imageBox 영역에 cursor가 들어올 경우, 실행시키는 이벤트
  function mouseCursorEvent(){
      window.addEventListener('mousemove', onMoveWindow);
      for(var i = 0; i < btnListItemEl.length; i++){
          btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItemEl);
          btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
      }
  }

  mouseCursorEvent();
}
// sectionThree 영역에서 cursor-bg 활성화
function cursorChange() {
  if ($(window).scrollTop() > sectionThreeTop - 1000) {
    $('#cursor-bg').addClass('active');
    $('#cursor-dot').addClass('off');
    window.addEventListener("mousewheel", cursor);
  } if($(window).scrollTop() >= projectContentsTop - 1000) {
    $('#cursor-dot').removeClass('off');
  }
  if($(window).scrollTop() >= projectContentsTop - 1000) {
    $('#cursor-bg').removeClass('active');
  }
};

window.addEventListener("mousewheel", cursor);
window.addEventListener("mousewheel", cursorChange);