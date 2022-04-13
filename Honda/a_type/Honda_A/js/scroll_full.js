console.log('연결');
function mainScrollEvent() {

    let documentHeight = $(document).scrollTop();
    let section5Top = jQuery('#section5').offset().top;
    let section5Bottom = jQuery('#section5').offset().top + $('#section5').height() - $(window).height();

    var convertPx = {
        vw: function (px) {
            px = parseFloat(px);
            var ww = $(window).width();

            return ww * px / 1920;
        }
    }
    console.log('documentHeight = '+ documentHeight)
    console.log('section5Top = '+ section5Top)
    console.log('section5Bottom = '+ section5Bottom)
    if (documentHeight >= section5Top) {
        $('.videoBox').addClass('fixed');

    } else {
        $('.videoBox').removeClass('fixed');
        $('.videoContainer video').css({
            'height': convertPx.vw(400)
        })
        $('.videoContainer .text').css({
            'opacity': '1'
        }) 
    }
    if (documentHeight >= section5Top && documentHeight < section5Top + 100) {
        $('.videoContainer video').css({
            'height': convertPx.vw(500)
        })
        $('.videoContainer .text').css({
            'opacity': '0.8'
        })
    }
    if (documentHeight >= section5Top + 100 && documentHeight < section5Top + 200) {
        $('.videoContainer video').css({
            'height': convertPx.vw(600)
        })
        $('.videoContainer .text').css({
            'opacity': '0.6'
        })
    }
    if (documentHeight >= section5Top + 200 && documentHeight < section5Top + 300) {
        $('.videoContainer video').css({
            'height': convertPx.vw(700)
        })
        $('.videoContainer .text').css({
            'opacity': '0.4'
        })
    }
    if (documentHeight >= section5Top + 300 && documentHeight < section5Top + 400) {
        $('.videoContainer video').css({
            'height': convertPx.vw(800)
        })
        $('.videoContainer .text').css({
            'opacity': '0.2'
        })
    }
    if (documentHeight >= section5Top + 400 && documentHeight < section5Top + 500) {
        $('.videoContainer video').css({
            'height': '100vh'
        })
        $('.videoContainer .text').css({
            'opacity': '0'
        })
        $('.videoContainer .text').css({
            'top': '50%'
        }) 
    }
    if (documentHeight >= section5Bottom) {
        $('.videoBox').addClass('absolute');
        $('.videoBox').removeClass('fixed');
    } else if (documentHeight < section5Bottom && documentHeight >= section5Top) {
        $('.videoBox').addClass('fixed');
        $('.videoBox').removeClass('absolute');
    }
}

// $('#section8 .background-white') 1920 1820
// $('#section8 .background-white') 1080 1000
// $('#section8 .background-white .background-image') 1820 1732
// $('#section8 .background-white .background-image') 965 900
var transitionWhiteWidth = 100;
var transitionWhiteHeight = 100;
var transitionImgWidth = 95;
var transitionImgHeight = 85;
var transitionY = 0;
var section8Top = jQuery('#section8').offset().top;
function scrollTextMove(e) {
    var convertPx = {
        vw: function (px) {
            px = parseFloat(px);
            var ww = $(window).width();

            return ww * px / 1920;
        }
    }
    if ($(window).scrollTop() > section8Top - convertPx.vw(500)) {
        if (e.wheelDelta < 0) {
            // console.log("마우스아래");
            if (transitionWhiteWidth >= 95) {
                transitionWhiteWidth--;;
                $('#section8 .background-white').css({
                    'width': transitionWhiteWidth + '%'
                });                
            }
            if (transitionWhiteHeight > 95) {
                transitionWhiteHeight--;
                $('#section8 .background-white').css({
                    'height': transitionWhiteHeight + '%'
                });
            }
            if (transitionImgWidth > 90) {
                transitionImgWidth--;
                $('#section8 .background-white .background-image').css({
                    'width': transitionImgWidth + '%'
                });
            }
            if (transitionImgHeight > 83) {
                transitionImgHeight--;
                $('#section8 .background-white .background-image').css({
                    'height': transitionImgHeight + '%'
                });
            }
            if (transitionY > -35) {
                transitionY-=5;
                $('#section8 .background').css({
                    'transform': 'translateY(' + transitionY +'%'
                });
            }
        }
    }
    if (e.wheelDelta > 0) {
        if (transitionWhiteWidth < 100) {
            transitionWhiteWidth++;
            $('#section8 .background-white').css({
                'width': transitionWhiteWidth + '%'
            });
        }
        if (transitionWhiteHeight < 100) {
            transitionWhiteHeight++;
            $('#section8 .background-white').css({
                'height': transitionWhiteHeight + '%'
            });
        }
        if (transitionImgWidth < 95) {
            transitionImgWidth++;
            $('#section8 .background-white .background-image').css({
                'width': transitionImgWidth + '%'
            });
        }
        if (transitionImgHeight < 85) {
            transitionImgHeight++;
            $('#section8 .background-white .background-image').css({
                'height': transitionImgHeight + '%'
            });
        }
        if (transitionY < 0) {
        transitionY+=5;
        console.log(transitionY);
        $('#section8 .background').css({
            'transform': 'translateY(' + transitionY +'%'
        });
    }
    }
};

$(window).scroll(function () {
    mainScrollEvent();
})
window.addEventListener('mousewheel', scrollTextMove);
$(window).resize(function () {
    mainScrollEvent();
})