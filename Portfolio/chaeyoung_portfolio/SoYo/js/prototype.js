function prototype () {
  // indexS가 5인 섹션에 도달할 경우
  if (indexS === 5) {
    // #section7 .SoYoTextLeft li:nth-child(1)와
    // #section7 .SoYoTextCenter .SoYo .chatting:nth-child(1)에 textAni 클래스 추가
    $('#section7 .SoYoTextLeft li:nth-child(1)').addClass('textAni');
    $('#section7 .SoYoTextLeft li:nth-child(2)').addClass('textAni2');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1)').addClass('textAni');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:first-child').addClass('textAni');
    $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:last-child').addClass('textAni2');
      if ($('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(1) .chattingText:last-child').hasClass('textAni2')) {
        $('#section7 .choice p:first-child').addClass('choice1Ani');
        // #section7 .choice p:first-child 클릭 시 실행시키는 
        $('#section7 .choice p:first-child').on('click', function () {
          $('#section7 .choice p:first-child').removeClass('choice1Ani');
          $('#section7 .SoYoTextCenter .player .chattingText:nth-child(1)').addClass('textAni');
          $('#section7 .playerTextRight .chatting:nth-child(1)').addClass('textAni');
          $('#section7 .SoYoTextLeft li:nth-child(1)').addClass('textRemoveAni');
          $('#section7 .SoYoTextLeft li:nth-child(2)').addClass('textRemoveAni');
          $('#section7 .SoYoTextLeft li:nth-child(3)').addClass('textAni2');
          $('#section7 .SoYoTextLeft li:nth-child(4)').addClass('textAni3');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2)').addClass('textAni2');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:first-child').addClass('textAni2');
          $('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:last-child').addClass('textAni3');
            if ($('#section7 .SoYoTextCenter .SoYo .chatting:nth-child(2) .chattingText:last-child').hasClass('textAni3')) {
              $('#section7 .default').addClass('defaultAni');
              $('#section7 .default').on('click', function () {
                $('#section7 .default').removeClass('defaultAni');
                $('#section7 .default').html('길을 따라 걷다보니까 기분이 좋아!');
                $('#section7 .default').addClass('typing');
                $('#section7 .SoYoTextCenter .player .chattingText:nth-child(2)').addClass('textAni3');
                $('#section7 .playerTextRight .chatting:nth-child(2)').addClass('textAni3');
              })
            }
        })
      }
  }
}
window.addEventListener('mousewheel', prototype);