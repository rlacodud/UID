$('#next').removeClass('disNone');
window.addEventListener('load', convert);
window.addEventListener('resize', convert);

function convert() {
        var convertPx = {
            vw: function(px){
                px = parseFloat(px);
                var ww = $(window).width();
                
                return ww * px / 1920;
            }
        }
        
        var galleryEl = document.getElementById('gallery');
        var viewEl = galleryEl.querySelector('.view');
        var viewContainerEl = viewEl.querySelector('.view-container');
        var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
        
        var listEl = document.querySelector('.list');
        var listItemEls = listEl.querySelectorAll('li');
        var btnListItemEls = listEl.querySelectorAll('li > a');
        
        var prevBtn = document.querySelector('#prev');  
        var nextBtn = document.querySelector('#next');
        
        let _galleryWidth = convertPx.vw(800);
        console.log(_galleryWidth);
        var _galleryMax = viewItemEls.length;

        var _duration = 300;
        var _addDuration = 100;

        var cuId = 0;
        var exId = cuId;

        btnListItemEls = Array.prototype.slice.call(btnListItemEls);

        function onTransitionEnd() {
            console.log('end!');
            viewContainerEl.style.removeProperty('transition');
        }
        console.log(cuId);

        // 리스트 버튼 이벤트
        function onClickBtnListItem(idx, e) {
            e.preventDefault();
            console.log(idx);
            var el = e.currentTarget;
            var itemEl = el.parentElement;
            if (exId !== idx) {
                cuId = idx;
                listItemEls[exId].classList.remove('selected');
                btnListItemEls[exId].classList.remove('selected');
                itemEl.classList.add('selected');
                console.log('되냐');
                slideGallery();
            }
            btnDisnone();
        }

        function backgroundImgTrade () {
            switch (cuId) {
                case 0:
                $('body').css('background-image', "url('./img/1_skywardsword.png')");
                $('.textBox .text h2').html('스카이워드소드');
                $('.textBox .text h6').html('아주 먼 옛날 사악한 존재가 모든 소원과 욕망을 이루는 트라이포스를 얻기 위해 전쟁을 일으켰고 <br> 그 때문에 여신은 트라이포스를 지키기 위해 살아남은 사람들을 운해 너머로 대지를 띄웠다. <br> 그리고 여신과 심복들은 목숨을 걸고 싸운 끝에 사악한 세력을 봉인하였고 결국 대지는 평화를 되찾았다. <br><br> 그 이후 어느 날 스카이로프트의 기사학교에 다니는 링크는 소꿉친구 젤다와 의식을 끝마치고 같이 하늘을 날던중, <br> 젤다가 이상한 검은 폭풍에 빨려들어가 상상 속에만 존재하던 대지로 떨어지는데...');
                break;
                case 1:
                    $('body').css('background-image', "url('./img/4_ocarina.png')");
                    $('.textBox .text h2').html('시간의 오카리나');
                    $('.textBox .text h6').html("아무도 알지 못하는 성지에 있다는, 신의 힘이 깃든 성스러운 삼각 '트라이포스'. <br> 그것을 만지는 자는 무한한 힘을 손에 넣을 수 있다고 한다. <br><br> 그 힘을 자신의 손에 넣으려는 가논돌프는 사악한 몬스터를 이용해 <br> 하이랄 각지를 유린하면서 성지의 입구를 계속 찾고 있었다. <br><br> 그러나 그곳에 들어가려면 왕가의 보물 '시간의 오카리나'를 연주해야 하는데...");
                    break;
                case 2:
                    $('body').css('background-image', "url('./img/6_awakening.png')");
                    $('.textBox .text h2').html('꿈꾸는 섬');
                    $('.textBox .text h6').html("사악한 마왕 가논의 마수로부터 하이랄에 평화를 되찾아 온 링크는, <br> 되찾은 안식을 즐길 겨를도 없이 다시금 닥칠 새로운 재난을 대비하고자 수행길에 올랐다. <br> 그 날 링크는 이국에서 수행을 마치고 그리운 하이랄로 돌아가는 항해를 하고 있었다. <br><br> 그때까지 잠잠했던 바다가 갑자기 거칠게 요동치기 시작하며 <br> 파도에 휩쓸리고 번개를 맞은 배는 반으로 갈라져 버리고, <br> 링크는 배의 잔해와 함께 깊은 바다 속으로 가라앉아 버리는데...");
                    break;
                case 3:
                    $('body').css('background-image', "url('./img/8_muzura.png')");
                    $('.textBox .text h2').html('무쥬라의 가면');
                    $('.textBox .text h6').html("숲 속을 지나고 있던 중 스탈키드의 표적이 된 링크는 요정 채트와 트레일의 공격으로 에포나에서 떨어진다. <br> 잠시 기절한 채로 스탈키드에게 시간의 오카리나와 에포나를 도둑맞게 되자 링크는 깨어난다. <br><br> 링크는 이를 추적하나 오히려 스탈키드에 의해 저주에 걸려서 데크 너츠가 되어버린다. <br> 채트는 데크 너츠가 되어버린 링크를 도발하다가 스탈키드와 동생 트레일을 놓치게 되고 <br> 어쩔 수 없이 링크에게 도움을 요청하게 되는데...");
                    break;
                case 4:
                    $('body').css('background-image', "url('./img/9_twilight.png')");
                    $('.textBox .text h2').html('황혼의 공주');
                    $('.textBox .text h6').html("어디르 마을의 목동 청년 링크는 마을 소녀 일리아를 비롯해 마을 사람들과 친하게 지내는 성격 좋은 청년이었다. <br><br> 그러던 어느날 갑자기 튀어나온 마물을 쫓기 위해 추적하다가 '어둠의 세계'라는 다른 세계에 들어가버린 링크는 <br> 늑대가 되어버리고 정신이 들었을 때는 어느 감옥에 갇혀버린 뒤였다. <br><br> 그리고 그의 앞에 나타난 정체불명의 마물 미드나가 나타나 도와주게 되고 <br> 링크는 미드나와 함께 현실세계와 황혼의 세계를 넘나들며 모험을 하게 되는데...");
                    break;
                case 5:
                    $('body').css('background-image', "url('./img/11_phantom.png')");
                    $('.textBox .text h2').html('몽환의 모래시계');
                    $('.textBox .text h6').html("파도를 가르며 씩씩하게 돌진하는 해적선 <br> 그 배에는 해적을 이끄는 두목 테트라와 그 부하들 그리고 녹색 옷을 입은 링크가 타고 있었다. <br><br> 어느 날 테트라는 과거에 멸망한 '하이랄 왕국'의 젤다 공주라는 신분이 드러나 마왕에게 납치당한다. <br><br> 그러나 링크가 퇴마의 힘을 가진 용사가 되어 마왕을 쓰러뜨리고 젤다를 구한다. <br><br> 그 후에도 함께 모험을 계속하던 그들은 <br> 대정령 '해왕' 이 다스린다는 해역에 우연히 도착해 유령선에 대한 소문을 듣게 된다. <br> 용감하게 유령선으로 뛰어든 테트라를 쫓아가려던 링크는 <br> 그만 바다 속으로 떨어지고 어느 낯선 섬에서 정신을 차리게 되느데...");
                    break;
                case 6:
                    $('body').css('background-image', "url('./img/13_breath.png')");
                    $('.textBox .text h2').html('야생의 숨결');
                    $('.textBox .text h6').html("100년 전, 재앙이라 불리는 가논의 부활이 있었다. <br> 각 종족을 대표하는 영걸들과 공주인 젤다, 용사인 링크가 가논을 저지하려 했으나 <br> 강력한 가논의 힘 앞에 링크를 제외한 모든 영걸이 죽고 링크마저 저지당하자 <br> 공주는 자신의 힘을 이용하여 가논을 억누르기 시작했다. <br><br> 그렇게 100년이 지나고 날이 적당한 어느 날, 링크는 기억을 잃은 채로 의문의 장소에서 눈을 뜨는데...");            
                    break; 
                default:
                    break;
            }
        }

        // prev, next 버튼 이벤트
        function onClickPrevBtn (e) {
            e.preventDefault();
            cuId--;
            slideGallery();
            exId = cuId + 1;
        }
        function onClickNextBtn (e) {
            e.preventDefault();
            cuId++;
            slideGallery();
            btnListItemEls[0].classList.remove('selected');
            exId = cuId - 1;
        }

        // 이미지 슬라이드 이벤트
        function slideGallery(static) {
            var bool = static ? static : false;
            var x = _galleryWidth * cuId * -1;
            viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
            if (!bool) {
                var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600
                var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
                viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;    
                exId = cuId;
            } else {
                viewContainerEl.style.removeProperty('transition');
            }
            btnDisnone();
            backgroundImgTrade();
        }

        function btnDisnone () {
            console.log(cuId);
            if (cuId != 0) {
                prevBtn.classList.remove('disNone');
            } if (cuId === 0) {
                prevBtn.classList.add('disNone');
                nextBtn.classList.remove('disNone');
            }
            if (cuId === 6) {
                nextBtn.classList.add('disNone');
            }
            else {
                nextBtn.classList.remove('disNone');
            }
        }

        function resizeGallery() {
            var containerWidth = _galleryWidth * _galleryMax;
            viewEl.style.width = _galleryWidth + 'px';
            viewContainerEl.style.width = containerWidth + 'px';
            for(var i = 0; i < _galleryMax; i++) {
                viewItemEls[i].style.width = _galleryWidth + 'px';
            }
            slideGallery(true);
        }

        function addEvent() {
            viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
            viewContainerEl.addEventListener('transitionend', onTransitionEnd);
            for(var i = 0; i < btnListItemEls.length; i++) {
                btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
            }
            prevBtn.addEventListener('click', onClickPrevBtn);
            nextBtn.addEventListener('click', onClickNextBtn);
        }

        function reset() {
            cuId = 0;
            listItemEls[exId].classList.remove('selected');
            listItemEls[cuId].classList.add('selected');
            resizeGallery();
            exId = cuId;
        }

        function init() {
            reset();
            addEvent();
        }
        init();
}