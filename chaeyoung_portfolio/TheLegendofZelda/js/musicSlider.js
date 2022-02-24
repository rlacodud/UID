// Rotating Slider
    $(function ($) {
        $.fn.rotatingSlider = function (options) {
            var rotatingSlider = {
                init: function (el) {
                    this.$slider = $(el);
                    this.$slidesContainer = this.$slider.children('ul.slides');
                    this.$slides = this.$slidesContainer.children('li');
                    this.$clipPath;
                    this.$currentSlide;
                    this.$nextSlide;
                    this.$previousSlide;

                    this.settings = $.extend({
                        draggable: true,
                        rotationSpeed: 750,
                        slideHeight: 360,
                        slideWidth: 480,
                        beforeRotationStart: function () { },
                        afterRotationStart: function () { },
                        beforeRotationEnd: function () { },
                        afterRotationEnd: function () { }
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
                    if (this.markupIsValid) {
                        this.renderSlider();
                        this.setCurrentSlide();
                        this.bindEvents();
                        if (this.settings.autoRotate) {
                            this.startAutoRotate();
                        }
                    }
                },
                bindEvents: function () {
                    if (this.settings.draggable) {
                        this.$slidesContainer.on('mousedown touchstart', this.handleDragStart.bind(this));
                        this.$slidesContainer.on('mousemove touchmove', this.handleDragMove.bind(this));
                        this.$slidesContainer.on('mouseup mouseleave touchend', this.handleDragEnd.bind(this));
                    }
                },
                handleDragStart: function (e) {
                    this.readyToDrag = true;
                    this.dragStartPoint = (e.type === 'mousedown') ? e.pageX : e.originalEvent.touches[0].pageX;
                },
                handleDragMove: function (e) {
                    if (this.readyToDrag) {
                        var pageX = (e.type === 'mousemove') ? e.pageX : e.originalEvent.touches[0].pageX;
                        if (
                            this.currentlyDragging === false &&
                            this.currentlyRotating === false &&
                            (this.dragStartPoint - pageX > 10 || this.dragStartPoint - pageX < -10)
                        ) {
                            this.stopAutoRotate();
                            if (this.settings.directionControls) {
                                this.$directionControls.css('pointer-events', 'none');
                            }
                            window.getSelection().removeAllRanges();
                            this.currentlyDragging = true;
                            this.dragStartAngle = this.currentRotationAngle;
                        }
                        if (this.currentlyDragging) {
                            this.currentRotationAngle = this.dragStartAngle - ((this.dragStartPoint - pageX) / this.settings.slideWidth * this.slideAngle);
                            this.$slidesContainer.css('transform', 'translateX(-50%) rotate(' + this.currentRotationAngle + 'deg)');
                        }
                    }
                },
                handleDragEnd: function (e) {
                    this.readyToDrag = false;
                    if (this.currentlyDragging) {
                        this.currentlyDragging = false;
                        this.currentRotationAngle = Math.round(this.currentRotationAngle / this.slideAngle) * this.slideAngle;
                        this.rotate();
                        if (this.settings.directionControls) {
                            this.$directionControls.css('pointer-events', '');
                        }
                    }
                },
                handleLeftDirectionClick: function (e) {
                    e.preventDefault();
                    this.stopAutoRotate();
                    this.rotateClockwise();
                },
                handleRightDirectionClick: function (e) {
                    e.preventDefault();
                    this.stopAutoRotate();
                    this.rotateCounterClockwise();
                },
                renderSlider: function () {
                    var halfAngleRadian = this.slideAngle / 2 * Math.PI / 180;
                    var innerRadius = 1 / Math.tan(halfAngleRadian) * this.settings.slideWidth / 2;
                    var outerRadius = Math.sqrt(Math.pow(innerRadius + this.settings.slideHeight, 2) + (Math.pow((this.settings.slideWidth / 2), 2)));
                    upperArcHeight = outerRadius - (innerRadius + this.settings.slideHeight);
                    lowerArcHeight = innerRadius - (innerRadius * (Math.cos(halfAngleRadian)));
                    var slideFullWidth = (Math.sin(halfAngleRadian) * outerRadius) * 2;
                    var slideFullHeight = upperArcHeight + this.settings.slideHeight + lowerArcHeight
                    var slideSidePadding = (slideFullWidth - this.settings.slideWidth) / 2;
                    var fullArcHeight = outerRadius - (outerRadius * (Math.cos(halfAngleRadian)));
                    var lowerArcOffset = (slideFullWidth - (Math.sin(halfAngleRadian) * innerRadius * 2)) / 2;

                    /* Set height and width of slides container and offset width*/
                    this.$slidesContainer.css('height', outerRadius * 2 + 'px');
                    this.$slidesContainer.css('width', outerRadius * 2 + 'px');

                    /* Offset width and arc height */
                    this.$slidesContainer.css('transform', 'translateX(-50%)');
                    this.$slidesContainer.css('top', '-' + upperArcHeight + 'px');

                    /* Generate path for slide clipping */
                    var pathCoords = 'M 0 ' + fullArcHeight;
                    pathCoords += ' A ' + outerRadius + ' ' + outerRadius + ' 0 0 1 ' + slideFullWidth + ' ' + fullArcHeight;
                    pathCoords += ' L ' + (slideFullWidth - lowerArcOffset) + ' ' + slideFullHeight;
                    pathCoords += ' A ' + innerRadius + ' ' + innerRadius + ' 0 0 0 ' + lowerArcOffset + ' ' + slideFullHeight + ' Z';
                    //this.$slider.append('<svg><defs><clipPath id="slideClipPath"><path /></clipPath></defs></svg>');
                    this.$slider.find('#slideClipPath>path').attr('d', pathCoords);

                    /* Apply styles to each slide */
                    this.$slides.each(function (i, el) {
                        var $slide = $(el);
                        /* Set distance from point of rotation */
                        $slide.css('transform-origin', 'center ' + (innerRadius + this.settings.slideHeight) + 'px');

                        /* Offset container Arc Height */
                        $slide.css('top', upperArcHeight + 'px');

                        /* Offset Width, then Rotate Slide, then offset individual Top Arcs  */
                        $slide.css('transform', 'translateX(-50%) rotate(' + this.slideAngle * i + 'deg) translateY(-' + upperArcHeight + 'px)');

                        /* Add clipping path  */
                        $slide.css('-webkit-clip-path', 'url(#slideClipPath)');
                        $slide.css('clip-path', 'url(#slideClipPath)');
                    }.bind(this));

                },
                rotateClockwise: function () {
                    this.currentRotationAngle = this.currentRotationAngle + this.slideAngle;
                    this.rotate();
                },
                rotateCounterClockwise: function () {
                    this.currentRotationAngle = this.currentRotationAngle - this.slideAngle;
                    this.rotate();
                },
                rotate: function () {
                    this.beforeRotationStart();
                    this.currentlyRotating = true;
                    this.$slider.addClass('currently-rotating');
                    this.setCurrentSlide();

                    if (this.rotateTimeoutId) {
                        clearTimeout(this.rotateTimeoutId);
                        this.rotateTimeoutId = false;
                    }

                    this.$slidesContainer.css('transition', 'transform ' + (this.settings.rotationSpeed / 1000) + 's ease-in-out');
                    this.$slidesContainer.css('transform', 'translateX(-50%) rotate(' + this.currentRotationAngle + 'deg)');

                    this.afterRotationStart();

                    this.rotateTimeoutId = setTimeout(function () {
                        this.beforeRotationEnd();
                        this.currentlyRotating = false;
                        this.$slider.removeClass('currently-rotating');
                        this.$slidesContainer.css('transition', 'none');

                        /* keep currentRotationAngle between -360 and 360 */
                        if (this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360) {
                            this.currentRotationAngle = this.currentRotationAngle >= 360 ? this.currentRotationAngle - 360 : this.currentRotationAngle + 360;
                            this.$slidesContainer.css('transform', 'translateX(-50%) rotate(' + this.currentRotationAngle + 'deg)');
                        }
                        this.afterRotationEnd();
                    }.bind(this), this.settings.rotationSpeed);
                },
                setCurrentSlide: function () {
                    var currAngle = this.currentRotationAngle;
                    if (this.currentRotationAngle >= 360 || this.currentRotationAngle <= -360) {
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
                startAutoRotate: function () {
                    this.autoRotateIntervalId = setInterval(function () {
                        this.rotateCounterClockwise();
                    }.bind(this), this.settings.autoRotateInterval);
                },
                stopAutoRotate: function () {
                    if (this.autoRotateIntervalId) {
                        clearInterval(this.autoRotateIntervalId);
                        this.autoRotateIntervalId = false;
                    }
                },
                validateMarkup: function () {
                    if (
                        this.$slider.hasClass('rotating-slider') &&
                        this.$slidesContainer.length === 1 &&
                        this.$slides.length >= 2
                    ) {
                        this.markupIsValid = true;
                    } else {
                        this.$slider.css('display', 'none');
                        console.log('Markup for Rotating Slider is invalid.');
                    }
                },

                /* Callbacks */
                beforeRotationStart: function () {
                    this.settings.beforeRotationStart();
                },
                afterRotationStart: function () {
                    this.settings.afterRotationStart();
                },
                beforeRotationEnd: function () {
                    this.settings.beforeRotationEnd();
                },
                afterRotationEnd: function () {
                    this.settings.afterRotationEnd();
                },
            };

            return this.each(function () {
                rotatingSlider.init(this);
            });
        };
    });
    
    $(function () {
        $('.rotating-slider').rotatingSlider({
            slideHeight: Math.min(360, window.innerWidth - 80),
            slideWidth: Math.min(480, window.innerWidth - 80),
        });
    });

// Music Control
$(".rotating-slider ul.slides li").on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var id = $this.attr('id').replace(/cd/, '');
    $('audio[id^="audio"]')[id-1].play();
    $('.rotating-slider ul.slides li').addClass('off')
    $(this).addClass('active');
    $(this).children('.cdContents').addClass("on");
    $(this).children('.play').addClass("on");
    $(this).children('.name').addClass("on");
    $('.dim').addClass('on');
});

$('.dim').on('click', function (e) {
    e.preventDefault();
    $(this).removeClass('on');
    $('.rotating-slider ul.slides li').removeClass('active');
    $('.rotating-slider ul.slides li').removeClass('off');
    $('.name').removeClass("on");
    $('.cdContents').removeClass("on");
    $('.play').removeClass("on");
    $('.play').removeClass("active");
    audioPause();
});

$('.play').click(function(e){
    e.stopPropagation();
    var $this2 = $(this);
    var id2 = $this2.attr('id').replace(/btn/, '');
    $this2.toggleClass('active');
    if($this2.hasClass('active')){
        $(this).css('background-image', "url('./img/play.png')")
        $('audio[id^="audio"]')[id2-1].pause();
    } else {
        // console.log('얜가');
        $(this).css('background-image', "url('./img/pause.png')")
        $('audio[id^="audio"]')[id2-1].play();        
    }
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