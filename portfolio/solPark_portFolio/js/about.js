$('.profileDiv').mouseover(function(){
    $('.profileDiv').addClass('open');

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