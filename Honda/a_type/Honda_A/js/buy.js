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

$("section .image-container .button-container #Exterior").on('click', function() {
  $(this).addClass("active");
  $('#Interior').removeClass("active");
  $('#Interior').addClass("on");
  $('.sketchfab-embed-wrapper').addClass("on");
  $('section .image-container .slideContainer').toggleClass("on");
  $('section .image-container .angle').addClass('on');
});
$("section .image-container .button-container #Interior").on('click', function() {
  $(this).addClass("active");
  $('#Exterior').removeClass("active");
  $('#Exterior').addClass("on");
  $('.sketchfab-embed-wrapper').removeClass("on");
  $('section .image-container .slideContainer').toggleClass("on");
  $('section .image-container .angle').removeClass('on');
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
  $('section .image-container').css({
    'background-image': "url('./img/buy/models.png')"
  });
  $('section .image-container .angle').addClass('on');
  $('section .image-container .button-container').addClass('on');
});

$(".step-container #two").on('click', function() {
  $(this).addClass("active");
  $("#estimate").addClass("active");
  $("#model").removeClass("active");
  $(".step-container #one").removeClass("active");
});