// 탭 메뉴에 대한 자바 스크립트입니다.

// tab-menu와 tab-menu 내에서 링크가 걸려있는 li 요소들을 찾습니다.
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');

// tab-content 또한 찾아줍니다.
var tabContentEls = document.querySelectorAll('.tab-content');

// 버튼이 눌릴 때 현재값과 이전 값을 확인하기 위해 변수로 생성합니다.
// 현재 값은 초기값을 0으로 설정해줍니다.
var cuId = 0;
// 이전 값에는 현재 값을 대입하여 똑같이 0으로 초기화시켜줍니다.
var exId = cuId;

// 찾은 tab-menu 내에서 링크가 걸려있는 li 요소들을 배열로 변환시킵니다.
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls);

// 이벤트 핸들러.
function onClickBtnTabMenuEls(idx, e) {
    e.preventDefault();
    
    // 이전 값과 현재 클릭한 값이 불일치할 때
    if (exId !== idx) {
        // selected 클래스를 제거함으로써 비활성화 상태로 변경시킵니다.
        btnTabMenuEls[exId].classList.remove('selected');
        tabContentEls[exId].classList.remove('selected');
        // 그 후 현재값에 현재 클릭한 값을 대입하여
        // selected 클래스를 추가함으로써 활성화 상태로 변경시킵니다.
        cuId = idx;
        btnTabMenuEls[cuId].classList.add('selected');
        tabContentEls[cuId].classList.add('selected');
        // 다음 이벤트에서 확인할 수 있도록 exId 의 값을 갱신시킵니다.
        exId = cuId;
    }
}

// 요소에 이벤트 추가 기능
function addEvent() {
    // 버튼을 클릭할 때마다 3개의 메뉴에서 실행되도록 반복문을 이용합니다.
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        // btnTabMenuEls의 각 메뉴를 클릭했을 시, onClickBtnTabMenuEls가 실행됩니다.
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
}

function init() {
    addEvent(); // 이벤트 추가 기능을 호출시킨 뒤
}
init() // 초기화 함수를 호출시킵니다.

