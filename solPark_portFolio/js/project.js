// 썸네일 마우스 따라 움직이기
$(document).mousemove(function(e){
    $('.projectThumb').css("top", e.pageY);
    $('.projectThumb').css("left", e.pageX);
});

for (let i=0; i < $('.workTitle').length; i++){
    
    // 타이틀 마우스 오버
    $('.workTitle').eq(i).mouseover(function(){
        $('.workName').eq(i).css({
            'display':'none'
        })
        $('.titleLong').eq(i).css({
            'display':'inline-block'
        })
        $('.projectThumb').eq(i).css({
            'display':'inline-block'
        })
    })

    // 타이틀 마우스 리브
    $('.workTitle').eq(i).mouseleave(function(){
        $('.workName').eq(i).css({
            'display':'inline-block'
        })
        $('.titleLong').eq(i).css({
            'display':'none'
        })
        $('.projectThumb').eq(i).css({
            'display':'none'
        })
    })
    
    // 클릭 후 상세 페이지로 이동
    $('.workTitle').eq(i).click(function(){
        $('.projectPage').eq(i).css({
            'display':'block',
        })
    })
}

// 딜리트
$('.deleteBtn').click(function(){
    $('.projectPage').css({
        'display':'none'
    })
})