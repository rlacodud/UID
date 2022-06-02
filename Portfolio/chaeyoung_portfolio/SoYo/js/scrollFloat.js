
var controller = new ScrollMagic.Controller();

var ani3_txt = new TimelineMax();
ani3_txt.to($('#section3 .mean'), 0.8, {opacity: 1, delay: 0.2, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani3_txt)
.addTo(controller);

var ani3_iphoneL = new TimelineMax();
ani3_iphoneL.to($('#section3 .iphoneL'), 0.8, {opacity: 1, delay: 0.6, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani3_iphoneL)
.addTo(controller);

var ani3_iphoneR = new TimelineMax();
ani3_iphoneR.to($('#section3 .iphoneR'), 0.8, {opacity: 1, delay: 0.8, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani3_iphoneR)
.addTo(controller);

var ani4_txt = new TimelineMax();
ani4_txt.to($('#section4 .mean'), 0.8, {opacity: 1, delay: 0.2, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani4_txt)
.addTo(controller);

var ani4_gif = new TimelineMax();
ani4_gif.to($('#section4 .meanCircle'), 1, {opacity: 1, delay: 0.8})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani4_gif)
.addTo(controller);

var ani5_txt = new TimelineMax();
ani5_txt.to($('#section5 .backgroundContainer'), 0.8, {opacity: 1, delay: 0.2, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_txt)
.addTo(controller);

var ani5_circle1 = new TimelineMax();
ani5_circle1.to($('#section5 .reasonContainer #reason li:first-child'), 1, {opacity: 1, delay: 0.4, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_circle1)
.addTo(controller);

var ani5_plus = new TimelineMax();
ani5_plus.to($('#section5 .reasonContainer #reason .plus'), 1, {opacity: 1, delay: 0.6, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_plus)
.addTo(controller);

var ani5_circle2 = new TimelineMax();
ani5_circle2.to($('#section5 .reasonContainer #reason .middle'), 1, {opacity: 1, delay: 0.6, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_circle2)
.addTo(controller);

var ani5_arrow = new TimelineMax();
ani5_arrow.to($('#section5 .reasonContainer #reason .arrow'), 1, {opacity: 1, delay: 0.8, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_arrow)
.addTo(controller);

var ani5_circle3 = new TimelineMax();
ani5_circle3.to($('#section5 .reasonContainer #reason li:last-child'), 1, {opacity: 1, delay: 1, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani5_circle3)
.addTo(controller);

var ani8_txt = new TimelineMax();
ani8_txt.to($('#section8 .textContainer'), 1, {opacity: 1, delay: 0.2, marginTop: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section8',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani8_txt)
.addTo(controller);

var ani8_emotion = new TimelineMax();
ani8_emotion.to($('#section8 .emotion'), 1, {opacity: 1, delay: 0.6})
var scene = new ScrollMagic.Scene({
  triggerElement: '#section8',
  triggerHook: 0.2
})
.reverse(true)
.setTween(ani8_emotion)
.addTo(controller);