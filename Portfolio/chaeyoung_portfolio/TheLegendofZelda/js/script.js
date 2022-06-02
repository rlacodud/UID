const card1 = document.querySelector('#one');

function clickRotate1() {
  card1.classList.toggle('rotated');
}
card1.addEventListener('click', clickRotate1);

const card2 = document.querySelector('#two');

function clickRotate2() {
  card2.classList.toggle('rotated');
}
card2.addEventListener('click', clickRotate2);

const card3 = document.querySelector('#three');

function clickRotate3() {
  card3.classList.toggle('rotated');
}
card3.addEventListener('click', clickRotate3);