var bodyRect = document.body.getBoundingClientRect();
var arrElements = document.querySelectorAll('.parallax-window');

arrElements = [].slice.call(arrElements); //for IE

window.onscroll = function() {
  arrElements.forEach(function(element) {
    let elemRect = element.getBoundingClientRect(),
        offset = -(elemRect.top - bodyRect.top),
        isVisible = (element.offsetHeight - offset) > 0;

    if (isVisible) {
      element.style.backgroundPositionY = Math.floor(-offset * 0.1) + 'px';
    }
  });
};
