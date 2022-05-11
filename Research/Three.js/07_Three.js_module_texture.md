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
#### 그리고 이 이미지가 성공적으로 네트워크를 통해 다운로드된 후 __Texture 생성이 완료되면 호출되는__ 콜백 함수를 지정한다.

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

#### __UV 좌표는 0과 1 사이의 값으로 구성되어 있는데__ 우리가 맵핑으로 사용한 이미지는 이 UV 좌표를 보여주고 있다.
#### __`U`는 이미지의 수평방향에 대한 축이고 `V`는 수직방향에 대한 축인데__
#### 즉, 좌측 하단의 UV 좌표는 `(0, 0)`이고 우측 하단은 `(1, 0)`, 좌측 상단은 `(0, 1)`, 우측 상단은 `(1, 1)`이다.

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

  // 추가된 부분
  texture.center.x = 0.5;
  texture.center.y = 0.5;
  // 
}
```
#### 아래와 같이 __`(0.5, 0.5)`를 기준 즉, 각 `Mesh`의 가운데를 기준으로__ 이미지가 회전되어 맵핑된다.
![07_center][07_center]

[07_center]: ./img/07_center.png "07_center"

<br>

### __(4) Filter__
#### Texture 이미지가 렌더링될 때 __사용할 filter에 대한 속성이다.__
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

<br>

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
>#### 렌더링할 맵핑 크기와 가장 가까운 `mipMap` 이미지 1개를 선택하고 가장 가까운 4개의 pixel을 가져와 선형 보간하여 사용한다.
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
#### 여러가지 맵핑 속성을 살펴보기 위해서는 Texture 이미지가 필요한데 __[3dtextures.me](https://3dtextures.me/) 사이트에서 사용할 이미지 데이터를 다운받도록 하자.__
#### 왼쪽 카테고리 중 __Glass 카테고리에 들어가 GLASS WINDOW 002__ 항목을 클릭해보면 데이터에 대한 다양한 옵션과 정보에 대해 확인할 수 있다.
#### 스크롤하다보면 다운로드 버튼을 발견할 수 있는데 클릭해서 __구글 드라이브로 이동 후 들어있는 모든 파일을 다운받아보자.__

<br>

#### 그 후 다운로드받은 파일을 우리가 실습 중인 __`study` 폴더 아래에 `images` 폴더를 생성 후 그 아래에 `glass` 폴더를 생성하여 옮겨준다.__
#### 이제 Texture 속성에 지정할 __이미지들을 Texture 객체로 생성__ 해야 하는데 Texture 객체를 생성하는 기존의 코드를 주석처리하고 다음과 같이 작성하자.
```javascript
_setupModel() {
  const TextureLoader = new THREE.TextureLoader();
  const map = TextureLoader.load("images/glass/Glass_Window_002_basecolor.jpg");
  const mapAO = TextureLoader.load("images/glass/Glass_Window_002_ambientOcclusion.jpg");
  const mapHeight = TextureLoader.load("images/glass/Glass_Window_002_height.png");
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
#### 소스 코드 파일을 저장해보면 __`map` 속성에 지정된 Texture 이미지대로__ 맵핑된 결과를 볼 수 있다.
#### `Mesh`를 더 크게 보기 위해 `camera`의 위치를 `z`축에 대해 3으로 변경한다.
```javascript
camera.position.z = 3;
```
![07_map_basic][07_map_basic]

[07_map_basic]: ./img/07_map_basic.png "07_map_basic"

<br>

### __(3) normalMap__
#### `normalMap` 속성을 지정하기 위해 다음과 같이 코드를 추가한다.
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map,

  normalMap: mapNormal,
});
```
#### 결과를 보면 이전엔 보이지 않았던 __`Mesh`의 표면에 입체감이 나타난다.__
#### 현재 광원이 고정된 위치에 있어 한쪽면만 밝고 한쪽면만 어두운 상황인데 이를 개선하기 위해 __광원이 `camera`와 함께 회전되도록__ 해보자.

<br>

#### 이를 위해 __광원을 `scene`의 자식이 아닌, `camera`의 자식으로 추가하고__
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
#### __`camera`를 `scene`의 자식으로 추가한다.__
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

#### `map: map` 코드는 주석처리하고 확인해봤을 때 다음과 같이 잘 적용되어 __다양한 각도에서도 적절한 광원이 비추는 것을__ 확인할 수 있다.
![07_light][07_light]

[07_light]: ./img/07_light.gif "07_light"

<br>

#### `normalMap`으로 다시 돌아와서 __`normalMap`은 법선 벡터를 이미지화해서 저장해둔 것__ 인데
#### __법선 벡터는 `Mesh`의 표면에 대한 수직 벡터로, 광원에 대한 영향을 계산__ 하는 데 사용된다.

<br>

#### __`Mesh`에 대한 법선 벡터를 시각화하기 위해 `VertexNormalsHelper` CLASS를 사용해보자.__
#### 이 CLASS를 사용하기 위해 import해야 하니 __`04_material.js` 파일의 최상단에__ 다음과 같이 작성하자.
```javascript
import {VertexNormalsHelper} from '../examples/jsm/helpers/VertexNormalsHelper.js';
```
#### 그리고 __`box`와 `sphere`에 대해 법선벡터 시각화를 위해 `_setupModel` 함수 내에 다음과 같이 작성한다.__
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
#### 우선 `box`에 대한 노말벡터를 보면 `box`를 구성하는 좌표에 대해 노말 벡터 즉, `box` 표면에 대한 수직 벡터로 노란색 선이 보인다.
#### __지정되지 않은 특정 지점에 대한 노말 벡터는 이 `box`의 구성 좌표의 노말 벡터들을 이용해 보간되어 계산된다.__

<br>

#### 그런데 `normalMap`을 사용하면 `box` 표면의 노말 벡터를 `normalMap` 이미지의 RGB값을 이용해 계산하게 되는데
#### 이렇게 되면 인위적으로 `Mesh` 표면의 __각 pixel에 대해 법선 벡터를 지정할 수 있게 되고 각 pixel 단위로 광원 효과가 달라져__ 입체감을 표현할 수 있게 된다.
#### 하지만 `Mesh`의 `Geometry` 형상이 바뀌는 것이 아니기 때문에 입체감은 착시 현상일 뿐이지만 적은 `Geometry` 좌표 구성만으로도 입체감을 매우 효과적으로 표현할 수 있는 방법이다.

<br>

### __(4) displacementMap__
#### 노멀벡터를 표시하는 코드를 주석처리하고 이번엔 `displacementMap`에 대해 알아보자. 
```javascript
const material = new THREE.MeshStandardMaterial({
  // map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight, 
});
```
#### __`displacementMap`은 실제로 `Mesh`의 `Geometry` 좌표를 변형시켜 입체감을 표현__ 하게 되고
#### 이 맵 이미지의 __pixel값이 밝을수록 좌표의 변위가 커지게__ 된다.
![07_displacementMap][07_displacementMap]

[07_displacementMap]: ./img/07_displacementMap.png "07_displacementMap"
#### 그러나 현재 너무 과하게 변위가 발생하고 있는데 이를 조정하기 위해 __`displacementScale`과 `displacementBias` 속성을 사용할 수 있다.__
#### 먼저 `displacementScale` 속성을 아래와 같이 추가해보자.
```javascript
const material = new THREE.MeshStandardMaterial({
  // map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
});
```
#### 말그대로 __변위 효과를 기존의 100%가 아닌, 20%만 발생시키게__ 한다.
#### 그러나 `box`를 보면 __구성면이 변위에 의해 분리되어 버리는데 이를 `displacementBias` 속성을 통해 조정할 수 있다.__
```javascript
const material = new THREE.MeshStandardMaterial({
  // map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
  displacementBias: -0.15
});
```
#### 위와 같이 작성하면 아래와 같이 `box`의 면이 다시 붙게 된다.
![07_displacementBias][07_displacementBias]

[07_displacementBias]: ./img/07_displacementBias.png "07_displacementBias"
#### 그러나 `sphere`와는 달리 `box`에 대해서는 변위가 발생하지 않는다.
#### 이는 __`displacementMap`이 실제 `Geometry`의 구성좌표를 변경시키는데__ 이 `box`의 표면에 대한 구성좌표가 현재 없기 때문에 제공되어져야 한다.

<br>

#### 이를 위해 우리는 __`box`의 `Geometry` 표면을 256개로 분할해보자.__
```javascript
const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 256, 256, 256), material);
```
#### `sphere`의 경우에도 분할 수를 기존의 32가 아닌, 512로 변경하면 훨씬 `displacementMap` 효과가 잘 적용되는 것을 볼 수 있다.
```javascript
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 512, 512), material);
```
![07_displacementMap2][07_displacementMap2]

[07_displacementMap2]: ./img/07_displacementMap2.png "07_displacementMap2"

<br>

#### 하지만 `displacementMap` 효과를 위해 이처럼 좌표를 더 많이 추가하는 것은 __렌더링 속도면에서 비효율적이기에__
#### 적절한 `normalMap`과 함께 `displacementMap` 효과를 위한 __적절한 면 분할이 필요하다.__

<br>

### __(5) aoMap__
#### __`aoMap`은 Texture 이미지에 음영 효과를 그려 넣은 것__ 이라고 이해할 수 있다.
#### `aoMap`을 명확히 보기 위해 다른 `map` 속성을 모두 주석처리하고 `aoMap` 속성만 지정해보자.
```javascript
const material = new THREE.MeshStandardMaterial({
  // map: map,

  // normalMap: mapNormal,

  // displacementMap: mapHeight,
  // displacementScale: 0.2,
  // displacementBias: -0.15,

  aoMap: mapAO,
});
```
#### 화면을 보면 아무런 변화가 안 보일 것이다.
#### 필요한 추가 설정을 안 했기 때문인데 먼저 __`aoMap`이 적용되기 위해서는 `ambient light`가 필요하다.__

<br>

#### 이를 위해 `_setupLight` 함수에 다음 코드를 추가하자.
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
this._scene.add(ambientLight);
```
#### __`ambient light`는 모든 `Mesh`의 전체 면에 대해 균일하게 비추는 광원__ 이다.

<br>

#### 그리고 `aoMap`을 위해 마지막으로 필요한 한 가지는 __`Geometry`의 속성에 `uv2` 데이터를 지정해주는 것__ 인데
#### 먼저 `box`와 `sphere`에 대한 `Geometry` 속성에 `uv2`를 지정하고
```javascript
box.geometry.attributes.uv2 = box.geometry.attributes.uv;
sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv;
```
#### 그럼 아래 사진처럼 __`Mesh`의 표면에 그림자와 같은 효과가__ 드리우는 것을 볼 수 있다.
![07_aoMap][07_aoMap]

[07_aoMap]: ./img/07_aoMap.png "07_aoMap"
#### 또한 `aoMap`은 아래 코드와 같은 속성을 통해 그 강도를 지정할 수 있는데 기본값은 1이다.
```javascript
aoMapIntensity: 1,
```
#### `aoMap`을 이용하면 __세밀한 그림자와 같은 느낌의 효과__ 를 지정할 수 있다.
#### 이제 이전에 지정했던 `map` 속성 중 `map`을 제외하고 모두 주석을 해제해보면 다음과 같은 결과가 나오고
![07_aoMap2][07_aoMap2]

[07_aoMap2]: ./img/07_aoMap2.png "07_aoMap2"
#### `map` 속성도 주석을 해제해보면 다음과 같은 결과를 확인할 수 있다.
![07_aoMap3][07_aoMap3]

[07_aoMap3]: ./img/07_aoMap3.png "07_aoMap3"

<br>

### __(6) roughnessMap
#### __`roughnessMap`는 해당 속성에 대한 맵 이미지의 pixel값이 밝을수록 거칠기가 강하게__ 되는데
#### 다음과 같이 코드를 작성하면
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
  displacementBias: -0.15,
  
  aoMap: mapAO,
  aoMapIntensity: 2,

  roughnessMap: mapRoughness,
});
```
#### 다음과 같은 결과를 확인할 수 있다.
![07_mapRoughness][07_mapRoughness]

[07_mapRoughness]: ./img/07_mapRoughness.png "07_mapRoughness"
#### __`roughness` 속성을 통해 `roughnessMap`에 대한 강도도 변경__ 할 수 있는데 기본값은 1이고 이 값을 0.5로 변경해보자.
#### 결과를 보면 다음과 같이 이전보다 __거칠기 값이 더 낮아져 더욱 반짝이는__ 느낌이 나는 걸 확인할 수 있다.
![07_roughness][07_roughness]

[07_roughness]: ./img/07_roughness.png "07_roughness"

<br>

### __(7) metalnessMap__
#### __`metalnessMap`은 말그대로 금속 재질에 대한 느낌을 부여하는__ 속성이다.
#### 다음과 같이 `metalnessMap`과 `metalness` 속성을 지정해주면
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
  displacementBias: -0.15,

  aoMap: mapAO,
  aoMapIntensity: 2,

  roughnessMap: mapRoughness,
  roughness: 0.5,

  metalnessMap: mapMetalic,
  metalness: 0.9
});
```
#### 금속 느낌이 더해진 걸 확인할 수 있다.
![07_metalnessMap][07_metalnessMap]

[07_metalnessMap]: ./img/07_metalnessMap.png "07_metalnessMap"

<br>

### __(8) alphaMap__
#### __`alphaMap` 속성은 말 그대로 투명도에 대해 지정하는__ 속성이다.
#### 이 속성에 대한 __이미지의 pixel값이 밝을수록 불투명하게 되는데 pixel값이 완전히 검정색일 때 완전히 투명해진다.__

<br>

#### 앞서 배운 속성들과 같이 `alphaMap`에도 따로 속성을 지정해줘야 속성이 활성화되어 눈에 보이게 되는데
#### 바로 __투명도에 대한 활성화이다.__
```javascript
const material = new THREE.MeshStandardMaterial({
  map: map,
  
  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
  displacementBias: -0.15,

  aoMap: mapAO,
  aoMapIntensity: 2,

  roughnessMap: mapRoughness,
  roughness: 0.5,

  metalnessMap: mapMetalic,
  metalness: 0.5,

  alphaMap: mapAlpha,
  transparent: true,
});
```
#### 위와 같이 코드를 작성하면 다음과 같이 `box`와 `sphere`가 투명해진 것을 확인할 수 있다.
![07_alphaMap][07_alphaMap]

[07_alphaMap]: ./img/07_alphaMap.png "07_alphaMap"
#### `sphere`를 통해 `box`를 볼 수 있지만 사실 이 `sphere`를 통해 투명한 부분을 보면 __`sphere`의 뒷면이__ 보여야 한다.
#### 이는 다음 속성을 추가해서 `Mesh`의 뒷면도 렌더링되도록 하면 된다.

```javascript
side: THREE.DoubleSide
```
#### 그럼 `sphere`의 뒷면도 보이는 것을 확인할 수 있다.
![07_doubleside][07_doubleside]

[07_doubleside]: ./img/07_doubleside.png "07_doubleside"

<br>

### __(9) lightMap__
#### 현재 `lightMap`에 대한 이미지가 없으므로 __[해당 링크](http://www.gisdeveloper.co.kr/wp-content/uploads/2022/02/light2.jpg)를 통해 이미지를 다운받도록 하자.__
#### __`lightMap`은 지정된 이미지의 색상으로 발광하는__ 느낌을 표현할 수 있다.

<br>

#### 해당 이미지에 대한 Texture 객체를 생성하기 위해 다음 코드를 추가해보자.
```javascript
const mapLight = TextureLoader.load("images/glass/light.jpg")
    
const material = new THREE.MeshStandardMaterial({
  map: map,

  normalMap: mapNormal,

  displacementMap: mapHeight,
  displacementScale: 0.2,
  displacementBias: -0.15,

  aoMap: mapAO,
  aoMapIntensity: 2,

  roughnessMap: mapRoughness,
  roughness: 0.5,

  metalnessMap: mapMetalic,
  metalness: 0.5,

  alphaMap: mapAlpha,
  transparent: true,
  side: THREE.DoubleSide,

  lightMap: mapLight,
});
```
#### 그럼 다음과 같이 light 이미지에 있던 노란색 빛이 퍼지는 것을 확인할 수 있다.
![07_lightMap][07_lightMap]

[07_lightMap]: ./img/07_lightMap.png "07_lightMap"
#### 여기서 `lightMap`의 효과를 극대화하기 위해 __`alphaMap` 속성을 주석처리해보자.__
#### 그럼 다음과 같이 `lightMap`의 효과가 잘 보이는 것을 확인할 수 있다.
![07_lightMap2][07_lightMap2]

[07_lightMap2]: ./img/07_lightMap2.png "07_lightMap2"
#### __`lightMap`에 대한 강도는 다음 속성을 통해 변경할 수 있고__ 기본값은 1이다.
```javascript
lightMapIntensity: 2,
```
#### `lightMap`은 `aoMap`처럼 __`Geometry`의 속성에 `uv2` 데이터를 지정해줘야__ 한다. 우리는 이전에 `aoMap` 때 지정해줬으므로 따로 지정할 필요는 없다.

<br>

#### 이렇게 Texture에 대해 다양한 속성들을 적용해보며 알아보는 시간을 가졌다.
#### 다음 시간에는 사용자 정의 Geometry에 대해 알아보자.

---

[전체 코드 파일](https://github.com/rlacodud/UID/blob/mit/Research/Three.js/three.js-master/study/04_material.js)
[02_Three.js module 활용 - (8) 사용자 정의 Geometry](./08_Three.js_module_custom_geometry.md)