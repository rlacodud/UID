# __React Router__

## __1. Router란?__
#### __사용자가 요청한 `URL`에 따라 알맞는 페이지를 보여주는 것__ 을 의미한다.
<br>

#### 예를 들어 블로그를 생각해봤을 때
#### 블로그 내에는 글쓰기, 포스트 목록, 포스트 읽기 페이지 등 하나의 애플리케이션 속에 여러 페이지로 구성되어 있는 경우가 있다.
#### 이렇게 __여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지별로 Component들을 분리해가면서 프로젝트를 관리하기 위해 필요한 것이 바로 Routing 시스템이다.__

<br>

#### React에서 Route 시스템을 구축하기 위해 사용할 수 있는 선택지는 아래와 같이 크게 두가지가 있다.
>#### __(1) React-Router__
>#### React의 Routing 관련 라이브러리들 중 가장 오래됐고 가장 많이 사용된다.
>#### Component 기반으로 Routing 시스템을 설정할 수 있다.
>---
>#### __(2) Next.js__
>#### React 프로젝트의 프레임워크다.
>#### React 프로젝트 설정을 하는 기능, Routing 시스템, 최적화, 다국어 시스템 지원, 서버 사이드 렌더링 등 다양한 기능을 제공한다.
>#### 파일 경로 기반으로 작동한다.

<br>

#### React Router를 사용하면 쉽게 React Router로 싱글 페이지 애플리케이션(Single Page Application)을 만들 수 있다.

<br>

---

<br>

## __2. Single Page Application이란?__
#### __Single Page Application(이하 SPA)__ 이란 말 그대로 __한 개의 페이지로 이루어진 애플리케이션__ 을 의미한다.
#### 이를 명확히 이해하기 위해서는 SPA가 생기기 전에 사용되던 Multi Page Application(이하 MPA)의 작동 원리에 대해 알아볼 필요가 있다.

<br>

#### <i>MPA에서는 사용자가 다른 페이지로 이동할 때마다 새로운 HTML을 받아오고</i>
#### <i>페이지를 로딩할 때마다 서버에서 CSS, JS, 이미지 파일 등의 리소스를 전달받아 브라우저 화면에 보여줬다.</i>

<br>

#### 이런 방식은 사용자 인터랙션이 별로 없는 정적인 페이지에서는 적합하지만
#### 사용자 인터랙션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이 방식이 적합하지 않았다.
#### __새로운 페이지를 보여줄 때마다 서버측에서 모든 준비를 한다면 그만큼 서버의 자원을 사용하는 것이고 트래픽도 더 많이 나올 수 있기 때문이다.__

![spa][spa]

[spa]: ./img/spa.png "spa"  

#### 그래서 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트하는 방식을 사용하게 됐는데
#### 이렇게 __HTML은 한번만 받아와서 웹 애플리케이션을 실행시키고 그 이후에는 필요한 데이터만 받아와서 화면에 업데이트해주는 것을 SPA__ 라고 한다.

<br>

#### SPA는 기술적으로는 한 페이지만 존재하지만 사용자가 경험하기에는 여러 페이지가 존재하는 것처럼 느낄 수 있는데
#### 사용자가 링크를 눌러서 다른 페이지로 이동할 때마다 다른 페이지의 HTML을 요청하는 것이 아니라 
#### __브라우저의 History API를 사용하여 브라우저의 주소창 값만 변경하고 해당 주소창 값에 적합한 페이지를 보여주는 방식__ 이기 때문이다.

---

#### __React SPA(Single Page Application)__ 구현에 가장 많이 사용되는 'react-router-dom'

<br>

#### __기존 방식인 `<a href=""></a>`__ 를 사용해서 url을 변경하면 `a` 태그의 특성 상 새로고침되며 모든 페이지를 reload하기 때문에 __로드 시간이 걸리게 된다.__

<br>

#### 그러나 React는 __SPA 체제로__ 새로고침 대신 __Router를 사용하여 변경된 소스만 바뀌도록__ 해주기 때문에 속도가 훨씬 빨라진다.

<br>

---

<br>

## __3. React Router 시작하기__
#### 우선 라이브러리를 설치해야 하는데
#### React Router 코딩을 진행할 폴더를 생성해주고 본인이 사용하는 코드 에디터에 해당 폴더를 열어준다.
#### 그 후, 터미널을 열어 `npx create-react-app .` 명령을 실행함으로써 React 프로젝트를 새로 생성해보자.

<br>

#### 그리고 아래 명령어를 입력하여 React Router 라이브러리를 설치해준다.
```jsx
npm install react-router-dom
```

<br>

#### 프로젝트에 React Router를 적용할 때에는 index.js 파일에서 react-router-dom에 내장되어 있는 `BrowserRouter`라는 Component를 사용하여 감싸면 된다.
```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
```
#### 이 Component는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 React Component에서 사용할 수 있도록 해 준다.

<br>

#### 이제 본격적으로 코딩을 시작해보자.
#### 우선 각 페이지에서 사용할 Component를 만들 차례인데 사용자가 웹 사이트에 들어오게 됐을 때 가장 먼저 보여지게 될 `Home` 페이지 Component와 웹 사이트를 소개하는 `About` 페이지 Component를 만들어보자.

<br>

#### src 디렉토리에 `components` 폴더를 생성하고  그 안에 다음 파일들을 생성한다.
```jsx
// src/components/Home.js
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
      </div>
    )
  }
}
```
```jsx
// src/components/About.js
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      </div>
    )
  }
}
```

<br>

#### 이제 각 페이지에서 사용할 Component들이 준비되었다.
#### 이제 핵심인 사용자의 브라우저 주소 경로에 따라 우리가 원하는 Component를 보여주기 위해서
#### `Route`라는 Component를 통해 Route 설정을 해주면 된다.

<br>

#### `Route` Component는 아래와 같은 형식으로 사용한다.
```jsx
<Route path="주소" element={보여줄 Component.js}/>
```
#### 그리고 `Route` Component는 `Routes` Component 내부에서 사용되어야 한다.
>#### __여기서 `<Route/>`에 대해__
>#### Component Tag 작성 시 `<Route></Route>` 이와 같이 열고 닫는 형태로 작성을 하는데
>#### 이를 함축하는 방식이 `<Route/>`이다.

<br>

#### 그럼 이어서 `App` Component를 다음과 같이 `Route` Component를 사용하여 Route 설정을 해보자.
```jsx
// App.js
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
```

<br>

#### 이제 `Route` 기본 설정은 끝났으니
#### `Link` Component를 사용해 다른 페이지로 이동하는 링크를 보여주는 방법을 알아보자.
#### 원래 웹 페이지에서 링크를 보여줄 때 `a` tag를 사용했으나
#### React Router를 사용하는 프로젝트에서 `a` tag를 바로 사용하면 안된다.

---

### __1. react=router, react-router-dom, react-router-native의 차이__

<br>

> #### - react-router-dom: WEB에 사용
> #### - react-router-native: APP에 사용
> #### - react-router: WEB과 APP 둘 다 사용