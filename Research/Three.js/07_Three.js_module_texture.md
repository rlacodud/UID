[02_Three.js module 활용 - (6) Material](./06_Three.js_module_Material.md)

---

# __Three.js module 활용 - (7) Texture Material__
## __1. Texture__
#### __`Texture`는 우리가 전에 사용해본 `map`을 중심으로__ 작동한다.
#### 이전에 진행했던 `04_material.js` 파일을 그대로 사용하자.

<br>

#### `_setupModel` 함수 내부 코드를 주석처리하고 아래와 같이 작성한다.
```javascript
const material = new THREE.MeshStandardMaterial({

});

const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
box.position.set(-1, 0, 0);
this._scene.add(box);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
sphere.position.set(1, 0, 0);
this._scene.add(sphere);
```

<br>

#### 이렇게 기본 `Material` 세팅을 마친 뒤 __`map`에 대한 속성을 지정해볼텐데 이를 위해서는 Texture 객체가 필요하다.__

<br>

#### __Texture 객체는 이미지나 동영상 등을 통해서 생성된다.__
#### 이미지를 Texture 객체로 생성하기 위해 다음과 같은 코드를 `material` 정의 위에 추가해보자.
```javascript
const TextureLoader = new THREE.TextureLoader();
const map = TextureLoader.load(
  "../examples/textures/uv_grid_opengl.jpg",
  texture => {}
);
```
#### 먼저 __`TextureLoader` CLASS를 생성하고 이미지의 경로를 지정한다.__
#### 그리고 이 이미지가 성공적으로 네트워크를 통해 다운로드된 후 __텍스쳐 생성이 완료되면 호출되는__ 콜백 함수를 지정한다.

<br>

#### 이렇게 생성된 Texture 객체인 `map`을 `Material`의 `map` 속성에 지정하면
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map
});
```
#### 다음 사진과 같이 잘 적용되는 것을 볼 수 있다.
![07_texture][07_texture]

[07_texture]: ./img/07_texture.png "07_texture"

#### 기본적으로 __Texture 맵핑은 `Geometry`에 UV 좌표 개념으로 맵핑되어있는데__
#### 이 UV 좌표는 __`Three.js`에서 제공하는 `Geometry`에 기본적으로 지정되어 있고__ 이렇게 반영된 UV 좌표대로 Texture가 맵핑되는 것이다.

<br>

#### __UV 좌표는 0과 1 사이의 값인데__ 우리가 맵핑으로 사용한 이미지는 UV 좌표를 보여주고 있다.
#### __`U`는 이미지의 수평방향에 대한 축이고 `V`는 수직방향에 대한 축인데__
#### 좌측 하단의 UV 좌표는 `(0, 0)`이고 우측 하단은 `(1, 0)`, 좌측 상단은 `(0, 1)`, 우측 상단은 `(1, 1)`이다.

<br>

---

<br>

## __2. Texture 속성__
### __(1) repeat__
#### 이어서 Texture의 속성에 대해 알아보자.
#### __Texture의 속성은 Texture 객체가 생성된 이후에 설정되어야__ 하는데 여기서는 Texture 객체의 생성이 완료된 직후에 호출되는 콜백 함수에서 지정하도록 하자.
```javascript
texture => {
  texture.repeat.x = 1;
  texture.repeat.y = 1;
}
```
#### __`repeat` 속성은 말그대로 Texture의 반복수__ 를 정의하는데 이 `repeat` xy의 기본값은 1이다.

<br>

#### __(1-1) RepeatWrapping__
#### `repeat` 속성은 __`wrap` 속성과 함께__ 사용될 수 있는데 아래와 같이 추가해보면 x와 y 방향으로 동일한 이미지가 2번씩 반복되는 것을 볼 수 있다.
```javascript
texture => {
  texture.repeat.x = 2;
  texture.repeat.y = 2;

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
}
```
![07_wrap][07_wrap]

[07_wrap]: ./img/07_wrap.png "07_wrap"

<br>

#### __(1-2) ClampToEdgeWrapping__
#### `RepeatWrapping`을 __`ClampToEdgeWrapping`__ 으로 변경해보면 처음에만 __이미지가 한번 맵핑되고 이후 반복부터는 이미지의 끝단 pixel로 나머지 영역을 채우는 것__ 을 확인할 수 있다.
![07_clamp][07_clamp]

[07_clamp]: ./img/07_clamp.png "07_clamp"

<br>

#### __(1-3) MirroredRepeatWrapping__
#### 이번에는 __`MirroredRepeatWrapping`__ 으로 변경해보면 이미지를 x와 y 방향으로 반복하되 __짝수번째 반복에서는 이미지가 거울에서 반사되어 뒤집힌 모양으로__ 맵핑되는 것을 볼 수 있다.
![07_mirror][07_mirror]

[07_mirror]: ./img/07_mirror.png "07_mirror"

<br>

### __(2) offset__
#### `offset` 속성의 기본값은 x, y에 대해 모두 0인데 이 __`offset`값은 UV 좌표의 시작위치__ 를 조정한다.
#### 이를 더 쉽게 확인하기 위해 `wrap` 속성을 다음과 같이 변경해보자.
```javascript
texture => {
  texture.repeat.x = 1;
  texture.repeat.y = 1;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  texture.offset.x = 0.5;
  texture.offset.y = 0.5;
}
```
#### 그럼 보는 것처럼 이미지가 __좌측 하단 방향으로 0.5만큼 이동되어 맵핑되는 것__ 을 볼 수 있다.
![07_offset][07_offset]

[07_offset]: ./img/07_offset.png "07_offset"

<br>

### __(3) rotation__
#### 이미지 맵핑을 회전시키기 위한 `rotation` 속성이다.
```javascript
texture => {
  texture.repeat.x = 1;
  texture.repeat.y = 1;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  texture.offset.x = 0;
  texture.offset.y = 0;

  texture.rotation = THREE.MathUtils.degToRad(45);
}
```
#### 이미지가 __UV 좌표 `(0, 0)`를 기준으로 45도 반시계 방향으로 회전해서 맵핑되도록__ 했다.
![07_rotation][07_rotation]

[07_rotation]: ./img/07_rotation.png "07_rotation"
#### __회전의 기준 좌표는 `center` 속성으로 조정__ 할 수 있는데 아래와 같이 입력하면
```javascript
texture => {
  texture.repeat.x = 1;
  texture.repeat.y = 1;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  texture.offset.x = 0;
  texture.offset.y = 0;

  texture.rotation = THREE.MathUtils.degToRad(45);

  texture.center.x = 0.5;
  texture.center.y = 0.5;
}
```
#### 아래와 같이 __`(0.5, 0.5)`를 기준 즉, 각 `Mesh`의 가운데를 기준으로__ 이미지가 회전되어 맵핑된다.
![07_center][07_center]

[07_center]: ./img/07_center.png "07_center"

<br>

### __(4) Filter__
#### Texture 이미지가 렌더링될 때 __사용할 필터에 대한 속성이다.__
>#### __- `magFilter`__
>#### Texture 이미지의 원래 크기보다 화면에 더 크게 확대되어 렌더링될 때 사용한다.
>#### __- `minFilter`__
>#### Texture 이미지의 원래 크기보다 화면에 더 작게 렌더링될 때 사용한다.

<br>

#### 두 Filter에 대한 기본값은 다음과 같다.
```javascript
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.NearestMipMapLinearFilter;
```

<br>

#### __(4-1) magFilter__
#### `magFilter`에 대한 __`LinearFilter`는 가장 가까운 4개의 pixel 색상을 얻어와 선형 보간한 값을 사용한다.__
#### 적용할 수 있는 다른 속성으로는 __가장 가까운 하나의 pixel 색상을 가져와 그대로 사용하는 `NearestFilter`이다.__
#### 가장 가까운 pixel값을 사용하므로 __계단 현상이 일어나게 되는 속성__ 이다.

<br>

#### __(4-2) minFilter__
#### `minFilter`를 이해하기 위해 `mipMap`을 먼저 이해해야 하는데 __`mipMap`은 원래의 이미지 크기를 절반으로 줄여서 만들어놓은 이미지 셋__ 이다.
#### 이 속성을 잘 이해하기 위해 카메라의 거리를 z축으로 변경한다.
```javascript
camera.position.z = 7;
```

<br>

#### __`NearestMipMapLinearFilter`는 렌더링할 맵핑 크기와 가장 크기가 가까운 `mipMap` 이미지 2개를 선택하고 `mipMap` 이미지로부터 가장 가까운 pixel 1개씩을 얻은 뒤에 이렇게 얻어진 2개의 pixel의 가중치 평균 값을 사용한다.__
![07_mipmap][07_mipmap]

[07_mipmap]: ./img/07_mipmap.png "07_mipmap"

<br>

#### 이외에도 `minFilter`에 적용할 수 있는 속성은 더 있는데 아래와 같다.
![07_mipmapTotal][07_mipmapTotal]

[07_mipmapTotal]: ./img/07_mipmapTotal.png "07_mipmapTotal"
>#### __- `NearestFilter`__
>#### `mipMap`을 사용하지 않고 단순히 가장 가까운 pixel 하나를 가져와 사용한다.
>#### __- `LinearFilter`__
>#### `mipMap`을 사용하지 않고 원래 Texture로부터 4개의 가장 가까운 pixel을 얻어와 선형 보간한 값을 사용한다.
>#### __- `NearestMipMapNearestFilter`__
>#### 렌더링할 맵핑 크기와 가장 가까운 `mipMap` 이미지 1개를 선택하고 가장 가까운 1개의 pixel 값을 가져와 사용한다.
>#### __- `LinearMipmapNearestFilter`__
>#### 렌더링할 맵핑 크기와 가장 가까운 `mipMap` 이미지 1개를 선택하고 가장 가까운 4개의 pixel을 가져와서 선형 보간하여 사용한다.
>#### __- `LinearMipmapLinearFilter`__
>#### 렌더링할 맵핑 크기와 가장 크기가 가까운 `mipMap` 이미지 2개를 선택하고 각각의 `mipMap` 이미지에 대해 대해 가장 가까운 pixel 4개를 얻은 뒤에 선형 보간하게 되면 2개의 색상값이 얻어지는데 이를 다시 가중치 평균한 색상값을 사용한다.

<br>

#### 그림을 보면 __`mipMap`을 사용한 게 렌더링 품질이 좋다.__
#### 그렇다고 `mipMap`을 항상 사용하는 게 답은 아닌 게 `mipMap`의 생성을 위한 메모리 사용량이 상당하고 렌더링 시 하나의 pixel값을 결정하기 위한 계산에 필요한 연산량이 각 속성에 따라 모두 다르므로 사용하는 Texture 맵핑의 크기 등에 따라서 적절한 `minFilter`의 속성값을 지정해서 사용해야 한다.
#### 그러나 대부분의 경우, 기본값을 사용해도 무방하다.

<br>

---

<br>

## __3. Texture 맵핑 속성__
### __(1) Texture 다운로드__
#### 여러가지 맵핑 속성을 살펴보기 위해서는 Texture 이미지가 필요한데 [3dtextures.me](https://3dtextures.me/) 사이트에서 사용할 이미지 데이터를 다운받도록 하자.
#### 왼쪽 카테고리 중 Glass 카테고리에 들어가 GLASS WINDOW 002 항목을 클릭해보면 데이터에 대한 다양한 옵션과 정보에 대해 확인할 수 있다.
#### 스크롤하다보면 다운로드 버튼을 발견할 수 있는데 클릭해서 구글 드라이브로 이동 후 들어있는 모든 파일을 다운받아보자.

<br>

#### 그 후 다운로드받은 파일을 우리가 실습 중인 study 폴더 아래에 images 폴더를 생성 후 그 아래에 glass 폴더를 생성하여 옮겨준다.
#### 이제 Texture 속성에 지정할 이미지들을 Texture 객체로 생성해야 하는데 Texture 객체를 생성하는 기존의 코드를 주석처리하고 다음과 같이 작성하자.
```javascript
_setupModel() {
  const TextureLoader = new THREE.TextureLoader();
  const map = TextureLoader.load("images/glass/Glass_Window_002_basecolor.jpg");
  const mapAO = TextureLoader.load("images/glass/Glass_Window_002_ambientOcclusion.jpg");
  const mapHeight = TextureLoader.load("images/glass/Glass_Window_002_height.jpg");
  const mapNormal = TextureLoader.load("images/glass/Glass_Window_002_normal.jpg");
  const mapRoughness = TextureLoader.load("images/glass/Glass_Window_002_roughness.jpg");
  const mapMetalic = TextureLoader.load("images/glass/Glass_Window_002_metallic.jpg");
  const mapAlpha = TextureLoader.load("images/glass/Glass_Window_002_opacity.jpg");
      
  const material = new THREE.MeshStandardMaterial({
    map: map
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  box.position.set(-1, 0, 0);
  this._scene.add(box);

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
  sphere.position.set(1, 0, 0);
  this._scene.add(sphere);
}
```

<br>

### __(2) map__
#### 소스 코드 파일을 저장해보면 `map` 속성에 지정된 Texture 이미지대로 맵핑된 결과를 볼 수 있다.
#### `Mesh`를 더 크게 보기 위해 `camera`의 위치를 `z`축에 대해 3으로 변경한다.
```javascript
camera.position.z = 3;
```

<br>

### __(3) normalMap__
#### normalMap 속성을 지정하기 위해 다음과 같이 코드를 추가한다.
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map,
  normalMap: mapNormal,
});
```
#### 결과를 보면 이전엔 보이지 않았던 `Mesh`의 표면에 입체감이 나타난다.
#### 현재 광원이 고정된 위치에 있어 한쪽면만 밝고 한쪽면만 어두운 상황인데 이를 개선하기 위해 광원이 camera와 함께 회전되도록 해보자.
#### 이를 위해 광원을 scene의 자식이 아닌, camera의 자식으로 추가하고
```javascript
_setupLight() {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  // this._scene.add(light);
  this._camera.add(light);
}
```
#### camera를 scene의 자식으로 추가한다.
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
  camera.position.z = 3;
  this._camera = camera;
  this._scene.add(camera);
}
```

<br>

#### `map: map` 코드는 주석처리하고 확인해봤을 때 다음과 같이 잘 적용되어 다양한 각도에서도 적절한 광원이 비추는 것을 확인할 수 있다.
![07_light][07_light]

[07_light]: ./img/07_light.png "07_light"

<br>

#### `normalMap`으로 다시 돌아와서 `normalMap`은 법선 벡터를 이미지화해서 저장해둔 것인데
#### 법선 벡터는 Mesh의 표면에 대한 수직 벡터로 광원에 대한 영향을 계산하는 데 사용된다.

<br>

#### `Mesh`에 대한 법선 벡터를 시각화하기 위해 `VertexNormalsHelper` CLASS를 사용해보자.
#### 이 CLASS를 사용하기 위해 import해야 하니 `04_material.js` 파일의 최상단에 다음과 같이 작성하자.
```javascript
import {VertexNormalsHelper} from '../examples/jsm/helpers/VertexNormalsHelper.js';
```
#### 그리고 Box와 sphere에 대해 법선벡터 시각화를 위해 `_setupModel` 함수 내에 다음과 같이 작성한다.
```javascript
const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
box.position.set(-1, 0, 0);
this._scene.add(box);

const boxHelper = new VertexNormalsHelper(box, 0.1, 0xffff00);
this._scene.add(boxHelper);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
sphere.position.set(1, 0, 0);
this._scene.add(sphere);

const sphereHelper = new THREE.VertexNormalsHelper(sphere, 0.1, 0xffff00);
this._scene.add(sphereHelper);
```
#### 그리고 화면을 보면 다음과 같이 노란색 선이 보인다.
![07_VertexNormalsHelper][07_VertexNormalsHelper]

[07_VertexNormalsHelper]: ./img/07_VertexNormalsHelper.png "07_VertexNormalsHelper"
#### 우선 box에 대한 노말벡터를 보면 box를 구성하는 좌표에 대해 노말 벡터 즉, box 표면에 대한 수직 벡터로 노란색 선이 보인다.
#### 지정되지 않은 특정 지점에 대한 노말 벡터는 이 box의 구성 좌표의 노말 벡터들을 이용해 보간되어 계산된다.
#### 그런데 normalMap을 사용하면 box 표면의 노말 벡터를 normalMap 이미지의 RGB값을 이용해 계산하게 되는데
#### 이렇게 되면 인위적으로 Mesh 표면의 __각 pixel에 대해 법선 벡터를 지정할 수 있게 되고 각 pixel 단위로 광원 효과가 달라져__ 입체감을 표현할 수 있게 된다.