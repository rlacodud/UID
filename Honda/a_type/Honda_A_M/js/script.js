$("#ACCORD").on('click', function() {
  $(this).addClass("active");
  $('#CR').removeClass("active");
  $('#PILOT').removeClass("active");
  $('ODYSSEY').removeClass("active");
});
$("#CR").on('click', function() {
  $(this).addClass("active");
  $('#ACCORD').removeClass("active");
  $('#PILOT').removeClass("active");
  $('#ODYSSEY').removeClass("active");
});
$("#PILOT").on('click', function() {
  $(this).addClass("active");
  $('#ACCORD').removeClass("active");
  $('#CR').removeClass("active");
  $('#ODYSSEY').removeClass("active");
});
$("#ODYSSEY").on('click', function() {
  $(this).addClass("active");
  $('#ACCORD').removeClass("active");
  $('#CR').removeClass("active");
  $('#PILOT').removeClass("active");
});
$("#EX").on('click', function() {
  $(this).addClass("active");
  $('#Hybrid').removeClass("active");
});
$("#Hybrid").on('click', function() {
  $(this).addClass("active");
  $('#EX').removeClass("active");
});

$(".opt").on('click', function() {
  $(this).toggleClass("active");
});

$("#blue").on('click', function() {
  $(this).addClass("active");
  $('#green').removeClass("active");
  $('#black').removeClass("active");
  $('#yellow').removeClass("active");
  $('#white').removeClass("active");
});
$("#green").on('click', function() {
  $(this).addClass("active");
  $('#blue').removeClass("active");
  $('#black').removeClass("active");
  $('#yellow').removeClass("active");
  $('#white').removeClass("active");
});
$("#black").on('click', function() {
  $(this).addClass("active");
  $('#blue').removeClass("active");
  $('#green').removeClass("active");
  $('#yellow').removeClass("active");
  $('#white').removeClass("active");
});
$("#yellow").on('click', function() {
  $(this).addClass("active");
  $('#blue').removeClass("active");
  $('#green').removeClass("active");
  $('#black').removeClass("active");
  $('#white').removeClass("active");
});
$("#white").on('click', function() {
  $(this).addClass("active");
  $('#blue').removeClass("active");
  $('#green').removeClass("active");
  $('#black').removeClass("active");
  $('#yellow').removeClass("active");
});

$("#method-one").on('click', function() {
  $(this).addClass("active");
  $('#method-two').removeClass("active");
});
$("#method-two").on('click', function() {
  $(this).addClass("active");
  $('#method-one').removeClass("active");
});

$(".contents-container .contents .title .more").on('click', function() {
  $('.comparison-container').addClass("on");
  $('body').addClass('on');
});
$(".comparison-container .dim").on('click', function() {
  $('.comparison-container').removeClass("on");
    $('body').removeClass('on');
});
$(".comparison-container .comparison .main-title .right .close").on('click', function() {
  $('.comparison-container').removeClass("on");
    $('body').removeClass('on');
});
$(".button-container #Interior").on('click', function() {
  $(this).addClass("active");
  $('#Exterior').removeClass("active");
  $('#Exterior').addClass("on");
  $('.sketchfab-embed-wrapper').removeClass("on");
  $('.slideContainer').addClass("on");
  $('.angle').removeClass('on');
});
$("#Exterior").on('click', function() {
  $(this).addClass("active");
  $('#Interior').removeClass("active");
  $('#Interior').addClass("on");
  $('.sketchfab-embed-wrapper').addClass("on");
  $('.slideContainer').removeClass("on");
  $('.angle').addClass('on');
});
$(".comparison-container .dim").on('click', function() {
  $('.comparison-container').removeClass("on");
    $('body').removeClass('on');
});
$(".comparison-container .comparison .main-title .right .close").on('click', function() {
  $('.comparison-container').removeClass("on");
    $('body').removeClass('on');
});
$(".contents-container .contents .title .more").on('click', function() {
  $('.comparison-container').addClass("on");
  $('body').addClass('on');
});

$(".dropbtn").on('click', function() {
  $(this).next('.dropdown-content').toggleClass("on");
});

$(".estimate-button").on('click', function() {
  $("#model").removeClass("active");
  $("#estimate").addClass("active");
  $(".step-container #one").removeClass("active");
  $(".step-container #two").addClass("active");
});

// step
$(".step-container #one").on('click', function() {
  $(this).addClass("active");
  $("#model").addClass("active");
  $(".bottom-button").addClass("active");
  $("#estimate").removeClass("active");
  $(".step-container #two").removeClass("active");
  $('.angle').addClass('on');
  $('.button-container').addClass('on');
});

$(".step-container #two").on('click', function() {
  $(this).addClass("active");
  $("#estimate").addClass("active");
  $("#model").removeClass("active");
  $(".step-container #one").removeClass("active");
});

$(".estimate-button .buy").on('click', function() {
  goTop();
  $('.bottom-button').removeClass("active");
  $("#estimate").css({'display': 'none'});
  $(".step-container").removeClass("on");
  $(".buy-container").addClass("on");
  $(".main-image").removeClass("on");
});

function goTop () {
  window.scrollTo(0, 0);
}

