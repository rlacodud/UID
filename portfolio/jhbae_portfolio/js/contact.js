var audio = document.getElementById('audio_play'); 

addEventListener("mouseover", function(event){
	if(event.target.tagName === "LI"){
	  li = Array.from(event.target.parentElement.children);
    index = li.indexOf(event.target)
  	// console.log("index : ", index);
    Max_Font = 25;
    
    // for문을 사용하여 i가 0이고 16과 같거나 작고 (li.length 를 사용해도 된다) i는 증가한다.
    // 지정해둔 max의 값에 -4 곱하기 i를 해준다.
    // 내가 선택한 번호보다 앞의 숫자는 각각의 인덱스 값에 + i를 해주고
    // 내가 선택한 번호보다 뒤의 숫자는 각각의 인덱스 값에 - i를 해줍니다.
    // 만약 front 나 back 일시에 폰트 사이즈에 + "px"을 하여 적용 시켜줍니다.
    // 마지막으로 다시 리턴시켜줍니다.
    for(let i = 0; i <= 10; i++){
    	fontSize = Max_Font - 4 * i;
      front = li[index + i];
      back = li[index - i];
      if(front){
        front.style.fontSize = fontSize + "px";
      }
      if(back){
        back.style.fontSize = fontSize + "px";
      }
    	if(!(front || back)) return;
    }
  }
});