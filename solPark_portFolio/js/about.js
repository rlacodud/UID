$('.profileDiv').mouseover(function(){
    console.log('뫄우스오붤')
    $('.profileDiv').addClass('open');
    // $('.profileText').css({
    //     'left':'332px',
    //     'display':'inline-block',
    //     'width':'300px',
    //     '-webkit-transition':'.5s',
    //     '-moz-transition':'.5s',
    //     '-ms-transition':'.5s',
    //     '-o-transition':'.5s',
    //     'transition':'.5s'
    // })

    $('.profileText').addClass('open');
    $('html').css({
        'background-color': 'black'
    })
    $('.hoverMe').addClass('none');
    $('.aboutMe1').addClass('block');
    $('.aboutMe2').addClass('block');
})

$('.profileDiv').mouseleave(function(){
    $('.profileText').removeClass('open');
    $('.profileDiv').removeClass('open');
    $('html').css({
        'background-color': 'white'
    })
    $('.hoverMe').removeClass('none');
    $('.aboutMe1').removeClass('block');
    $('.aboutMe2').removeClass('block');
})