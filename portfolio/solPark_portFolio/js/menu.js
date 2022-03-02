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

// 메뉴 마우스 호버 및 리브 시
for (let i = 0; i < 4; i++){
    var $menuLi = $(".menuLi");
    // mouseenter
    $menuLi.eq(i).mouseenter(function(){
        $('.menuLi').eq(i).children(".menuName").css({
            'color':'black',
            'bottom':'calc(100vw*180/1920)'
        })
        $('.menuLi').eq(i).children(".menuNum").css({
            'color':'black',
            'top':'calc(100vw*170/1920)',
        })
    })
    // mouseleave
    $menuLi.eq(i).mouseleave(function(){
        $('.menuLi').eq(i).children(".menuName").css({
            'color':'white',
            'bottom':'calc(100vw*20/1920)'
        })
        $('.menuLi').eq(i).children(".menuNum").css({
            'color':'white',
            'top':'calc(100vw*10/1920)',
        })
    })
}