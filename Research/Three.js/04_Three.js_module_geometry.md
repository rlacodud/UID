[02_Three.js module 활용 - (3) Basic](./02_Three.js_module_basic.md)

---

# __Three.js module 활용 - (4) Geometry 마무리__
## __1. ShapeGeometry__
#### `ShapeGeometry`는 생성 시 `Shape` CLASS의 객체를 인자로 받는다.
#### `Shape`은 2차원의 도형을 정의하기 위한 CLASS이다.

<br>

### __(1) `Shape` CLASS__
#### 기존 `02_basic.js` 파일 중 `_setupModel` 함수 부분을 주석 처리하고 다음과 같이 작성한다.
```javascript
// 02_basic.js
_setupModel() {
  const shape = new THREE.Shape();

  const geometry = new THREE.BufferGeometry();
  const points = shape.getPoints();
  geometry.setFromPoints(points);

  const material = new THREE.LineBasicMaterial({color: 0xffff00});
  const line = new THREE.Line(geometry, material);

  this._scene.add(line);
}
```
#### 위 코드를 작성하고 화면을 보면 아무것도 뜨지 않을텐데
#### 현재 Shape CLASS를 생성하고 이 CLASS의 모양에 대한 정의를 하지 않았기 때문이다.

<br>

#### Shape CLASS를 정의한 부분 아래에 다음과 같은 코드를 추가하자.
```javascript
shape.moveTo(1, 1);
shape.lineTo(1, -1);
shape.lineTo(-1, -1);
shape.lineTo(-1, 1);
shape.closePath();
```
#### `(x, y)` 좌표를 사용해 도형의 모양을 정의했는데 화면을 보면 다음과 같이 평면의 정사각형 선이 보일 것이다.
![04_shape][04_shape]

[04_shape]: ./img/04_shape.png "04_shape"

<br>

#### 이번에는 좀 더 복잡한 모양의 도형을 정의해보자.
#### 위에서 정의한 부분을 주석처리하고 다음과 같이 작성하자.
```javascript
const x = -2.5, y = -5;
shape.moveTo(x + 2.5, y + 2.5);
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
```
#### 위 코드를 작성하고 화면을 보면 아무것도 안 보이는데 도형의 크기가 너무 커서 화면 밖을 벗어났기 때문이다.
#### 마우스 휠로 화면을 축소하고 보면 하트를 그렸다는 것을 알 수 있다.
![04_shape_hart][04_shape_hart]

[04_shape_hart]: ./img/04_shape_hart.png "04_shape_hart"

<br>

#### `Shape` CLASS에 대해 파악했으므로 다시 `ShapeGeometry`에 대해 알아보자.

<br>

### __(2) ShapeGeometry__
#### 새롭게 정의했던 `_setupModel` 함수를 주석처리하고 이전에 주석처리했던 기존 `setupModel` 함수의 주석을 해제하자.
#### 그 후, `Geometry`를 정의했던 코드를 주석 처리하고 다음과 같이 작성하자.
```javascript
_setupModel() {
  const shape = new THREE.Shape();

  const x = -2.5, y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const geometry = new THREE.ShapeGeometry(shape);

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
#### 그럼 우리가 전에 정의했던대로 gray 색상의 면과 yellow 색상의 선을 갖고 있는 하트가 생성된다.
![04_shape_hart2][04_shape_hart2]

[04_shape_hart2]: ./img/04_shape_hart2.png "04_shape_hart2"

<br>

#### 현재 `Mesh`의 크기가 너무 커 로드될 때마다 마우스 휠로 화면을 축소시키고 있는데
#### 이러한 번거로움을 덜기 위해 `_setupCamera` 함수 내부에서 `camera`의 `z` 위치를 변경해보자.
```javascript
camera.position.z = 15;
```

<br>

---

<br>

## __2. TubeGeometry__  
#### 어떤 곡선을 따라서 원통이 이어지는 형태를 가진 `Geometry`이다.
#### `TubeGeometry`를 이해하기 위해서는 먼저 곡선을 정의할 수 있는 `Curve` CLASS를 파악해야 한다.
#### 위에서 작성했던 `_setupModel` 함수를 주석처리하고 새로운 `_setupModel`을 작성해보자.
```javascript
_setupModel() {
  class CustomSinCurve extends THREE.Curve {
    constructor(scale) {
      super();
      this.scale = scale;
    }
    getPoints(t) {
      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
  }
  const path = new CustomSinCurve(4);

  const geometry = new THREE.BufferGeometry();
  const points = path.getPoints();
  geometry.setFromPoints(points);

  const material = new THREE.LineBasicMaterial({color: 0xffff00});
  const line = new THREE.Line(geometry, material);

  this._scene.add(line);
}
```
#### 코드를 보면 Curve CLASS를 상속받아 CustomSinCurve CLASS를 새롭게 정의하고 있다.