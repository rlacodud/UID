console.log("start")


function mainScrollEvent() {

    var convertPx = {
        vw: function(px){
            px = parseFloat(px);
            var ww = $(window).width();
            
            return ww * px / 2560;
        }
      }

    let documentHeight = $(document).scrollTop();
    let section2Top = jQuery('#section2').offset().top;
    let section4Top = jQuery('#section4').offset().top;
    let sec4Box2Top = jQuery('.sec4Box2').offset().top;

console.log(documentHeight)
// console.log(sec4Box2Top)
    if (100 <= documentHeight) {
        $('.title51').css({
            'width': '719px'
        })
    }
    if (200 <= documentHeight) {
        $('.title51').css({
            'width': '477px'
        })
    }
    if (300 <= documentHeight) {
        $('.title51').css({
            'width': 'calc(100vw*235.97/2560)',
            'display':'block',
            'height':':calc(100vw*200/2560)'
        })
        $('.title51-2').css({
            'display': 'none'
        })
    }
    if (500 <= documentHeight) {
        $('.title51').css({
            'display': 'none'
        })
        $('.title51-2').css({
            'display': 'block'
        })
        $('#section1 .container .titleText1').css({
            'left': '10%',
        })
        $('#section1 .container .titleText2').css({
            'left': '90%',
        })
        $('#section1 .container .titleText3').css({
            'left': '10%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0'
        })
        $('#section1 .container .title51-2 .title1').css({
            'transform':'translateX(calc(100vw*0/2560))'
        })
        $('#section1 .container .title51-2 .title5').css({
            'transform':'translateX(0px)'
        })
        
    }
    if (600 <= documentHeight) {
        
        $('#section1 .container .titleText1').css({
            'left': '20%',
        })
        $('#section1 .container .titleText2').css({
            'left': '80%',
        })
        $('#section1 .container .titleText3').css({
            'left': '20%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.4'
        })
        $('#section1 .container .title51-2 .title1').css({
            'transform':'translateX(calc(100vw*-70/2560))'
        })
        $('#section1 .container .title51-2 .title5').css({
            'transform':'translateX(calc(100vw*30/2560))'

        })
        
    }
    if (700 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '30%',
        })
        $('#section1 .container .titleText2').css({
            'left': '70%',
        })
        $('#section1 .container .titleText3').css({
            'left': '30%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.6'
        })
        $('#section1 .container .title51-2 .title1').css({
            'transform':'translateX(calc(100vw*-140/2560))'
        })
        $('#section1 .container .title51-2 .title5').css({
            'transform':'translateX(calc(100vw*70/2560))'

        })

    }
    if (800 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '40%',
        })
        $('#section1 .container .titleText2').css({
            'left': '60%',
        })
        $('#section1 .container .titleText3').css({
            'left': '40%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.8'
        })
        $('#section1 .container .title51-2 .title1').css({
            'transform':'translateX(calc(100vw*-210/2560))'
        })
        $('#section1 .container .title51-2 .title5').css({
            'transform':'translateX(calc(100vw*110/2560))'
        })
    }
    if (900 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '50%',
        })
        $('#section1 .container .titleText2').css({
            'left': '50%',
            'display':'block'
        })
        $('#section1 .container .titleText3').css({
            'left': '50%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'1'
        })
        $('#section1 .container .title51-2 .title1').css({
            'transform':'translateX(calc(100vw*-288/2560))',
            'display':'block'
        })
        $('#section1 .container .title51-2 .title5').css({
            'transform':'translateX(calc(100vw*163/2560))',
            'display':'block'
        })
        $('#section1 .container .titleText22').css({
            'display': 'none',
        })
    }
    if (1100 <= documentHeight) {
        $('#section1 .container .titleText2').css({
            'display': 'none',
        })
        $('#section1 .container .title51-2 .title5').css({
            'display': 'none',
        })
        $('#section1 .container .title51-2 .title1').css({
            'display': 'none',
        })
        $('#section1 .container .titleText22').css({
            'display': 'block',
            'top':'50%'
        })
        $('#section1 .container .titleText23').css({
            'top': '50%',
        })
        
    }
    if (1300 <= documentHeight) {
        $('#section1 .container .titleText22').css({
            'top': '-50%',
        })
        $('#section1 .container .titleText23').css({
            'top': '-40%',
        })
        $('#section1 .container .titleText1').css({
            'left': '50%',
        })
        $('#section1 .container .titleText2Box').css({
            'left': '50%',
        })
        $('#section1 .container .titleText3').css({
            'left': '50%',
        })
        
    }
    if (1500 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '60%',
        })
        $('#section1 .container .titleText2Box').css({
            'left': '40%',
        })
        $('#section1 .container .titleText3').css({
            'left': '60%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.8'
        })
        
    }
    if (1600 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '70%',
        })
        $('#section1 .container .titleText2Box').css({
            'left': '30%',
        })
        $('#section1 .container .titleText3').css({
            'left': '70%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.6'
        })
        
    }
    if (1700 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '80%',
        })
        $('#section1 .container .titleText2Box').css({
            'left': '20%',
        })
        $('#section1 .container .titleText3').css({
            'left': '80%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0.4'
        })
        
    }
    if (1800 <= documentHeight) {
        $('#section1 .container .titleText1').css({
            'left': '90%',
        })
        $('#section1 .container .titleText2Box').css({
            'left': '10%',
        })
        $('#section1 .container .titleText3').css({
            'left': '90%',
        })
        $('#section1 .container .titleText').css({
            'opacity':'0'
        })
        
    }
    if (1900 <= documentHeight) {
        $('#section1 .container').css({
            'display': 'block',
        })
        $('.header').css({
            'opacity':'0'
        })
    }
    if (2000 <= documentHeight) {
        $('#section1 .container').css({
            'display': 'none',
        })
        $('.header').css({
            'opacity':'1'
        })
    }

    // section2 amimation
    if (section2Top-500 <= documentHeight && section2Top-400 > documentHeight) {
        // transform: translateY(-20%);
        $('.sec2Img').css({
            'transform':'translateY(100%)'
        })
    }
    if (section2Top-400 <= documentHeight && section2Top-300 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(80%)'
        })
    }
    if (section2Top-300 <= documentHeight && section2Top-200 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(60%)'
        })
    }
    if (section2Top-200 <= documentHeight && section2Top-100 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(40%)'
        })
    }
    if (section2Top-100 <= documentHeight && section2Top > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(20%)'
        })
    }
    if (section2Top <= documentHeight && section2Top+100 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(0)'
        })
    }
    if (section2Top+100 <= documentHeight && section2Top+200 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(-20%)'
        })
    }
    if (section2Top+200 <= documentHeight && section2Top+300 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(-40%)'
        })
    }
    if (section2Top+300 <= documentHeight && section2Top+400 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(-60%)'
        })
    }
    if (section2Top+400 <= documentHeight && section2Top+500 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(-80%)'
        })
    }
    if (section2Top+500 <= documentHeight && section2Top+600 > documentHeight) {
        $('.sec2Img').css({
            'transform':'translateY(-100%)'
        })
    }

    // section4 amimation
    // if (section4Top-500 <= documentHeight && section4Top-400 > documentHeight) {
    //     console.log('-500')
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'-15%'
    //     })
    // }
    // if (section4Top-400 <= documentHeight && section4Top-300 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'-12%'
    //     })
    // }
    // if (section4Top-300 <= documentHeight && section4Top-200 > documentHeight) {
    //     console.log('-300')

    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'-9%'
    //     })
    // }
    // if (section4Top-200 <= documentHeight && section4Top-100 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'-6%'
    //     })
    // }
    // if (section4Top-100 <= documentHeight && section4Top > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'-3%'
    //     })
    // }
    // if (section4Top <= documentHeight && section4Top+100 > documentHeight) {
    //     console.log('0')

    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'0'
    //     })
    // }
    // if (section4Top+100 <= documentHeight && section4Top+200 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'3%'
    //     })
    // }
    // if (section4Top+200 <= documentHeight && section4Top+300 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'6%'
    //     })
    // }
    // if (section4Top+300 <= documentHeight && section4Top+400 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'9%'
    //     })
    // }
    // if (section4Top+400 <= documentHeight && section4Top+500 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'12%'
    //     })
    // }
    // if (section4Top+500 <= documentHeight && section4Top+600 > documentHeight) {
    //     $('.sec4Box1 .contentBox .imgBox img').css({
    //         'top':'15%'
    //     })
    // }

    // sec4Box2 amimation
    // if (sec4Box2Top-convertPx.vw(1000) <= documentHeight && sec4Box2Top-convertPx.vw(900) > documentHeight) {
    //     console.log('-500')
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-15%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(900) <= documentHeight && sec4Box2Top-convertPx.vw(800) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-12%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(800) <= documentHeight && sec4Box2Top-convertPx.vw(700) > documentHeight) {
    //     console.log('-300')

    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-9%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(700) <= documentHeight && sec4Box2Top-convertPx.vw(600) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-6%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(600) <= documentHeight && sec4Box2Top-convertPx.vw(500) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-3%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(500) <= documentHeight && sec4Box2Top-convertPx.vw(400) > documentHeight) {
    //     console.log('0')

    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'0'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(400) <= documentHeight && sec4Box2Top-convertPx.vw(300) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'3%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(300) <= documentHeight && sec4Box2Top-convertPx.vw(200) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'6%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(200) <= documentHeight && sec4Box2Top-convertPx.vw(100) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'9%'
    //     })
    // }
    // if (sec4Box2Top-convertPx.vw(100) <= documentHeight && sec4Box2Top > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'12%'
    //     })
    // }
    // if (sec4Box2Top <= documentHeight && sec4Box2Top+convertPx.vw(100) > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'15%'
    //     })
    // }
    // if (sec4Box2Top-500 <= documentHeight && sec4Box2Top-400 > documentHeight) {
    //     console.log('-500')
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-15%'
    //     })
    // }
    // if (sec4Box2Top-400 <= documentHeight && sec4Box2Top-300 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-12%'
    //     })
    // }
    // if (sec4Box2Top-300 <= documentHeight && sec4Box2Top-200 > documentHeight) {
    //     console.log('-300')

    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-9%'
    //     })
    // }
    // if (sec4Box2Top-200 <= documentHeight && sec4Box2Top-100 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-6%'
    //     })
    // }
    // if (sec4Box2Top-100 <= documentHeight && sec4Box2Top > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'-3%'
    //     })
    // }
    // if (sec4Box2Top <= documentHeight && sec4Box2Top+100 > documentHeight) {
    //     console.log('0')

    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'0'
    //     })
    // }
    // if (sec4Box2Top+100 <= documentHeight && sec4Box2Top+200 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'3%'
    //     })
    // }
    // if (sec4Box2Top+200 <= documentHeight && sec4Box2Top+300 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'6%'
    //     })
    // }
    // if (sec4Box2Top+300 <= documentHeight && sec4Box2Top+400 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'9%'
    //     })
    // }
    // if (sec4Box2Top+400 <= documentHeight && sec4Box2Top+500 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'12%'
    //     })
    // }
    // if (sec4Box2Top+500 <= documentHeight && sec4Box2Top+600 > documentHeight) {
    //     $('.sec4Box2 .contentBox .imgBox img').css({
    //         'top':'15%'
    //     })
    // }
}

$('.imgBox').mouseover(function(){
    $(this).find('img').css({
        'transform':'scale(1.2)'
    })
    $(this).css({
        'transform':'scale(0.95)'

    })
})
$('.imgBox').mouseleave(function(){
    console.log('마우스오버')
    $(this).find('img').css({
        'transform':'scale(1)'
    })
    $(this).css({
        'transform':'scale(1)'
    })
})



  
// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
$(window).scroll(function () {
    // mainScrollEvent 함수를 호출하여 실행시킴
    mainScrollEvent();
  })
   