window.addEventListener('load', convert);
window.addEventListener('resize', convert);

    function convert() {
            var convertPx = {
                vw: function(px){
                    px = parseFloat(px);
                    var ww = $(window).width();
                    
                    return ww * px / 1920;
                }
            }
    var galleryEl = document.getElementById('gallery');
    var viewEl = galleryEl.querySelector('.view');
    var viewContainerEl = viewEl.querySelector('.view-container');
    var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
    var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

    var listEl = galleryEl.querySelector('ul.list');
    var listItemEls = listEl.querySelectorAll('li');
    var btnListItemEls = listEl.querySelectorAll('li > a');

    let _galleryWidth = convertPx.vw(600);;
    var _galleryMax = viewItemEls.length;

    var _duration = 300;
    var _addDuration = 100;

    var cuId = 0;
    var exId = cuId;

    btnListItemEls = Array.prototype.slice.call(btnListItemEls);

    function onTransitionEnd() {
        // console.log('end!');
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
        var bool = static ? static : false;
        var x = _galleryWidth * cuId * -1;
        viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
        if (!bool) {
            var duration = _duration + _addDuration * Math.abs(exId - cuId);
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
        viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
        viewContainerEl.addEventListener('transitionend', onTransitionEnd);
        for(var i = 0; i < btnListItemEls.length; i++) {
            btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
        }
    }
    function reset() {
        cuId = 2;
        listItemEls[exId].classList.remove('selected');
        listItemEls[cuId].classList.add('selected');
        resizeGallery();
        exId = cuId;
    }

    function init() {
        reset();
        addEvent();
    }
    init();
}