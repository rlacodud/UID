console.log("start")

let number = 1;
$('.navBtn').click(function(){
    if (number == 1){
        $(this).find('.navBtn1').css({
            'display':'none'
        })
        $(this).find('.navBtn2').css({
            'display':'block'
        })
        $('.nav').css({
            'display':'block'
        })
        $('.grayBack').css({
            'display':'block'
        })
        number = 2;
    }
    else if (number == 2){
        $(this).find('.navBtn2').css({
            'display':'none'
        })
        $(this).find('.navBtn1').css({
            'display':'block'
        })
        $('.nav').css({
            'display':'none'
        })
        $('.grayBack').css({
            'display':'none'
        })
        number = 1;
    }
})


$('.sec1RankDiv').on('mouseenter',function(){
    console.log('안녕')
    $(this).find('.sec1Rank').css({
        'display':'block'
    })
})
$('.sec1RankDiv').on('mouseleave',function(){
    console.log('안녕')
    $(this).find('.sec1Rank').css({
        'display':'none'
    })
})

$('.sec2Slide').on('mouseenter',function(){
    console.log('안녕')
    $(this).find('.sec2Hover').css({
        'display':'block'
    })
    $(this).find(".sec2Hover_sub").addClass("active");
})
$('.sec2Slide').on('mouseleave',function(){
    console.log('안녕')
    $(this).find('.sec2Hover').css({
        'display':'none'
    })
    $(this).find(".sec2Hover_sub").removeClass("active");
})

$('.sec5Items').hover(function(){
    $(this).find('.before').css({
        'display':'none'
    })
    $(this).find('.after').css({
        'display':'block'
    })
    
}, function(){
    $(this).find('.before').css({
        'display':'block'
    })
    $(this).find('.after').css({
        'display':'none'
    })
})


$('.sec6Img').on('mouseenter',function(){
    console.log('안녕')
    $(this).find('.sec6ImgHover').css({
        'display':'block'
    })
})
$('.sec6Img').on('mouseleave',function(){
    console.log('안녕')
    $(this).find('.sec6ImgHover').css({
        'display':'none'
    })
})


// slick
    $('.single-itemmm').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        vertical : true,
    });
    $('.sec2Container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: 'calc(100vw*160 /1920)',
        slidesToShow: 4,
    });
    $('.sec4Container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: 'calc(100vw*120 /1920)',
        slidesToShow: 4,
    });
    $('.sec7Container').slick({
        // centerMode: true,
        // centerPadding: 'calc(100vw*10 /1920)',
        // slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
    $('.sec8Container').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: 'calc(100vw*10 /1920)',
        slidesToShow: 4,
        
    });


    $('.all').on('mouseover', function() {
        $('.all .bird').addClass('rotate')
      })
      
      $('.all').on('mouseleave', function() {
        $('.all .bird').removeClass('rotate')
      })



$('.sec8Slide2').on('mouseenter',function(){
    console.log('안녕')
    $(this).find('.sec8Hover').css({
        'display':'block'
    })
})
$('.sec8Slide2').on('mouseleave',function(){
    console.log('안녕')
    $(this).find('.sec8Hover').css({
        'display':'none'
    })
})

let count = 1;

// 1초(1000ms) 후 타이머가 만료될 때마다 콜백 함수가 호출된다.
// setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 Id를 반환한다.

const timeoutId = setInterval(() => {
  console.log(count) // 1 2 3 4 5
  if (count === 4) {
    // clearInterval(timeoutId)
    count = 1;
  }
  if (count == 1) {
    $('.sec3ListImg1, .sec3ListText1').css({
        'opacity':'0'
    })
    $('.sec3ListImg4, .sec3ListText2').css({
        'opacity':'1'
    })
  }
  if (count == 2) {
    $('.sec3ListImg4, .sec3ListText2').css({
        'opacity':'0'
    })
    $('.sec3ListImg5, .sec3ListText2').css({
        'opacity':'1'
    })
  }
  if (count == 3) {
    $('.sec3ListImg5, .sec3ListText2').css({
        'opacity':'0'
    })
    $('.sec3ListImg1, .sec3ListText1').css({
        'opacity':'1'
    })
  }
  count++

}, 3000)


$('.slick-arrow').hover(function(){
    console.log("aaa")
    $(this).addClass('active')
}, function(){
    $(this).removeClass('active')
})



//MO
$('.sec3Container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 1.5,
});
$('.sec10Container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 1.6,
});
$('.sec9Container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 1
    ,
});
$('.sec9Container').on('afterChange', function(event, slick, currentSlide){     
    // console.log(currentSlide);  
    $('#section9 img').removeClass('active'); 
    $('#section9 .slick-current img').addClass('active'); 
});

$(".img-bot-li").click(function(){
    $(".img-bot + img").removeClass("active");
    $(this).find(".img-bot + img").addClass("active");
})