var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

$('.down-contents .filter-content').on('click', function(){
  $('.down-contents .filter').removeClass('on');
  $('.filter-container').removeClass('on');
})
$('#input-right').on('click', function() {
  $(this).parent('.multi-range-slider').parent('.middle').prev('.title-container').children('.right').children('#option').addClass('on');
})
// option
$("#display .model-opt").on('click', function() {
  $(this).toggleClass("active");
});
// menu
$('.title-container').on('click', function() {
  $(this).next('.model-list').toggleClass('off');
  $(this).find('.up').toggleClass('on');
  $(this).next('.search').toggleClass('off');
  $(this).next('.middle').toggleClass('off');
  $(this).next('.middle').next('.text').toggleClass('off');
})
$('.down-contents .filter').on('click', function() {
  $(this).addClass('on');
  $('.filter-container').addClass('on');
  $(this).children('.icon').toggleClass('on');
  // $(this).toggleClass('on');
})
// 
$('.model-opt').on('click', function() {
  console.log('확인');
  $(this).parent('.model-list').prev('.title-container').children('.right').children('#option').addClass('on');
})
// 
$("#os #window10").on('click', function() {
  $(this).toggleClass("active");
  $('#window11').removeClass('active');
  $('#whale').removeClass('active');
  $('#chrome').removeClass('active');
  $('#noos').removeClass('active');
  $('#os #option').html('Windows 10')
});
$("#os #window11").on('click', function() {
  $(this).toggleClass("active");
  $('#window10').removeClass('active');
  $('#whale').removeClass('active');
  $('#chrome').removeClass('active');
  $('#noos').removeClass('active');
  $('#os #option').html('Windows 11')
});
$("#os #whale").on('click', function() {
  $(this).toggleClass("active");
  $('#window10').removeClass('active');
  $('#window11').removeClass('active');
  $('#chrome').removeClass('active');
  $('#noos').removeClass('active');
  $('#os #option').html('whale OS')
});
$("#os #chrome").on('click', function() {
  $(this).toggleClass("active");
  $('#window10').removeClass('active');
  $('#window11').removeClass('active');
  $('#whale').removeClass('active');
  $('#noos').removeClass('active');
  $('#os #option').html('Chrome OS')
});
$("#os #noos").on('click', function() {
  $(this).toggleClass("active");
  $('#window10').removeClass('active');
  $('#window11').removeClass('active');
  $('#whale').removeClass('active');
  $('#chrome').removeClass('active');
  $('#os #option').html('OS 미탑재')
});

// graphic
$("#graphic #GeForce").on('click', function() {
  $(this).toggleClass("active");
  $('#HD').removeClass('active');
  $('#Plus').removeClass('active');
  $('#Xe').removeClass('active');
  $('#graphic #option').html('NVIDIA® GeForce®')
});
$("#graphic #HD").on('click', function() {
  $(this).toggleClass("active");
  $('#GeForce').removeClass('active');
  $('#Plus').removeClass('active');
  $('#Xe').removeClass('active');
  $('#graphic #option').html('INTEL® HD Graphics')
});
$("#graphic #Plus").on('click', function() {
  $(this).toggleClass("active");
  $('#GeForce').removeClass('active');
  $('#HD').removeClass('active');
  $('#Xe').removeClass('active');
  $('#graphic #option').html('INTEL® Iris® Plus Graphics')
});
$("#graphic #Xe").on('click', function() {
  $(this).toggleClass("active");
  $('#GeForce').removeClass('active');
  $('#HD').removeClass('active');
  $('#Plus').removeClass('active');
  $('#graphic #option').html('INTEL® Iris® Xe Graphics')
});
// save
$("#save #HDD").on('click', function() {
  $(this).toggleClass("active");
  $('#64GB').removeClass('active');
  $('#128GB').removeClass('active');
  $('#256GB').removeClass('active');
  $('#512GB').removeClass('active');
  $('#1TB').removeClass('active');
  $('#save #option').html('HDD')
});
$("#save #64GB").on('click', function() {
  $(this).toggleClass("active");
  $('#HDD').removeClass('active');
  $('#128GB').removeClass('active');
  $('#256GB').removeClass('active');
  $('#512GB').removeClass('active');
  $('#1TB').removeClass('active');
  $('#save #option').html('SSD 64GB')
});
$("#save #128GB").on('click', function() {
  $(this).toggleClass("active");
  $('#HDD').removeClass('active');
  $('#64GB').removeClass('active');
  $('#256GB').removeClass('active');
  $('#512GB').removeClass('active');
  $('#1TB').removeClass('active');
  $('#save #option').html('SSD 128GB')
});
$("#save #256GB").on('click', function() {
  $(this).toggleClass("active");
  $('#HDD').removeClass('active');
  $('#64GB').removeClass('active');
  $('#128GB').removeClass('active');
  $('#512GB').removeClass('active');
  $('#1TB').removeClass('active');
  $('#save #option').html('SSD 256GB')
});
$("#save #512GB").on('click', function() {
  $(this).toggleClass("active");
  $('#HDD').removeClass('active');
  $('#64GB').removeClass('active');
  $('#128GB').removeClass('active');
  $('#256GB').removeClass('active');
  $('#1TB').removeClass('active');
  $('#save #option').html('SSD 512GB')
});
$("#save #1TB").on('click', function() {
  $(this).toggleClass("active");
  $('#HDD').removeClass('active');
  $('#64GB').removeClass('active');
  $('#128GB').removeClass('active');
  $('#256GB').removeClass('active');
  $('#512GB').removeClass('active');
  $('#save #option').html('SSD 1TB')
});

// processor
$("#processor #pen").on('click', function() {
  $(this).toggleClass("active");
  $('#sel').removeClass('active');
  $('#core3').removeClass('active');
  $('#core5').removeClass('active');
  $('#core7').removeClass('active');
  $('#ryzen').removeClass('active');
  $('#processor #option').html('INTEL® 펜티엄')
});
$("#processor #sel").on('click', function() {
  $(this).toggleClass("active");
  $('#pen').removeClass('active');
  $('#core3').removeClass('active');
  $('#core5').removeClass('active');
  $('#core7').removeClass('active');
  $('#ryzen').removeClass('active');
  $('#processor #option').html('INTEL® 셀러론®')
});
$("#processor #core3").on('click', function() {
  $(this).toggleClass("active");
  $('#pen').removeClass('active');
  $('#sel').removeClass('active');
  $('#core5').removeClass('active');
  $('#core7').removeClass('active');
  $('#ryzen').removeClass('active');
  $('#processor #option').html('Core™ i3')
});
$("#processor #core5").on('click', function() {
  $(this).toggleClass("active");
  $('#pen').removeClass('active');
  $('#sel').removeClass('active');
  $('#core3').removeClass('active');
  $('#core7').removeClass('active');
  $('#ryzen').removeClass('active');
  $('#processor #option').html('Core™ i5')
});
$("#processor #core7").on('click', function() {
  $(this).toggleClass("active");
  $('#pen').removeClass('active');
  $('#sel').removeClass('active');
  $('#core3').removeClass('active');
  $('#core5').removeClass('active');
  $('#ryzen').removeClass('active');
  $('#processor #option').html('Core™ i7')
});
$("#processor #ryzen").on('click', function() {
  $(this).toggleClass("active");
  $('#pen').removeClass('active');
  $('#sel').removeClass('active');
  $('#core3').removeClass('active');
  $('#core5').removeClass('active');
  $('#core7').removeClass('active');
  $('#processor #option').html('AMD Ryzen™')
});
// memory
$("#memory #4GB").on('click', function() {
  $(this).toggleClass("active");
  $('#8GB').removeClass('active');
  $('#16GB').removeClass('active');
  $('#32GB').removeClass('active');
  $('#memory #option').html('4GB')
});
$("#memory #8GB").on('click', function() {
  $(this).toggleClass("active");
  $('#4GB').removeClass('active');
  $('#16GB').removeClass('active');
  $('#32GB').removeClass('active');
  $('#memory #option').html('8GB')
});
$("#memory #16GB").on('click', function() {
  $(this).toggleClass("active");
  $('#4GB').removeClass('active');
  $('#8GB').removeClass('active');
  $('#32GB').removeClass('active');
  $('#memory #option').html('16GB')
});
$("#memory #32GB").on('click', function() {
  $(this).toggleClass("active");
  $('#4GB').removeClass('active');
  $('#8GB').removeClass('active');
  $('#16GB').removeClass('active');
  $('#memory #option').html('32GB')
});
// ratio
$("#ratio #nine").on('click', function() {
  $(this).toggleClass("active");
  $('#ten').removeClass('active');
  $('#ratio #option').html('16:9')
});
$("#ratio #ten").on('click', function() {
  $(this).toggleClass("active");
  $('#nine').removeClass('active');
  $('#ratio #option').html('16:10')
});
// delivery
$("#delivery #today").on('click', function() {
  $(this).toggleClass("active");
  $('#free').removeClass('active');
  $('#delivery #option').html('오늘출발')
});
$("#delivery #free").on('click', function() {
  $(this).toggleClass("active");
  $('#today').removeClass('active');
  $('#delivery #option').html('무료배송')
});

$(window).on('scroll', function() {
  console.log('확인');
})