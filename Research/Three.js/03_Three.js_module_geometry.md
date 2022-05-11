[02_Three.js module 활용 - (1) Basic](./02_Three.js_module_basic.md)

---

# __Three.js module 활용 - (2) Geometry__
#### 이어서 `Geometry`에 대해 더 자세히 알아보자.

<br>

## __1. 기본 세팅__
#### 이전 시간에 만들었던 `01_basic.html`, `01_basic.css`, `01_basic.js`를 복사하여 붙여넣기 한 후 파일명을 __`02_geometry`로 변경한다.__

<br>

#### 그 후 `02_basic.html` 에서 `css`와 `js`를 import하는 부분의 파일명을 `02_basic`로 변경하고 이제 본격적으로 __`02_basic.js` 파일을 수정해나가자.__

<br>

---

<br>

## __2. 색상 변경 및 Line 추가__

#### `02_basic.js` 파일 중 __`_setupModel` 함수 부분을 아래와 같이 수정하자.__
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
#### `color`가 `515151`(gray)인 `box`를 만들고 `color`가 `ffff00`(yellow)인 `line`(선) Material을 만들어
#### __`WireframeGeometry`를 이용해 앞서 생성한 `box` `geometry`의 골격을 참조하여 `lineMaterial` 색상의 line을 만든다.__

![02_box_line][02_box_line]

[02_box_line]: ./img/02_box_line.png "02_box_line" 

#### 만들어진 __`Mesh`와 `Line`을 하나의 그룹으로 묶기 위해 `Group`을 생성하고 추가한다.__
#### 그리고 이를 `scene`에 추가함으로써 화면에 보여지도록 한다.

<br>

---

<br>

## __3. OrbitControls__
### __(1) OrbitControls import__
#### 이제 __사용자의 마우스 움직임에 따라 3D object가 움직여지도록__ 해볼텐데
#### 이를 위해서 기존에 작성했던 자동으로 회전하는 코드인 아래 부분을 주석 처리하자.
```javascript
update(time){
  time *= 0.001;
  // this._cube.rotation.x = time;
  // this._cube.rotation.y = time;
}
```

<br>

#### 그리고 가장 중요한 기능을 담고있는 __`OrbitControls.js`를 `02_basic.js`의 최상단에서 import한다.__
```javascript
import { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';
```

<br>

#### `OrbitControls.js`를 import하기 위해 처리 과정이 필요한데 __`02_basic.html` 파일 내에서 `link` 태그 바로 밑에 아래 코드를 추가한다.__
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

### __(2) 함수 작성__
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
#### __`OrbitControls` 객체를 생성할 때에는 `camera` 객체와 마우스 이벤트를 받는 `dom` 요소가 필요하다.__
#### 사용자의 마우스 움직임에 따라 3D object가 움직이는 것이 아닌, __`camera`를 돌려감으로써 3D object가 움직이는 것처럼 보이게 하는 원리__ 이기 때문이다.

<br>

#### `camera`는 이전에 생성했던 `camera`로, `dom` 요소는 `divContainer`로 잡았다.

<br>

#### 그 후 웹 페이지를 보면 다음과 같이 마우스에 따라 잘 움직이는 것을 볼 수 있다.
![OrbitControls][OrbitControls]

[OrbitControls]: ./img/OrbitControls.gif "OrbitControls" 

<br>

---

<br>

## __4. Geometry__
### __(1) BoxGeometry__
#### 이제 본격적으로 우리가 다루고 있는 `BoxGeometry`에 대해 알아보자.
#### __`BoxGeometry`는 가로, 세로, 깊이에 대한 크기와 함께 가로, 세로, 깊이 각각에 대한 분할(Segments) 개수로 정의된다.__
#### 이 가로, 세로, 깊이에 대한 분할수는 지정하지 않으면 __기본값이 1인데__ 다음과 같이 이 값들을 모두 2로 지정해보자.
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
```

<br>

![02_segments][02_segments]

[02_segments]: ./img/02_segments.png "02_segments" 
#### 그럼 위와 같이 가로, 세로, 깊이가 모두 2분할된 걸 볼 수 있다.

<br>

### __(2) CircleGeometry__
#### 이번에는 `CircleGeometry`에 대해 알아보자.
#### __`CircleGeometry`는 원판 모양의 `Geometry`이고__ 다음과 같은 4개의 인자를 받는다.
![02_circleGeometry_basic][02_circleGeometry_basic]

[02_circleGeometry_basic]: ./img/02_circleGeometry_basic.png "02_circleGeometry_basic" 
>#### __- `radius`__
>#### 원판의 크기를 정의하며 기본값은 1이다.
>#### __- `segments`__
>#### 원판의 분할 개수이며 기본값은 8이다.
>#### 그렇기에 해당값이 클수록 좀 더 완전한 원의 형태가 된다.
>#### __- `thetaStart`__
>#### 원판의 시작 각도를 정의하며 각도에 대한 단위는 radian이고 기본값은 0이다.
>#### __- `thetaLength`__
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

### __(3) ConeGeometry__
#### __`ConeGeometry`는 원뿔 모양의 `Geometry`이고__ 다음과 같은 7개의 인자를 받는다.
![02_coneGeometry_basic][02_coneGeometry_basic]

[02_coneGeometry_basic]: ./img/02_coneGeometry_basic.png "02_coneGeometry_basic" 
>#### __- `radius`__
>#### 밑면에 해당되는 원판의 반지름 크기를 정의하며 기본값은 1이다.
>#### __- `height`__
>#### 원뿔의 높이를 정의하며 기본값은 1이다.
>#### __- `radialSegments`__
>#### 원뿔의 둘레 방향에 대한 분할 개수이며 기본값은 8이다.
>#### __- `heightSegments`__
>#### 원뿔의 높이 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- `openEnded`__
>#### 원뿔 밑면을 열어놓을 것인지에 대한 여부를 정의하며 기본값은 false이기에 닫혀있다.
>#### __- `thetaStart`__
>#### 원뿔의 시작각을 정의하며 기본값은 0이다.
>#### __- `thetaLength`__
>#### 원뿔의 연장각을 정의하며 기본값은 2pi(360도)이다.

<br>

#### `CircleGeometry`에 대한 정의를 주석처리하고
#### `ConeGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_coneGeometry_basic][02_coneGeometry_basic]

[02_coneGeometry_basic]: ./img/02_coneGeometry_basic.png "02_coneGeometry_basic" 
```javascript
// const geometry = new THREE.CircleGeometry(0.9, 16, Math.PI/2, Math.PI/2);
const geometry = new THREE.ConeGeometry(0.5, 1.6, 16, 9, true, 0, Math.PI);
```

<br>

### __(4) CylinderGeometry__
#### __`CylinderGeometry`는 원통 모양의 `Geometry`이고__ 다음과 같은 8개의 인자를 받는다.
![02_cylinderGeometry_basic][02_cylinderGeometry_basic]

[02_cylinderGeometry_basic]: ./img/02_cylinderGeometry_basic.png "02_cylinderGeometry_basic" 
>#### __- `radiusTop`__
>#### 윗면에 해당하는 원의 반지름 크기이며 기본값은 1이다.
>#### __- `radiusBottom`__
>#### 밑면에 해당하는 원의 반지름 크기이며 기본값은 1이다.
>#### __- `height`__
>#### 원뿔의 높이를 정의하며 기본값은 1이다.
>#### __- `radiusSegments`__
>#### 원통의 둘레 방향에 대한 분할 개수이며 기본값은 8이다.
>#### __- `heightSegments`__
>#### 원통의 높이 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- `openEnded`__
>#### 원통의 윗면과 밑면을 열어놓을 것인지에 대한 여부를 정의하며 기본값은 false이기에 닫혀있다.
>#### __- `thetaStart`__
>#### 원통의 시작각을 정의하며 기본값은 0이다.
>#### __- `thetaLength`__
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

### __(5) SphereGeometry__
#### __`SphereGeometry`는 구 모양의 `Geometry`이고__ 다음과 같은 7개의 인자를 받는다.
![02_sphereGeometry_basic][02_sphereGeometry_basic]

[02_sphereGeometry_basic]: ./img/02_sphereGeometry_basic.png "02_sphereGeometry_basic" 
>#### __- `radius`__
>#### 구의 반지름 크기이며 기본값은 1이다.
>#### __- `widthSegments`__
>#### 수평 방향에 대한 분할 개수이며 기본값은 32이다.
>#### __- `heightSegments`__
>#### 수직 방향에 대한 분할 개수이며 기본값은 16이다.
>#### __- `phiStart`__
>#### 수평 방향에 대한 구의 시작각을 정의하며 기본값은 0이다.
>#### __- `phiLength`__
>#### 수평 방향에 대한 구의 연장각을 정의하며 기본값은 2pi(360도)이다.
>#### __- `thetaStart`__
>#### 수직 방향에 대한 구의 시작각을 정의하며 기본값은 0이다.
>#### __- `thetaLength`__
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

### __(6) RingGeometry__
#### __`RingGeometry`는 2차원 형태의 반지 모양 `Geometry`이고__ 다음과 같은 6개의 인자를 받는다.
![02_ringGeometry_basic][02_ringGeometry_basic]

[02_ringGeometry_basic]: ./img/02_ringGeometry_basic.png "02_ringGeometry_basic"
>#### __- `innerRadius`__
>#### 내부 반지름값을 정의하며 기본값은 0.5이다.
>#### __- `outerRadius`__
>#### 외부 반지름값을 정의하며 기본값은 1이다.
>#### __- `thetaSegments`__
>#### 가장자리 둘레 방향으로의 분할 개수이며 기본값은 8이다.
>#### __- `phiSegments`__
>#### 내부 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- `thetaStart`__
>#### 시작각을 정의하며 기본값은 0이다.
>#### __- `thetaLength`__
>#### 시작각을 정의하며 기본값은 2pi(360도)이다. 

<br>

#### `SphereGeometry`에 대한 정의를 주석처리하고
#### `RingGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_ringGeometry][02_ringGeometry]

[02_ringGeometry]: ./img/02_ringGeometry.png "02_ringGeometry"
```javascript
// const geometry = new THREE.SphereGeometry(0.9, 32, 12, 0, Math.PI, 0, Math.PI/2);
const geometry = new THREE.RingGeometry(0.2, 1, 6, 2, 0, Math.PI);
```

<br>

### __(7) PlaneGeometry__
#### __`PlaneGeometry`는 평면 모양의 사각형 `Geometry`이고__ 다음과 같은 4개의 인자를 받는다.
![02_planeGeometry_basic][02_planeGeometry_basic]

[02_planeGeometry_basic]: ./img/02_planeGeometry_basic.png "02_planeGeometry_basic"
>#### __- `width`__
>#### 너비에 대한 길이를 정의하며 기본값은 1이다.
>#### __- `height`__
>#### 높이에 대한 길이를 정의하며 기본값은 1이다.
>#### __- `widthSegments`__
>#### 너비 방향에 대한 분할 개수이며 기본값은 1이다.
>#### __- `heightSegments`__
>#### 높이 방향에 대한 분할 개수이며 기본값은 1이다.

<br>

#### `RingGeometry`에 대한 정의를 주석처리하고
#### `PlaneGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_planeGeometry][02_planeGeometry]

[02_planeGeometry]: ./img/02_planeGeometry.png "02_planeGeometry"
```javascript
// const geometry = new THREE.RingGeometry(0.2, 1, 6, 2, 0, Math.PI);
const geometry = new THREE.PlaneGeometry(1, 1.4, 1, 5);
```
#### 해당 __`PlaneGeometry`는 지리 정보 시스템(GIS)에서 3차원 지형 등을 표현하는 데 유용하게 사용된다.__

<br>

### __(8) TorusGeometry__
#### __`TorusGeometry`는 3차원 반지 모양의 `Geometry`이고__ 다음과 같은 5개의 인자를 받는다.
![02_torusGeometry_basic][02_torusGeometry_basic]

[02_torusGeometry_basic]: ./img/02_torusGeometry_basic.png "02_torusGeometry_basic"
>#### __- `radius`__
>#### 반지름값을 정의하며 기본값은 1이다.
>#### __- `tube`__
>#### `Torus`는 긴 원통이 360도 돌아 이루어진 도형인데 이 원통의 반지름값을 정의하며 기본값은 0.4이다.
>#### __- `radialSegments`__
>#### `Torus`의 방사 방향에 대한 분할 개수이며 기본값은 8이다. 값이 클수록 `Torus`의 두께가 두꺼워진다.
>#### __- `tubularSegments`__
>#### `Torus`에 대한 긴 원통의 분할 개수이며 기본값은 6이다. 값이 커질수록 더 동그랗게 된다.
>#### __- `arc`__
>#### `Torus`의 연장각의 길이를 정의하며 기본값은 2pi(360도)이다.

<br>

#### `PlaneGeometry`에 대한 정의를 주석처리하고
#### `TorusGeometry`의 인자에 다양한 값을 줘보며 각 인자에 대해 감을 잡아보자.
![02_torusGeometry][02_torusGeometry]

[02_torusGeometry]: ./img/02_torusGeometry.png "02_torusGeometry"
```javascript
// const geometry = new THREE.PlaneGeometry(1, 1.4, 1, 5);
const geometry = new THREE.TorusGeometry(0.9, 0.4, 24, 32, Math.PI);
```

<br>

### __(9) TorusKnotGeometry__
#### `TorusKnotGeometry`는 보면 알다시피 특별히 정의하기 어려운 형태를 가진 `Geometry`이며 다음과 같은 6개의 인자를 받는다.
#### __복잡한 형태이기에 사용도는 많이 떨어진다.__
![02_torusKnotGeometry_basic][02_torusKnotGeometry_basic]

[02_torusKnotGeometry_basic]: ./img/02_torusKnotGeometry_basic.png "02_torusKnotGeometry_basic"
>#### __- `radius`__
>#### `TorusKnotGeometry`의 반지름을 정의한다.
>#### __- `tube`__
>#### `TorusKnotGeometry`를 구성하는 원통의 반지름 크기를 정의한다.
>#### __- `tubularSegments`__
>#### `TorusKnotGeometry`에 대한 긴 원통의 분할 개수를 정의한다.
>#### __- `radialSegments`__
>#### `TorusKnotGeometry`의 방사 방향에 대한 분할 개수를 정의한다.
>#### __- `p`__
>#### 회전대칭축 중심의 회전수를 정의한다.
>#### __- `q`__
>#### 내부의 원 주위 형상의 회전수를 정의한다.

<br>

#### 이렇게 `Three.js`에서 제공하는 기본적인 `Geometry`들에 대해 알아봤다.
#### 다음 시간엔 다른 `Geometry`에 대해 알아보며 마무리하도록 하겠다.

---

[전체 코드 파일]()
[02_Three.js module 활용 - (4) Geometry 마무리](./04_Three.js_module_geometry.md)