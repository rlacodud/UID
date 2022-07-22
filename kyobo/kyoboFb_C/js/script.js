window.onload = function() {
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
}

function mainScrollEvent() {
  var convertPx = {
    vw: function (px) {
      px = parseFloat(px);
      var ww = $(window).width();

      return ww * px / 1920;
    }
  }
  
  let documentHeight = $(document).scrollTop();
  let documentHeight2 = $(document).scrollTop() + $('#section2 .leftText').height();
  let section2Top = jQuery('#section2').offset().top;
  let limit1 = jQuery('.limit1').offset().top;
  let imgBottom = $('#section2 .leftText').offset().top + $('#section2 .leftText').height();

  console.log(documentHeight)
  if(documentHeight >= section2Top && documentHeight <= convertPx.vw(8080)) {
    $('.float-right').addClass('on')
  } else {
    $('.float-right').removeClass('on')
  }

  if (documentHeight >= section2Top && documentHeight < limit1 - convertPx.vw(200)) {
      $('#section2 .leftText').addClass('active');
      
  } else if (documentHeight < section2Top) {
      $('#section2 .leftText').removeClass('active');
  }

  if (imgBottom >= limit1 - convertPx.vw(200)) {
    $('#section2 .leftText').addClass('finish');
  }
  if (documentHeight2 < limit1 - convertPx.vw(200)) {
    $('#section2 .leftText').removeClass('finish');
  }

// section7---------------------------------------------------------------------------------------
  let documentHeight7 = $(document).scrollTop() + $('#section7 .leftText').height();
  let section7Top = jQuery('#section7').offset().top;
  let section8Top = jQuery('#section8').offset().top;
  let imgBottom7 = $('#section7 .leftText').offset().top + $('#section7 .leftText').height();
  if (documentHeight >= section7Top && documentHeight < section8Top - convertPx.vw(200)) {
    $('#section7 .leftText').addClass('active');
      
  } else if (documentHeight < section7Top) {
    $('#section7 .leftText').removeClass('active');
  }

  if (imgBottom7 >= section8Top - convertPx.vw(200)) {
    $('#section7 .leftText').addClass('finish');
  }
  if (documentHeight7 < section8Top - convertPx.vw(200)) {
    $('#section7 .leftText').removeClass('finish');
  }

// section8---------------------------------------------------------------------------------------
let documentHeight8 = $(document).scrollTop() + $('#section8 .leftText').height();
let limit8 = jQuery('.limit8').offset().top;
let imgBottom8 = $('#section8 .leftText').offset().top + $('#section8 .leftText').height();
if (documentHeight >= section8Top && documentHeight < limit8 - convertPx.vw(200)) {
  $('#section8 .leftText').addClass('active');
    
} else if (documentHeight < section8Top) {
  $('#section8 .leftText').removeClass('active');
}

if (imgBottom8 >= limit8 - convertPx.vw(200)) {
  $('#section8 .leftText').addClass('finish');
}
if (documentHeight8 < limit8 - convertPx.vw(200)) {
  $('#section8 .leftText').removeClass('finish');
}
}


$(window).scroll(function () {
  mainScrollEvent();
})

$('#section5 .content').on('mouseover', function() {
  $(this).children('.hoverText').addClass('on')
})
$('#section5 .content').on('mouseleave', function() {
  $(this).children('.hoverText').removeClass('on')
})

$('header .center .search').on('click', function(e) {
  e.stopPropagation();
  $('header .center .search .search_on').addClass('on')
})

$('body').on('click', function() {
  if($('header .center .search .search_on.on').hasClass('on')) {
    $('header .center .search .search_on.on').removeClass('on')
  }
})

$('.nav-container .nav').on('mouseover', function(e) {
  e.stopPropagation();
  $('.nav-container .nav-depth').addClass('on')
})

$('.nav-container .nav').on('mouseleave', function(e) {
  e.stopPropagation();
  $('.nav-container .nav-depth').removeClass('on')
})

var section1ArrowCount = 0;

$('#section1 .prev').on('click', function() {
  if(section1ArrowCount > 0) {
    section1ArrowCount --;
  }
  if(section1ArrowCount == 0) {
    $('#section1 .prev').addClass('off')
    $('#section1 .number').removeClass('two')    
    $('#section1 .next').removeClass('off')
    $('#section1 .slide-container').removeClass('right');
  } else if(section1ArrowCount == -1) {
    $('#section1 .prev').addClass('off')
    $('#section1 .slide-container').addClass('left')
  }
  console.log(section1ArrowCount)
})

$('#section1 .next').on('click', function() {
  if(section1ArrowCount < 1) {
    section1ArrowCount ++;
  }
  if(section1ArrowCount == 0) {
    $('#section1 .slide-container').removeClass('left');
  } else if(section1ArrowCount == 1) {
    $('#section1 .number').addClass('two')    
    $('#section1 .prev').removeClass('off')
    $('#section1 .next').addClass('off')
    $('#section1 .slide-container').addClass('right')
  }
  console.log(section1ArrowCount)
})


var arrowCount = 0;

$('#section3 .prev').on('click', function() {
  if(arrowCount > -1) {
    arrowCount --;
  }
  if(arrowCount == 0) {
    // $('#section3 .next').removeClass('off')
    $('#section3 .slider').removeClass('right');
  } else if(arrowCount == -1) {
    // $('#section3 .prev').addClass('off')
    $('#section3 .slider').addClass('left')
  }
  console.log(arrowCount)
})

$('#section3 .next').on('click', function() {
  if(arrowCount < 1) {
    arrowCount ++;
  }
  if(arrowCount == 0) {
    // $('#section3 .prev').removeClass('off')
    $('#section3 .slider').removeClass('left');
  } else if(arrowCount == 1) {
    // $('#section3 .next').addClass('off')
    $('#section3 .slider').addClass('right')
  }
  console.log(arrowCount)
})

let slider = document.querySelector("#section3 .container");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);


function grabSlider(e){
  e.preventDefault();
  isGrab = true;
  startX = e.x;
  scrollLeft = slider.scrollLeft;
}

function grabMove(e){
  e.preventDefault();
  if(!isGrab) return;
  let moveX = e.x;
  let walk = (moveX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}