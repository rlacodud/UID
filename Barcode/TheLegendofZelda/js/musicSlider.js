(function($){
  $.fn.rotatingSlider = function(options){
      var rotatingSlider = {
          init: function(el){
              this.$slider = $(el);
              this.$slidesContainer = this.$slider.children('ul.slides');
              this.$slides = this.$slidesContainer.children('li');
              this.$clipPath;
              this.$currentSlide;
              this.$nextSlide;
              this.$previousSlide;
              
              this.settings = $.extend({
                //   autoRotate: true,
                //   autoRotateInterval: 6000,
                  draggable: true,
                  rotationSpeed: 750,
                  slideHeight: 360,
                  slideWidth: 480,
                  /* Callback Functions */
                  beforeRotationStart: function(){},
                  afterRotationStart: function(){},
                  beforeRotationEnd: function(){},
                  afterRotationEnd: function(){}
              }, options);
              
              this.slideAngle = 360 / this.$slides.length;
              this.currentRotationAngle = 0;
              this.autoRotateIntervalId = false;
              this.rotateTimoutId = false;
              this.currentlyRotating = false;
              this.readyToDrag = false;
              this.dragStartPoint;
              this.dragStartAngle;
              this.currentlyDragging = false;
              this.markupIsValid = false;
              
              this.validateMarkup();
              if(this.markupIsValid){
                  this.renderSlider();
                  this.setCurrentSlide();
                  this.bindEvents();
                  if(this.settings.autoRotate){
                      this.startAutoRotate();
                  }
              }
          },
          bindEvents: function(){
              if(this.settings.draggable){
                  this.$slidesContainer.on('mousedown touchstart', this.handleDragStart.bind(this));
                  this.$slidesContainer.on('mousemove touchmove', this.handleDragMove.bind(this));
                  this.$slidesContainer.on('mouseup mouseleave touchend', this.handleDragEnd.bind(this));
              }
          },
          handleDragStart: function(e){
              this.readyToDrag = true;
              this.dragStartPoint = (e.type === 'mousedown') ? e.pageX : e.originalEvent.touches[0].pageX;
          },
          handleDragMove: function(e){
              if(this.readyToDrag){
                  var pageX = (e.type === 'mousemove') ? e.pageX : e.originalEvent.touches[0].pageX;
                  if(
                      this.currentlyDragging === false && 
                      this.currentlyRotating === false  &&
                      (this.dragStartPoint - pageX > 10 || this.dragStartPoint - pageX < -10)
                  ){
                      this.stopAutoRotate();
                      if(this.settings.directionControls){
                          this.$directionControls.css('pointer-events', 'none');
                      }
                      window.getSelection().removeAllRanges();
                      this.currentlyDragging = true;
                      this.dragStartAngle = this.currentRotationAngle;
                  }
                  if(this.currentlyDragging){
                      this.currentRotationAngle = this.dragStartAngle - ((this.dragStartPoint - pageX) / this.settings.slideWidth * this.slideAngle);
                      this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');
                  }
              }
          },
          handleDragEnd: function(e){
              this.readyToDrag = false;
              if(this.currentlyDragging){
                  this.currentlyDragging = false;
                  this.currentRotationAngle = Math.round(this.currentRotationAngle/this.slideAngle)*this.slideAngle;
                  this.rotate();
                  if(this.settings.directionControls){
                      this.$directionControls.css('pointer-events', '');
                  }
              }
          },
          handleLeftDirectionClick: function(e){
              e.preventDefault();
              this.stopAutoRotate();
              this.rotateClockwise();
          },
          handleRightDirectionClick: function(e){
              e.preventDefault();
              this.stopAutoRotate();
              this.rotateCounterClockwise();
          },
          renderSlider: function(){
              var halfAngleRadian = this.slideAngle / 2 * Math.PI/180;
              var innerRadius = 1 / Math.tan(halfAngleRadian) * this.settings.slideWidth / 2;
              var outerRadius = Math.sqrt(Math.pow(innerRadius + this.settings.slideHeight, 2) + (Math.pow((this.settings.slideWidth / 2), 2)));
              upperArcHeight = outerRadius - (innerRadius + this.settings.slideHeight);
              lowerArcHeight = innerRadius - (innerRadius * (Math.cos(halfAngleRadian)));
              var slideFullWidth = (Math.sin(halfAngleRadian) * outerRadius) * 2;
              var slideFullHeight = upperArcHeight + this.settings.slideHeight + lowerArcHeight
              var slideSidePadding = (slideFullWidth - this.settings.slideWidth) / 2;
              var fullArcHeight = outerRadius - (outerRadius * (Math.cos(halfAngleRadian)));
              var lowerArcOffset = (slideFullWidth - (Math.sin(halfAngleRadian) * innerRadius * 2)) / 2;

              /* Set height and width of slider element */
              //this.$slider.css('height', this.settings.slideHeight+'px');
              //this.$slider.css('width', this.settings.slideWidth+'px');

              /* Set height and width of slides container and offset width*/
              this.$slidesContainer.css('height', outerRadius*2+'px');
              this.$slidesContainer.css('width', outerRadius*2+'px');

              /* Offset width and arc height */
              this.$slidesContainer.css('transform', 'translateX(-50%)');
              this.$slidesContainer.css('top', '-'+ upperArcHeight +'px');

              /* Generate path for slide clipping */
              var pathCoords = 'M 0 '+fullArcHeight;
              pathCoords += ' A '+outerRadius+' '+outerRadius+' 0 0 1 '+slideFullWidth+' '+fullArcHeight;
              pathCoords += ' L '+(slideFullWidth-lowerArcOffset)+' '+slideFullHeight;
              pathCoords += ' A '+innerRadius+' '+innerRadius+' 0 0 0 '+lowerArcOffset+' '+slideFullHeight+' Z';
              //this.$slider.append('<svg><defs><clipPath id="slideClipPath"><path /></clipPath></defs></svg>');
              this.$slider.find('#slideClipPath>path').attr('d', pathCoords);

              /* Apply styles to each slide */
              this.$slides.each(function(i, el){
              var $slide = $(el);
                  /* Set distance from point of rotation */
                  $slide.css('transform-origin', 'center '+(innerRadius + this.settings.slideHeight)+'px');

                  /* Set slide Height and Width */
                  //$slide.css('height', this.settings.slideHeight+'px');
                  //$slide.css('width', this.settings.slideWidth+'px');

                  /* Set calculated padding for width, upper arc height, and lower arc height */
                //   $slide.css('padding', upperArcHeight +'px '+slideSidePadding+'px '+lowerArcHeight+'px '+slideSidePadding+'px ');

                  /* Offset container Arc Height */
                  $slide.css('top', upperArcHeight +'px');

                  /* Offset Width, then Rotate Slide, then offset individual Top Arcs  */
                  $slide.css('transform', 'translateX(-50%) rotate('+this.slideAngle * i+'deg) translateY(-'+ upperArcHeight +'px)');

                  /* Add clipping path  */
                  $slide.css('-webkit-clip-path', 'url(#slideClipPath)');
                  $slide.css('clip-path', 'url(#slideClipPath)');
              }.bind(this));
              
          },
          rotateClockwise: function(){
              this.currentRotationAngle = this.currentRotationAngle + this.slideAngle;
              this.rotate();
          },
          rotateCounterClockwise: function(){
              this.currentRotationAngle = this.currentRotationAngle - this.slideAngle;
              this.rotate();
          },
          rotate: function(){
              this.beforeRotationStart();
              this.currentlyRotating = true;
              this.$slider.addClass('currently-rotating');
              this.setCurrentSlide();

              if(this.rotateTimeoutId){
                  clearTimeout(this.rotateTimeoutId);
                  this.rotateTimeoutId = false;
              }
              
              this.$slidesContainer.css('transition', 'transform '+(this.settings.rotationSpeed/1000)+'s ease-in-out');
              this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');

              this.afterRotationStart();
              
              this.rotateTimeoutId = setTimeout(function(){
                  this.beforeRotationEnd();
                  this.currentlyRotating = false;
                  this.$slider.removeClass('currently-rotating');
                  this.$slidesContainer.css('transition', 'none');

                  /* keep currentRotationAngle between -360 and 360 */
                  if(this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360){
                      this.currentRotationAngle = this.currentRotationAngle >= 360 ? this.currentRotationAngle - 360 : this.currentRotationAngle + 360;
                      this.$slidesContainer.css('transform', 'translateX(-50%) rotate('+this.currentRotationAngle+'deg)');
                  }
                  this.afterRotationEnd();
              }.bind(this), this.settings.rotationSpeed);
          },
          setCurrentSlide: function(){
              var currAngle = this.currentRotationAngle;
              if(this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360){
                   currAngle = currAngle >= 360 ? currAngle - 360 : currAngle + 360;
              }
              this.$currentSlide = this.$slides.eq(-currAngle / this.slideAngle);
              this.$nextSlide = (this.$currentSlide.is(':last-child') ? this.$slides.first() : this.$currentSlide.next());
              this.$previousSlide = (this.$currentSlide.is(':first-child') ? this.$slides.last() : this.$currentSlide.prev());

              this.$slides.removeClass('active-slide');
              this.$slides.removeClass('next-slide');
              this.$slides.removeClass('previous-slide');

              this.$currentSlide.addClass('active-slide');
              this.$nextSlide.addClass('next-slide');
              this.$previousSlide.addClass('previous-slide');
          },
          startAutoRotate: function(){
              this.autoRotateIntervalId = setInterval(function(){
                  this.rotateCounterClockwise();
              }.bind(this), this.settings.autoRotateInterval);
          },
          stopAutoRotate: function(){
              if(this.autoRotateIntervalId){
                  clearInterval(this.autoRotateIntervalId);
                  this.autoRotateIntervalId = false;
              }
          },
          validateMarkup: function(){
              if(
                  this.$slider.hasClass('rotating-slider') &&
                  this.$slidesContainer.length === 1 &&
                  this.$slides.length >= 2
              ){
                  this.markupIsValid = true;
              }else{
                  this.$slider.css('display', 'none');
                  console.log('Markup for Rotating Slider is invalid.');
              }
          },

          /* Callbacks */
          beforeRotationStart: function(){
              this.settings.beforeRotationStart();
          },
          afterRotationStart: function(){
              this.settings.afterRotationStart();
          },
          beforeRotationEnd: function(){
              this.settings.beforeRotationEnd();
          },
          afterRotationEnd: function(){
              this.settings.afterRotationEnd();
          },
      };

      return this.each(function(){
          rotatingSlider.init(this);
      });
  };
}(jQuery));

$(function(){ 
  $('.rotating-slider').rotatingSlider({
  slideHeight : Math.min(360, window.innerWidth -80),
  slideWidth : Math.min(480, window.innerWidth - 80),
});
});

$(".rotating-slider ul.slides li").on('click', function(e) {
    e.preventDefault();
    $('.rotating-slider ul.slides li').addClass('off')
    $(this).addClass('active');
    $(this).children('.cdContents').addClass("on");
    $(this).children('.play').addClass("on");
    $(this).children('.name').addClass("on");
    $('.dim').addClass('on');
});

$('.dim').on('click', function(e) {
    e.preventDefault();
    $(this).removeClass('on');
    $('.rotating-slider ul.slides li').removeClass('active');
    $('.rotating-slider ul.slides li').removeClass('off');
    $('.rotating-slider ul.slides li').removeClass('off');
    $('.name').removeClass("on");
    $('.cdContents').removeClass("on");
    $('.play').removeClass("on");
    audioPause();
});

var count = 1;
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');
var audio6 = document.getElementById('audio6');
var audio7 = document.getElementById('audio7');
var audio8 = document.getElementById('audio8');

var li1 = $('.slides li:nth-child(1)');
var li2 = $('.slides li:nth-child(2)');
var li3 = $('.slides li:nth-child(3)');
var li4 = $('.slides li:nth-child(4)');
var li5 = $('.slides li:nth-child(5)');
var li6 = $('.slides li:nth-child(6)');
var li7 = $('.slides li:nth-child(7)');
var li8 = $('.slides li:nth-child(8)');
// console.log($('.slides li:nth-child(1)'));
$(".play").on('click', function(e) {
    console.log('되냐');
    e.preventDefault();
    if (count % 2 === 1) {
        $(this).css('background-image', "url('../img/pause.png')")
    } if (count % 2 === 0) {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        $(this).css('background-image', "url('../img/play.png')")
    }
    count += 1;
    console.log(count);
});

function audioPause() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
}

  function audio1Play () {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(1)').on('click', audio1Play);

  function audio2Play () {
    audio1.pause();
    audio2.play();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(2)').on('click', audio2Play);

  function audio3Play () {
    audio1.pause();
    audio2.pause();
    audio3.play();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(3)').on('click', audio3Play);

  function audio4Play () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.play();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(4)').on('click', audio4Play);

  function audio5Play () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.play();
    audio6.pause();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(5)').on('click', audio5Play);

  function audio6Play () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.play();
    audio7.pause();
    audio8.pause();
  }
  $('.slides li:nth-child(6)').on('click', audio6Play);

  function audio7Play () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.play();
    audio8.pause();
  }
  $('.slides li:nth-child(7)').on('click', audio7Play);

  function audio8Play () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.play();
  }
  $('.slides li:nth-child(8)').on('click', audio8Play);

  console.log($('#audio'));