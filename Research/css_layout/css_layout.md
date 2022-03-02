
# Display
### display 속성은 웹 페이지의 레이아웃을 결정하는 CSS의 중요한 속성 중 하나이며 <br/> 이 속성은 해당 HTML 요소가 웹 브라우저에 시각적으로 언제 어떻게 보이는가를 결정한다. <br/> <br/> 간략히 말하자면 각 요소에 대한 배치를 결정 할 때에 사용된다.


# display 요소
## 블록(block)
### display 속성값이 블록(block)인 요소는 언제나 새로운 라인(line)에서 시작하며, </br> 해당 라인의 모든 너비를 차지한다.  
-계속해서 위로 쌓이는 박스 같은 구조이다.

    <div>, <h1>, <p>, <ul>, <ol>, <form>요소는 대표적인 블록(block) 요소이다.

    <div class="first">1</div>
    <div class="second">2</div>
    <div class="third">3</div>

    <style>
        .div { display: block; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/155942814-3b622d76-2024-46c0-9802-e9c8c810ac8d.png)


## 인라인(inline)
### display 속성값이 인라인(inline)인 요소는 새로운 라인(line)에서 시작하지 않는다. <br/>또한, 요소의 너비도 해당 라인 전체가 아닌 해당 HTML 요소의 내용(content)만큼만 차지한다.
-옆으로 밀리는 텍스트 같은 구조이다.

    <span>, <a>, <img>요소는 대표적인 인라인(inline) 요소이다.

        <style>
            .div { display: inline; }
        </style>

![image](https://user-images.githubusercontent.com/54615250/155943663-3fb53dc4-4e27-4b8a-90f5-84e49fe46ff3.png)

## 인라인-블록(inline-block)
### display 속성값이 인라인-블록으로 설정된 요소는 해당 요소 자체는 인라인(inline) 요소처럼 동작한다. <br/>  하지만 해당 요소 내부에서는 블록(block) 요소처럼 동작한다. 이처럼 인라인-블록 요소는 인라인 요소와 비슷하지만, 너비와 높이를 설정할 수 있습니다.
-크기를 지정해줄 수 있는 옆으로 밀리는 텍스트 같은 구조이다.

    <style>
		.div { 
            display: inline-block; 
            width: 200px;
            height: 200px; 
            }
    </style>

![image](https://user-images.githubusercontent.com/54615250/155943779-49a7d767-9e03-4268-8c87-656bb398f10c.png)

## 논(none)
### display 속성값이 논으로 설정된 요소는 웹 페이지에 더 이상 나타나지 않으며, <br/> 웹 페이지의 레이아웃에도 영향을 미치지 않습니다.
    <style>
        .div { display: none; }
    </style>

<!-- ![image](https://user-images.githubusercontent.com/54615250/156271391-9cd425b1-d232-4b57-ab3c-8e12967a47b5.png) -->


# Position
### position 속성은 문서 상에 요소를 배치하는 방법을 지정한다. <br/> top, right, bottom, left 속성이 요소를 배치할 최종 위치를 결정한다. <br/> <br/> 간략히 말하자면 각 요소를 원하는 위치에 배치 할 때에 사용된다.

# Position 요소 
## static (정적 위치 지정)
### 정적 위치(static position) 지정 방식은 단순히 웹 페이지의 흐름에 따라 차례대로 요소들을 위치시키는 방식이다.
-HTML 요소의 위치를 결정하는 가장 기본적인 방식인 static은 차례대로 왼쪽에서 오른쪽으로, 위에서 아래로 쌓이며 top, right, bottom, left 속성값에 영향을 받지 않는다.

    <span class="first">1</span>
    <span class="second">2</span>
    <span class="third">3</span>
    <div class="first">1</div>
    <div class="second">2</div>
    <div class="third">3</div>

    <style>
        span { position: static; }
        div { position: static; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/156274302-4f27a7cc-2579-4572-834d-c355f2ba22c5.png)

## relative (상대 위치 지정)
### 상대 위치(relative position) 지정 방식은 해당 HTML 요소의 기본 위치를 기준으로 위치를 설정하는 방식이다.

-top, bottom, left, right 속성을 이용해서, 요소가 원래 위치에 있을 때의 상하좌우로 부터 얼마나 떨어지게 할지를 지정할 수 있습니다.

    <style>
        span {     
            position:relative;
            top:25px; }
        div {
            position:relative;
            left:100px; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/156275601-ac45c18f-49fd-419a-af67-b8919554350d.png)

## fixed (고정 위치 지정)
### 고정 위치(fixed position) 지정 방식은 뷰포트(viewport)를 기준으로 위치를 설정하는 방식이다. 
-웹 페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치하게 된다.

    <style>
        div { height: 2000px; }
        .first{
            position: fixed;
            left: 500px; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/156276442-e62f12b9-99ac-4130-8480-e9963f46531c.png)

## absolute (절대 위치 지정)
### 절대 위치(absolute position) 지정 방식은 고정 위치가 뷰포트를 기준으로 위치를 결정하는 것과 비슷하게 동작한다.

-단지 뷰포트(viewport)를 기준으로 하는 것이 아닌 위치가 설정된 조상(ancestor) 요소를 기준으로 위치를 설정하게 됩니다. 하지만 위치가 설정된 조상(ancestor) 요소를 가지지 않는다면, HTML 문서의 body 요소를 기준으로 위치를 설정하게 됩니다.

    <style>
        .first{
            position:absolute;
            left: 500px; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/156278771-b1f64ef8-58b1-42df-994e-747cdd3501f1.png)


# Float
### float 속성은 해당 HTML 요소가 주변의 다른 요소들과 자연스럽게 어울리도록 만들어 준다.
-원래 이미지와 텍스트 배치 용도로 등장했지만, 현재는 웹 페이지의 레이아웃(layout)을 작성할 때 자주 사용된다.

    <div class="img">1</div>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <style>
        .img { float: left; }
    </style>

![image](https://user-images.githubusercontent.com/54615250/156282835-0e3d6944-4ec6-4c7f-a089-361b5a538906.png)