[01_Three.js](./01_Three.js.md)

---

# __Three.js module 활용 - (1) Basic__

## __1. 기본 세팅__
#### 이전 시간에 `Three.js` [공식 사이트](https://threejs.org/)에서 다운로드했던 압축폴더를 이용하여 다양한 예제를 만들어보자.
#### 우선 압축을 해제해보면 아래와 같은 폴더 구조가 나올텐데 이를 본인이 사용하는 코드 에디터에서 열어보자.
![three,js_master][three,js_master]

[three,js_master]: ./img/three,js_master.png "three,js_master"

<br>

### __(1) 파일 생성__
#### 해당 디렉토리 내에 `study` 폴더를 생성하고 아래 파일들을 생성 및 작성해준다.
```html
<!-- study/01_basic.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01_Basic</title>
  <link rel="stylesheet" href="01_basic.css">
  <script type="module" src="01_basic.js" defer></script>
</head>
<body>
  <div id="webgl-container"></div>
</body>
</html>
```

```css
/* study/01_basic.css */
* {outline: none; margin: 0;}
body {overflow: hidden;}
#webgl-container {position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
```

```javascript
// study/01_basic.js
import * as THREE from '../build/three.module.js';

class App {
  constructor() {
    const divContainer = document.querySelector('#webgl-container');
    this._divContainer = divContainer;

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  window.onload = function  () {
  new App();
}
```

<br>

#### 여기서 `01_basci.html` 파일의 아래 부분을 보면 __script를 `module` 타입으로 import__ 하고 있는데
#### 우리는 이번 편에서 __`three.module.js` 파일을 활용할__ 예정이기 때문이다.

<br>

#### 또한 __`defer`__ 속성을 지정하게 되면 __이 페이지가 모두 로딩된 이후에 해당 javascript를 실행시키게__ 한다.
```html
<script type="module" src="./js/01_basic.js" defer></script>
```

<br>

#### 제일 중요한 __`01_basic.js`__ 파일을 하나하나 살펴보자.

<br>

### __(2) three.module import__
#### 우선 디렉토리에 존재하는 __`three.module.js`를 아래 코드를 통해 import해줌으로써 `Three.js`에서 제공하는 기능을 사용할 수 있게__ 한다.
```javascript
// study/01_basic.js
import * as THREE from '../build/three.module.js';
```

#### `01_basic.html`에서 생성한 `webgl-container` id를 가진 div를 찾아서 `divContainer` 변수에 대입해준다.
#### 그리고 __`this._divContainer`를 통해 해당 App CLASS 내부에서만 사용할__ `_divContainer`라는 변수를 생성한다.
```javascript
const divContainer = document.querySelector('#webgl-container');
this._divContainer = divContainer;
```

<br>

### __(3) renderer__
#### `antialias: true`는 저번 시간에도 사용했듯이 깨져보이는 현상을 막아주는 부분이다.
#### __`setPixelRatio`는 canvas의 픽셀비율을 정하는 기능__ 인데 __`window.devicePixelRatio`를 통해 현재 디바이스의 픽셀비율을 따르도록__ 설정한다.
#### 이어서 __`divContainer`에 자식요소로 `renderer`를 추가함으로써__ 공간에 대한 3D object를 그릴 canvas에 대한 기본적인 설정을 마무리하였다.
```javascript
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
divContainer.appendChild(renderer.domElement);
this._renderer = renderer;
```
>#### __앞에 `THREE`가 붙는 것은 `Three.js`에서 제공하는 기능을 사용한다__ 는 의미이다.

<br>

### __(4) scene__
#### 3D object의 공간이 될 __`scene`을 생성하고__
#### 아직 정의하지 않았지만 __`camera`와 `light`, `model`(mesh)에 대한 설정과 기능을 정의한 함수들을 호출시켜준다.__
#### 이어서 __window가 `resize`될 때__ `this.resize.bind(this);`를 통해 App CLASS를 `bind`함으로써 __App CLASS를 타겟으로 잡아주고 `resize` 함수를 호출시킨다.__
```javascript
const scene = new THREE.Scene();
this._scene = scene;

this._setupCamera();
this._setupLight();
this._setupModel();

window.onresize = this.resize.bind(this);
this.resize();

requestAnimationFrame(this.render.bind(this));
```

<br>

---

<br>

## __2. Camera, Light, Model__
#### 그럼 이제 정의하지 않고 호출만 한 함수들을 정의해보자.

<br>

### __(1) Camera__
#### __`_setupCamera`는 `camera`를 정의하는 함수다.__
#### 우선 canvas의 가로, 세로 크기를 구한 뒤, 변수에 대입한다.
```javascript
_setupCamera () {
  const width = this._divContainer.clientWidth;
  const height = this._divContainer.clientHeight;
  const camera = new THREE.PerspectiveCamera(
    75,
    width / height,
    0.1,
    100
  );
  camera.position.z = 2;
  this._camera = camera;
}
```
#### 그 후 __`PerspectiveCamera`를 통해 카메라의 시야각(`Field of View`), 가로세로비(`ASPECT`), 하한값(`NEAR`), 상한값(`FAR`)을 설정해준다.__
#### __`camera`의 기본 position은 `(0, 0, 0)`__ 이므로 object가 더 잘 보이도록 z값을 변경해준다.
>#### `camera.position.z`는 __값이 클수록 멀어지고 작을수록 가까워진다.__

<br>

### __(2) Light__
#### __`_setupLight`은 `light`를 정의하는 함수다.__

<br>

#### __`light`의 색깔을 `color`를 통해 정의하고 `intensity`로 빛의 세기를__ 정의한 뒤
#### 이를 `light`라는 변수 안에 `DirectionalLight` 광원으로 __위에서 정의한 설정들을 대입함으로써 `light`를 생성한다.__
#### 이어서 `light`의 `position`을 설정하고 공간인 __`scene`에 추가함으로써 3D object와 상호작용할 수 있게__ 한다.
```javascript
_setupLight() {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  this._scene.add(light);
}
```

<br>

### __(3) Model__
#### __`_setupModel`은 `Model`(3D object | Mesh)을 정의하는 함수다.__
#### __`Mesh` 생성 시에는 `geometry`(뼈대)와 `material`(질감) 설정이 필수인데__
#### x, y, z가 `(1, 1, 1)`이며 색상이 `44a88`인 `box`를 생성하고 있다.

<br>

#### 이어서 이를 `scene`에 추가함으로써 보여지게 한다.
```javascript
_setupModel() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({color: 0x44a88});

  const cube = new THREE.Mesh(geometry, material);

  this._scene.add(cube);
  this._cube = cube;
}
```

<br>

---

<br>

## __3. resize, render, update__
### __(1) resize__
#### `resize` 함수는 초반에 window가 `resize`될 때 호출시키는 함수였는데
#### __window가 `resize`될 때마다 가로, 세로값을 재정의하고__
#### 카메라의 가로세로비, `renderer`의 사이즈에 대입함으로써 __반응형으로 실행할 수 있게끔__ 한다.
```javascript
resize() {
  const width = this._divContainer.clientWidth;
  const height = this._divContainer.clientHeight;

  this._camera.aspect = width / height;
  this._camera.updateProjectionMatrix();

  this._renderer.setSize(width, height);
}
```

<br>

### __(2) render__
#### `render` 함수 또한 초반에 `requestAnimationFrame` 내에서 실행됐었는데 `time`을 인자로 받고 있다.
#### 이 __`time`은 `requestAnimationFrame`이 전달해주는 값이다.__
```javascript
render(time) {
  this._renderer.render(this._scene, this._camera);
  this.update(time);
  requestAnimationFrame(this.render.bind(this));
}

update(time){
  time *= 0.001;
  this._cube.rotation.x = time;
  this._cube.rotation.y = time;
}
```
#### __`render` 함수를 통해 `scene`을 `camera`의 시점으로__ 렌더링하도록 명령하고
#### `update` 함수에 `time` 인자를 전달하면서 호출해준다.

<br>

#### __`update` 함수는 시간이 갈수록 우리가 생성한 `cube`가 x축과 y축을 따라 회전하도록__ 하는 함수이다.

<br>

#### 마지막으로 __window가 `load`되었을 때 App을 생성하도록__ 함으로써
#### App CLASS 내부에서 작성한 코드들이 실행되도록 한다.
```javascript   
  window.onload = function  () {
  new App();
}
```

<br>

![01_basic][01_basic]

[01_basic]: ./img/01_basic.gif "01_basic" 
#### 그럼 위와 같이 x축과 y축으로 회전하는 파란색 큐브를 볼 수 있을 것이다.

<br>

#### 이렇게 `module`을 통해 `three.js`를 적용해보는 기본 방법에 대해 알아봤다.
#### 다음은 다양한 Geometry 예제를 만들고 배워보는 시간을 가져보자.

---

[전체 코드 파일](https://github.com/rlacodud/UID/blob/mit/Research/Three.js/three.js-master/study/01_basic.js)
[02_Three.js module 활용 - (2) Geometry](./03_Three.js_module_geometry.md)