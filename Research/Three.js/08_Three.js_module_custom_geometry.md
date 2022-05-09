[02_Three.js module 활용 - (7) Texture Material](./07_Three.js_module_texture.md)

---

# __Three.js module 활용 - (8) Custom Geometry__
#### 지금까지 우리는 `Three.js`에서 제공하는 다양한 `Geometry`에 대해 배워왔다.
#### 이번에는 __사용자가 원하는 형태의 `Geometry`를 직접 만들어보는__ 방법에 대해 알아보자.

<br>

#### `Geometry`는 `Three.js`에서 `BufferGeometry` CLASS를 통해 정의되는데
#### 해당 CLASS를 통해 정의될 수 있는 속성은 다음과 같다.
>#### __- `position`__
>#### `BufferAttribute`로 지정
>#### `Geometry`를 구성하는 3차원 좌표에 대한 정점
>#### __- `normal`__
>#### `BufferAttribute`로 지정
>#### 각 정점에 대한 수직 벡터
>#### __- `color`__
>#### `BufferAttribute`로 지정
>#### 각 정점에 대한 색상
>#### __- `uv`__
>#### `BufferAttribute`로 지정
>#### 각 정점에 대한 Texture 맵핑좌표
>#### __- `Vertex Index`__
>#### `BufferAttribute`의 `setIndex` 메소드로 지정
>#### `position` 속성으로 지정된 정점에 대한 `index` 배열로 지정

<br>

---

<br>

## __1. 세팅__
#### `01_basic.html`, `01_basic.css`, `01_basic.js`를 복사하여 붙여넣기 한 후 파일명을 __`05_custom_geometry`로 변경한다.__
#### 그에 맞춰 `05_custom_geometry.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

#### 이제 `05_custom_geometry.js` 파일 중 불필요한 코드를 제거해보자.
#### 우선 __`_setupModel` 함수에 있는 모든 코드를 제거하고 `update` 함수를 다음과 같이 변경한다.__
```javascript
update(time){
  time *= 0.001;
}
```

<br>

---

<br>

## __2. position__
#### 이어서 __`_setupModel` 함수에서 사각형을 구성하는 4개의 정점을 배열 객체로__ 다음과 같이 정의해보자.
```javascript
_setupModel() {
  const rawPositions = [
    -1, -1, 0,
    1, -1, 0,
    -1, 1, 0,
    1, 1, 0
  ];
}
```
#### 그리고 다음 코드로 `rawPositions` 배열을 `Float32Array` CLASS의 객체로 랩핑하고
#### `BufferGeometry` 객체를 생성하자.
```javascript
const positions = new Float32Array(rawPositions);

const geometry = new THREE.BufferGeometry();
```

<br>

#### 그리고 이 `geometry` 객체의 `position`을 설정하기 위해 `setAttribute`의 첫번째 인자로 `position`을 지정하고 두번째 인자로 `BufferAttribute` CLASS를 통해 앞에서 랩핑한 정점 데이터를 지정하고 있다.
```javascript
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
```

<br>


#### 이제 __`vertex index`를 지정해야 하는데 이는 삼각형 면을 정의한다.__
#### 정점의 index를 지정할 때 주의해야 할 사항이 있는데 바로 __반시계 방향인 면이 앞면이기에 삼각형을 구성하는 정점의 배치 순서가 반시계 방향이어야__ 한다는 점이다.

<br>

#### 이런 index 구성을 이용해서 다음처럼 `Vertex Index`를 지정할 수 있다.
#### 참고로 __index는 0이 시작값이므로__ 첫번째 index는 0이 된다.
```javascript
geometry.setIndex([
  0, 1, 2,
  2, 1, 3
])
```
#### 그리고 `Geometry`를 렌더링하기 위해 `Mesh`로 만들어줘야 하므로 다음과 같이 코드를 추가하여 렌더링해보자.
```javascript
const material = new THREE.MeshPhongMaterial({color: 0xff0000});

const box = new THREE.Mesh(geometry, material);
this._scene.add(box);
```

<br>

#### 화면을 보면 아무것도 표시되어 있지 않은데 이는 정점에 대한 법선 벡터가 지정되어 있지 않기 때문이다.
#### __법선벡터는 광원이 `Mesh`의 표면에 미치는 입사각과 반사각을 계산하여 재질과 함께 표면의 색상을 결정하는 데__ 사용된다.

<br>

#### 다음 코드를 통해 __자동으로 모든 정점에 대해 법선 벡터를 지정__ 할 수 있다.
```javascript
geometry.computeVertexNormals();
```
#### 그럼 다음과 같이 화면에 결과가 표시되는 것을 확인할 수 있다.
![08_geometry][08_geometry]

[08_geometry]: ./img/08_geometry.png "08_geometry"

<br>

---

<br>

## __3. normal__
#### 하지만 우리는 `Geometry`의 `computeVertexNormals` 메소드를 통한 법선벡터를 자동 계산하지 않고 __직접 지정할텐데__
#### 이를 위해 `computeVertexNormals`를 삭제하고 법선 벡터에 대한 배열 데이터를 다음처럼 추가한다.
```javascript
const rawNormals = [
  0, 0, 1,
  0, 0, 1, 
  0, 0, 1, 
  0, 0, 1
];

const normals = new Float32Array(rawNormals);

geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
```
#### `position`에 설정했던 과정 그대로 진행한다.
#### 보면 4개의 좌표에 대해 모두 `(0, 0, 1)`인데 이는 __`Mesh`의 면으로 봤을 때 면에 대해 수직인 벡터가 모두 `(0, 0, 1)`__ 이기 때문이다.
#### `Float32Array` CLASS 객체로 랩핑하고 이 법선벡터를 `Geometry`에 지정한다.

<br>

#### 그리고 결과를 보면 앞에서와 동일한 결과를 볼 수 있다는 것을 알 수 있다.

<br>

#### 여기서 `Mesh`에 대해 __법선 벡터를 시각화하기 위해 `VertexNormalsHelper` CLASS를 이용해보자.__
#### 이 CLASS를 사용하기 위해 __`05_custom_geometry.html` 파일에서 `css` `link` 부분 밑에__ 아래 코드를 추가하고
```html
<script type="importmap">
  {
      "imports": {
          "three": "../build/three.module.js"
      }
  }
</script>
```
#### `05_custom_geometry.js` 파일의 최상단에서 다음과 같이 import하자.
```javascript
import {VertexNormalsHelper} from '../examples/jsm/helpers/VertexNormalsHelper.js';
```

<br>

#### 이어서 `_setupModel` 함수에 아래 코드를 추가하고 결과를 보면 __사각형을 구성하는 4개의 정점에 법선벡터인 노란색의 선이__ 표시되고 있는 걸 볼 수 있다.
```javascript
const helper = new VertexNormalsHelper(box, 0.1, 0xffff00);
this._scene.add(helper);
```
![08_VertexNormalsHelper][08_VertexNormalsHelper]

[08_VertexNormalsHelper]: ./img/08_VertexNormalsHelper.png "08_VertexNormalsHelper"

<br>

#### __마우스로 화면을 회전시키기 위해 `OrbitControls`를 설치하자.__
#### 마찬가지로 CLASS 사용을 위해 `05_custom_geometry.js` 파일 최상단에 import하고
```javascript
import {OrbitControls} from '../examples/jsm/controls/OrbitControls.js';
```
#### 함수를 호출하는 부분에서 `_setupControls` 함수도 호출한다.
```javascript
this._setupControls();
```
#### 이 함수의 내용은 다음과 같다.
```javascript
_setupControls() {
  new OrbitControls(this._camera, this._divContainer);
}
```

<br>

#### 그럼 마우스로 3D Object를 돌려볼 수 있는데 보면 __법선 벡터가 `Mesh`의 표면에 수직이라는 것을__ 명확히 알 수 있다.

<br>

---

<br>

## __4. color__
#### __`color` 속성을 이용하면 각 `vertex`마다 색상값을 지정할 수 있는데__ 이를 위해 각 정점에 대한 색상값 지정 배열 객체를 추가한다.
```javascript
const rawColors = [
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  1, 1, 0
];
```
#### 앞서 진행한 과정과 동일하게 이 배열 객체를 `Float32Array` CLASS 객체로 랩핑하고 `geometry`의 `color` 속성에 지정한다.
```javascript
const colors = new Float32Array(rawColors);

geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
```

<br>

#### 이어서 적용을 위해 재질에 다음 속성을 추가해보자.
```javascript
const material = new THREE.MeshPhongMaterial({color: 0xff0000, vertexColors: true});
```
#### 그러고 결과를 보면 `Mesh`의 표면 색상이 변경되었는데 __원래 재질 자체가 빨간색이므로 각 `vertex`에 적용된 색상이 빨간색의 영향을 받는다.__
#### `vertex`에 지정된 색상만 고유하게 표현되도록 하기 위해 __색상값을 하얀색으로 변경한다.__

<br>

#### 그럼 다음과 같이 각 `vertex`에 지정된 색상대로 `Mesh`가 표현되는 것을 알 수 있다.
![08_color][08_color]

[08_color]: ./img/08_color.png "08_color"

<br>

---

<br>

## __5. uv__
#### __`uv`는 Texture 맵핑을 위한 속성인데__ 이 `uv` 좌표를 담고 있는 배열 객체를 다음처럼 추가해보자.
```javascript
const rawUVS = [
  0, 0,
  1, 0,
  0, 1,
  1, 1
];

const uvs = new Float32Array(rawUVS);

geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
```
#### __`uv` 좌표는 2개가 하나의 좌표를 구성하므로__ `BufferAttribute`의 두번째 인자를 2로 설정한다.

<br>

#### 다음으로 Texture 맵핑은 이미지가 필요한데 다음과 같이 이미지를 추가하고 재질에 다음 속성을 추가하자.
```javascript
const TextureLoader = new THREE.TextureLoader();
const map = TextureLoader.load('../examples/textures/uv_grid_opengl.jpg');

const material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  vertexColors: true,
  map: map
});
```
#### 결과를 보면 __`vertex`에 지정된 색상과 Texture 이미지의 색상이 서로 섞여서__ 렌더링되고 있다.
![08_uv][08_uv]

[08_uv]: ./img/08_uv.png "08_uv"

<br>

#### 이렇게 사용자 Geometry에 대해 알아봤다.
#### 다음 시간에는 광원에 대해 알아보는 시간을 갖자.

---

[02_Three.js module 활용 - (9) 광원](./09_Three.js_module_light.md)