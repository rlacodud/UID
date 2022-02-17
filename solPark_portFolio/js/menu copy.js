let menuSwitch = 0;
$('.menuIcon').click(function(){
    if (menuSwitch == 0) {
        $('.menuPage').css({
            'display':'block'
        })
        $('.menuIcon').css({
            'transform': 'rotate( 45deg )'
        })
        $('.menuIconBlack').css({
            'display':'none'
        })
        $('.menuIconWhite').css({
            'display':'block'
        })
        menuSwitch = 1;
    }
    else if (menuSwitch == 1) {
        $('.menuPage').css({
            'display':'none'
        })
        $('.menuIcon').css({
            'transform': 'rotate( 0deg )'
        })
        $('.menuIconBlack').css({
            'display':'block'
        })
        $('.menuIconWhite').css({
            'display':'none'
        })
        menuSwitch = 0;
    }
})

// list1
$('.li1').mouseenter(function(){
    $('.name1').css({
        'color':'black',
        'bottom':'calc(100vw*180/1920)'
    })
    $('.num1').css({
        'color':'black',
        'top':'calc(100vw*170/1920)',
    })
})
$('.li1').mouseleave(function(){
    $('.name1').css({
        'color':'white',
        'bottom':'calc(100vw*20/1920)'
    })
    $('.num1').css({
        'color':'white',
        'top':'calc(100vw*10/1920)',
    })
})

// list2
$('.li2').mouseenter(function(){
    $('.name2').css({
        'color':'black',
        'bottom':'calc(100vw*180/1920)'
    })
    $('.num2').css({
        'color':'black',
        'top':'calc(100vw*170/1920)',
    })
})
$('.li2').mouseleave(function(){
    $('.name2').css({
        'color':'white',
        'bottom':'calc(100vw*20/1920)'
    })
    $('.num2').css({
        'color':'white',
        'top':'calc(100vw*10/1920)',
    })
})

// list3
$('.li3').mouseenter(function(){
    $('.name3').css({
        'color':'black',
        'bottom':'calc(100vw*180/1920)'
    })
    $('.num3').css({
        'color':'black',
        'top':'calc(100vw*170/1920)',
    })
})
$('.li3').mouseleave(function(){
    $('.name3').css({
        'color':'white',
        'bottom':'calc(100vw*20/1920)'
    })
    $('.num3').css({
        'color':'white',
        'top':'calc(100vw*10/1920)',
    })
})

// list4
$('.li4').mouseenter(function(){
    $('.name4').css({
        'color':'black',
        'bottom':'calc(100vw*180/1920)'
    })
    $('.num4').css({
        'color':'black',
        'top':'calc(100vw*170/1920)',
    })
})
$('.li4').mouseleave(function(){
    $('.name4').css({
        'color':'white',
        'bottom':'calc(100vw*20/1920)'
    })
    $('.num4').css({
        'color':'white',
        'top':'calc(100vw*10/1920)',
    })
})

