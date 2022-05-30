// swipe
let slider = document.querySelector(".list-wrap");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);


function grabSlider(e){
    console.log('22');
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


var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-item > img"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),


    _isAni = false,
    _galleryW = 720,
    _galleryH = 767,
    _imgOW = 1600,
    _imgOH = 1000,
    _cuId = 0,
    _exId = null,
    _max = null,
    _duration = 400,
    _addDuration = 200;

btnListItemEls = Array.prototype.slice.call(btnListItemEls);
function onResize() {

    galleryResize();
}
function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
}
function onClickListItem(e) {
    e.preventDefault();
    if(_isAni) return;
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(!parentEl.classList.contains("selected")) {
        _cuId = index;
        gallerySlide();
    }
}
function onClickPaddleNav(e) {
    e.preventDefault();
    if(_isAni) return;
    var el = e.currentTarget;
    if(el.classList.contains("prev")) {
        _cuId--;
        if(_cuId < 0) _cuId = 0;
    }else if(el.classList.contains("next")) {
        _cuId++;
        if(_cuId > _max - 1) _cuId = _max - 1;
    }
    if(_exId !== _cuId) gallerySlide();
}
function getImageInfo(index) {
    var image = new Image();
    image.src = viewItemImgEls[index].getAttribute("src");
    image.onload = function() {
        viewItemImgEls[index].setAttribute("data-width", image.naturalWidth);
        viewItemImgEls[index].setAttribute("data-height", image.naturalHeight);
    }
}

function setListActive() {
    listItemEls[_exId].classList.remove("selected");
    listItemEls[_cuId].classList.add("selected");
}
function gallerySlide(static) {
    var left = _galleryW * _cuId * -1,
        duration = _duration + _addDuration * Math.abs(_cuId - _exId),
        bool = (static) ? static : false;
    viewContainerEl.style.transform = "translate3d(" + left + "px, 0, 0)";
    if(!bool) {
        _isAni = true;
        setListActive();
        viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        _exId = _cuId;
    }else{
        viewContainerEl.style.removeProperty("transition");
        _isAni = false;
    }
}
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewEl.style.height = _galleryH + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
        var imgW, imgH, imgT, imgL;
        imgW = _galleryW;
        imgH = Math.round(_imgOH * imgW / _imgOW);
        if(imgH <= _galleryH) {
            imgH = _galleryH;
            imgW = Math.round(_imgOW * imgH / _imgOH);
        }
        imgT = Math.round(_galleryH / 2 - imgH / 2);
        imgL = Math.round(_galleryW / 2 - imgW / 2);
    }
    gallerySlide(true);
}
function addEvent() {
    window.addEventListener("resize", onResize);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    for(var i = 0; i < _max; i++) {
        getImageInfo(i);
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
}
function init() {
    _max = viewItemEls.length;
    _exId = _cuId;
    addEvent();
    window.dispatchEvent(new Event('resize'));
}
init();