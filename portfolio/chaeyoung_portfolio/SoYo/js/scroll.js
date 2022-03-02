window.onload = function() {
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
};

var transformEl = document.querySelector('.transform-wrap'); // 세로스크롤 전체영역
var navS = document.querySelectorAll(".naS");
var horizontalSectionWrap = document.querySelector('.horizontal-section-wrap'); // 가로스크롤 부모요소
var horizontalArticle = document.querySelectorAll('.horizontal-section-wrap .box'); // 가로스크롤 자식요소들
var contents = document.querySelectorAll('.box'); // 콘텐츠라는 클래스를 가진 친구들
var navLi = document.querySelectorAll('nav a');
navLi = Array.prototype.slice.call(navLi);
var progressCircle = document.querySelector('#section9 .progressCircle');
var progressCircleWidth = 0;
var progressCircleLeft = 0;
var progressCircleLi = document.querySelectorAll('#section9 .progressCircle li');
progressCircleLi = Array.prototype.slice.call(progressCircleLi);

/* 제어용 변수 선언 */
var indexS = 0; // 스클로할때마다 ++ -- 됨.
var indexSY = 0; // 스크롤할때 indexS 값의 if문에 따라 Y축을 ++ -- 할 변수 선언
var indexSX = 0; // 위와 동일하게 X축을 ++ -- 할 변수
var transY = 0; // indexSY값에 100을 곱해 Y축을 transform해줄 변수
var transX = 0; // indexSX값에 100을 곱해 X축을 transform해줄 변수
var transEnd = true;

var pIndexS = 0;

var tranDuration = 300; // transition duration을 변수로 제어.

var start = 0; // 가로스크롤이 사적 될 contents가 어디있을지 확인할 변수
var end = 0; // 가로스크롤이 끝 날 contents가 어디있을지 확인할 변수
var conLength = contents.length - 1; // contents의 총 갯수 확인 (limmit을 걸어주기 위함)

window.onload = function () {
  window.onresize = function () {
    horizontalWidthSetting(); // 윈도우가 리사이즈 될때 가로스크롤의 부모요소도 크기가 변화되어야 한다.
  }

  function startEndCheck() {
    conLength = contents.length - 1;
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].classList.contains('start')) {
        start = i;
      } else if (contents[i].classList.contains('end')) {
        end = i;
      }
    }
  }

  function onScrollW(e) {
    if (!transEnd) return;
    transitionCheck();
    pIndexS = indexS;
    if (e.wheelDelta < 0 && indexS < conLength) { // 아래로 스크롤 감지
      indexS++; // 아래로 스크롤할때마다 indexS변수 1씩 증가
      movingDown(indexS);
    } else if (e.wheelDelta > 0 && indexS > 0) { // 위로 스크롤 감지
      indexS--; // 위로 스크롤할때마다 indexS변수 1씩 감소
      movingUp(indexS);
    }
    moving();
    navSto();
    transEnd = false;
  }
  function navSto() {
    switch (indexS) {
      case 0:
        nar();
        navLi[0].classList.add('activeB');
        break;
      case 1:
        nar();
        navLi[0].classList.add('activeB');
        break;
      case 2:
        nar();
        navLi[1].classList.add('activeB');
        break;
      case 4:
        nar();
        navLi[1].classList.add('activeB');
        break;
      case 5:
        nar();
        navLi[2].classList.add('activeB');
        break;
      case 7:
        nar();
        navLi[2].classList.add('activeB');
        break;
      case 8:
        nar();
        navLi[3].classList.add('activeB');
        break;
      case 11:
        nar();
        navLi[3].classList.add('activeB');
        break;
      case 12:
        nar();
        navLi[4].classList.add('activeB');
        break;
    }
  }
  function nar() {
    for (var i = 0; i < navLi.length; i++) {
      navLi[i].classList.remove('activeB');
    }
  }
  function onClickPageNavigation(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var navIn = navLi.indexOf(target);
    switch (navIn) {
      case 0:
        indexS = 0;
        indexSY = 0;
        break;
      case 1:
        indexS = 2;
        indexSY = 2;
        break;
      case 2:
        indexS = 5;
        indexSY = 5;
        break;
      case 3:
        indexS = 8;
        indexSY = 8;
        break;
      case 4:
        indexS = 12;
        indexSY = 9;
        break;
    }
    indexSX = 0;
    navActive(navIn);
    moving();
  }
  function navActive(navIn) {
    for (var i = 0; i < navLi.length; i++) {
      navLi[i].classList.remove('activeB');
    }
    navLi[navIn].classList.add('activeB');
  }

  function movingDown(dex) {
    if (dex < start) {
      indexSY = dex;
      progressCircle.style.opacity = "1";
    } else if (dex >= start && dex <= end) {
      indexSY = start;
      indexSX = dex - start;
    } else if (dex > end) {
      indexSY = dex - (end - start);
    }
  }
  function movingUp(dex) {
    if (dex < start) {
      indexSY = dex;
    } else if (dex >= start && dex <= end) {
      indexSY = start;
      indexSX = dex - start;
    } else if (dex > end) {
      indexSY = dex - (end - start);
    }
  }

  function moving() {
    transY = indexSY * -100;
    transformEl.style.transform = "translateY(" + transY + "vh)";
    transformEl.style.transition = "all " + tranDuration + "ms ease";

    transX = indexSX * -100;
    progressCircleWidth = 100 * (indexSX + 1);
    progressCircleLeft = 12.5 * indexSX;
    progressCircle.style.width = progressCircleWidth + "vw";
    progressCircle.style.left = progressCircleLeft + "%";
    circleReset();
    progressCircleLi[indexSX].classList.add('active');
    horizontalSectionWrap.style.transform = "translateX(" + transX + "vw)";
    horizontalSectionWrap.style.transition = "all " + tranDuration + "ms ease";
    // console.log(indexSY);
  }
  function circleReset () {
    for (var i = 0; i < progressCircleLi.length; i++) {
      progressCircleLi[i].classList.remove('active');
    }
  }
  function horizontalWidthSetting() {
    horizontalSectionWrap.style.width = (100 * horizontalArticle.length) + "vw";
    // horizontalSection의 가로 크기를 내부에 있는 section의 갯수에 따라 크기 조정
  }
  function transitionCheck() { // 트렌지션이 끝나면 다시 스크롤을 할수 있도록 제어하는 함수.
    setTimeout(function () {
      transEnd = true;
    }, tranDuration);
  }

  function addEvent() { // 이벤트 추가 -> init()함수에서 실행.
    for (var i = 0; i < navLi.length; i++) {
      navLi[i].addEventListener('click', onClickPageNavigation);
    }

    window.addEventListener('mousewheel', onScrollW);
  }

  function init() { // 처음 실행시킬 함수들 제어.
    horizontalWidthSetting(); // 가로스크롤 부모 크기 부여.
    startEndCheck(); // 가로스크롤이 시작하고 끝나는게 어디인지 start end 변수에 값 부여.
    addEvent(); // 이벤트 추가
  }
  init(); // 처음 실행시킬 함수들 실행 -> 재사용성, 코드의 간결화, 확인, 수정을 용이하게 하기위함.
}

function prototype () {
  // indexS가 5인 섹션에 도달할 경우
  if (indexS === 5) {
    // #section7 .SoYoTextLeft li:nth-child(1)와
    // #section7 .SoYoTextCenter .SoYo .chatting:nth-child(1)에 textAni 클래스 추가
    $('#section7 .SoYoTextLeft li:nth-child(1)').addClass('textAni');
    $('#section7 .SoYoTextLeft li:nth-child(2)').addClass('textAni2');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1)').addClass('textAni');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:first-child').addClass('textAni');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:last-child').addClass('textAni2');
      if ($('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:last-child').hasClass('textAni2')) {
        $('#section7 .choice p:first-child').addClass('choice1Ani');
        // #section7 .choice p:first-child 클릭 시 실행시키는 
        $('#section7 .choice p:first-child').on('click', function () {
          $('#section7 .choice p:first-child').removeClass('choice1Ani');
          $('#section7 .SoYoTextCenter .player .chattingText:nth-child(1)').addClass('textAni');
          $('#section7 .playerTextRight .chatting:nth-child(1)').addClass('textAni');
          $('#section7 .SoYoTextLeft li:nth-child(1)').addClass('textRemoveAni');
          $('#section7 .SoYoTextLeft li:nth-child(2)').addClass('textRemoveAni');
          $('#section7 .SoYoTextLeft li:nth-child(3)').addClass('textAni2');
          $('#section7 .SoYoTextLeft li:nth-child(4)').addClass('textAni3');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2)').addClass('textAni2');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:first-child').addClass('textAni2');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:last-child').addClass('textAni3');
            if ($('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:last-child').hasClass('textAni3')) {
              $('#section7 .default').addClass('defaultAni');
              $('#section7 .default').on('click', function () {
                $('#section7 .default').removeClass('defaultAni');
                $('#section7 .default').html('길을 따라 걷다보니까 기분이 좋아!');
                $('#section7 .default').addClass('typing');
                $('#section7 .SoYoTextCenter .player .chattingText:nth-child(2)').addClass('textAni3');
                $('#section7 .playerTextRight .chatting:nth-child(2)').addClass('textAni3');
              })
            }
        })
      }
  }
}
window.addEventListener('mousewheel', prototype);