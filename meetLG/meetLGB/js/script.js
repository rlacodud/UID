// nav
$(function(){
	var $firstMenu = $('nav > ul > li '),
			$header = $('header');
      var vw = document.documentElement.clientWidth;
      var headerGnb = vw * 375 / 1920;
      var headerWidth = vw * 110 / 1920;
	$firstMenu.mouseenter(function(){
		$header.stop().animate({height:headerGnb});
    $('.backGround').css({
      'display':'block'
    })
	});
	$header.mouseleave(function(){
		$header.stop().animate({height:headerWidth});
    $('.backGround').css({
      'display':'none'
    });
	});
});

// modal
// 각각의 버튼
$('.videoBtnTube').click(function(){
    console.log("썸네일 클릭");
    $('.modalLgTube').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
})
$('.videoBtnLife').click(function(){
    console.log("썸네일 클릭");
    $('.modalLgLife').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
})
// 종합 버튼
$('.videoBtn').click(function(){
    $('.grayBack').css({
        'display' : 'block'
    })
    $('.deleteBtn').css({
        'display' : 'block'
    })
})
// 딜리트 버튼
$('.deleteBtn').click(function(){
    console.log("썸네일 클릭");
    $('.modal').css({
        'display' : 'none'
    })
    $('.grayBack').css({
        'display' : 'none'
    })
    $('.deleteBtn').css({
        'display' : 'none'
    })
    $('body').css({
        'overflow': 'auto',
        'overflow-x' : 'hidden'
    })
})

// videoBtn 활성화
$('.videoBtnTube').mouseenter(function(){
    $('.videoBtnTube .videoBtn1').css({
        'display' : 'none'
    })
    $('.videoBtnTube .videoBtn2').css({
        'display': 'block'
    })
})
$('.videoBtnTube').mouseleave(function(){
    $('.videoBtnTube .videoBtn1').css({
        'display' : 'block'
    })
    $('.videoBtnTube .videoBtn2').css({
        'display': 'none'
    })
})

$('.videoBtnLife').mouseenter(function(){
    $('.videoBtnLife .videoBtn1').css({
        'display' : 'none'
    })
    $('.videoBtnLife .videoBtn2').css({
        'display': 'block'
    })
})
$('.videoBtnLife').mouseleave(function(){
    $('.videoBtnLife .videoBtn1').css({
        'display' : 'block'
    })
    $('.videoBtnLife .videoBtn2').css({
        'display': 'none'
    })
})

// section4 List
$('.interviewLi1').click(function(){
  console.log('click')
  $('.interviewLi1').addClass('active');
  $('.border1').addClass('active');
  $('.interviewLi2').removeClass('active');
  $('.border2').removeClass('active');
  $('.people1').css({
    'display' : 'block'
  })
  $('.people2').css({
    'display' : 'none'
  })
})
$('.interviewLi2').click(function(){
  console.log('click')
  $('.interviewLi2').addClass('active');
  $('.border2').addClass('active');
  $('.interviewLi1').removeClass('active');
  $('.border1').removeClass('active');
  $('.people1').css({
    'display' : 'none'
  })
  $('.people2').css({
    'display' : 'block'
  })
})

var controller = new ScrollMagic.Controller();
// 둥둥
var ani2_png1 = new TimelineMax();
ani2_png1.to($('.section2 .sec2Back1'), 1, {opacity: 1, delay: 1, animationName: 'pngAni1'})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.8
})
  .reverse(false)
  .setTween(ani2_png1)
  .addTo(controller);

var ani2_png2 = new TimelineMax();
ani2_png2.to($('.section2 .sec2Back2'), 1, {opacity: 1, delay: 1.5, animationName: 'pngAni2'})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.8
})
.reverse(false)
.setTween(ani2_png2)
.addTo(controller);

// csr 둥둥
// var ani2_png3 = new TimelineMax();
// ani2_png3.to($('.section5 .sec2Back2'), 1, {opacity: 1, delay: 1.5, animationName: 'pngAni2'})
// var scene = new ScrollMagic.Scene({
//   triggerElement: '.section2',
//   triggerHook: 0.8
// })
// .reverse(false)
// .setTween(ani2_png3)
// .addTo(controller);

// 생기면서 위로 올라오는 애니메이션

// section2 animation
var sec21 = new TimelineMax();
sec21.to($('.section2 .contentsArea .section2Text'), 1, {opacity: 1, delay: 0.6, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.9
})
  .reverse(false)
  .setTween(sec21)
  .addTo(controller);
  
var sec22 = new TimelineMax();
sec22.to($('.section2 .contentsArea .videoArea'), 1, {opacity: 1, delay: 1.5, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.9
})
  .reverse(false)
  .setTween(sec22)
  .addTo(controller);

var sec23 = new TimelineMax();
sec23.to($('.section2 .contentsArea .gifArea'), 1, {opacity: 1, delay: 3, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.9
})
  .reverse(false)
  .setTween(sec23)
  .addTo(controller);

// var sec24 = new TimelineMax();
// sec24.to($('.section2 .sec2Back1'), 1, {opacity: 1, delay: 1.5, top: 0})
// var scene = new ScrollMagic.Scene({
//   triggerElement: '.section2',
//   triggerHook: 0.9
// })
//   .reverse(false)
//   .setTween(sec24)
//   .addTo(controller);

// var sec25 = new TimelineMax();
// sec25.to($('.section2 .sec2Back2'), 1, {opacity: 1, delay: 3, top: 0})
// var scene = new ScrollMagic.Scene({
//   triggerElement: '.section2',
//   triggerHook: 0.9
// })
//   .reverse(false)
//   .setTween(sec25)
//   .addTo(controller);

// section3 animation
var sec31 = new TimelineMax();
sec31.to($('.section3 .section3Text'), 1, {opacity: 1, delay: 0.6, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section3',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec31)
.addTo(controller);

var sec32 = new TimelineMax();
sec32.to($('.section3 .applyBtn'), 1, {opacity: 1, delay: 0.6, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section3',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec32)
.addTo(controller);

var sec33 = new TimelineMax();
sec33.to($('.section3 .blockArea'), 1, {opacity: 1, delay: 1.5, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section3',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec33)
.addTo(controller);

// section4 animation
var sec41 = new TimelineMax();
sec41.to($('.section4 .section4Text'), 1, {opacity: 1, delay: 0.6, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section4',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec41)
.addTo(controller);

var sec42 = new TimelineMax();
sec42.to($('.section4 .interviewPeople'), 1, {opacity: 1, delay: 1, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section4',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec42)
.addTo(controller);

// section5 animation
var sec51 = new TimelineMax();
sec51.to($('.section5 .section5Text'), 1, {opacity: 1, delay: 1, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section5',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec51)
.addTo(controller);

var sec52 = new TimelineMax();
sec52.to($('.section5 .newsArea'), 1, {opacity: 1, delay: 3, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section5',
  triggerHook: 0.9
})
.reverse(false)
.setTween(sec52)
.addTo(controller);