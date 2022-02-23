window.onload = function() {
    setTimeout (function() {
      scrollTo(0, 0);
    }, 6);
  };

  $('#thumbOne').click(function(){
    console.log("썸네일 클릭");
    $('#one').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
    $('.video').addClass('on');
})
$('#thumbTwo').click(function(){
    console.log("썸네일 클릭");
    $('#two').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
    $('.video').addClass('on');
})
$('#thumbThree').click(function(){
    console.log("썸네일 클릭");
    $('#three').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
    $('.video').addClass('on');
})
$('#thumbFour').click(function(){
    console.log("썸네일 클릭");
    $('#four').css({
        'display' : 'block'
    })
    $('.dim').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
    $('.video').addClass('on');
})
$('.deleteBtn').click(function(){
    console.log("썸네일 클릭");
    $('#one').css({
        'display' : 'none'
    })
    $('#two').css({
        'display' : 'none'
    })
    $('#three').css({
        'display' : 'none'
    })
    $('#four').css({
        'display' : 'none'
    })
    $('.dim').css({
        'display' : 'none'
    })
    $('body').css({
        'overflow': 'auto'
    })
    $('.video').removeClass('on');
})

/* LGTube Carousel Slider */
window.addEventListener('resize', start);
function start(){
    var tube_sliderWrapper = document.querySelector('.tube_slider_wrapper'),
    tube_sliderUl = tube_sliderWrapper.querySelector('.tube_slides'),
    tube_slides = tube_sliderUl.querySelectorAll('.tube_li'),
    tube_currentIdx = 0,
    tube_slideCount = tube_slides.length,
    tube_slideMargin = 0,
    tube_prevBtn = document.querySelector('#tube_prev'),
    tube_nextBtn = document.querySelector('#tube_next'),
    count = 1;
    // console.log(tube_slideWidth);

    let tube_slideWidth = document.querySelector(".tube_li").scrollWidth;
    console.log(tube_slideWidth);
    tube_sliderUl.style.width = (tube_slideWidth*tube_slideCount) + tube_slideMargin*(tube_slideCount-1) + 'px';

//슬라이드 이동함수
function tube_moveSlide(idx){
    tube_sliderUl.style.left = -idx * (tube_slideWidth + tube_slideMargin)+'px';
    tube_currentIdx = idx;
}
function btnChange () {
    if (count === 1){
        $('.tube_controls #tube_next .next').addClass('off');
        $('.tube_controls #tube_prev .pre').addClass('on');
    } if (count === 0){
        $('.tube_controls #tube_next .next').removeClass('off');
        $('.tube_controls #tube_prev .pre').removeClass('on');
    }
}
//버튼으로 이동하기
tube_nextBtn.addEventListener('click',function(){
    if(tube_currentIdx == tube_slideCount -1){
        tube_moveSlide(0);
    }else{
        tube_moveSlide(tube_currentIdx + 1);
        count = 1;
        btnChange();
    }
});
tube_prevBtn.addEventListener('click',function(){
    if(tube_currentIdx == 0){
        tube_moveSlide(tube_slideCount -1);
    }else{
        tube_moveSlide(tube_currentIdx - 1);
        count = 0;
        btnChange();
    }
});
}
start();



/* LGLife Carousel Slider */
window.addEventListener('resize', start2);
function start2(){
    var life_sliderWrapper = document.querySelector('.life_slider_wrapper'),
    life_sliderUl = life_sliderWrapper.querySelector('.life_slides'),
    life_slides = life_sliderUl.querySelectorAll('.life_li'),
    life_currentIdx = 0,
    life_slideCount = life_slides.length,
    life_slideMargin = 0,
    life_prevBtn = document.querySelector('#life_prev'),
    life_nextBtn = document.querySelector('#life_next'),
    count = 1;

    let life_slideWidth = document.querySelector(".life_li").scrollWidth;
    console.log(life_slideWidth);
    life_sliderUl.style.width = (life_slideWidth*life_slideCount) + life_slideMargin*(life_slideCount-1) + 'px';

//슬라이드 이동함수
function life_moveSlide(idx){
    life_sliderUl.style.left = -idx * (life_slideWidth + life_slideMargin)+'px';
    life_currentIdx = idx;
}
function btnChange () {
    if (count === 1){
        $('.life_controls #life_next .next').addClass('off');
        $('.life_controls #life_prev .pre').addClass('on');
    } if (count === 0){
        $('.life_controls #life_next .next').removeClass('off');
        $('.life_controls #life_prev .pre').removeClass('on');
    }
}
//버튼으로 이동하기
life_nextBtn.addEventListener('click',function(){
    if(life_currentIdx == life_slideCount - 1){
        life_moveSlide(0);
    }else{
        life_moveSlide(life_currentIdx + 1);
        count = 1;
        btnChange();
    }
});
life_prevBtn.addEventListener('click',function(){
    if(life_currentIdx == 0){
        life_moveSlide(life_slideCount - 1);
    }else{
        life_moveSlide(life_currentIdx - 1);
        count = 0;
        btnChange();
    }
});
}
start2();

/* LGNews Carousel Slider */
window.addEventListener('resize', start3);
function start3(){
    var news_sliderWrapper = document.querySelector('.news_slider_wrapper'),
        news_sliderUl = news_sliderWrapper.querySelector('.news_slides'),
        news_slides = news_sliderUl.querySelectorAll('.news_li'),
        news_currentIdx = 0,
        news_slideCount = news_slides.length,
        // news_slideWidth = 410,
        news_slideMargin = 40,
        news_prevBtn = document.querySelector('#news_prev'),
        news_nextBtn = document.querySelector('#news_next'),
        listEl = document.querySelector('.number_controls'),
        listItemEls = listEl.querySelectorAll('li'),
        listItemElsArray = Array.prototype.slice.call(listItemEls),
        btnListItemEls = listEl.querySelectorAll('li > a'),
        btnListItemEls = Array.prototype.slice.call(btnListItemEls),
        cuId = 0,
        exId = cuId;
        let news_slideWidth = document.querySelector(".news_box").offsetWidth;
        console.log(news_slideWidth);
    
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
            if (cuId >= 1) {
                $('.news_controls #news_prev .pre').addClass('on');
            }
            if (cuId === 8) {
                $('.news_controls #news_next .next').addClass('off');
            }
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
        if (cuId >= 1) {
            $('.news_controls #news_prev .pre').addClass('on');
        }
        if (cuId === 8) {
            $('.news_controls #news_next .next').addClass('off');
        }
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
        console.log(cuId);
        if (cuId <= 0) {
            $('.news_controls #news_prev .pre').removeClass('on');
        }
        if (cuId <= 7) {
            $('.news_controls #news_next .next').removeClass('off');
        }
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

}
start3()


// CSR 좌:픽스 우:스크롤

function mainScrollEvent() {
    let documentHeight = $(document).scrollTop();
    let documentHeight2 = $(document).scrollTop() + $('.fixedArea').height();
    let section2Top = jQuery('.section2').offset().top;
    // let section3Top = jQuery('.section3').offset().top;
    let footerTop = jQuery('.banner').offset().top;
    let imgBottom = $('.scrollArea').offset().top + $('.scrollArea').height();
    console.log($(document).scrollTop());
  
    // 스크롤탑이 섹션2 안에 있고 섹션3보다 위일때
    if (documentHeight >= section2Top && documentHeight < imgBottom) {
        $('.fixedArea').addClass('active');
        
    // 스크롤탑이 섹션 2보다 위일때 (섹션1일때)
    } else if (documentHeight < section2Top) {
        $('.fixedArea').removeClass('active');
    }
  
    // 이미지의 bottom이 섹션3에 닿았을 때  
    if (documentHeight2 >= imgBottom) {
      $('.fixedArea').addClass('finish');
    }
    // 섹션3의 Top보다 이미지가 위에 있을 때
    if (documentHeight2 < imgBottom) {
      $('.fixedArea').removeClass('finish');
    }
  }
  
  // 윈도우가(창이) 스크롤될 때마다 실행되는 기능
  $(window).scroll(function () {
    // mainScrollEvent 함수를 호출하여 실행시킴
    mainScrollEvent();
  })


  $(document).ready(function() {


    $(".dropbtn1").on('mouseover', function() {
        $(this).next('.dropup-content1').addClass('ScaleUp');
    });
    $(".dropbtn1").on('mouseleave', function() {
        $(this).next('.dropup-content1').removeClass('ScaleUp');
    });
    $(".dropbtn2").on('mouseover', function() {
        $(this).next('.dropup-content2').addClass('ScaleUp');
    });
    $(".dropbtn2").on('mouseleave', function() {
        $(this).next('.dropup-content2').removeClass('ScaleUp');
    });

    $(".dropup-content1").on('mouseover', function() {
        $(this).addClass('ScaleUp');
    });
    $(".dropup-content1").on('mouseleave', function() {
        $(this).removeClass('ScaleUp');
    });
    $(".dropup-content2").on('mouseover', function() {
        $(this).addClass('ScaleUp');
    });
    $(".dropup-content2").on('mouseleave', function() {
        $(this).removeClass('ScaleUp');
    });

})

var controller = new ScrollMagic.Controller();

var ani2_txt = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani2_txt.to($('#sectionTwo p'), 0.8, {opacity: 1, delay: 2, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionOne',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani2_hashtag1 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani2_hashtag1.to($('#sectionTwo .hashtag li:nth-child(1)'), 0.8, {opacity: 1, delay: 2.4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionOne',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani2_hashtag2 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani2_hashtag2.to($('#sectionTwo .hashtag li:nth-child(2)'), 0.8, {opacity: 1, delay: 2.6, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionOne',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani2_hashtag3 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani2_hashtag3.to($('#sectionTwo .hashtag li:nth-child(3)'), 0.8, {opacity: 1, delay: 2.8, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionOne',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani3_title1 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani3_title1.to($('#sectionThree .lgtube .tube_title'), 0.6, {opacity: 1, delay: 2.8, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionTwo',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.2
})

var ani3_slide1 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani3_slide1.to($('#sectionThree .lgtube .tube_slider_wrapper'), 0.6, {opacity: 1, delay: 3, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionTwo',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.2
})

var ani3_title2 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani3_title2.to($('#sectionThree .lglife .tube_title'), 0.6, {opacity: 1, delay: 3.2, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionTwo',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.2
})

var ani3_slide2 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani3_slide2.to($('#sectionThree .lglife .life_slider_wrapper'), 0.6, {opacity: 1, delay: 3.4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionTwo',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.2
})

var ani4_title = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani4_title.to($('.lgnews .news_title'), 0.6, {opacity: 1, delay: 4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionThree',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani4_slideControl = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani4_slideControl.to($('.lgnews .news_controls'), 0.1, {opacity: 1, delay: 4.2, top: '80%', left: '11%'})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionThree',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani4_slide = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani4_slide.to($('.lgnews .news_slider_wrapper'), 0.6, {opacity: 1, delay: 4.4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionThree',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani4_indicator = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani4_indicator.to($('.lgnews .number_controls'), 0.1, {opacity: 1, delay: 4.6, top: '95%'})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionThree',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani5_card1 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani5_card1.to($('.apply ul li:nth-child(1)'), 0.6, {opacity: 1, delay: 6, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '.lgnews',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.8
})
var ani5_card2 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani5_card2.to($('.apply ul li:nth-child(2)'), 0.6, {opacity: 1, delay: 6.2, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '.lgnews',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.8
})
var ani5_card3 = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani5_card3.to($('.apply ul li:nth-child(3)'), 0.6, {opacity: 1, delay: 6.4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '.apply',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani6_slogan = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani6_slogan.to($('.csr'), 0.6, {opacity: 1, delay: 6.4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '.csr',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})

var ani7_banner = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani7_banner.to($('.banner'), 0.6, {opacity: 1, delay: 4, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '.banner',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.1
})
