var horizontalSectionWrap = document.querySelector('.horizontal-section-wrap');
var hswArticle = document.querySelectorAll('.horizontalSectionWrap article');
horizontalSectionWrap.style.width = (hswArticle.length * 100) + "vw";

var cursorGif = document.querySelector("#section6 .cursorGif");
var circle = document.querySelector("#section6 .circle");
var emotionButton = document.querySelector("#section6 .emotionBtn");
var textLi = document.querySelectorAll('#section6 .textList li');
textLi = Array.prototype.slice.call(textLi);
// emotionBtn에 마우스 오버 시 emotionBtn에 class on 추가
function emotionToggle(e){
    e.preventDefault();
    emotionButton.classList.toggle("on");
    circle.classList.toggle("on");
		for (var i = 0; i < textLi.length; i++) {
			textLi[i].classList.toggle('on');
		}
		cursorGif.classList.toggle("off");
}

emotionButton.addEventListener("mouseover", emotionToggle);