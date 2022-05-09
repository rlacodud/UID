[2_Three.js module 활용 - (5) Scene Graph](./05_Three.js_module_sceneGraph.md)

---

# __Three.js module 활용 - (6) Material__

#### `01_basic.html`, `css`, `js` 파일들을 복사하여 붙여넣기한 후 __파일명을 `04_material`로 변경하고__
#### 그에 맞춰 `04_material.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

## __1. Points__
#### 그 후 `04_material.js` 파일에서  `_setupModel` 함수의 코드를 다음과 같이 수정한다.
```javascript
// 04_material.js
_setupModel() {
  const vertices = [];
  for(let i = 0; i < 10000; i++) {
    const x = THREE.Math.randFloatSpread(5);
    const y = THREE.Math.randFloatSpread(5);
    const z = THREE.Math.randFloatSpread(5);

    vertices.push(x, y, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const material = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 5,
    sizeAttenuation: false
  });

  const points = new THREE.Points(geometry, material);
  this._scene.add(points);
}
```

<br>

#### 작성 후 화면을 보면 아래와 같이 되어있다.
![06_material][06_material]

[06_material]: ./img/06_material.png "06_material"
#### 개발자도구를 켜서 `console`창을 보면 에러가 생겨있는데
#### `_setupModel` 함수에서 정의했던 `cube`가 사라짐으로써 __`update` 함수에서 `_cube`를 찾을 수 없어__ 생긴 에러이다.

<br>

#### 아래와 같이 주석 처리를 하거나 해당 코드를 제거하면 에러가 사라져있다.
```javascript
update(time){
  time *= 0.001; // second unit
  // this._cube.rotation.x = time;
  // this._cube.rotation.y = time;
}
```

<br>

#### 그럼 코드를 하나하나 파악해보자.
```javascript
const vertices = [];
for(let i = 0; i < 10000; i++) {
  const x = THREE.Math.randFloatSpread(5);
  const y = THREE.Math.randFloatSpread(5);
  const z = THREE.Math.randFloatSpread(5);

  vertices.push(x, y, z);
}
```
#### 우선 `x`, `y`, `z` 각각의 위치를 잡기 위해 __해당값들을 담을 `vertices`라는 이름의 빈 배열__ 을 만들고
#### __`for` 반복문을 통해 10000개의 위치를 `THREE.Math.randFloatSpread(5)`를 통해 5와 -5 사이 중 난수로__ 잡는다.
#### 그 후 `push`를 통해 생성했던 `vertices`에 위치값들을 삽입해준다.

<br>

```javascript
const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);
```
#### 이어서 각 점들의 뼈대가 될 `geometry`를 생성하고
#### __`setAttribute`를 통해 이 `geometry`의 `position`값을 정의해준다.__
#### `vertices` 배열 속 값들을 `BufferAttribute`로 반환한다는 의미인데 3은 해당값들이 __3개씩(`x`, `y`, `z`) 하나의 좌표__ 라는 의미이다.

<br>

```javascript
const material = new THREE.PointsMaterial({
  color: 0xff0000,
  size: 5,
  sizeAttenuation: false
});

const points = new THREE.Points(geometry, material);
this._scene.add(points);
```
#### 색깔은 `ff0000`(red)이고 크기 5를 가진 점의 `Material`을 만들고
#### 앞서 생성한 뼈대 `geometry`와 `material`을 `Point` Mesh에 대입함으로써 점을 생성한다.
#### __`sizeAttenuation`은 포인트가 카메라의 거리에 따라서 크기가 감쇄되도록__ 한다.
#### 현재는 `false`이므로 거리에 상관없이 항상 같은 크기의 포인트로 렌더링되고 있다.

<br>

#### 이렇게 원리를 파악해봤고 10000개의 점을 한번에 보기 위해 __`_setupCamera` 함수 내부에서 `camera`의 위치를 수정해보자.__
```javascript
// _setupCamera
camera.position.z = 7;
```
![06_material2][06_material2]

[06_material2]: ./img/06_material2.png "06_material2"
#### 이렇게 하면 위 사진처럼 점들이 한눈에 보이게 된다.

<br>

#### 그리고 마우스를 통해 자유롭게 화면을 control하기 위해 앞서 적용해봤던 __`OrbitControls`를 import하자.__
#### 우선 `04_material.html` 중 `css` `link` 태그 밑에 아래의 코드를 작성한다.
```html
<!-- 04_material.html -->
  <script type="importmap">
    {
        "imports": {
            "three": "../build/three.module.js"
        }
    }
</script>
```
#### 그 후 __`04_material.js` 파일 중 최상단에 아래와 같이 `OrbitControls`를 import하자.__
```javascript
// 04_material.js
import {OrbitControls} from '../examples/jsm/controls/OrbitControls.js';
```

<br>

#### 이어서 함수들을 호출하는 부분 아래에 __`OrbitControls`를 사용하는 함수를 추가로 호출하고__
```javascript
this._setupCamera();
this._setupLight();
this._setupModel();
this._setupControls();
```
#### 해당 함수의 내용을 아래와 같이 작성한다.
```javascript
_setupControls () {
  new OrbitControls(this._camera, this._divContainer);
}
```

<br> 

#### 그럼 아래와 같이 마우스를 통해 자유롭게 공간을 볼 수 있다.
![06_materialControl][06_materialControl]

[06_materialControl]: ./img/06_materialControl.gif "06_materialControl"

<br>

#### 현재 포인트가 사각형으로 표현되고 있는데 이를 변경하기 위해서는 __이미지를 대입시켜주는 방법이__ 있다.
#### `_setupModel` 함수 내에 아래의 코드를 추가하고
```javascript
const sprite = new THREE.TextureLoader().load(
  "../examples/textures/sprites/disc.png"
);
```

<br>

#### `material`의 속성을 다음과 같이 추가한다.
```javascript
const material = new THREE.PointsMaterial({
  map: sprite,
  alphaTest: 0.5,
  color: 0xff0000,
  size: 5,
  sizeAttenuation: false
});
```
#### 여기서 __`alphaTest`는 원의 pixel값 중 `alpha`값이 `alphaTest`값보다 클 때에만 pixel이 렌더링된다.__

<br>

---

<br>

## __2. Line__
### __(1) LineMaterial__
#### 이어서 `LineMaterial`에 대해 알아보기 위해 `_setupModel` 함수의 내부 코드를 주석처리하고 다음과 같이 작성한다.
```javascript
_setupModel() {
  const vertices = [
    -1, 1, 0,
    1, 1, 0,
    -1, -1, 0,
    1, -1, 0,
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position",
  new THREE.Float16BufferAttribute(vertices, 3));
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });

  const line = new THREE.Line(geometry, material);
  this._scene.add(line);
}
```
#### 코드를 하나하나 파악해보자.
#### 우선 __`Line`에 대한 좌표를 `vertices` 배열에 순서대로 저장__ 하고 있고 이 배열을 이용해 `Points` 때와 동일하게 `geometry`를 생성하고 있다.
#### `LineBasicMaterial`을 통해 `ff0000`(red)의 색상을 가진 `Material`을 생성하고 이를 `Line`에 대입함으로써 `Line`을 생성하고 있다.

<br>

#### 그럼 아래와 같이 좌표대로 `Line`이 그려진 걸 확인할 수 있다.
![06_material_line][06_material_line]

[06_material_line]: ./img/06_material_line.png "06_material_line"

<br>

#### 그 외에도 다양한 `Line` CLASS가 있는데 아래 그림을 보며 알아보자.
![06_material_line_class][06_material_line_class]

[06_material_line_class]: ./img/06_material_line_class.png "06_material_line_class"
#### 우리가 생성한 좌표는 위와 같이 1, 2, 3, 4로 나누어서 각각 하나의 좌표값을 가진다.
>#### __-`Line`__
>#### __좌표를 순서대로 이어서__ `Line`을 만든다.
>#### __-`LineSegments`__
>#### __좌표값을 두개씩 짝지어서__ 연결하여 `Line`을 만든다.
>#### __-`LineLoop`__
>#### `Line`과 똑같이 좌표를 순서대로 잇지만 이를 __무한반복하기 때문에 4번 좌표에서 1번 좌표로 이어져__ `Line`을 만든다.

<br>

### __(2) LineDashedMaterial__
#### 이어서 선에 대한 다른 `Material`에 대해서도 알아보자.
#### 기존에 작성했던 `LineBasicMaterial`을 주석처리하고 다음과 같이 작성해보자.
```javascript
const material = new THREE.LineDashedMaterial({
  color: 0xffff00,
  dashSize: 0.2,
  gapSize: 0.1,
  scale: 1
});
```
#### __`LineDashedMaterial`은 선의 길이를 참조해서 재질이 적용되므로__ 다음 코드를 추가함으로써 선의 길이를 계산해줘야 한다.
```javascript
const line = new THREE.Line(geometry, material);
line.computeLineDistances();
this._scene.add(line);
```
![06_material_line_dash][06_material_line_dash]

[06_material_line_dash]: ./img/06_material_line_dash.png "06_material_line_dash"
#### 결과를 보면 __`dashSize` 거리만큼 선이 그려지고 `gapSize` 거리만큼 선이 그려지지 않는 걸__ 반복하고 있다.
#### __`scale`값은 `dash` 영역에 대한 표현횟수를 몇배로 할 것인지__ 에 대한 값이다. 즉, __`scale`값이 클수록 `dash`가 더 촘촘하게__ 생긴다.

<br>

---

<br>

## __3. Mesh__
### __(1) MeshBasicMaterial__
#### 이어서 `Mesh`에 대한 `Material`에 대해 살펴보자.
#### `_setupModel` 함수 내부 코드를 주석처리하고 다음과 같이 작성해보자.
```javascript
_setupModel() {
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: false
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  box.position.set(-1, 0, 0);
  this._scene.add(box);

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
  sphere.position.set(1, 0, 0);
  this._scene.add(sphere);
}
```
#### 이 Mesh들을 더 자세히 보기 위해 __`camera`의 `position.z`값을 3으로 변경한다.__
```javascript
camera.position.z = 3;
```
#### 그럼 아래와 같이 우리가 생성한 `box`와 `sphere` `Geometry`를 확인할 수 있다.
![06_mesh][06_mesh]

[06_mesh]: ./img/06_mesh.png "06_mesh"

<br>

#### 이제 코드들을 파악해보자.
```javascript
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false
});
```
#### `MeshBasicMaterial`은 색상을 지정하는 `color`값을 가진다.
#### __`wireframe`은 `Mesh`를 선 형태로 렌더링할지__ 여부에 대한 값이다.
#### `wireframe`을 `true`로 변경하면 아래와 같이 각 `Geometry`가 wire 형태로 보여지게 된다.
![06_mesh_wire][06_mesh_wire]

[06_mesh_wire]: ./img/06_mesh_wire.png "06_mesh_wire"

<br>

### __(2) Material__
#### `Three.js`의 모든 재질이 `Material` CLASS를 상속받기 때문에 `Material`의 모든 속성을 사용할 수 있다.
#### 그럼 아래와 같이 `Material` 속성을 `MeshBasicMaterial`에 적용해보자.
```javascript
const material = new THREE.MeshBasicMaterial({
  visible: true,
  transparent: false,
  opacity: 1,
  depthTest: true,
  depthWrite: true,
  side: THREE.FrontSide,
  color: 0xffff00,
  wireframe: true
});
```
>#### __- `visible`__
>#### 렌더링 시에 `Mesh`의 보임 여부를 지정한다.
>#### __- `transparent`__
>#### 재질에 대한 불투명도 속성인 `opacity` 사용 여부를 지정한다.
>#### __- `opacity`__
>#### 재질의 불투명도를 지정하는 값으로 0과 1 사이의 범위값을 가진다. 0은 완전히 투명하고 1은 완전히 불투명한 상태를 의미한다.

<br>

#### 아래 두 개념을 이해하려면 `Depth Buffer`에 대해 알아야 한다.
#### __`Depth Buffer`는 깊이 버퍼 혹은 z버퍼__ 라고도 한다.
#### __z 버퍼는 3차원 객체를 `camera`를 통해 좌표를 변환시켜 화면상에 렌더링될 때 해당 3차원 객체를 구성하는 각 픽셀에 대한 z 좌표값을 0과 1 사이로 정규화시킨다.__
#### 이 정규화된 z값이 저장된 버퍼가 z 버퍼이다.
#### 즉 이 값이 __작을수록 `camera`에서 가까운 3차원 객체의 pixel이다.__

>#### __- `depthTest`__
>#### 렌더링되고 있는 `Mesh`의 pixel 위치의 z값을 깊이 버퍼 값을 이용해 __검사할지에__ 대한 여부를 정의한다.
>#### __- `depthWrite`__
>#### 렌더링되고 있는 `Mesh`의 pixel에 대한 z값을 깊이 버퍼에 __기록할지에__ 대한 여부를 정의한다.
>#### __- `side`__
>#### `Mesh`를 구성하는 삼각형 면에 대해 __앞면만 렌더링할 것인지, 뒷면만 렌더링할 것인지, 모두 렌더링할 것인지__ 를 정의한다.

#### 광원의 영향을 받지 않는 `MeshBasicMaterial`은 `side` 속성의 변화에 따른 차이를 느낄 수 없다.

<br>

### __(3) MeshLambertMaterial__
#### 이번엔 `MeshLambertMaterial`에 대해 알아보자.
#### `MeshBasicMaterial`을 정의하는 코드를 주석처리하고 다음과 같이 작성하자.
```javascript
const material = new THREE.MeshLambertMaterial({
  color: 0xff0000,
  emissive: 0x0000,
  wireframe: false
});
```
#### 재질 중 `MeshBasicMaterial`을 제외한 다른 재질들은 모두 광원의 영향을 받으므로 `side` 속성에 대해 한번 알아보자.
#### `MeshLambertMaterial` 코드 내에 아래와 같이 `BackSide`로 속성을 추가해보자.
```javascript
const material = new THREE.MeshLambertMaterial({
  transparent: true,
  opacity: 0.5,
  side: THREE.BackSide,
  color: 0xff0000,
  emissive: 0x0000,
  wireframe: false
});
```
#### 그럼 다음과 같이 __뒷면만 렌더링되어 보이는 것__ 을 확인할 수 있다.
![06_mesh_backside][06_mesh_backside]

[06_mesh_backside]: ./img/06_mesh_backside.png "06_mesh_backside"

#### __`emissive`는 다른 광원에 영향을 받지 않는 재질 자체에서 방출하는 색상값__ 이다.
#### 해당값을 `0x666600`으로 변경해보면 아래와 같이 약간 노란빛을 띄는 것을 볼 수 있다.
![06_mesh_emissive][06_mesh_emissive]

[06_mesh_emissive]: ./img/06_mesh_emissive.png "06_mesh_emissive"

<br>

### __(4) MeshPhongMaterial__
#### 이번엔 `MeshPhongMaterial`에 대해 배워보자.
#### `MeshLambertMaterial`을 정의하는 코드를 주석처리하고 다음과 같이 작성하자.
```javascript
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  emissive: 0x0000,
  specular: 0x0000,
  shininess:0, 
  flatShading: false,
  wrireframe: false
})
```
#### __`specular`는 광원에 의해 반사되는 색상으로, 기본값은 연한 회색이다.__
#### __광원이 반사되는 정도는 `shininess` 속성을 통해__ 설정할 수 있다.

<br>

#### __`flatShading`은 `Mesh`를 평편하게 렌더링할지에__ 대한 여부이다.
![06_mesh_flatShading][06_mesh_flatShading]

[06_mesh_flatShading]: ./img/06_mesh_flatShading.png "06_mesh_flatShading"

<br>

### __(5) MeshStandardMaterial & MeshPhysicalMaterial__
#### __(5-1) MeshStandardMaterial__
#### __물리기반 렌더링 PBR을 위한 재질이다.__
#### `MeshPhongMaterial`을 정의하는 코드를 주석처리하고 다음과 같이 작성하자.
```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  emissive: 0x0000,
  roughness: 0,
  metalness: 0,
  wireframe: false,
  flatShading: false
});
```
>#### __`roughness`__
>#### 거칠기를 정의하며 값 0은 거칠기가 전혀 없는, 마치 표면이 거울과 같은 상태이다. 값 1은 거칠기의 최대값이다.
>#### __`metalness`__
>#### 금속성을 정의하며 값 0은 마치 돌처럼 전혀 금속성이 없다는 것이고 값 1은 완전한 금속성이라는 의미이다.

<br>

#### 그저 `metalness`값을 변경한다고 해서 재질이 잘 보이진 않는다.
#### __`roughness`를 0.25로 설정하고 `metalness`를 설정하면__ 아래 사진처럼 금속 재질이 반영된 걸 확인할 수 있다.
![06_mesh_metal][06_mesh_metal]

[06_mesh_metal]: ./img/06_mesh_metal.png "06_mesh_metal"

<br>

#### __(5-2) MeshPhysicalMaterial__
#### `MeshPhysicalMaterial`은 앞서 살펴본 __`MeshStandardMaterial`을 상속받는 발전된 물리기반 렌더링 재질이다.__
#### __재질 표면에 코팅 효과를 줄 수 있고 실제 유리같은 효과를 표현할 수 있다.__

<br>

#### `MeshStandardMaterial`을 정의하는 코드를 주석처리하고 다음과 같이 작성하자.
```javascript  
const material = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  emissive: 0x0000,
  roughness: 0.25,
  metalness: 0.5,
  clearcoat: 0,
  clearcoatRoughness: 0,
  wireframe: false,
  flatShading: false
})
```
>#### __`clearcoat`__
>####  0과 1 사이의 값으로 0이면 `Mesh`의 표면에 코팅이 전혀 안 되어있는 재질이고 1이면 코팅에 대한 효과를 최대로 표현하게 된다.
>#### __`clearcoatRoughness`__
>#### 코팅에 대한 거칠기값으로 0과 1 사이의 값이다. 값 0은 거칠기가 전혀 없고 값 1은 거칠기가 최대이다.

<br>

#### 이렇게 Points, Line, Mesh 각각에 적용되는 Material에 대해 대략적으로 알아봤다.
#### 다음 시간에는 텍스쳐(Texture)를 위한 재질에 대해 알아보자.

---

[02_Three.js module 활용 - (7) Texture Material](./07_Three.js_module_texture.md)