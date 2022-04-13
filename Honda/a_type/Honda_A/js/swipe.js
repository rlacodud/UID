const swiper = new Swiper('.swiper', {
  // If we need pagination
});

/* ---- section3 text ---- */
$(document).ready(function() {
  let $Swiper1 = $('#section3 .image-area .swiper-slide:nth-child(1)');
  let $Swiper2 = $('#section3 .image-area .swiper-slide:nth-child(2)');
  let $Swiper3 = $('#section3 .image-area .swiper-slide:nth-child(3)');
  let $Swiper4 = $('#section3 .image-area .swiper-slide:nth-child(4)');

  let $Swipertxt1 = $('#section3 .text-area #text1');
  let $Swipertxt2 = $('#section3 .text-area #text2');
  let $Swipertxt3 = $('#section3 .text-area #text3');
  let $Swipertxt4 = $('#section3 .text-area #text4');

  $Swipertxt2.addClass('none');
  $Swipertxt3.addClass('none');
  $Swipertxt4.addClass('none');
  
  $Swiper1.hover(() => {
    $Swipertxt1.css({
      'opacity':'100%'        
    })
    $Swipertxt2.css({
      'opacity':'0%'        
    })
    $Swipertxt3.css({
      'opacity':'0%'        
    })
    $Swipertxt4.css({
      'opacity':'0%'        
    })
  })
  $Swiper2.hover(() => {
    $Swipertxt1.css({
      'opacity':'0%'        
    })
    $Swipertxt2.css({
      'opacity':'100%'        
    })
    $Swipertxt3.css({
      'opacity':'0%'        
    })
    $Swipertxt4.css({
      'opacity':'0%'        
    })
  })
  $Swiper3.hover(() => {
    $Swipertxt1.css({
      'opacity':'0%'        
    })
    $Swipertxt2.css({
      'opacity':'0%'        
    })
    $Swipertxt3.css({
      'opacity':'100%'        
    })
    $Swipertxt4.css({
      'opacity':'0%'        
    })
  })
  $Swiper4.hover(() => {
    $Swipertxt1.css({
      'opacity':'0%'        
    })
    $Swipertxt2.css({
      'opacity':'0%'        
    })
    $Swipertxt3.css({
      'opacity':'0%'        
    })
    $Swipertxt4.css({
      'opacity':'100%'        
    })
  })
});