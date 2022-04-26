[03.Ajax](./Ajax.md)

---

# __React Ajax__

## __1. React Ajax란?__
#### 우리가 지금껏 배워온 React 애플리케이션은 페이지를 새로고침함으로써 변경되는 부분이 있었다.
#### 이러한 점들을 보완하고자 Ajax와 연동하는 방법을 배우고 앞으로 API 요청을 할 때 특별한 상황을 제외하고는 페이지를 리로드하지 않는 방법을 사용해보고자 한다.

<br>

#### 우선 실습을 위해 React Ajax 코딩을 진행할 폴더를 생성해주고 본인이 사용하는 코드 에디터에 해당 폴더를 열어준다.
#### 그 후, 터미널을 열어 __`npx create-react-app .`__ 명령을 실행함으로써 __React 프로젝트를 새로 생성__ 해보자.

<br>

#### 이전과 동일하게 `index.js`와 `App.js` 파일을 제외하고 src 디렉토리에 있는 모든 파일을 삭제한다.
#### 그 후, `App` Component를 다음과 같이 수정하자.
```jsx
// src/App.js
function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <nav>
        <ul>
          <li><a href="1">HTML</a></li>
          <li><a href="2">CSS</a></li>
          <li><a href="3">JS</a></li>
        </ul>
      </nav>
      <article>
        <h2>WELCOME</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
```
#### 해당 애플리케이션을 실행해보면 아래와 같은 화면이 나타날 것이다.
![react_ajax1][react_ajax1]

[react_ajax1]: ./img/react_ajax1.png "react_ajax1"  

<br>

#### 이제 Ajax 방식으로 불러올 데이터가 담긴 파일을 생성해보자.
#### Ajax 방식으로 데이터를 가져올 때 public 디렉토리 내의 파일을 가져올 수 있으므로
#### public 디렉토리에 데이터 파일인 list.json 파일을 생성하고 아래와 같이 작성한다.
```json
// public/list.json
[
  {"id": 1, "title": "HTML"},
  {"id": 2, "title": "CSS"},
  {"id": 3, "title": "JS"}
]
```

<br>

#### 이어서 각 item의 id에 따른 상세정보를 {id}.json 형식의 파일로 작성해보자.
#### 다음 세 파일을 마찬가지로 public 디렉토리에서 생성 후 작성하면 된다.
```json
// public/1.json
{
  "id": "1",
  "title": "HTML",
  "desc": "HTML is..."
}
```
```json
// public/2.json
{
  "id": "2",
  "title": "CSS",
  "desc": "CSS is..."
}
```
```json
// public/3.json
{
  "id": "3",
  "title": "JS",
  "desc": "JS is..."
}
```
#### 이제 데이터는 모두 생성되었으니 Component를 만들어보자.
#### `App` Component에서 `Nav` Component를 생성하자.
```jsx
// src/App.js
import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href='1'>HTML</a></li>
          <li><a href='2'>CSS</a></li>
          <li><a href='3'>JS</a></li>
        </ul>
      </nav>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav/>
      <article>
        <h2>WELCOME</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
```

<br>

#### 이제 `Nav` Component가 생성되는 시점에서 Component 목록의 내용을 Ajax를 통해 만들어야 한다.
#### 이전에 생명주기에서 배웠던 `componentDidMount` 메소드를 이용하여 Component가 초기화될 때 네트워크 통신이 가능하게끔 할 것이다.

<br>

#### 다음과 같이 `Nav` Component를 수정해보자.
```jsx
// src/App.js
class Nav extends Component {
  componentDidMount() {
    fetch('list.json')
    .then(function(result) {
      return result.json();
    })
    .then(function(json){
      console.log(json);
    }.bind(this))
  }
  render() {
// ...생략
```
#### `list.json` 파일을 자바스크립트 객체 형식으로 변환한 뒤
#### 이를 console창에 띄우는 작업을 진행했다.
![console][console]

[console]: ./img/console.png "console"  
#### console창을 확인해보면 위와 같이 자바스크립트 객체로 변환된 걸 확인할 수 있다.

<br>

#### 이제 이 JSON 데이터를 가지고 Component 리스트를 생성해보자.
```jsx
// src/App.js
class Nav extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    fetch('list.json')
    .then(function(result) {
      return result.json();
    })
    .then(function(json){
      console.log(json);
      this.setState({list: json});
    }.bind(this))
  }
  render() {
    var listTag = [];
    for(var i = 0; i < this.state.list.length; i++) {
      var li = this.state.list[i];
      listTag.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>);
    }
    return (
      <nav>
        {listTag}
      </nav>
    )
// ...생략
```
#### 위 코드를 보면 state의 list를 생성하여 JSON 데이터를 저장하고 목록의 항목을 생성했다.
#### Ajax를 이용해서 가져온 데이터는 직접 렌더링에 영향을 주면 안되고 state에 넘긴 다음 render 메소드가 state의 변화에 영향을 받아 처리하도록 해야 한다.
#### 그래야 값이 변경될 때마다 render 메소드가 실행되기 때문이다.
#### 또한 배열을 렌더링할 때에는 꼭 key값이 있어야 한다.

<br>

#### 이어서 리스트 항목을 클릭할 경우 해당 항목의 정보를 읽어서 `<article>`에 출력하는 기능을 만들어보자.
#### 우선 `Article` Component를 생성하고 이를 `<article>` 영역을 대체한다.
#### 그 후 리스트 항목 클릭 시, 해당 리스트에 대한 정보가 `article`에 출력되도록 한다.
```jsx
// src/App.js
import React, { Component } from 'react';
class Nav extends Component {
  state = {
    list:[]
  }
  componentDidMount(){
    fetch('list.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        console.log(json);
        this.setState({list:json});
      }.bind(this));
  }
  render(){
    var listTag = [];
    for(var i=0; i<this.state.list.length; i++){
      var li = this.state.list[i];
      listTag.push(
        <li key={li.id}>
          <a href={li.id} data-id={li.id} onClick={function(e){
            e.preventDefault();
            console.log('trigger');
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}>
            {li.title}
          </a>
        </li>)
    }
    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    )
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}


class App extends Component {
  state = {
    article:{title:'Welcome', desc:'Hello, React & Ajax'}
  }
  render(){
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav onClick={function(id){
          fetch(id+'.json')
            .then(function(result){
              return result.json();
            })
            .then(function(json){
              this.setState({
                article:{
                  title:json.title,
                  desc:json.desc
                }
              })
            }.bind(this));
        }.bind(this)}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
    )
  }
}

export default App;
```
#### 1. `App` Component 내에 state를 생성하여 article의 title과 desc값을 삽입하여 기본값을 설정해준다.
#### 2. `Nav` Component의 `a` tag에 `data-id={li.id}`로 각 리스트의 id값을 받아온다.
#### 3. 이 id값을 `this.props.onClick(e.target.dataset.id);`을 통해 현재 클릭된 리스트의 id값을 props로 넘겨준다.
>#### __여기서 dataset이란?__
>#### `data-`로 시작되는 부분을 가리킨다.
>#### 즉, 위 코드에서는 data- __id__ 이기에 `dataset.id`로 값을 받아올 수 있는 것이다.
#### 4. 이어서 `App` Component의 `Nav` Component에서 위에서 전달받은 id를 매개변수로 삼아 `fetch` 메소드에서 현재 클릭된 리스트 id.json을 불러옴으로써 해당하는 데이터를 가져오는 것이다.
#### 5. 해당 데이터는 이어서 article의 title과 desc에 삽입되는 것이다.

<br>

#### 이렇게 props와 state, 반복문, fetch를 통해 효율적으로 페이지를 리로드하지 않고 필요한 데이터만 가져와보는 예제를 진행해보았다.
#### 여기서 더 효율적으로 작성하기 위해 나아가 보자면 아래의 과정을 따라해보자.

<br>