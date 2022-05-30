console.log("start")

history.scrollRestoration = "manual"

function mainScrollEvent() {
    console.log('확인');


    let documentHeight = $(document).scrollTop();
    let windowHeight = $(window).height();
    let section6Top = jQuery('#section6').offset().top;
    let section7Top = jQuery('#section7').offset().top;
    let sectionScroll = section7Top - section6Top - windowHeight;

    // console.log("windowHeight:", windowHeight);
    // console.log("section6Top:", section6Top);
    // console.log("section7Top:", section7Top);
    // console.log(sectionScroll);

    if (section6Top < documentHeight) {
        $('.fixed-area').addClass('fixed');
    } else {
        $('.fixed-area').removeClass('fixed');
    }

    if (documentHeight >= section6Top + sectionScroll) {
        $('.fixed-area').removeClass('fixed');
        $('.fixed-area').addClass('absolute');
    } else if (documentHeight < section6Top + sectionScroll && documentHeight >= section6Top) {
        $('.fixed-area').addClass('fixed');
        $('.fixed-area').removeClass('absolute');
    }
    var convertPx = {
        vw: function (px) {
            px = parseFloat(px);
            var ww = $(window).width();

            return ww * px / 720;
        }
    }



    // let documentHeight = $(document).scrollTop();
    let section1Top = jQuery('.section1').offset().top;
    let section2Top = jQuery('.section2').offset().top;
    let section3Top = jQuery('#section3').offset().top;
    let section4Top = jQuery('#section4').offset().top;


    console.log('documentHeight = ' + documentHeight)
    // console.log('section2Top = '+ section2Top)
    // console.log('section3Top = '+ section3Top)

    // section1
    if (section1Top < documentHeight) {
        $('.sec1Container').addClass('fixed');
    } else {
        $('.sec1Container').removeClass('fixed');
    }
    if (section1Top < documentHeight && section1Top + 300 >= documentHeight) {
        $('.sec1Text1').css({
            'display': 'block'
        })
        $('.sec1Text2').css({
            'display': 'none'
        })
    }
    if (section1Top + 300 < documentHeight && section1Top + 600 >= documentHeight) {
        $('.sec1Text1').css({
            'display': 'none'
        })
        $('.sec1Text2').css({
            'display': 'block'
        })
    }
    if (section1Top + 600 >= documentHeight) {
        $('.sec1Container .video').css({
            'width': '100%',
            'height': '100vh',
            'top': '0'
        })
    }
    if (section1Top + 600 < documentHeight && section1Top + 700 >= documentHeight) {
        $('.sec1Container .video').css({
            'width': '100%',
            'height': '80vh',
            'top': 'calc(100vw*416/720)'
        })
        $('.sec1Text2').css({
            'display': 'none'
        })
    }
    if (section1Top + 700 < documentHeight && section1Top + 800 >= documentHeight) {
        $('.sec1Container .video').css({
            'width': '100%',
            'height': '60vh',
            'top': 'calc(100vw*516/720)'
        })
    }
    if (section1Top + 800 < documentHeight && section1Top + 900 >= documentHeight) {
        $('.sec1Container .video').css({
            'width': 'calc(100vw*463/720)',
            'height': 'calc(100vw*299/720)',
            'top': 'calc(100vw*616/720)'
        })
    } else {

    }

    // section2
    if (section2Top < documentHeight) {
        $('.sec2Container').addClass('fixed');
    } else {
        $('.sec2Container').removeClass('fixed');
    }

    if (section2Top < documentHeight && section2Top + 450 >= documentHeight) {
        $('.text1').css({
            'display': 'block'
        })
    } else {
        $('.text1').css({
            'display': 'none'
        })
    }
    if (section2Top + 450 < documentHeight && section2Top + 900 >= documentHeight) {
        $('.text1').css({
            'display': 'none'
        })
        $('.text2').css({
            'display': 'block'
        })
    } else {
        $('.text2').css({
            'display': 'none'
        })
    }
    // if (section2Top + 600 < documentHeight && section2Top + 900 >= documentHeight){
    //     $('.text2').css({
    //         'display':'none'
    //     })
    //     $('.text3').css({
    //         'display':'block',
    //         'opacity':'100%'
    //     })
    // } else {
    //     $('.text3').css({
    //         'display':'none'
    //     })
    // }
    if (section2Top + 600 < documentHeight) {
        $('.sec1Container').css({
            'display': 'none'
        })
    } else {
        $('.sec1Container').css({
            'display': 'block'
        })
    }
    if (section2Top + 900 < documentHeight && section2Top + 50000 >= documentHeight) {
        $('.gram').css({
            'opacity': '20%',
            'width': '100%',
            'top': '50%',
            'transform': 'translate(-50%,-50%)'
        })

    } else {
        $('.gram').css({
            'opacity': '100%',
            'width': 'calc(100vw*841/720)',
            'top': 'calc(100vw*418/720)',
            'transform': 'translateX(-50%)'
        })

    }

    if (section4Top < documentHeight) {
        $('.sec2Container').css({
            'display': 'none'
        })
        $('.sec3Container').css({
            'display': 'none'
        })
    } else {
        $('.sec2Container').css({
            'display': 'block'
        })
        $('.sec3Container').css({
            'display': 'block'
        })
    }

    // section3
    if (section3Top < documentHeight) {
        $('.sec3Container').addClass('fixed');
    } else {
        $('.sec3Container').removeClass('fixed');
    }

    if (section3Top < documentHeight && section3Top + 100 >= documentHeight) {
        $('.sec3Text1').css({
            'left': 'calc(100vw * 620 /720)'
        })
    } else {
        $('.sec3Text1').css({
            'left': 'calc(100vw * 720 /720)'
        })
    }
    if (section3Top + 100 < documentHeight && section3Top + 200 >= documentHeight) {
        $('.sec3Text1').css({
            'left': 'calc(100vw * 420 /720)'
        })
    }
    if (section3Top + 200 < documentHeight && section3Top + 300 >= documentHeight) {
        $('.sec3Text1').css({
            'left': 'calc(100vw * 220 /720)'
        })
    }
    if (section3Top + 300 < documentHeight && section3Top + 400 >= documentHeight) {
        $('.sec3Text1').css({
            'left': 'calc(100vw * 20 /720)'
        })
    }
    if (section3Top + 400 < documentHeight && section3Top + 700 >= documentHeight) {
        $('.sec3Text1').css({
            'display': 'block',
            'left': 'calc(100vw * -180 /720)'
        })
        $('.sec3Text2').css({
            'display': 'none'
        })
    }
    if (section3Top + 700 < documentHeight && section3Top + 1000 >= documentHeight) {
        $('.sec3Text1').css({
            'display': 'none'
        })
        $('.sec3Text2').css({
            'display': 'block'
        })
        $('.sec3Text3').css({
            'display': 'none'
        })
    }
    if (section3Top + 1000 < documentHeight && section3Top + 1300 >= documentHeight) {
        $('.sec3Text2').css({
            'display': 'none'
        })
        $('.sec3Text3').css({
            'display': 'block'
        })
    }


}

// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
$(document).ready(function () {
    console.log('레디');
    $(window).scroll(function () {
        // mainScrollEvent 함수를 호출하여 실행시킴
        mainScrollEvent();
    })
})

  // Swiper #section3
let slider = document.querySelector("#section8 .box-area");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);


function grabSlider(e) {
    console.log('grab');
    e.preventDefault();
    isGrab = true;
    startX = e.x;
    scrollLeft = slider.scrollLeft;
}

function grabMove(e) {
    console.log('grab2');
    e.preventDefault();
    if (!isGrab) return;
    let moveX = e.x;
    let walk = (moveX - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
}

// Swiper #section9

let sec4Slide = document.querySelector("#section4 .box-area");
sec4Slide.addEventListener("mousedown", grabSlider4);
sec4Slide.addEventListener("mousemove", grabMove4);
sec4Slide.addEventListener("mouseup", () => isGrab = false);
sec4Slide.addEventListener("mouseleave", () => isGrab = false);

// console.log(sec4Slide)

function grabSlider4(e) {
    console.log('grab3');
    e.preventDefault();
    isGrab = true;
    startX = e.x;
    scrollLeft = sec4Slide.scrollLeft;
}

function grabMove4(e) {
    console.log('grab4');
    e.preventDefault();
    if (!isGrab) return;
    let moveX = e.x;
    let walk = (moveX - startX) * 2;
    sec4Slide.scrollLeft = scrollLeft - walk;
}


