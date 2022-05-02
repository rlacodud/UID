[01_Three.js](./01_Three.js.md)

---

# __Three.js module 활용__

## __1. 기본__
#### 이전 시간에 `Three.js` [공식 사이트](https://threejs.org/)에서 다운로드했던 압축폴더를 이용하여 다양한 예제를 만들어보자.
#### 우선 압축을 해제해보면 아래와 같은 폴더 구조가 나올텐데 이를 본인이 사용하는 코드 에디터에서 열어보자.
![three,js_master][three,js_master]

[three,js_master]: ./img/three,js_master.png "three,js_master"

<br>

### __(1) 기본 세팅__
#### __(1-1) 파일 생성__
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

#### __(1-2) three.module import__
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

#### __(1-3) renderer__
#### `antialias: true`는 저번 시간에도 사용했듯이 깨져보이는 현상을 막아주는 부분이다.
#### __`setPixelRatio`는 canvas의 픽셀비율을 정하는 기능__ 인데 __`window.devicePixelRatio`를 통해 현재 디바이스의 픽셀비율을 따르도록__ 설정한다.
#### 이어서 __`divContainer`에 자식요소로 `renderer`를 추가함으로써__ 공간에 대한 3D object를 그릴 canvas에 대한 기본적인 설정을 마무리하였다.
```javascript
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
divContainer.appendChild(renderer.domElement);
this._renderer = renderer;
```
>#### __앞에 THREE가 붙는 것은 `Three.js`에서 제공하는 기능을 사용한다__ 는 의미이다.

<br>

#### __(1-4) scene__
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

### __(2) Camera, Light, Model__
#### 그럼 이제 정의하지 않고 호출만 한 함수들을 정의해보자.

<br>

#### __(2-1) Camera__
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
#### 그 후__ `PerspectiveCamera`를 통해 카메라의 시야각(`Field of View`), 가로세로비(`ASPECT`), 하한값(`NEAR`), 상한값(`FAR`)을 설정해준다.__
#### __`camera`의 기본 position은 `(0, 0, 0)`__ 이므로 object가 더 잘 보이도록 z값을 변경해준다.
>#### `camera.position.z`는 __값이 클수록 멀어지고 작을수록 가까워진다.__

<br>

#### __(2-2) Light__
#### __`_setupLight`은 `light`를 정의하는 함수다.__

<br>

#### __`light`의 색깔을 `color`를 통해 정의하고 `intensity`로 빛의 세기를__ 정의한 뒤
#### 이를 `light`라는 변수 안에 `DirectionalLight` 기능을 통해 __위에서 정의한 설정들을 대입함으로써 `light`를 생성한다.__
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

#### __(2-3) Model__
#### __`_setupModel`은 `Model`(3D object | Mesh)을 정의하는 함수다.__
#### __`Mesh` 생성 시에는 `geometry`(뼈대)와 `material`(질감) 설정이 필수인데__
#### x, y, z가 `(1, 1, 1)`이며 색상이 `44a88`인 박스를 생성하고 있다.

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

### __(3) resize, render, update__
#### __(3-1) resize__
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

#### __(3-2) render__
#### `render` 함수 또한 초반에 `requestAnimationFrame` 내에서 실행됐었는데 `time`을 인자로 받고 있다.
#### 이 __`time`은 `requestAnimationFrame`가 전달해주는 값이다.__
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

#### __`update` 함수는 시간이 갈수록 우리가 생성한 cube가 x축과 y축을 따라 회전하도록__ 하는 함수이다.

<br>

#### 마지막으로 __window가 `load`되었을 때 App을 생성하도록__ 함으로써
#### App CLASS 내부에서 작성한 코드들이 실행되도록 한다.
```javascript   
  window.onload = function  () {
  new App();
}
```

<br>

![01_result][01_result]

[01_result]: ./img/01_result.png "01_result" 
#### 그럼 위와 같이 x축과 y축으로 회전하는 파란색 큐브를 볼 수 있을 것이다.

<br>

#### 이렇게 module을 통해 three.js를 적용해보는 기본 방법에 대해 알아봤다.
#### 다음은 다양한 Geometry 예제를 만들고 배워보는 시간을 가져보자.

---

<br>

## __2. Geometry__
#### 이어서 Geometry에 대해 더 자세히 알아보자.

<br>

### __(1) 기본 세팅__
#### 이전 시간에 만들었던 `01_basic.html`, `01_basic.css`, `01_basic.js`를 복사하여 붙여넣기 한 후 파일명을 `02_geometry`로 변경한다.

<br>

#### 그 후 `02_basic.html` 에서 css와 js를 import하는 부분의 파일명을 `02_basic`로 변경하고 이제 본격적으로 `02_basic.js` 파일을 수정해나가자.

<br>

### __(2) 색상 변경 및 Line 추가__

#### `02_basic.js` 파일 중 `_setupModel` 함수 부분을 아래와 같이 수정하자.
```javascript
_setupModel() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const fillMaterial = new THREE.MeshPhongMaterial({color: 0x515151});
  const cube = new THREE.Mesh(geometry, fillMaterial);

  const lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00});
  const line = new THREE.LineSegments(
    new THREE.WireframeGeometry(geometry), lineMaterial);

  const group = new THREE.Group()
  group.add(cube);
  group.add(line);

  this._scene.add(group);
  this._cube = group;
}
```
#### `color`가 `515151`(gray)인 박스를 만들고
#### 이어서 `color`가 `ffff00`(yellow)인 `line`(선) Material을 만들어 `WireframeGeometry`를 이용해
#### 앞서 생성한 박스 `geometry`의 골격을 참조하여 `lineMaterial` 색상의 line을 만든다.

<br>

#### 만들어진 `Mesh`와 `Line`을 하나의 그룹으로 묶기 위해 `Group`을 생성하고 추가한다.
#### 그리고 이를 scene에 추가함으로써 화면에 보여지도록 한다.

<br>

### __(3) OrbitControls__
#### 이제 사용자의 마우스 움직임에 따라 3D object가 움직여지도록 해볼텐데
#### 이를 위해서 기존에 작성했던 자동으로 회전하는 코드인 아래 부분을 주석 처리하자.
```javascript
update(time){
  time *= 0.001;
  // this._cube.rotation.x = time;
  // this._cube.rotation.y = time;
}
```

<br>

#### 그리고 가장 중요한 기능을 담고있는 `OrbitControls.js`를 `02_basic.js`의 최상단에서 import한다.
```javascript
import { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';
```

<br>

#### `OrbitControls.js`를 import하기 위해 처리 과정이 필요한데 `02_basic.html` 파일 내에서 link 태그 바로 밑에 아래 코드를 추가한다.
```javascript
  <script type="importmap">
    {
        "imports": {
            "three": "../build/three.module.js"
        }
    }
</script>
```

<br>

#### 그리고 함수를 호출하는 부분 아래에 다음 함수를 추가로 호출해주고
```javascript
this._setupControls();
```
#### 해당 함수의 내용은 아래와 같다.
```javascript
_setupControls() {
  new OrbitControls(this._camera, this._divContainer);
}
```
#### `OrbitControls` 객체를 생성할 때에는 camera 객체와 마우스 이벤트를 받는 dom 요소가 필요하다.
#### camera는 이전에 생성했던 camera로, dom 요소는 divContainer로 잡았다.

<br>

#### 그 후 웹 페이지를 보면 다음과 같이 마우스에 따라 잘 움직이는 것을 볼 수 있다.
![OrbitControls][OrbitControls]

[OrbitControls]: ./img/OrbitControls.gif "OrbitControls" 

<br>

### __(4) BoxGeometry__
#### 이제 본격적으로 우리가 다루고 있는 `BoxGeometry`에 대해 알아보자.
#### `BoxGeometry`는 가로, 세로, 깊이에 대한 크기와 함께 가로, 세로, 깊이 각각에 대한 분할(Segments) 수로 정의된다.
#### 이 가로, 세로, 깊이에 대한 분할수는 지정하지 않으면 기본값이 1인데 다음과 같이 이 값들을 모두 2로 지정해보자.
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
```

<br>

![02_segments][02_segments]

[02_segments]: ./img/02_segments.png "02_segments" 
#### 그럼 위와 같이 가로, 세로, 깊이가 모두 2분할된 걸 볼 수 있다.

<br>

### __(5) CircleGeometry__
#### 이번에는 `CircleGeometry`에 대해 알아보자.
#### `CircleGeometry`는 원판 모양의 Geometry이고 다음과 같은 4개의 인자를 받는다.
![02_circleGeometry_basic][02_circleGeometry_basic]

[02_circleGeometry_basic]: ./img/02_circleGeometry_basic.png "02_circleGeometry_basic" 
>#### __- radius(반지름)__
>#### 원판의 크기를 정의하며 기본값은 1이다.
>#### __- segments(분할 개수)__
>#### 원판을 구성하는 분할 개수이며 기본값은 8이다.
>#### 그렇기에 해당값이 클수록 좀 더 완전한 원의 형태가 된다.
>#### __- thetaStart(시작 각도)__
>#### 원판의 시작 각도를 정의하며 각도에 대한 단위는 radian이고 기본값은 0이다.
>#### __- thetaLength(연장 각도)__
>#### 원판의 시작 각도를 정의하며 각도에 대한 단위는 radian이고 기본값은 2pi(360도)이다.

<br>

#### `BoxGeometry`에 대한 정의를 주석처리하고
#### `CircleGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_circleGeometry][02_circleGeometry]

[02_circleGeometry]: ./img/02_circleGeometry.png "02_circleGeometry" 

```javascript
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
const geometry = new THREE.CircleGeometry(0.9, 16, Math.PI/2, Math.PI/2);
```

<br>

### __(6) ConeGeometry__
#### ConeGeometry는 원뿔 모양의 Geometry이고 다음과 같은 7개의 인자를 받는다.
![02_coneGeometry_basic][02_coneGeometry_basic]

[02_coneGeometry_basic]: ./img/02_coneGeometry_basic.png "02_coneGeometry_basic" 
>#### __- radius(반지름)__
>#### 밑면에 해당되는 원판의 반지름 크기를 정의하며 기본값은 1이다.
>#### __- height(원통 높이)__
>#### 원뿔의 높이를 정의하며 기본값은 1이다.
>#### __- radialSegments(둘레 분할 개수)__
>#### 원뿔의 둘레 방향에 대한 분할 개수이며 기본값은 8이다.
>#### __- heightSegments(높이 분할 개수)__
>#### 원뿔의 높이 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- openEnded(원뿔 밑면 개방 여부)__
>#### 원뿔 밑면을 열어놓을 것인지에 대한 여부를 정의하며 기본값은 false이기에 닫혀있다.
>#### __- thetaStart(원뿔의 시작각)__
>#### 원뿔의 시작각을 정의하며 기본값은 0이다.
>#### __- thetaLength(원뿔의 연장각)__
>#### 원뿔의 연장각을 정의하며 기본값은 2pi(360도)이다.

<br>

#### `CircleGeometry`에 대한 정의를 주석처리하고
#### `ConeGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_coneGeometry_basic][02_coneGeometry_basic]

[02_coneGeometry_basic]: ./img/02_coneGeometry_basic.png "02_coneGeometry_basic" 
```javascript
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
// const geometry = new THREE.CircleGeometry(0.9, 16, Math.PI/2, Math.PI/2);
const geometry = new THREE.ConeGeometry(0.5, 1.6, 16, 9, true, 0, Math.PI);
```

<br>

### __(7) CylinderGeometry__
#### `CylinderGeometry`는 원통 모양의 Geometry이고 다음과 같은 8개의 인자를 받는다.
![02_cylinderGeometry_basic][02_cylinderGeometry_basic]

[02_cylinderGeometry_basic]: ./img/02_cylinderGeometry_basic.png "02_cylinderGeometry_basic" 
>#### __- radiusTop(윗면 반지름)__
>#### 윗면에 해당하는 원의 반지름 크기이며 기본값은 1이다.
>#### __- radiusBottom(밑면 반지름)__
>#### 밑면에 해당하는 원의 반지름 크기이며 기본값은 1이다.
>#### __- height(원뿔 높이)__
>#### 원뿔의 높이를 정의하며 기본값은 1이다.
>#### __- radiusSegments(둘레 분할 개수)__
>#### 원통의 둘레 방향에 대한 분할 개수이며 기본값은 8이다.
>#### __- heightSegments(높이 분할 개수)__
>#### 원통의 높이 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- openEnded(원통 윗|밑면 개방 여부)__
>#### 원통의 윗면과 밑면을 열어놓을 것인지에 대한 여부를 정의하며 기본값은 false이기에 닫혀있다.
>#### __- thetaStart(원통의 시작각)__
>#### 원통의 시작각을 정의하며 기본값은 0이다.
>#### __- thetaLength(원통의 연장각)__
>#### 원통의 연장각을 정의하며 기본값은 2pi(360도)이다.

<br>

#### `ConeGeometry`에 대한 정의를 주석처리하고
#### `cylinderGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_cylinderGeometry][02_cylinderGeometry]

[02_cylinderGeometry]: ./img/02_cylinderGeometry.png "02_cylinderGeometry" 
```javascript
// const geometry = new THREE.ConeGeometry(0.5, 1.6, 16, 9, true, 0, Math.PI);
const geometry = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 32, 12, true, 0, Math.PI);
```

<br>

### __(8) SphereGeometry__
#### `SphereGeometry`는 구 모양의 Geometry이고 다음과 같은 7개의 인자를 받는다.
![02_sphereGeometry_basic][02_sphereGeometry_basic]

[02_sphereGeometry_basic]: ./img/02_sphereGeometry_basic.png "02_sphereGeometry_basic" 
>#### __- radius(반지름)__
>#### 구의 반지름 크기이며 기본값은 1이다.
>#### __- widthSegments(수평 분할 개수)__
>#### 수평 방향에 대한 분할 개수이며 기본값은 32이다.
>#### __- heightSegments(수직 분할 개수)__
>#### 수직 방향에 대한 분할 개수이며 기본값은 16이다.
>#### __- phiStart(수평 시작각)__
>#### 수평 방향에 대한 구의 시작각을 정의하며 기본값은 0이다.
>#### __- phiLength(수평 연장각)__
>#### 수평 방향에 대한 구의 연장각을 정의하며 기본값은 2pi(260도)이다.
>#### __- thetaStart(수직 시작각)__
>#### 수직 방향에 대한 구의 시작각을 정의하며 기본값은 0이다.
>#### __- thetaLength(수직 연장각)__
>#### 수직 방향에 대한 구의 연장각을 정의하며 기본값은 pi(180도)이다.

<br>

#### `CylinderGeometry`에 대한 정의를 주석처리하고
#### `SphereGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_sphereGeometry][02_sphereGeometry]

[02_sphereGeometry]: ./img/02_sphereGeometry.png "02_sphereGeometry" 
```javascript
// const geometry = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 32, 12, true, 0, Math.PI);
const geometry = new THREE.SphereGeometry(0.9, 32, 12, 0, Math.PI, 0, Math.PI/2);
```

<br>

### __(9) RingGeometry__
#### `RingGeometry`는 2차원 형태의 반지 모양 Geometry이고 다음과 같은 6개의 인자를 받는다.
>#### __- innerRadius__
>#### __- outerRadius__
>#### __- thetaSegments__
>#### __- phiSegments__
>#### __- thetaStart__
>#### __- thetaLength__