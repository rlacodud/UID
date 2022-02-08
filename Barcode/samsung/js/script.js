// 요소.
// 탭메뉴.
// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
// console.log(tabMenuEl, btnTabMenuEls);
// btnTabMenuEls[0].classList.remove('selected');
// btnTabMenuEls[1].classList.add('selected');
// 탭컨텐츠.
var tabContentEls = document.querySelectorAll('.tab-content');
// console.log(tabContentEls);
// tabContentEls[0].classList.remove('selected');
// tabContentEls[1].classList.add('selected');
// 현재 값.
var cuIdS = 0;
// 이전 값.
// var exId = null;
var exIdS = cuIdS;

// (1) 배열 변환하여 현재 index 값 찾기.
// console.log(btnTabMenuEls);
// NodeList(4) -> Array(4)
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열 변환 적용.

var moreEl = document.querySelectorAll(".borderS a");
moreEl = Array.prototype.slice.call(moreEl);
console.log(moreEl);
// 이벤트 핸들러.
function onClickBtnTabMenuEls(idx, e) {
    e.preventDefault();
    // console.log('click');
    // console.log(e.target, e.currentTarget);
    // 요소의 몇번째 ?
    // console.log(btnTabMenuEls.indexOf(e.currentTarget));
    // var idx = btnTabMenuEls.indexOf(e.currentTarget);
    // console.log(idx);
    // 클릭된 요소가 비활성화되어 있을 때만.
    // 0번이 활성화 되어있고, 0번째 요소를 클릭. - 적용 필요 X
    // 0번이 활성화 되어있고, 1번째 요소를 클릭. - 적용 필요 O
    if (exIdS !== idx) { // 이전값과 현재 클릭된 값이 같지 않은 경우에만 변경.
        btnTabMenuEls[exIdS].classList.remove('selected');
        tabContentEls[exIdS].classList.remove('selected');
        moreEl[exIdS].classList.remove('view');
        // cuId 를 다시 설정.
        cuIdS = idx;
        btnTabMenuEls[cuIdS].classList.add('selected');
        tabContentEls[cuIdS].classList.add('selected');
        moreEl[cuIdS].classList.add('view');
        // 다음 이벤트에서 확인할 수 있도록 exId 의 값을 갱신.
        exIdS = cuIdS;
    }
}

var dropBtn = document.querySelector(".droplist-button")
var dropList = document.querySelector(".droplist");

function btn (e) {
    e.preventDefault();
    dropList.classList.add("view");
    console.log("연결 확인");
}

dropBtn.addEventListener("mouseover", btn);

$(function() {
    $(".navDepth2").on("mouseover", function(){
        $(".navDepth2").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });
    
    $("#navBg").on("mouseout", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu2").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $("#navBg").stop().slideUp();
    });
    
    $(".menu1").on("mouseover", function(){
        $(".subMenu2").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $(".subMenu1").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });
    
      $(".menu2").on("mouseover", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $(".subMenu2").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });

      $(".menu3").on("mouseover", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu2").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $(".subMenu3").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });

      $(".menu4").on("mouseover", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu2").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $(".subMenu4").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });

      $(".menu5").on("mouseover", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu2").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu6").stop().slideUp();
        $(".subMenu5").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });

      $(".menu6").on("mouseover", function(){
        $(".subMenu1").stop().slideUp();
        $(".subMenu2").stop().slideUp();
        $(".subMenu3").stop().slideUp();
        $(".subMenu4").stop().slideUp();
        $(".subMenu5").stop().slideUp();
        $(".subMenu6").stop().slideDown();
        $("#navBg").stop().slideDown(); 
    });

      $(".subMenu1-2Btn").on("mouseout", function(){
        $(".subMenu1-2").stop().slideUp();
    });

    $(".subMenu1-2Btn").on("mouseover", function(){
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-5Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-6Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });
    
    $(".subMenu1-9Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-10").stop().slideUp();
        $(".subMenu1-9").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10Btn").on("mouseover", function(){
        $(".subMenu1-2").stop().slideUp();
        $(".subMenu1-3").stop().slideUp();
        $(".subMenu1-4").stop().slideUp();
        $(".subMenu1-5").stop().slideUp();
        $(".subMenu1-6").stop().slideUp();
        $(".subMenu1-7").stop().slideUp();
        $(".subMenu1-8").stop().slideUp();
        $(".subMenu1-9").stop().slideUp();
        $(".subMenu1-10").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10Btn").on("mouseout", function(){
        $(".subMenu1-10").stop().slideUp();
    });

    $(".subMenu2-1Btn").on("mouseover", function(){
        $(".subMenu2-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-1Btn").on("mouseout", function(){
        $(".subMenu2-1").stop().slideUp();
    });

    $(".subMenu2-2Btn").on("mouseover", function(){
        $(".subMenu2-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-2Btn").on("mouseout", function(){
        $(".subMenu2-2").stop().slideUp();
    });

    $(".subMenu2-3Btn").on("mouseover", function(){
        $(".subMenu2-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-3Btn").on("mouseout", function(){
        $(".subMenu2-3").stop().slideUp();
    });

    $(".subMenu2-4Btn").on("mouseover", function(){
        $(".subMenu2-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-4Btn").on("mouseout", function(){
        $(".subMenu2-4").stop().slideUp();
    });

    $(".subMenu2-5Btn").on("mouseover", function(){
        $(".subMenu2-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-5Btn").on("mouseout", function(){
        $(".subMenu2-5").stop().slideUp();
    });

    $(".subMenu2-6Btn").on("mouseover", function(){
        $(".subMenu2-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu2-6Btn").on("mouseout", function(){
        $(".subMenu2-6").stop().slideUp();
    });

    $(".subMenu3-1Btn").on("mouseover", function(){
        $(".subMenu3-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-1Btn").on("mouseout", function(){
        $(".subMenu3-1").stop().slideUp();
    });

    $(".subMenu3-2Btn").on("mouseover", function(){
        $(".subMenu3-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-2Btn").on("mouseout", function(){
        $(".subMenu3-2").stop().slideUp();
    });

    $(".subMenu3-3Btn").on("mouseover", function(){
        $(".subMenu3-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-3Btn").on("mouseout", function(){
        $(".subMenu3-3").stop().slideUp();
    });

    $(".subMenu3-4Btn").on("mouseover", function(){
        $(".subMenu3-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-4Btn").on("mouseout", function(){
        $(".subMenu3-4").stop().slideUp();
    });

    $(".subMenu3-5Btn").on("mouseover", function(){
        $(".subMenu3-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-5Btn").on("mouseout", function(){
        $(".subMenu3-5").stop().slideUp();
    });

    $(".subMenu3-6Btn").on("mouseover", function(){
        $(".subMenu3-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-6Btn").on("mouseout", function(){
        $(".subMenu3-6").stop().slideUp();
    });

    $(".subMenu3-7Btn").on("mouseover", function(){
        $(".subMenu3-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-7Btn").on("mouseout", function(){
        $(".subMenu3-7").stop().slideUp();
    });

    $(".subMenu3-8Btn").on("mouseover", function(){
        $(".subMenu3-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu3-8Btn").on("mouseout", function(){
        $(".subMenu3-8").stop().slideUp();
    });

    $(".subMenu4-1Btn").on("mouseover", function(){
        $(".subMenu4-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu4-1Btn").on("mouseout", function(){
        $(".subMenu4-1").stop().slideUp();
    });

    $(".subMenu4-2Btn").on("mouseover", function(){
        $(".subMenu4-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu4-2Btn").on("mouseout", function(){
        $(".subMenu4-2").stop().slideUp();
    });

    $(".subMenu4-3Btn").on("mouseover", function(){
        $(".subMenu4-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu4-3Btn").on("mouseout", function(){
        $(".subMenu4-3").stop().slideUp();
    });

    $(".subMenu4-4Btn").on("mouseover", function(){
        $(".subMenu4-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu4-4Btn").on("mouseout", function(){
        $(".subMenu4-4").stop().slideUp();
    });

    $(".subMenu4-5Btn").on("mouseover", function(){
        $(".subMenu4-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu4-5Btn").on("mouseout", function(){
        $(".subMenu4-5").stop().slideUp();
    });

    $(".subMenu5-1Btn").on("mouseover", function(){
        $(".subMenu5-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu5-1Btn").on("mouseout", function(){
        $(".subMenu5-1").stop().slideUp();
    });

    $(".subMenu6-1Btn").on("mouseover", function(){
        $(".subMenu6-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu6-1Btn").on("mouseout", function(){
        $(".subMenu6-1").stop().slideUp();
    });

    $(".subMenu1-3-2Btn").on("mouseover", function(){
        $(".subMenu1-3-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-2Btn").on("mouseout", function(){
        $(".subMenu1-3-2").stop().slideUp();
    });

    $(".subMenu1-3-3Btn").on("mouseover", function(){
        $(".subMenu1-3-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-3Btn").on("mouseout", function(){
        $(".subMenu1-3-3").stop().slideUp();
    });

    $(".subMenu1-3-4Btn").on("mouseover", function(){
        $(".subMenu1-3-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-4Btn").on("mouseout", function(){
        $(".subMenu1-3-4").stop().slideUp();
    });

    $(".subMenu1-3-5Btn").on("mouseover", function(){
        $(".subMenu1-3-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-5Btn").on("mouseout", function(){
        $(".subMenu1-3-5").stop().slideUp();
    });

    $(".subMenu1-3-6Btn").on("mouseover", function(){
        $(".subMenu1-3-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-6Btn").on("mouseout", function(){
        $(".subMenu1-3-6").stop().slideUp();
    });

    $(".subMenu1-3-7Btn").on("mouseover", function(){
        $(".subMenu1-3-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-7Btn").on("mouseout", function(){
        $(".subMenu1-3-7").stop().slideUp();
    });

    $(".subMenu1-3-8Btn").on("mouseover", function(){
        $(".subMenu1-3-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-8Btn").on("mouseout", function(){
        $(".subMenu1-3-8").stop().slideUp();
    });

    $(".subMenu1-3-9Btn").on("mouseover", function(){
        $(".subMenu1-3-9").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-9Btn").on("mouseout", function(){
        $(".subMenu1-3-9").stop().slideUp();
    });

    $(".subMenu1-3-10Btn").on("mouseover", function(){
        $(".subMenu1-3-10").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-3-10Btn").on("mouseout", function(){
        $(".subMenu1-3-10").stop().slideUp();
    });

    $(".subMenu1-4-2Btn").on("mouseover", function(){
        $(".subMenu1-4-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-2Btn").on("mouseout", function(){
        $(".subMenu1-4-2").stop().slideUp();
    });

    $(".subMenu1-4-3Btn").on("mouseover", function(){
        $(".subMenu1-4-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-3Btn").on("mouseout", function(){
        $(".subMenu1-4-3").stop().slideUp();
    });

    $(".subMenu1-4-4Btn").on("mouseover", function(){
        $(".subMenu1-4-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-4Btn").on("mouseout", function(){
        $(".subMenu1-4-4").stop().slideUp();
    });

    $(".subMenu1-4-5tn").on("mouseover", function(){
        $(".subMenu1-4-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-5Btn").on("mouseout", function(){
        $(".subMenu1-4-5").stop().slideUp();
    });

    $(".subMenu1-4-6Btn").on("mouseover", function(){
        $(".subMenu1-4-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-6Btn").on("mouseout", function(){
        $(".subMenu1-4-6").stop().slideUp();
    });

    $(".subMenu1-4-7Btn").on("mouseover", function(){
        $(".subMenu1-4-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-7Btn").on("mouseout", function(){
        $(".subMenu1-4-7").stop().slideUp();
    });

    $(".subMenu1-4-8Btn").on("mouseover", function(){
        $(".subMenu1-4-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-4-8Btn").on("mouseout", function(){
        $(".subMenu1-4-8").stop().slideUp();
    });

    $(".subMenu1-6-10Btn").on("mouseover", function(){
        $(".subMenu1-6-10").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-6-10Btn").on("mouseout", function(){
        $(".subMenu1-6-10").stop().slideUp();
    });

    $(".subMenu1-7-1Btn").on("mouseover", function(){
        $(".subMenu1-7-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-1Btn").on("mouseout", function(){
        $(".subMenu1-7-1").stop().slideUp();
    });

    $(".subMenu1-7-2Btn").on("mouseover", function(){
        $(".subMenu1-7-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-2Btn").on("mouseout", function(){
        $(".subMenu1-7-2").stop().slideUp();
    });

    $(".subMenu1-7-3Btn").on("mouseover", function(){
        $(".subMenu1-7-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-3Btn").on("mouseout", function(){
        $(".subMenu1-7-3").stop().slideUp();
    });

    $(".subMenu1-7-4Btn").on("mouseover", function(){
        $(".subMenu1-7-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-4Btn").on("mouseout", function(){
        $(".subMenu1-7-4").stop().slideUp();
    });

    $(".subMenu1-7-5Btn").on("mouseover", function(){
        $(".subMenu1-7-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-5Btn").on("mouseout", function(){
        $(".subMenu1-7-5").stop().slideUp();
    });

    $(".subMenu1-7-6Btn").on("mouseover", function(){
        $(".subMenu1-7-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-6Btn").on("mouseout", function(){
        $(".subMenu1-7-6").stop().slideUp();
    });

    $(".subMenu1-7-7Btn").on("mouseover", function(){
        $(".subMenu1-7-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-7Btn").on("mouseout", function(){
        $(".subMenu1-7-7").stop().slideUp();
    });

    $(".subMenu1-7-8Btn").on("mouseover", function(){
        $(".subMenu1-7-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-8Btn").on("mouseout", function(){
        $(".subMenu1-7-8").stop().slideUp();
    });

    $(".subMenu1-7-10Btn").on("mouseover", function(){
        $(".subMenu1-7-10").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-7-10Btn").on("mouseout", function(){
        $(".subMenu1-7-10").stop().slideUp();
    });

    $(".subMenu1-8-1Btn").on("mouseover", function(){
        $(".subMenu1-8-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-1Btn").on("mouseout", function(){
        $(".subMenu1-8-1").stop().slideUp();
    });

    $(".subMenu1-8-2Btn").on("mouseover", function(){
        $(".subMenu1-8-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-2Btn").on("mouseout", function(){
        $(".subMenu1-8-2").stop().slideUp();
    });

    $(".subMenu1-8-3Btn").on("mouseover", function(){
        $(".subMenu1-8-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-3Btn").on("mouseout", function(){
        $(".subMenu1-8-3").stop().slideUp();
    });

    $(".subMenu1-8-4Btn").on("mouseover", function(){
        $(".subMenu1-8-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-4Btn").on("mouseout", function(){
        $(".subMenu1-8-4").stop().slideUp();
    });

    $(".subMenu1-8-5Btn").on("mouseover", function(){
        $(".subMenu1-8-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-5Btn").on("mouseout", function(){
        $(".subMenu1-8-5").stop().slideUp();
    });

    $(".subMenu1-8-7Btn").on("mouseover", function(){
        $(".subMenu1-8-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-7Btn").on("mouseout", function(){
        $(".subMenu1-8-7").stop().slideUp();
    });

    $(".subMenu1-8-8Btn").on("mouseover", function(){
        $(".subMenu1-8-8").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-8-8Btn").on("mouseout", function(){
        $(".subMenu1-8-8").stop().slideUp();
    });

    $(".subMenu1-9-1Btn").on("mouseover", function(){
        $(".subMenu1-9-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-1Btn").on("mouseout", function(){
        $(".subMenu1-9-1").stop().slideUp();
    });

    $(".subMenu1-9-2Btn").on("mouseover", function(){
        $(".subMenu1-9-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-2Btn").on("mouseout", function(){
        $(".subMenu1-9-2").stop().slideUp();
    });

    $(".subMenu1-9-3Btn").on("mouseover", function(){
        $(".subMenu1-9-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-3Btn").on("mouseout", function(){
        $(".subMenu1-9-3").stop().slideUp();
    });

    $(".subMenu1-9-5Btn").on("mouseover", function(){
        $(".subMenu1-9-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-5Btn").on("mouseout", function(){
        $(".subMenu1-9-5").stop().slideUp();
    });

    $(".subMenu1-9-6Btn").on("mouseover", function(){
        $(".subMenu1-9-6").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-6Btn").on("mouseout", function(){
        $(".subMenu1-9-6").stop().slideUp();
    });

    $(".subMenu1-9-7Btn").on("mouseover", function(){
        $(".subMenu1-9-7").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-7Btn").on("mouseout", function(){
        $(".subMenu1-9-7").stop().slideUp();
    });

    $(".subMenu1-9-9Btn").on("mouseover", function(){
        $(".subMenu1-9-9").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-9Btn").on("mouseout", function(){
        $(".subMenu1-9-9").stop().slideUp();
    });

    $(".subMenu1-9-10Btn").on("mouseover", function(){
        $(".subMenu1-9-10").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-9-10Btn").on("mouseout", function(){
        $(".subMenu1-9-10").stop().slideUp();
    });

    $(".subMenu1-10-1Btn").on("mouseover", function(){
        $(".subMenu1-10-1").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10-1Btn").on("mouseout", function(){
        $(".subMenu1-10-1").stop().slideUp();
    });

    $(".subMenu1-10-2Btn").on("mouseover", function(){
        $(".subMenu1-10-2").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10-2Btn").on("mouseout", function(){
        $(".subMenu1-10-2").stop().slideUp();
    });

    $(".subMenu1-10-3Btn").on("mouseover", function(){
        $(".subMenu1-10-3").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10-3Btn").on("mouseout", function(){
        $(".subMenu1-10-3").stop().slideUp();
    });

    $(".subMenu1-10-4Btn").on("mouseover", function(){
        $(".subMenu1-10-4").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10-4Btn").on("mouseout", function(){
        $(".subMenu1-10-4").stop().slideUp();
    });

    $(".subMenu1-10-5Btn").on("mouseover", function(){
        $(".subMenu1-10-5").stop().slideDown();
        $("#navBg").stop().slideDown();
    });

    $(".subMenu1-10-5Btn").on("mouseout", function(){
        $(".subMenu1-10-5").stop().slideUp();
    });
});

// 이미지 갤러리2
var gallery2El = document.getElementById('gallery2');
var viewEl = gallery2El.querySelector('.view');
var viewContainerEl = viewEl.querySelector('.view-container');
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');

var listEl = gallery2El.querySelector('ul.list');
var listItemEls = listEl.querySelectorAll('ul.list > li'); // [li, li, li, li]
var btnListItemEls = listEl.querySelectorAll('ul.list > li > a'); // [a, a, a, a]

var _galleryWidth = 1392;

var _galleryMax = viewItemEls.length;

// 공통
var _duration = 300;
var _addDuration = 100;

var cuId = 0;
var exId = cuId;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItemEls = Array.prototype.slice.call(btnListItemEls);

function onTransitionEnd() {
    console.log('end!');
    viewContainerEl.style.removeProperty('transition');
}

function onClickBtnListItem(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;

    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery();
    }
}

function slideGallery(static) {
    // transform : translateX(?)
    var bool = static ? static : false;
    var x = _galleryWidth * cuId * -1;
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600

        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
       
        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    } else {
        viewContainerEl.style.removeProperty('transition');
    }
}

function resizeGallery() {
    var containerWidth = _galleryWidth * _galleryMax;
    viewEl.style.width = _galleryWidth + 'px';
    viewContainerEl.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    slideGallery(true);
}

function addEvent() {
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        // btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);
        // (2) bind(value)
        btnTabMenuEls[i].addEventListener('mouseover', onClickBtnTabMenuEls.bind(null, i));
        moreEl[i].addEventListener('mouseover', onClickBtnTabMenuEls.bind(null, i));
    }
    // transition webkit / moz / ms / o
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    }
}

function reset() {
    cuId = 0;
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');
    resizeGallery();
    exId = cuId;
}

// 이미지 갤러리3
var gallery3El = document.getElementById('gallery3');

var view3El = gallery3El.querySelector('.view');
var viewContainer3El = view3El.querySelector('.view-container');
var viewItem3Els = viewContainer3El.querySelectorAll('.view-item');

var list3El = gallery3El.querySelector('ul.list');
var listItem3Els = list3El.querySelectorAll('ul.list > li'); // [li, li, li, li]
var btnListItem3Els = list3El.querySelectorAll('ul.list > li > a'); // [a, a, a, a]

var _galleryWidth2 = 1392;

var _galleryMax2 = viewItem3Els.length;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItem3Els = Array.prototype.slice.call(btnListItem3Els);

function onTransitionEnd2() {
    console.log('end!');
    viewContainer3El.style.removeProperty('transition');
}

function onClickBtnListItem2(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;

    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        listItem3Els[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery2();
    }
}

// function colorChange () {
//     if(viewItem3Els[1] && viewItem3Els[2])
//     {
//         list3El.classList.add(".white");
//     }
// }

function slideGallery2(static) {
    var bool = static ? static : false;
    var x = _galleryWidth2 * cuId * -1;
    viewContainer3El.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600

        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
      
        viewContainer3El.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    } else {
        viewContainer3El.style.removeProperty('transition');
    }
}

function resizeGallery2() {
    var containerWidth = _galleryWidth2 * _galleryMax2;
    view3El.style.width = _galleryWidth2 + 'px';
    viewContainer3El.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax2; i++) {
        viewItem3Els[i].style.width = _galleryWidth2 + 'px';
    }
    slideGallery2(true);
}

function addEvent2() {
    // transition webkit / moz / ms / o
    viewContainer3El.addEventListener('webkitTransitionend', onTransitionEnd2);
    viewContainer3El.addEventListener('transitionend', onTransitionEnd2);
    for(var i = 0; i < btnListItem3Els.length; i++) {
        btnListItem3Els[i].addEventListener('click', onClickBtnListItem2.bind(null, i));
    }
}

function reset2() {
    cuId = 0;
    listItem3Els[exId].classList.remove('selected');
    listItem3Els[cuId].classList.add('selected');
    resizeGallery2();
    exId = cuId;
}

// 이미지 갤러리4
var gallery4El = document.getElementById('gallery4');

var view4El = gallery4El.querySelector('.view');
var viewContainer4El = view4El.querySelector('.view-container');
var viewItem4Els = viewContainer4El.querySelectorAll('.view-item');

var list4El = gallery4El.querySelector('ul.list');
var listItem4Els = list4El.querySelectorAll('ul.list > li'); // [li, li, li, li]
var btnListItem4Els = list4El.querySelectorAll('ul.list > li > a'); // [a, a, a, a]

var _galleryWidth4 = 1392;

var _galleryMax4 = viewItem4Els.length;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItem4Els = Array.prototype.slice.call(btnListItem4Els);

function onTransitionEnd4() {
    console.log('end!');
    viewContainer4El.style.removeProperty('transition');
}

function onClickBtnListItem4(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;

    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        listItem4Els[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery4();
    }
}

function slideGallery4(static) {
    var bool = static ? static : false;
    var x = _galleryWidth4 * cuId * -1;
    viewContainer4El.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600

        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';

        viewContainer4El.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    } else {
        viewContainer4El.style.removeProperty('transition');
    }
}

function resizeGallery4() {
    var containerWidth = _galleryWidth4 * _galleryMax4;

    view4El.style.width = _galleryWidth4 + 'px';
    viewContainer4El.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax4; i++) {
        viewItem4Els[i].style.width = _galleryWidth4 + 'px';
    }
    slideGallery4(true);
}

function addEvent4() {
    // transition webkit / moz / ms / o
    viewContainer4El.addEventListener('webkitTransitionend', onTransitionEnd4);
    viewContainer4El.addEventListener('transitionend', onTransitionEnd4);
    for(var i = 0; i < btnListItem4Els.length; i++) {
        btnListItem4Els[i].addEventListener('click', onClickBtnListItem4.bind(null, i));
    }
}

function reset4() {
    cuId = 0;
    listItem4Els[exId].classList.remove('selected');
    listItem4Els[cuId].classList.add('selected');
    resizeGallery4();
    exId = cuId;
}

// 이미지 갤러리5
var gallery5El = document.getElementById('gallery5');

var view5El = gallery5El.querySelector('.view');
var viewContainer5El = view5El.querySelector('.view-container');
var viewItem5Els = viewContainer5El.querySelectorAll('.view-item');

var list5El = gallery5El.querySelector('ul.list');
var listItem5Els = list5El.querySelectorAll('ul.list > li'); // [li, li, li, li]
var btnListItem5Els = list5El.querySelectorAll('ul.list > li > a'); // [a, a, a, a]

var _galleryWidth5 = 1392;

var _galleryMax5 = viewItem5Els.length;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItem5Els = Array.prototype.slice.call(btnListItem5Els);

function onTransitionEnd5() {
    console.log('end!');
    viewContainer5El.style.removeProperty('transition');
}

function onClickBtnListItem5(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;

    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        listItem5Els[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery5();
    }
}

function slideGallery5(static) {
    var bool = static ? static : false;
    var x = _galleryWidth5 * cuId * -1;
    viewContainer5El.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600

        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';

        viewContainer5El.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    } else {
        viewContainer5El.style.removeProperty('transition');
    }
}

function resizeGallery5() {
    var containerWidth = _galleryWidth5 * _galleryMax5;

    view5El.style.width = _galleryWidth5 + 'px';
    viewContainer5El.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax5; i++) {
        viewItem5Els[i].style.width = _galleryWidth5 + 'px';
    }
    slideGallery5(true);
}

function addEvent5() {
    // transition webkit / moz / ms / o
    viewContainer5El.addEventListener('webkitTransitionend', onTransitionEnd5);
    viewContainer5El.addEventListener('transitionend', onTransitionEnd5);
    for(var i = 0; i < btnListItem4Els.length; i++) {
        btnListItem5Els[i].addEventListener('click', onClickBtnListItem5.bind(null, i));
    }
}

function reset5() {
    cuId = 0;
    listItem5Els[exId].classList.remove('selected');
    listItem5Els[cuId].classList.add('selected');
    resizeGallery5();
    exId = cuId;
}

function init() {
    // colorChange();
    reset();
    addEvent();
    reset2();
    addEvent2();
    reset4();
    addEvent4();
    reset5();
    addEvent5();
}
init();