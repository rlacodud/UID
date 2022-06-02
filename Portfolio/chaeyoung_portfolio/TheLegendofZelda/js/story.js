var GenesisBtn = document.querySelector('#Genesis');
var victoryAgoBtn = document.querySelector('#victoryAgo');
var defeatingBtn = document.querySelector('#defeating');
var victoryLaterBtn = document.querySelector('#victoryLater');
var reconstructionBtn = document.querySelector('#reconstruction');

// Hyrule Genesis 클릭 시 텍스트 변경 이벤트
function GenesisTextEvent (e) {
  e.preventDefault();
  $('.slideContainer .slideList li:first-child .slideImg').css('background-image', 'url("./img/1_skywardsword.png")');
  $('.slideContainer .slideList li:nth-child(2) .slideImg').css('background-image', 'url("./img/2_minishcap.png")');
  $('.slideContainer .slideList li:nth-child(3) .slideImg').css('background-image', 'url("./img/3_foursword.png")');
  $('.slideContainer .slideList li:nth-child(4) .slideImg').css('background-image', 'url("./img/4_ocarina.png")');
  $('#victoryAgo a').removeClass('active');
  $('#defeating a').removeClass('active');
  $('#victoryLater a').removeClass('active');
  $('#reconstruction a').removeClass('active');
  $('#Genesis a').addClass('active');
  $('.text h2').html('하이랄 창세기');
  $('.text h6').html('세 황금 여신, 딘, 넬, 펠이 하늘과 땅을 만들고 생명을 창조한다. 힘의 여신 딘이 땅을, <br> 지혜의 여신 넬이 생명과 자연의 법칙을 만들고, 용기의 여신 펠이 생명체를 만든다. <br><br> 그러나 악의 화신 종언자가 땅이 갈라진 틈을 타 지상으로 나왔고, 그는 마물 군단을 이끌고 지상을 침공한다. <br> 이로 인해 인류는 멸종 위기에 처하고, 하일리아 여신은 작은 땅덩어리를 하늘로 띄워 얼마 안 남은 인류를 대피시킨다. <br> 여신은 지상에서 다섯 종족을 이끌고 종언자와 맞서 싸우는데, 이를 대전쟁이라 부른다.');
}
// Hyrule Genesis 클릭 시 텍스트 변경 이벤트
function victoryAgoTextEvent (e) {
  e.preventDefault();
  $('.slideContainer .slideList li:first-child .slideImg').css('background-image', 'url("./img/3_foursword.png")');
  $('.slideContainer .slideList li:nth-child(2) .slideImg').css('background-image', 'url("./img/4_ocarina.png")');
  $('.slideContainer .slideList li:nth-child(3) .slideImg').css('background-image', 'url("./img/8_muzura.png")');
  $('.slideContainer .slideList li:nth-child(4) .slideImg').css('background-image', 'url("./img/9_twilight.png")');
  $('#Genesis a').removeClass('active');
  $('#defeating a').removeClass('active');
  $('#victoryLater a').removeClass('active');
  $('#reconstruction a').removeClass('active');
  $('#victoryAgo a').addClass('active');
  $('.text h2').html('용사의 승리 - 7년 전의 세계');
  $('.text h6').html('결국 가논돌프는 시간의 용사 링크가 휘두른 마스터 소드의 참격에 쓰러지고, <br> 그 틈에 현자들이 힘을 모아 그를 봉인하는 데 성공한다. <br><br> 힘의 트라이포스 또한 가논돌프와 함께 봉인되면서 트라이포스는 한동안 분열된 상태로 유지된다.');
}
// Hyrule Genesis 클릭 시 텍스트 변경 이벤트
function defeatingBtnTextEvent (e) {
  e.preventDefault();
  $('.slideContainer .slideList li:first-child .slideImg').css('background-image', 'url("./img/9_twilight.png")');
  $('.slideContainer .slideList li:nth-child(2) .slideImg').css('background-image', 'url("./img/5_tryforce.png")');
  $('.slideContainer .slideList li:nth-child(3) .slideImg').css('background-image', 'url("./img/6_awakening.png")');
  $('.slideContainer .slideList li:nth-child(4) .slideImg').css('background-image', 'url("./img/7_heroes.png")');
  $('#Genesis a').removeClass('active');
  $('#victoryAgo a').removeClass('active');
  $('#victoryLater a').removeClass('active');
  $('#reconstruction a').removeClass('active');
  $('#defeating a').addClass('active');
  $('.text h2').html('용사의 패배 후 세계');
  $('.text h6').html('그러나 시간의 용사는 결국 패배하였으며 가논돌프는 트라이포스를 전부 지니게 되었다. <br> 이로 인해 성지는 그의 악한 마음의 영향을 받아 타락해 어둠의 세계가 된다. <br><br> 그러나 젤다 공주가 현자들을 이끌고 나타나 최후의 방법으로 가논돌프를 트라이포스째로 어둠의 세계에 가둬 버리는 데에 간신히 성공한다.');
}
// Hyrule Genesis 클릭 시 텍스트 변경 이벤트
function victoryLaterBtnTextEvent (e) {
  e.preventDefault();
  $('.slideContainer .slideList li:first-child .slideImg').css('background-image', 'url("./img/6_awakening.png")');
  $('.slideContainer .slideList li:nth-child(2) .slideImg').css('background-image', 'url("./img/7_heroes.png")');
  $('.slideContainer .slideList li:nth-child(3) .slideImg').css('background-image', 'url("./img/10_wind.png")');
  $('.slideContainer .slideList li:nth-child(4) .slideImg').css('background-image', 'url("./img/11_phantom.png")');
  $('#Genesis a').removeClass('active');
  $('#victoryAgo a').removeClass('active');
  $('#defeating a').removeClass('active');
  $('#reconstruction a').removeClass('active');
  $('#victoryLater a').addClass('active');
  $('.text h2').html('용사의 승리 - 7년 후의 세계');
  $('.text h6').html('시간의 용사 링크의 활약으로 가논돌프는 쓰러지고, 현자들의 힘으로 봉인된다. <br> 링크는 자신의 시대로 돌아가면서 사라지지만 그의 활약은 기록되어 후세에 계승된다. <br> 하일리아인들은 하이랄 성으로 돌아와 국가와 도시를 재건한다. <br><br> 그러나 오랜 세월이 흐르면서 봉인은 점점 약해졌고 결국 가논돌프는 자신의 예언대로 봉인을 깨고 나온다. <br> 가논은 복수를 위해 미친듯이 세계를 파괴하였고, 하일리아인들은 용사가 나타나기를 바랐으나 용사는 끝까지 나타나지 않았다.');
}
// Hyrule Genesis 클릭 시 텍스트 변경 이벤트
function reconstructionBtnTextEvent (e) {
  e.preventDefault();
  $('.slideContainer .slideList li:first-child .slideImg').css('background-image', 'url("./img/10_wind.png")');
  $('.slideContainer .slideList li:nth-child(2) .slideImg').css('background-image', 'url("./img/11_phantom.png")');
  $('.slideContainer .slideList li:nth-child(3) .slideImg').css('background-image', 'url("./img/12_sprits.png")');
  $('.slideContainer .slideList li:nth-child(4) .slideImg').css('background-image', 'url("./img/13_breath.png")');
  $('#Genesis a').removeClass('active');
  $('#victoryAgo a').removeClass('active');
  $('#defeating a').removeClass('active');
  $('#victoryLater a').removeClass('active');
  $('#reconstruction a').addClass('active');
  $('.text h2').html('하이랄 재건 시대');
  $('.text h6').html('몽환의 모래시계 사건 이후, 테트라 해적단은 신대륙을 발견한다. <br> 테트라는 신대륙에 신생 하이랄 왕국의 건국을 선포하고 자신은 여왕이 되어 군림한다. <br><br> 그녀는 국토의 곳곳을 철도로 연결하여 철도 시스템을 구축한다. <br> 또한 병사들에게 바람의 용사를 기리기 위해 녹색 군복을 입힌다.');
}

GenesisBtn.addEventListener('click', GenesisTextEvent);
victoryAgoBtn.addEventListener('click', victoryAgoTextEvent);
defeatingBtn.addEventListener('click', defeatingBtnTextEvent);
victoryLaterBtn.addEventListener('click', victoryLaterBtnTextEvent);
reconstructionBtn.addEventListener('click', reconstructionBtnTextEvent);