$('.tube_slider_wrapper .tube_slide-img').on('click', function(){
    console.log("썸네일 클릭");
    $(this).next('.modal').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
})
$('.deleteBtn').on('click', function(){
    console.log("썸네일 클릭");
    $(this).parent('.modal').css({
        'display' : 'none'
    })
    $('.dim').css({
        'display' : 'none'
    })
})
$('.life_slider_wrapper .life_slide-img').on('click', function(){
    console.log("썸네일 클릭");
    $(this).next('.modal').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
})
/* LGTube Carousel Slider */
var tube_sliderWrapper = document.querySelector('.tube_slider_wrapper'),
    tube_sliderUl = tube_sliderWrapper.querySelector('.tube_slides'),
    tube_slides = tube_sliderUl.querySelectorAll('.tube_li'),
    tube_currentIdx = 0,
    tube_slideCount = tube_slides.length,
    tube_slideWidth = 810,
    tube_slideMargin = 30,
    tube_prevBtn = document.querySelector('#tube_prev'),
    tube_nextBtn = document.querySelector('#tube_next'),
    exId = news_currentIdx;

tube_sliderUl.style.width = (tube_slideWidth*tube_slideCount) + tube_slideMargin*(tube_slideCount-1) + 'px';

//슬라이드 이동함수
function tube_moveSlide(idx){
    tube_sliderUl.style.left = -idx * (tube_slideWidth + tube_slideMargin)+'px';
    tube_currentIdx = idx;
}
//버튼으로 이동하기
tube_nextBtn.addEventListener('click',function(){
    if(tube_currentIdx == tube_slideCount -1){
        tube_moveSlide(0);
    }else{
        tube_moveSlide(tube_currentIdx + 1);
    }
});
tube_prevBtn.addEventListener('click',function(){
    if(tube_currentIdx == 0){
        tube_moveSlide(tube_slideCount -1);
    }else{
        tube_moveSlide(tube_currentIdx - 1);
    }
});

/* LGLife Carousel Slider */
var life_sliderWrapper = document.querySelector('.life_slider_wrapper'),
    life_sliderUl = life_sliderWrapper.querySelector('.life_slides'),
    life_slides = life_sliderUl.querySelectorAll('.life_li'),
    life_currentIdx = 0,
    life_slideCount = life_slides.length,
    life_slideWidth = 810,
    life_slideMargin = 30,
    life_prevBtn = document.querySelector('#life_prev'),
    life_nextBtn = document.querySelector('#life_next');

life_sliderUl.style.width = (life_slideWidth*life_slideCount) + life_slideMargin*(life_slideCount-1) + 'px';

//슬라이드 이동함수
function life_moveSlide(idx){
    life_sliderUl.style.left = -idx * (life_slideWidth + life_slideMargin)+'px';
    life_currentIdx = idx;
}
//버튼으로 이동하기
life_nextBtn.addEventListener('click',function(){
    if(life_currentIdx == life_slideCount - 1){
        life_moveSlide(0);
    }else{
        life_moveSlide(life_currentIdx + 1);
    }
});
life_prevBtn.addEventListener('click',function(){
    if(life_currentIdx == 0){
        life_moveSlide(life_slideCount - 1);
    }else{
        life_moveSlide(life_currentIdx - 1);
    }
});

/* LGNews Carousel Slider */
var news_sliderWrapper = document.querySelector('.news_slider_wrapper'),
    news_sliderUl = news_sliderWrapper.querySelector('.news_slides'),
    news_slides = news_sliderUl.querySelectorAll('.news_li'),
    news_currentIdx = 0,
    news_slideCount = news_slides.length,
    news_slideWidth = 410,
    news_slideMargin = 30,
    news_prevBtn = document.querySelector('#news_prev'),
    news_nextBtn = document.querySelector('#news_next'),
    listEl = document.querySelector('.number_controls'),
    listItemEls = listEl.querySelectorAll('li'),
    listItemElsArray = Array.prototype.slice.call(listItemEls),
    btnListItemEls = listEl.querySelectorAll('li > a'),
    btnListItemEls = Array.prototype.slice.call(btnListItemEls),
    cuId = 0,
    exId = cuId;

news_sliderUl.style.width = (news_slideWidth*news_slideCount) + news_slideMargin*(news_slideCount-1) + 'px';

var _duration = 300;
var _addDuration = 100;

function onClickBtnListItem(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;
    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        news_currentIdx = idx;
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery();
    }
}

function slideGallery(static) {
    var bool = static ? static : false;
    var x = (news_slideWidth + news_slideMargin) * cuId * -1;
    news_sliderUl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId);
        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
        news_sliderUl.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    }
}

//슬라이드 이동함수
function news_moveSlide(static){
    var bool = static ? static : false;
    var x = (news_slideWidth + news_slideMargin) * cuId * -1;
    news_sliderUl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId);
        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
        news_sliderUl.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    }
}
//버튼으로 이동하기
news_nextBtn.addEventListener('click',function(){
    if(cuId <= news_slideCount - 3){
        cuId++;
    }
    news_moveSlide();
    console.log(exId);
    
    listItemElsArray[cuId].classList.add('selected');
    exId = cuId - 1;
    listItemElsArray[exId].classList.remove('selected');
});
news_prevBtn.addEventListener('click',function(){
    if(cuId > 0){
        cuId--;
    }
    news_moveSlide();
    console.log(exId);
    listItemElsArray[cuId].classList.add('selected');
    exId = cuId + 1;
    listItemElsArray[exId].classList.remove('selected');
});

function addEvent() {
    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    };
}

function init() {
    addEvent();
}
init();