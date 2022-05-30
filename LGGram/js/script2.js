console.log('ver3')
function penScrollEvent() {
  var convertPx = {
    vw: function(px){
        px = parseFloat(px);
        var ww = $(window).width();
        return ww * px / 720;
    }
  }

  let documentHeight = $(document).scrollTop();
  let windowHeight = $(window).height();
  let section6Top = jQuery('#section6').offset().top;
  let section6Bottom = jQuery('#section6').offset().top + $('#section6').height();
  let section7Top = jQuery('#section7').offset().top;
  let sectionScroll = documentHeight-section6Top;
  let fixedAreaBottom = jQuery('.fixed-area').offset().top + $('.fixed-area').height();
  
  // console.log("windowHeight:", windowHeight);
  // console.log("section6Top:", section6Top);
  // console.log("section7Top:", section7Top);
  // console.log(sectionScroll);
  console.log('fixedAreaBottom = '+ fixedAreaBottom);
  console.log('section7Top = '+ section7Top);

  if (section6Top < documentHeight) {
    $('.fixed-area').addClass('fixed');
  } else {
    $('.fixed-area').removeClass('fixed');
  }

  // if (fixedAreaBottom >= section7Top) {
  //   console.log('ddd')
  //   // $('.fixed-area').removeClass('fixed');
  //   // $('.fixed-area').addClass('absolute');
  // } else if (documentHeight < section6Top +sectionScroll && documentHeight >= section6Top){
  //   // $('.fixed-area').addClass('fixed');
  //   // $('.fixed-area').removeClass('absolute');
  // }

  if (documentHeight > section7Top - windowHeight) {
    console.log('그렇습니다');
    $('.fixed-area').removeClass('fixed');
    $('.fixed-area').addClass('absolute');
  } else if (documentHeight < section7Top - windowHeight && documentHeight >= section6Top){
    $('.fixed-area').addClass('fixed');
    $('.fixed-area').removeClass('absolute');
  }
  
}
// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
$(window).scroll(function () {
  // mainScrollEvent 함수를 호출하여 실행시킴
  penScrollEvent();
})

gsap.set('.scrollDist4', {width:'720px', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist4', start:'top bottom', end:'bottom bottom', scrub:0}})
.fromTo('.sub-area', {y: 0},{y: 0}, 0)

.fromTo('.pen2', {scale: 0.15},{scale: 0.15}, 0) 
.fromTo('.pen2', {y: -200},{y: -200}, 0)
.fromTo('.pen2', {x: -200},{x: -200}, 0)
.fromTo('.pen2', {rotation: -28},{rotation: -28}, 0)

gsap.set('.scrollDist3', {width:'720px', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist3', start:'top bottom', end:'bottom bottom', scrub:0}})
.fromTo('.title-area', {y: 0},{y: -1200}, 0)
.fromTo('.line-area', {y: 0},{y: -1200}, 0)
.fromTo('.background-area', {y: 0},{y: -1200}, 0)
.fromTo('.sub-area', {y: 1200},{y: 0}, 0)

// .fromTo('.pen1', {y: 555},{y: -300}, 0)
// .fromTo('.pen1', {x: 130},{x: 500}, 0)
// .fromTo('.pen1', {rotation: -50},{rotation: -40}, 0)

.fromTo('.pen2', {scale: 1},{scale: 0.15}, 0) 
.fromTo('.pen2', {y: 48},{y: -200}, 0)
.fromTo('.pen2', {x: -50},{x: -200}, 0)
.fromTo('.pen2', {rotation: -95},{rotation: -28}, 0)


gsap.set('.scrollDist2', {width:'720px', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist2', start:'top bottom', end:'bottom bottom', scrub:0}})

.fromTo('.pen2', {y: 48},{y: 48}, 0)
.fromTo('.pen2', {x: -15},{x: -50}, 0)
.fromTo('.pen2', {rotation: -55},{rotation: -95}, 0)

gsap.set('.scrollDist1', {width:'720px', height:'30%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist1', start:'top top', end:'bottom bottom', scrub:0}})
.fromTo('.pen1', {opacity: 100},{opacity: 0}, 0)
.fromTo('.pen1', {y: 0},{y: 180}, 0)
.fromTo('.pen1', {x: 0},{x: -40}, 0)
.fromTo('.pen1', {rotation: 0},{rotation: -35}, 0)

.fromTo('.pen2', {y: 0},{y: 48}, 0) 
.fromTo('.pen2', {x: 0},{x: -15}, 0)
.fromTo('.pen2', {rotation: 0},{rotation: -55}, 0)