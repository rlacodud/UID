// 문서의 body 부분에 이벤트 추가
        // 마우스를 움직일 때 evt 함수 실행
        document.body.addEventListener("mousemove", evt => {
          const mouseX = evt.clientX;
          const mouseY = evt.clientY;
          
          gsap.set(".cursor", {
              x: mouseX,
              y: mouseY
          });
          
          // shape class의
          // x값을 마우스의 x값으로
          // y값을 마우스의 y값으로 변경
          gsap.to(".shape", {
              x: mouseX,
              y: mouseY,
              stagger: -0.1
          });
          
        });