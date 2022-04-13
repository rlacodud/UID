function slider() {
  let slides = document.querySelectorAll(".slide"),
    slider = document.querySelector(".slider"),
    last = slider.lastElementChild,
    first = slider.firstElementChild
  slider.insertBefore(last, first);

  setInterval(function () {$('.button-container .button').addClass('opacity'); }, 1500);
  setInterval(function () {$('.button-container .button').removeClass('opacity'); }, 3000);
  setInterval(function () { movement({ target: { id: "next" } }); }, 3000);

  setInterval(function () { progressbar({ target: { id: "next" } }); }, 3000);

  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);
      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  }
  function progressbar () {
    if($('.slide_one').hasClass('active')) {
      $('.sub-title h3').removeClass('upAni1')
      $('.slide_one .sub-title h3').addClass('upAni1')
      $('.title h2').removeClass('upAni2')
      $('.slide_one .title h2').addClass('upAni2')
    } else if($('.slide_two').hasClass('active')) {
      $('.sub-title h3').removeClass('upAni1')
      $('.slide_two .sub-title h3').addClass('upAni1')
      $('.title h2').removeClass('upAni2')
      $('.slide_two .title h2').addClass('upAni2')
    } else if($('.slide_three').hasClass('active')) {
      $('.sub-title h3').removeClass('upAni1')
      $('.slide_three .sub-title h3').addClass('upAni1')
      $('.title h2').removeClass('upAni2')
      $('.slide_three .title h2').addClass('upAni2')
    }
  }
  progressbar();
}
slider();