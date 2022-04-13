$(document).ready(function(){
  
  $('.tab-link').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tab-link').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

    $('#tab-2').hover(() => {
      $('.tabs li:nth-child(2)').css({
        'font-weight': '700',
        'line-height': 'calc(100vw * 29 /1920)',
        'color': '#DD001A'
      })
    })

  $('.con3Btn1').click(function(){
    $('.con3Btn1').addClass('active');
    $('.con3Btn2').removeClass('active');
  })
  $('.con3Btn2').click(function(){
    $('.con3Btn2').addClass('active');
    $('.con3Btn1').removeClass('active');
  });

  // let btn1 = 1;
  // $('.Question1').click(function(){
  //   $('.choice1').css({
  //     'display':'block'
  //   })
  //   $('.choice2').css({
  //     'display':'none'
  //   })
  //   if (btn1 === 1){
  //     $('.choice1-1').css({
  //       'display':'none'
  //     })
  //     $('.choice1-2').css({
  //       'display':'block'
  //     })
  //     btn1 = 2;
      
  //     console.log('1')
  //   }
  //   else if (btn1 === 2){
  //     $('.choice1-1').css({
  //       'display':'block'
  //     })
  //     $('.choice1-2').css({
  //       'display':'none'
  //     })
  //     btn1 = 1;
  //     console.log('2')
  //   }
  // })

  // let btn2 = 1;
  // $('.Question2').click(function(){
  //   $('.choice1').css({
  //     'display':'block'
  //   })
  //   $('.choice2').css({
  //     'display':'none'
  //   })
  //   if (btn2 === 1){
  //     $('.choice2-1').css({
  //       'display':'none'
  //     })
  //     $('.choice2-2').css({
  //       'display':'block'
  //     })
  //     btn2 = 2;
      
  //     console.log('1')
  //   }
  //   else if (btn2 === 2){
  //     $('.choice2-1').css({
  //       'display':'block'
  //     })
  //     $('.choice2-2').css({
  //       'display':'none'
  //     })
  //     btn2 = 1;
  //     console.log('2')
  //   }
  // })

  // let btn3 = 1;
  // $('.Question3').click(function(){
  //   $('.choice1').css({
  //     'display':'block'
  //   })
  //   $('.choice2').css({
  //     'display':'none'
  //   })
  //   if (btn3 === 1){
  //     $('.choice3-1').css({
  //       'display':'none'
  //     })
  //     $('.choice3-2').css({
  //       'display':'block'
  //     })
  //     btn3 = 2;
      
  //     console.log('1')
  //   }
  //   else if (btn3 === 2){
  //     $('.choice3-1').css({
  //       'display':'block'
  //     })
  //     $('.choice3-2').css({
  //       'display':'none'
  //     })
  //     btn3 = 1;
  //     console.log('2')
  //   }
  // })

  // let btn4 = 1;
  // $('.Question4').click(function(){
  //   $('.choice1').css({
  //     'display':'block'
  //   })
  //   $('.choice2').css({
  //     'display':'none'
  //   })
  //   if (btn4 === 1){
  //     $('.choice4-1').css({
  //       'display':'none'
  //     })
  //     $('.choice4-2').css({
  //       'display':'block'
  //     })
  //     btn4 = 2;
      
  //     console.log('1')
  //   }
  //   else if (btn4 === 2){
  //     $('.choice4-1').css({
  //       'display':'block'
  //     })
  //     $('.choice4-2').css({
  //       'display':'none'
  //     })
  //     btn4 = 1;
  //     console.log('2')
  //   }
  // })
  $('.Question').on('click',function(){
    $('.choice1').addClass('show')
    $('.choice2').removeClass('show')
      $(this).children('.choice1').removeClass('show');
      $(this).children('.choice2').addClass('show');
  });



})

$(function(){
  /* 클릭한 것만 열리게 하고, 다른 질문을 클릭했을때 기존에 열려 있던 질문은 닫히게 하는것 */
  $('.Accordion .Question').on('click',function(){
    var $li = $(this).parent('li')
    if($li.hasClass('show') == true){
      // 열려있는 경우 -> 닫는다. show class를 제거한다
      $li.removeClass('show');
    }else{
      // 클릭한 열려있지 않을경우-> 열려있는 것들을 모두 닫고 클릭한 것만 연다
      $('.Accordion li').removeClass('show');
      $li.addClass('show');
    }
  });
  $('.Accordion .Answer ul li').on('click',function(){
    var $answer = $(this)
    var $trim = $('.Accordion li:nth-child(1) .Answer ul li')
    var $outcolor = $('.Accordion li:nth-child(2) .Answer ul li')
    var $checkImg = $('.Accordion li:nth-child(2) .Answer ul li div .checkImg')
    var $incolor = $('.Accordion li:nth-child(3) .Answer ul li')
    var $option = $('.Accordion li:nth-child(4) .Answer ul li')
    if($answer.hasClass('show') == true){
      // 열려있는 경우 -> 닫는다. show class를 제거한다
      // $answer.removeClass('show');
    }else{
      // 클릭한 열려있지 않을경우-> 열려있는 것들을 모두 닫고 클릭한 것만 연다
      $trim.removeClass('show');
      $outcolor.removeClass('show');
      $incolor.removeClass('show');
      $checkImg.removeClass('show');
      $answer.addClass('show');
      
    }
  });
})

$('.inColor').on('click',function(){
  $('.cir1').addClass('show');
  $('.cir2').removeClass('show');
  $(this).children('.cir2').addClass('show');
  $(this).children('.cir1').removeClass('show');
});

$('.outColor').on('click',function(){
  console.log("wht doubleclick")
  $('.checkImg').removeClass('show');
  $(this).find('.checkImg').addClass('show');
  // $(this).children('.cir1').removeClass('show');
});

$('.popUp').on('click',function(){
  $('.popUp').css({
    'display':'none'
  })
});