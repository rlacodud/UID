function scroll_image_transform() {
  let windowTop = $(window).scrollTop();
  let trimTop = jQuery('.trim').offset().top;
  let optionTop = jQuery('.option').offset().top;
  let colorTop = jQuery('.color').offset().top;
  console.log(windowTop, trimTop, optionTop, colorTop)

  var convertPx = {
    vw: function (px) {
        px = parseFloat(px);
        var ww = $(window).height();

        return ww * px / 1920;
    }
}

  if ($('#model').hasClass('active')) {
    if (windowTop > 0 && windowTop < trimTop - 300) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/models.png')"
      });
      $('section .image-container .angle').addClass('on');
      $('section .image-container .button-container').addClass('on');
    }
    if (windowTop > trimTop - 300 && windowTop < optionTop - 300) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/trim.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
    if (windowTop > optionTop - 300 && windowTop < colorTop - 300) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/option.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
    if (windowTop > colorTop - 600) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/color.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
  }
  // ----------------------------
  if ($('#estimate').hasClass('active')) {
    if (windowTop > 0 && windowTop <= convertPx.vw(400)) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/models.png')"
      });
      $('section .image-container .angle').addClass('on');
      $('section .image-container .button-container').addClass('on');
    }
    if (windowTop > convertPx.vw(600) && windowTop < convertPx.vw(800)) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/trim.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
    if (windowTop >= convertPx.vw(1000) && windowTop < convertPx.vw(1200)) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/option.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
    if (windowTop >= convertPx.vw(1200)) {
      $('section .image-container').css({
        'background-image': "url('./img/buy/color.png')"
      });
      $('section .image-container .angle').removeClass('on');
      $('section .image-container .button-container').removeClass('on');
    }
  }
  
}

$(window).scroll(function () {
  scroll_image_transform();
})