$('#section1 .menuBtnContainer .menuBtn').on('mouseover', function() {
  // console.log('확인');
  $('#section1 .menuBtnContainer .menuBtn .menuBlock .menuBlockSpan').addClass('on');
  $('#section1 .menuBtnContainer .menuBtn p').addClass('on');
})
$('#section1 .menuBtnContainer .menuBtn').on('mouseleave', function() {
  // console.log('확인');
  $('#section1 .menuBtnContainer .menuBtn .menuBlock .menuBlockSpan').removeClass('on');
  $('#section1 .menuBtnContainer .menuBtn p').removeClass('on');
})