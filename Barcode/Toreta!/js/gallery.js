// 이미지 갤러리를 감싸고 있는 gallery를 찾습니다.
var galleryEl = document.getElementById('gallery');
// 그 안에 있는 콘텐츠들을 감싸는 view를 찾고
var viewEl = galleryEl.querySelector('.view');
// 뷰 전체를 감싸는 view-container를 찾습니다.
var viewContainerEl = viewEl.querySelector('.view-container');
// view-container 안에 있는 콘텐츠 각각인 view-item을 찾고
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
// 콘텐츠 각각의 이미지를 찾아줍니다.
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

// 버튼인 list를 찾아주고
var listEl = galleryEl.querySelector('ul.list');
// 버튼 각각인 LI를 찾아줍니다.
var listItemEls = listEl.querySelectorAll('li'); // [li, li, li, li]
// 그 중 링크 태그가 되어 있는 A까지 찾아내어 활성화 여부를 만들어줄 준비를 합니다.
var btnListItemEls = listEl.querySelectorAll('li > a'); // [a, a, a, a]

// 이미지 갤러리 한 칸의 크기는 800으로 설정하여 너비는 선언해줍니다.
var _galleryWidth = 800;
// 콘텐츠 항목의 개수를 length를 통해 찾아줍니다.
var _galleryMax = viewItemEls.length;

// 애니메이션과 관련된 수치를 선언해주고
var _duration = 300;
var _addDuration = 100;

// 이전값과 현재값을 선언하며 0으로 초기화해줍니다.
var cuId = 0;
var exId = cuId;

// 찾은 LI를 배열로 변환시켜주고
btnListItemEls = Array.prototype.slice.call(btnListItemEls);

// 기능이 끝났는지 확인하는 기능을 만들어줍니다.
// 끝났을 경우, transition속성을 제거하여 완전하게 기능을 끝내도록 합니다.
function onTransitionEnd() {
    console.log('end!');
    viewContainerEl.style.removeProperty('transition');
}

// LI 버튼을 눌렀을 때
function onClickBtnListItem(idx, e) {
    e.preventDefault();
    // 현재 눌린 값을 el에 대입하고
    var el = e.currentTarget;
    // 현재 선택된 요소의 부모 요소를 itemEl에 대입합니다.
    var itemEl = el.parentElement;
    // 이전값이 현재 클릭한 값이 아닐 때
    if (exId !== idx) {
        // 현재값에 현재 클릭한 값을 대입하고
        cuId = idx;
        // LI에서 이전값의 활성화 클래스를 제거해주고
        listItemEls[exId].classList.remove('selected');
        // 현재 눌린 LI에 활성화 클래스를 추가해준 뒤
        itemEl.classList.add('selected');
        // 이미지를 슬라이드시키는 함수를 호출합니다.
        slideGallery();
    }
}

// 이미지를 슬라이드시키는 함수를 생성합니다.
function slideGallery(static) {
    var bool = static ? static : false;
    // 콘텐츠의 길이 * 현재 값 * -1을 통해 각 콘텐츠에 따라 다르게 X값을 변형시킬 수 있는 식을 만듭니다.
    var x = _galleryWidth * cuId * -1;
    // 그 후 해당 값을 대입하여 컨테이너 내의 위치값을 변형시킵니다.
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    // BOOL이 거짓이라면
    if (!bool) {
        // MATH 함수를 이용해서 transition의 식을 변형해줍니다.
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600
        // easing 또한 변수로 제작하여 transition 식에 대입하기 쉽도록 만듭니다.
        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
        // 최종적으로 transition 식에 몇초동안 어떤 방식으로 transform될 지에 대한 식을 완성해줍니다.
        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;    
        // 그 후 이전 값에 현재값을 대입하여 다음 클릭 시에도 원활하게 진행될 수 있도록 해줍니다.
        exId = cuId;
    } else {
        // 그게 아닌 경우에는
        // transition 속성을 제거해줌으로써 transition 기능을 끝냅니다.
        viewContainerEl.style.removeProperty('transition');
    }
}

function resizeGallery() {

    // 갤러리의 너비 * 갤러리의 개수로 컨테이너의 총 길이를 변수로 지정해줍니다.
    var containerWidth = _galleryWidth * _galleryMax;
    // 갤러리의 너비를 보여지는 콘텐츠의 너비값에 대입시키고
    viewEl.style.width = _galleryWidth + 'px';
    // 총 길이를 컨테이너의 너비에 대입시켜줍니다.
    viewContainerEl.style.width = containerWidth + 'px';
    // 반복문을 통해 콘텐츠가 변경될 때마다 재정비해줍니다.
    for(var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    // 그 후 이미지가 슬라이드시키는 함수를 true로 호출하여 작동하도록 해줍니다.
    slideGallery(true);
}

function addEvent() {
    // 이미지 슬라이드 기능이 끝날 때마다 컨테이너에 onTransitionEnd을 실행시켜줍니다.
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    // 반복문을 통해 li 버튼을 누를 때마다 이미지 슬라이드 기능이 호출되도록 설정해줍니다.
    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    }
}
// reset 함수를 통해 현재값을 2(3번째)를 기본으로 설정해주고
function reset() {
    cuId = 2;
    // 이전값의 li에는 활성화 클래스를 제거해주고
    listItemEls[exId].classList.remove('selected');
    // 현재값의 li에는 활성화 클래스를 추가해주고
    listItemEls[cuId].classList.add('selected');
    // resizeGallery를 호출시킴으로써 원활하게 작동을 시킨 뒤
    resizeGallery();
    // 이전값에 현재값을 넣어 다음 작동 시에도 원활하게 진행되도록 설정해줍니다.
    exId = cuId;
}
// 초기화 함수에서 리셋 후
// 이벤트 기능이 실행되도록 호출해준 뒤
function init() {
    reset();
    addEvent();
}
// 모든 순서 및 설계가 끝난 함수를 실행시켜줍니다.
init();