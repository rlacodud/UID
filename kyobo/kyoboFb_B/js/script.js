console.log("start")

$('.sec5Items').click(function(){
    $(this).find('.before').css({
        'display':'none'
    })
    $(this).find('.after').css({
        'display':'block'
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

    $('.single-itemmm').slick();
    $('.sec2Container').slick({
        centerMode: true,
        centerPadding: 'calc(100vw*160 /1920)',
        slidesToShow: 4,
    });
    $('.sec4Container').slick({
        centerMode: true,
        centerPadding: 'calc(100vw*120 /1920)',
        slidesToShow: 4,
    });
