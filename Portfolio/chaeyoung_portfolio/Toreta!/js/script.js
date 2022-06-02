// console.log("연결 확인");

// 각 section별 애니메이션을 주기 위해 애니메이션이 필요한 section3을 querySelector를 이용해 찾습니다.
var section3 = document.querySelector("#section3");
var section4 = document.querySelector("#section4");
var section5 = document.querySelector("#section5");
var section6 = document.querySelector("#section6");

// 찾아준 section들을 이용해 각 섹션별 위치값을 구합니다.
var toretaFixHeight = section3.offsetTop;
var section4Height = section4.offsetTop;
var section5Height = section5.offsetTop;
var section6Height = section6.offsetTop;

// 흘러내리는 이미지에 애니메이션 클래스를 추가하기 위해 querySelector를 이용해 찾습니다.
var meltEl = document.querySelector("#section3>img");

// 둥둥 떠있는 토레타에 변형값을 주기 위해 querySelector를 이용해 찾아줍니다.
var ToretaBottleFloat = document.querySelector(".ToretaBottleFloat");

// 스티커가 붙는 애니메이션을 주기 위해 querySelector를 이용해 찾아줍니다.
var sweetStkEl = document.querySelector(".sweetStk");
var moistureEl = document.querySelector(".moisture");
var collSStrEl = document.querySelector(".collSStr");
var zeroEl = document.querySelector(".zero");

// 사이트가 로드되었을 때 기능이 작동하도록 하며
window.onload = function () {
    // 스크롤 중에 실행되도록 합니다.
    function onScrollW(e) {
        function toretaFix() {
            // 사용자가 보고 있는 화면(창)이 섹션 3 - 1000에 도달하면
            if ($(window).scrollTop() >= toretaFixHeight - 1000) {
                // SWEET 스티커가 붙는 애니메이션을 추가해줍니다.
                sweetStkEl.classList.add("stickerAni")
                // 흘러내리는 이미지에 애니메이션을 추가해줍니다.
                meltEl.classList.add("ani");
                // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
            }
            // 사용자가 보고 있는 화면(창)이 섹션 3 - 10에 도달하면
            if ($(window).scrollTop() >= toretaFixHeight - 10) {
                // 토레타의 위치를 고정시켜주는 클래스를 추가함으로써 토레타가 다른 섹션에서도 둥둥 떠다니는 모습을 볼 수 있도록 합니다.
                ToretaBottleFloat.classList.add("fix");
                // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
            // 사용자가 보고 있는 화면(창)이 섹션 3보다 작으면   
            } if ($(window).scrollTop() < toretaFixHeight) {
                // 토레타의 위치를 고정시켜주는 클래스를 제거합니다.
                ToretaBottleFloat.classList.remove("fix");
                // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
                // 사용자가 보고 있는 화면(창)이 섹션 4 - 200에 도달하면
            } if ($(window).scrollTop() > section4Height - 200) {
                // MOISTURE 스티커가 붙는 애니메이션을 추가해줍니다.
                moistureEl.classList.add("stickerAni");
                // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
                 // 사용자가 보고 있는 화면(창)이 섹션 5 - 600에 도달하면
            } if ($(window).scrollTop() > section5Height - 600) {
                // COOL 스티커가 붙는 애니메이션을 추가해줍니다.
                collSStrEl.classList.add("stickerAni");
                // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
                // 사용자가 보고 있는 화면(창)이 섹션 6 - 500에 도달하면
            } if ($(window).scrollTop() > section6Height - 500) {
                // ZERO 스티커가 붙는 애니메이션을 추가해줍니다.
                zeroEl.classList.add("stickerAni");
                 // ZERO 섹션에서 추가된 blind 클래스를 지워줍니다.
                ToretaBottleFloat.classList.remove("blind");
                // 사용자가 보고 있는 화면(창)이 섹션 6 - 750에 도달하면
            } if ($(window).scrollTop() > section6Height - 750) {
                // ZERO 섹션에서 blind 클래스를 추가해줍니다.
                ToretaBottleFloat.classList.add("blind");
            }
        }
        // toretaFix를 호출시켜 실행시켜주고
        toretaFix();
    }
    // 윈도우에서 마우스 휠을 움직일 때마다 해당 기능이 작동되는 함수를 만들어
    function addEvent() {
        window.addEventListener('mousewheel', onScrollW);
    }
    // 초기화 함수에서 불러오고
    function init() {
        addEvent();
    }
    // 실행시킵니다.
    init();
}
