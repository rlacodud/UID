# __Vue__

## __1. Vue란?__
![vue][vue]

[vue]: ./img/vue.png "vue"
#### Vue는 사용자 인터페이스를 만들기 위한 진보적인 프레임워크이다.
#### React와 비슷하게 __Component 기반의 SPA(Single Page Application)__ 사이트를 구축할 수 있다.

<br>

#### 여기서 Component와 SPA가 무엇인지에 대해서는 [01_React.md](https://github.com/rlacodud/Blog/blob/mit/Programming_Study/React/md/01.React.md)에서 설명한 부분이 있으니 링크를 참고하기 바란다.

<br>

#### 잘 알듯이 프레임워크의 3대장인 React와 Angular를 두고 왜 Vue를 공부해야 하냐고 묻는다면
#### __단연 쉬워서__ 라고 할 수 있다.

<br>

---

<br>

## __2. Vue CLI란?__
#### React와는 조금 다르게 Vue에는 __기본 개발 환경을 설정해주는 도구인 Vue CLI__ 가 존재한다.
#### Vue CLI가 기본적인 프로젝트 세팅을 해주기 때문에 폴더 구조에 대한 고민, lint, build 등에 대한 고민을 덜을 수 있다.

>#### __여기서 CLI란?__
>#### 명령 줄 인터페이스(Command Line Interface) 또는 명령어 인터페이스로,
>#### __텍스트 터미널을 통해 사용자와 컴퓨터가 상호작용하는__ 방식을 뜻한다.
>#### <br>
>#### 즉, 작업 명령은 사용자가 컴퓨터 키보드 등을 통해 문자열의 형태로 입력하며 컴퓨터로부터의 출력 역시 문자열의 형태로 주어진다.

<br>

### __(1) Vue CLI 설치__
#### 우선, npm 또는 yarn이 설치되어야 진행 가능하다.
#### __우리는 npm을 이용하여 진행할 것이다.__
```terminal
npm install -g @vue/cli
```
#### 위 설치 명령어를 입력하여 설치 진행 후, 아래 명령어를 입력했을 때 vue의 version이 나온다면 설치가 잘 완료된 것이다.
```terminal
vue --version
```

<br>

### __(2) 프로젝트 생성__
#### 아래 명령어를 통해 프로젝트를 생성한다.
```terminal
vue create 프로젝트명
```
#### 위 명령어를 입력하면 아래와 같이 설정에 대한 선택지가 주어지는데
![choice][choice]

[choice]: ./img/choice.png "choice"
#### 보통 __default (babel, eslint)__ 를 선택하여 기본적인 세팅을 완료한다.
#### `Manually select features`는 __추가로 설치할 라이브러리나 문법__ 등에 대해 설정할 수 있는 방식이다.

<br>

#### 프로젝트 생성이 완료되고 나면 아래 명령어를 이용하여 dev 서버를 실행해준다.
```terminal
npm run serve
```
![tutorial][tutorial]

[tutorial]: ./img/tutorial.png "tutorial"
#### React와 동일하게 우리가 Vue 프로젝트를 생성할 때마다 보게 될 초기 화면이다.

<br>

#### 이렇게 Vue가 무엇인지와 Vue 프로젝트를 생성하는 방법에 대해 알아봤다.
#### 이어서 다음 시간에는 Vue에서 중요한 Component에 대해 배워보자.

<br>

[02_Vue_Component](./02_vue_component.md)