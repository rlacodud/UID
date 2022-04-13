window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

var controller = new ScrollMagic.Controller();

var ani1_text_1 = new TimelineMax();
ani1_text_1.to($('#section1 .main-text-container .sub-title .p1'), 1, { opacity: 1, delay: 0, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section1',
  triggerHook: 0.2
})
  .reverse(false)
  .setTween(ani1_text_1)
  .addTo(controller);

var ani1_text_2 = new TimelineMax();
ani1_text_2.to($('#section1 .main-text-container .title .p1'), 1, { opacity: 1, delay: 0.3, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section1',
  triggerHook: 0.2
})
  .reverse(false)
  .setTween(ani1_text_2)
  .addTo(controller);
// -----------------------------------section2 banner1
var ani2_bannerContents1 = new TimelineMax();
ani2_bannerContents1.to($('#section2 .contents-container .banner-container .banner:first-child .image .img'), 0.4, { opacity: 0, delay: 0.2, animationName: 'imgUpAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_bannerContents1)
  .addTo(controller);

// -----------------------------------section2 banner1 title text
var ani2_banner_title1_1 = new TimelineMax();
ani2_banner_title1_1.to($('#section2 .contents-container .banner-container .banner-one .text-container .title .text .p1'), 1, { opacity: 1, delay: 0.3, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_banner_title1_1)
  .addTo(controller);

// -----------------------------------section2 banner1 contents text
var ani2_banner_contents1_1 = new TimelineMax();
ani2_banner_contents1_1.to($('#section2 .contents-container .banner-container .banner:first-child .text-container .contents .text .p1'), 1, { opacity: 1, delay: 0.4, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_banner_contents1_1)
  .addTo(controller);

// -----------------------------------section2 banner2
var ani2_bannerContents2 = new TimelineMax();
ani2_bannerContents2.to($('#section2 .contents-container .banner-container .banner:last-child .image .img'), 0.4, { opacity: 0, delay: 0.4, animationName: 'imgUpAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_bannerContents2)
  .addTo(controller);

// -----------------------------------section2 banner2 title text
var ani2_banner_title2_1 = new TimelineMax();
ani2_banner_title2_1.to($('#section2 .contents-container .banner-container .banner-two .text-container .title .text .p1'), 1, { opacity: 1, delay: 0.5, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_banner_title2_1)
  .addTo(controller);

// -----------------------------------section2 banner2 contents text
var ani2_banner_contents2_1 = new TimelineMax();
ani2_banner_contents2_1.to($('#section2 .contents-container .banner-container .banner-two .text-container .contents .text .p1'), 1, { opacity: 1, delay: 0.6, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani2_banner_contents2_1)
  .addTo(controller);

// -----------------------------------section3 text
var ani3_text1 = new TimelineMax();
ani3_text1.to($('#section3 #honda .text .p1'), 1, { opacity: 1, delay: 0.4, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_text1)
  .addTo(controller);

var ani3_text2 = new TimelineMax();
ani3_text2.to($('#section3 .sub-title h3'), 1, { opacity: 1, delay: 0.5, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_text2)
  .addTo(controller);

var ani3_text3 = new TimelineMax();
ani3_text3.to($('#section3 .ACCORD h2'), 1, { opacity: 1, delay: 0.6, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_text3)
  .addTo(controller);

var ani3_text4 = new TimelineMax();
ani3_text4.to($('#section3 .price h5'), 1, { opacity: 1, delay: 0.7, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_text4)
  .addTo(controller);

// -----------------------------------section3 keyword  
var ani3_keyword1 = new TimelineMax();
ani3_keyword1.to($('#section3 .keyword-container .keyword:nth-child(1)'), 0.4, { opacity: 1, delay: 0.8, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_keyword1)
  .addTo(controller);

var ani3_keyword2 = new TimelineMax();
ani3_keyword2.to($('#section3 .keyword-container .keyword:nth-child(2)'), 0.4, { opacity: 1, delay: 0.85, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_keyword2)
  .addTo(controller);

var ani3_keyword3 = new TimelineMax();
ani3_keyword3.to($('#section3 .keyword-container .keyword:nth-child(3)'), 0.4, { opacity: 1, delay: 0.9, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_keyword3)
  .addTo(controller);

// -----------------------------------section3 button  
var ani3_button = new TimelineMax();
ani3_button.to($('#section3 .button'), 0.6, { opacity: 1, delay: 1, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani3_button)
  .addTo(controller);

// -----------------------------------section4 text
var ani4_text1 = new TimelineMax();
ani4_text1.to($('#section4 .title p'), 0.4, { opacity: 1, delay: 0, animationName: 'sec4UpAni'})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani4_text1)
  .addTo(controller);

var ani4_banner1 = new TimelineMax();
ani4_banner1.to($('#section4 .banner-container .banner:nth-child(1)'), 0.8, { opacity: 1, delay: 0.3, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani4_banner1)
  .addTo(controller);

var ani4_banner2 = new TimelineMax();
ani4_banner2.to($('#section4 .banner-container .banner:nth-child(2)'), 0.8, { opacity: 1, delay: 0.4, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani4_banner2)
  .addTo(controller);

var ani4_banner3 = new TimelineMax();
ani4_banner3.to($('#section4 .banner-container .banner:nth-child(3)'), 0.8, { opacity: 1, delay: 0.5, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani4_banner3)
  .addTo(controller);

// -----------------------------------section6 text
var ani6_text1 = new TimelineMax();
ani6_text1.to($('#section6 .title .text .p1'), 1, { opacity: 1, delay: 0.4, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section6',
  triggerHook: 0.4
})
  .reverse(false)
  .setTween(ani6_text1)
  .addTo(controller);

// -----------------------------------section6 banner
var ani6_banner1 = new TimelineMax();
ani6_banner1.to($('#section6 .banner-container .banner:nth-child(1)'), 0.8, { opacity: 1, delay: 0.6, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section6',
  triggerHook: 0.4
})
  .reverse(true)
  .setTween(ani6_banner1)
  .addTo(controller);

var ani6_banner1 = new TimelineMax();
ani6_banner1.to($('#section6 .banner-container .banner:nth-child(2)'), 0.8, { opacity: 1, delay: 0.7, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section6',
  triggerHook: 0.5
})
  .reverse(true)
  .setTween(ani6_banner1)
  .addTo(controller);

var ani6_banner1 = new TimelineMax();
ani6_banner1.to($('#section6 .banner-container .banner:nth-child(3)'), 0.8, { opacity: 1, delay: 0.8, top: 0 })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section6',
  triggerHook: 0.5
})
  .reverse(true)
  .setTween(ani6_banner1)
  .addTo(controller);

// -----------------------------------section7 text
var ani7_text1 = new TimelineMax();
ani7_text1.to($('#section7 .title .text .p1'), 1, { opacity: 1, delay: 0.4, animationName: 'upAni' })
var scene = new ScrollMagic.Scene({
  triggerElement: '#section7',
  triggerHook: 0.8
})
  .reverse(false)
  .setTween(ani7_text1)
  .addTo(controller);
