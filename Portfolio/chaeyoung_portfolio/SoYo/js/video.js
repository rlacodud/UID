
$(document).ready(function(){
	var video = $('#myVideo');
	video[0].removeAttribute("controls");
	$('.control').fadeIn(500);
	$('.caption').fadeIn(500);
 
	video.on('loadedmetadata', function() {
		$('.current').text(timeFormat(0));
		$('.duration').text(timeFormat(video[0].duration));
		setTimeout(startBuffer, 150);
		$('.videoContainer')
		.hover(function() {
			$('.control').stop().fadeIn();
			$('.caption').stop().fadeIn();
		})
		.on('click', function() {
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			$(this).unbind('click');
			video[0].play();
		});
	});
	var startBuffer = function() {
		var currentBuffer = video[0].buffered.end(0);
		var maxduration = video[0].duration;
		var perc = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width',perc+'%');
			
		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};	
	
	video.on('timeupdate', function() {
		var currentPos = video[0].currentTime;
		var maxduration = video[0].duration;
		var perc = 100 * currentPos / maxduration;
		$('.timeBar').css('width',perc+'%');	
		$('.current').text(timeFormat(currentPos));	
	});
	
	video.on('click', function() { playpause(); } );
	$('.btnPlay').on('click', function() { playpause(); } );
	var playpause = function() {
		if(video[0].paused || video[0].ended) {
			$('.btnPlay').addClass('paused');
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			video[0].play();
		}
		else {
			$('.btnPlay').removeClass('paused');
			$('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
			video[0].pause();
		}
	};	
	
	video.on('canplay', function() {
		$('.loading').fadeOut(100);
	});

	var completeloaded = false;
	video.on('canplaythrough', function() {
		completeloaded = true;
	});
	
	video.on('ended', function() {
		$('.btnPlay').removeClass('paused');
		video[0].pause();
	});

	video.on('seeking', function() {
		if(!completeloaded) { 
			$('.loading').fadeIn(200);
		}	
	});

	video.on('seeked', function() { });
	video.on('waiting', function() {
		$('.loading').fadeIn(200);
	});
	
	var timeDrag = false;
	$('.progress').on('mousedown', function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
	$(document).on('mouseup', function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
	$(document).on('mousemove', function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	var updatebar = function(x) {
		var progress = $('.progress');
		
		var maxduration = video[0].duration;
		var position = x - progress.offset().left;
		var percentage = 100 * position / progress.width();
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		$('.timeBar').css('width',percentage+'%');	
		video[0].currentTime = maxduration * percentage / 100;
	};

	var timeFormat = function(seconds){
		var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
		var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
		return m+":"+s;
	};
	
	var videoBack = document.querySelector(".videoBack");
	var video2 = document.querySelector("video");
	var playBtn = document.querySelector(".playButton");

	function videoStart() {
		video2.play();
		this.style.display = "none";
		videoBack.style.display = "none";
	}

	playBtn.addEventListener("click", videoStart);
});