__CSS Unit(CSS 단위)__
===

#### css 프로퍼티에는 키워드, 크기 단위, 색상 표현 단위 등의 특정 단위를 갖는 값을 지정한다.

![cssSyntax][cssSyntax]

[cssSyntax]: ./img/css-syntax.png "Block"  

<br/>

## __1. 키워드__
##### 각 프로퍼티에 따라 사용할 수 있는 키워드가 존재한다.  
##### 예를 들어 display 프로퍼티의 값으로 사용할 수 있는 키워드는 block, inline, inline-block, none 이 있다.

<br/>

## __2. 크기 단위__
### __2-1. 절대 단위__
#### 절대 단위는 상위 요소 또는 창 크기에 관계없이 동일한 크기를 의미한다.
<br/>

#### 절대 단위는 반응형을 고려하지 않는 작업에 유용하며 주로 인쇄물에서 많이 사용되는 방법이다.
#### 또한 상속된 다른 css로부터 영향을 받지 않기에 포지셔닝과 간격에 보편적으로 사용된다.

<br/>

#### __(1) px(pixel)__
##### &nbsp; - 화면을 구성하는 가장 기본이 되는 화소 단위이며, 1px은 화소 1개 크기를 의미한다.
##### &nbsp; - margin과 padding의 경우에는 창의 크기와 상관없이 일정하게 고정값을 주는 게 좋으므로 주로 px 단위를 사용한다.
##### &nbsp; - 픽셀은 절대 단위이기에 디바이스 해상도(resolution)에 따라 상대적인 크기를 갖는다.
![resolution][resolution]

[resolution]: ./img//resolution.jpg "resolution"  
##### &nbsp; 즉, 위 예시 사진처럼 같은 픽셀값을 가져도 해상도가 큰 디바이스에서는 이미지가 깨져보일 수 있다는 것이다.

<br/>

#### __(2). pt(points)__
##### &nbsp; - 1px = 0.75pt
##### &nbsp; - 1pt = 1/72in에 대한 물리적 측정
##### &nbsp; - css 외부에서 유형의 크기를 조정하는 가장 일반적인 방법

<br/>

#### __(3). pc(pica)__
##### &nbsp; - pt와 같은 기능을 함
##### &nbsp; - 1pc = 12pt

<br/>

#### __(4) in(inch)__
##### &nbsp; - 인치는 물리적 측정이지만 css에서는 pixel에 직접 매칭된다.
##### &nbsp; - 1in = 96px

<br/>

#### __(5) cm__
##### &nbsp; - 대부분의 세계에서 cm는 물리적 측정으로 더 친숙하고 유용하다.
##### &nbsp; - 1cm = 37.8px

<br/>

#### __(6) mm__
##### &nbsp; - 1mm = 0.1cm = 3.78px

<br/>

----

<br/>

### __2-2. 상대 단위__
#### 상대 단위는 다른 요소나 부모 또는 창 크기에 비례하여 크기가 조정되기 때문에 반응형 사이트의 스타일을 지정하는 데 유용하다.

<br/>

#### __(1) %__
##### &nbsp; %는 백분율 단위의 상대 단위이며 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.

```html
  <style>
    body {font-size: 14px; text-align: center;}
    div {color: #fff; background-color: #000;
      font-size: 120%; /* 14px * 1.2 = 16.8px */
    }
  </style>

  <div>Font size: 14px * 120% → 16.8px</div>
```
<br/>

#### __(2) 글꼴 상대 길이__

#### __(2-1). em__
##### &nbsp; - em은 __배수 단위__ 로, 요소에 정의된 글꼴 크기에 상대적인 사이즈를 설정한다.
##### &nbsp; &nbsp; 예를 들어 1em은 요소에 지정된 사이즈와 같고 2em은 요소에 지정된 사이즈의 2배이다.

<br/>

##### &nbsp; - 1em = font-size(부모 엘리먼트)
##### &nbsp; - 기본: 1em = 16px = 0.17in = 12pt = 1pc = 4.2mm = 0.42cm 
```html
  <style>
    body {font-size: 14px; text-align: center;}
    div {color: #fff; background-color: #000;
      font-size: 1.2em; /* 14px * 1.2 = 16.8px */
    }
  </style>

  <div>Font size: 1.2em → 14px * 1.2 = 16.8px</div>

```

<br/>

##### &nbsp; __*단, 아래와 같이 중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기 때문에 주의해야 한다.__

![example1][example1]

[example1]: ./img/example1.png "example1"  

```html
  <style>
    body {font-size: 14px; text-align: center;}
    div {font-weight: bold;
      font-size: 1.2em; /* 14px * 1.2 = 16.8px */
      padding: 2em; /* 16.8px * 2 = 33.6px */
    }
    .box1 {background-color: rgba(255, 0, 0, 0.2); }
    .box2 {background-color: rgba(255, 0, 0, 0.6); }
    .box3 {background-color: rgba(255, 0, 0, 0.8); }
  </style>

  <div class='box1'>
    Font size: 1.2em ⇒ 14px * 1.2 = 16.8px
    <div class='box2'>
      Font size: 1.2em ⇒ 16.8px * 1.2 = 20.16px
      <div class='box3'>
        Font size: 1.2em ⇒ 20.16px * 1.2 = 24.192px
      </div>
    </div>
  </div>
```

<br/>

#### __(2-2). rem__
##### &nbsp; - rem은 __최상위 요소(html)의 글꼴 크기__ 를 기준으로 삼으며, rem의 r은 root를 의미한다.
##### &nbsp; - font-size뿐만 아니라 grid system에도 사용 가능하다.

![example2][example2]

[example2]: ./img/example2.png "example2"  

```html
  <style>
    html {
      font-size: 14px;
      /* font-size 미지정 시에는 16px */
    }
    div {font-weight: bold; padding: 2em; text-align: center;
      font-size: 1.2rem; /* html font-size: 14px * 1.2 = 16.8px */
    }
    .box1 {background-color: rgba(255, 0, 0, 0.2);}
    .box2 {background-color: rgba(255, 0, 0, 0.6);}
    .box3 {background-color: rgba(255, 0, 0, 0.8);}
  </style>

  <div class='box1'>
    Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
    <div class='box2'>
      Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
      <div class='box3'>
        Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
      </div>
    </div>
  </div>
```

##### &nbsp; 사용자가 브라우저의 기본 폰트 크기를 변경하더라도 이에 따라 웹사이트의 레이아웃을 적절히 조정할 수 있다.

<br/>

#### __(2-3). Viewport 단위(vh, vw, vmin, vmax)__
##### &nbsp; - 반응형 웹 디자인은 화면의 크기에 동적으로 대응하기 위해 % 단위를 자주 사용한다.
##### &nbsp; &nbsp; 하지만 % 단위는 em과 같이 상속에 의해 부모 요소에 상대적 영향을 받는다.

<br/>

##### &nbsp; - viewport 단위는 상대적인 단위로, viewport를 기준으로 한 상대적 사이즈를 의미한다.
##### &nbsp; __* 여기서 viewport란, 현재 화면에 보여지고 있는 다각형(보통 직사각형)의 영역을 뜻하며,__
##### &nbsp; __웹 브라우저에서는 현재 창에서 문서를 볼 수 있는 부분을 말한다.__
   단위   |    설명  
--------- | ---------  
vw |  viewport 너비의 1/100
vh |  viewport 높이의 1/100
vmin |  viewport 너비 또는 높이 중 작은 쪽의 1/100
vmax |  viewport 너비 또는 높이 중 큰 쪽의 1/100

##### &nbsp; +예를 들면 브라우저의 크기가 1100px 너비 | 700px 높이일 때
##### &nbsp; __1vmin은 7px이 되고 1vmax는 11px이 된다.__

<br/>

#### __(2-4). ex__
##### &nbsp; ex 단위의 정의는 현재 폰트의 x-높이값(소문자 x의 높이값) 또는 em의 절반 값이라 할 수 있다.
##### &nbsp; 주로 타이포그래픽에서 __세밀한 조정__ 을 할 때 사용한다.

<br/>

##### &nbsp; ex 단위를 도대체 언제 사용하는 게 유용한가 하는 의문이 들 수도 있다.
##### &nbsp; 일반적으로 ex 단위는 위첨자와 아래첨자의 위치를 조정하는 데 사용하기도 한다.

![example3][example3]

[example3]: ./img/example3.png "example3"  

```html
  <style>
    sup {position: relative; bottom: 1ex;}
    sub {position: relative; bottom: -1ex;}
  </style>

  <p>이 부분은 <sup>위첨자</sup>입니다.</p> 
  <p>이 부분은 <sub>아래첨자</sub>입니다.</p> 
```

<br/>

#### __(2-5). ch__
##### &nbsp; ch 단위는 현재 폰트의 0의 너비값으로 정의된다.
##### &nbsp; width: 40ch는 40개의 문자열을 포함하는 너비를 지니고 있다는 뜻이다.

<br/>

----
## __3. calc()__
#### calc()는 괄호 안의 식을 계산한 결과를 속성값으로 사용하게 해주는 함수이다.
#### 예를 들어 아래 font-size는 20px로 정의된다.
``` css
font-size: calc(10px + 10px);
```

<br/>

#### __(1) 연산자__
##### &nbsp; 사칙연산과 동일하게 +는 덧셈, -는 뺄셈, *는 곱셈, /는 나눗셈이다.
##### &nbsp; 곱셈과 나눗셈의 좌우에는 공백이 없어도 되지만 덧셈과 뺄셈의 좌우에는 공백이 있어야 한다.

<br/>

#### __(2) 계산순서__
##### &nbsp; - 왼쪽에서 오른쪽으로 계산한다.
##### &nbsp; - 곱셈과 나눗셈을 먼저 하고, 덧셈과 뺄셈은 나중에 한다.
##### &nbsp; - 괄호가 있으면 괄호 안부터 계산한다.

<br/>

##### __반응형 웹 구현 시 calc()는 매우 편리하고도 큰 역할을 한다.__

----

<br/>

### __+추가적으로__
#### &nbsp; px과 em을 계산할 때 [pixel to em](http://pxtoem.com/)을 이용하면 편하다.
#### &nbsp; 더불어 특정 단위를 사용할 때에는 브라우저 지원이 가능한지 [Can I Use](https://caniuse.com/viewport-units)를 통해 확인하는 게 좋다.