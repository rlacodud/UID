console.log("start")

$('#container1 .btn').on('click', function(){
    $(this).toggleClass('active');
})

$('#container2 .btn1').on('click', function(){
    $(this).toggleClass('active');
    $('.btn2').removeClass('active');
    $('.btn3').removeClass('active');
    $('.btn4').removeClass('active');
    $('.btn5').removeClass('active');
    $('.con2Title').html('1');
})
$('#container2 .btn2').on('click', function(){
    $(this).toggleClass('active');
    $('.btn1').removeClass('active');
    $('.btn3').removeClass('active');
    $('.btn4').removeClass('active');
    $('.btn5').removeClass('active');
    $('.con2Title').html('2');
})
$('#container2 .btn3').on('click', function(){
    $(this).toggleClass('active');
    $('.btn1').removeClass('active');
    $('.btn2').removeClass('active');
    $('.btn4').removeClass('active');
    $('.btn5').removeClass('active');
    $('.con2Title').html('3');
})
$('#container2 .btn4').on('click', function(){
    $(this).toggleClass('active');
    $('.btn1').removeClass('active');
    $('.btn2').removeClass('active');
    $('.btn3').removeClass('active');
    $('.btn5').removeClass('active');
    $('.con2Title').html('4');
})
$('#container2 .btn5').on('click', function(){
    $(this).toggleClass('active');
    $('.btn1').removeClass('active');
    $('.btn2').removeClass('active');
    $('.btn3').removeClass('active');
    $('.btn4').removeClass('active');
    $('.con2Title').html('5');
})