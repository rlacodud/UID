/* ---- main ---- */
$(document).ready(function() {
  let documentHeight = $(document).scrollTop();
  let section1Top = jQuery('#section1').offset().top;
  let $title = $('#section1 .text-area .title');
  let $desc = $('#section1 .text-area .desc');
  let $moreBtn = $('#section1 .text-area .more-btn');
  let $li1 = $('#section1 .text-area ul li:nth-child(1)');
  let $li2 = $('#section1 .text-area ul li:nth-child(2)');

  if (documentHeight >= section1Top-300){
    $title.addClass('up1');
    $desc.addClass('up2');
    $moreBtn.addClass('up3');
    $li1.addClass('up4');
    $li2.addClass('up5');
  }
});

/* ---- section2 text ---- */
$(document).ready(function() {
  let $Swiper1 = $('#section2 .image-area .swiper-slide:nth-child(1)');
  let $Swiper2 = $('#section2 .image-area .swiper-slide:nth-child(2)');
  let $Swiper3 = $('#section2 .image-area .swiper-slide:nth-child(3)');
  let $Swiper4 = $('#section2 .image-area .swiper-slide:nth-child(4)');
  
  let $Swipertxt1 = $('#section2 .text-area:nth-child(1)');
  let $Swipertxt2 = $('#section2 .text-area:nth-child(2)');
  let $Swipertxt3 = $('#section2 .text-area:nth-child(3)');
  let $Swipertxt4 = $('#section2 .text-area:nth-child(4)');

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

/* ---- scroll ---- */  
function mainScrollEvent() {

  let documentHeight = $(document).scrollTop();
  let section2Top = jQuery('#section2').offset().top;
  let section2Bottom = jQuery('#section2').offset().top + $('#section2').height() - $(window).height();
  let $text1 = $('#section2 .text-area ul li:nth-child(1)');
  let $text2 = $('#section2 .text-area ul li:nth-child(2)');
  let $text3 = $('#section2 .text-area ul li:nth-child(3)');
  console.log(documentHeight);

if (documentHeight >= section2Top-200 && documentHeight < section2Top-100){
  $text1.css({
    'color':'#000000'        
  })
  $text2.css({
    'color':'#e8e8e8'        
  })
  $text3.css({
    'color':'#e8e8e8'        
  })
  console.log('400');
}
if (documentHeight >= section2Top-100 && documentHeight < section2Top){
  $text1.css({
    'color':'#e8e8e8'        
  })
  $text2.css({
    'color':'#000000'        
  })
  $text3.css({
    'color':'#e8e8e8'        
  })
  console.log('700');
}
if (documentHeight >= section2Top && documentHeight < section2Top+100){
  $text1.css({
    'color':'#e8e8e8'        
  })
  $text2.css({
    'color':'#e8e8e8'        
  })
  $text3.css({
    'color':'#000000'        
  })
  console.log('1000');
}

}

$('.total-container').scroll(function () {
mainScrollEvent();
})



/* ---- swiper ---- */  
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


