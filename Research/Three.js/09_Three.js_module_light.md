[02_Three.js module 활용 - (8) 사용자 정의 Geometry](./08_Three.js_module_custom_geometry.md)

---

# __Three.js module 활용 - (9) 광원 Light__
#### `Three.js`에는 __`Light` CLASS를 상속받는 6개의 광원 CLASS가 있다.__
>#### __- `AmbientLight`__
>#### __- `HemisphereLight`__
>#### __- `DirectionalLight`__
>#### __- `PointLight`__
>#### __- `SpotLight`__
>#### __- `RectAreaLight`__

<br>

## __1. 세팅__
#### 이제 6개의 광원을 이해하기 위해 먼저 장면을 구성해보자.
#### `01_basic.html`, `01_basic.css`, `01_basic.js`를 복사하여 붙여넣기 한 후 파일명을 __`06_light`로 변경한다.__
#### 그에 맞춰 `06_light.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

#### __`06_light.js` 파일에서 `_setupModel`의 코드를 삭제하고 해당 코드 삭제로 영향을 받는 `update` 메소드의 이 코드도 주석 처리한다.__
```javascript
update(time){
  time *= 0.001;
  // this._cube.rotation.x = time;
  // this._cube.rotation.y = time;
}
```
#### 그리고 광원을 설정하고 있는 __`_setupLight`의 모든 코드를 제거한다.__

<br>

---

<br>

## __2. Scene Graph__
### __(1) ground__
#### 본격적으로 여러 광원들을 적용시켜볼 scene graph를 만들어보자.
#### 우선 __지면이 될 ground__ `Mesh`를 만들기 위해 `Geometry`와 `Material`을 생성하고 `scene`에 추가하자.
```javascript
_setupModel() {
  const groundGeometry = new THREE.PlaneGeometry(10, 10);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#2c3e50',
    roughness: 0.5,
    metalness: 0.5,
    side: THREE.DoubleSide
  });

  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = THREE.Math.degToRad(-90);
  this._scene.add(ground);
}
```

<br>

### __(2) bigSphere__
#### 이어서 __`scene`의 가운데에 위치한 큰 반구인 `bigSphere`__ 를 만들어볼텐데 반구이기에 연장각을 `Math.PI`(180도)로 설정했다.
```javascript
const bigSphereGeometry = new THREE.SphereGeometry(1.5, 64, 64, 0, Math.PI);
const bigSphereMaterial = new THREE.MeshStandardMaterial({
  color: '#ffffff',
  roughness: 0.1,
  metalness: 0.2
});
const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
bigSphere.rotation.x = THREE.Math.degToRad(-90);
this._scene.add(bigSphere);
```

<br>

### __(3) torusPivot & torus__
#### 아어서 __회전하는 구가 통과할__ 도넛 모양의 `Geometry`를 만들기 위해 `TorusGeometry`를 활용하여 틀을 생성한다.
#### 그리고 각 도넛인 `torus`들의 부모인 `torusPivot`을 생성하고 __360도를 기준으로 8개의 `torus`를 둘 것이기에 `45 * i` 를 통해 8개의 `torus`가 각자의 위치를 잡도록__ 한다.
```javascript
const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: '#9b59b6',
  roughness: 0.5,
  metalness: 0.9
});

for(let i = 0; i < 8; i++) {
  const torusPivot = new THREE.Object3D();
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torusPivot.rotation.y = THREE.Math.degToRad(45 * i);
  torus.position.set(3, 0.5, 0);
  torusPivot.add(torus);
  this._scene.add(torusPivot);
}
```

<br>

### __(4) smallSpherePivot & smallSphere__
#### 그 다음에 __회전하는 작은 구__ 인 `smallSphere`의 `Geometry`와 `Material`을 생성하고 `smallSphere`에 대입한다.
```javascript
const smallSphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const smallSphereMaterial = new THREE.MeshStandardMaterial({
  color: '#e74c3c',
  roughness: 0.2,
  matalness: 0.5
});
const smallSpherePivot = new THREE.Object3D();
const smallSphere = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
smallSpherePivot.add(smallSphere);
smallSpherePivot.name = 'smallSpherePivot';
smallSphere.position.set(3, 0.5, 0);
this._scene.add(smallSpherePivot);
```
#### __이름을 부여해두면 `smallSpherePivot` 객체를 `Scene`을 통해 언제든지 조회__ 할 수 있다.
#### 지금까지의 코드를 작성 후 화면을 보면 아무것도 표현되지 않는 걸 확인할 수 있는데 이는 광원이 없기 때문이다.

<br>

#### 주변광인 `AmbientLight`를 추가하기 위해 __`_setupLight` 함수 내부에__ 다음과 같이 코드를 작성하자.
```javascript
const light = new THREE.AmbientLight(0xffffff, 5)

this._scene.add(light);
this._light = light;
```

#### 이제 화면을 보면 무언가 보이긴 하지만 `camera`의 위치가 `scene`의 물체에 너무 가까이 있어 물체가 너무 크게 보이므로 `camera`의 위치를 다음과 같이 변경해보자.
```javascript
// camera.position.z = 2;
camera.position.set(7, 7, 0);
camera.lookAt(0, 0, 0);
```
#### __`lookAt`은 `camera`가 원점인 `(0, 0, 0)`을 바라보게__ 설정한다는 의미이다.

<br>

#### 그럼 다음과 같이 화면애 scene graph가 잘 보이는 걸 확인할 수 있다.
![09_sceneGraph][09_sceneGraph]

[09_sceneGraph]: ./img/09_sceneGraph.png "09_sceneGraph"

<br>

### __(5) OrbitControls__
#### 이제 마우스를 통해 화면을 조작할 수 있도록 해보자.
#### 이를 위해 `06_light.html` 파일 중 `css`를 `link`하는 코드 아래에 다음의 코드를 작성하고
```html
<script type="importmap">
  {
      "imports": {
          "three": "../build/three.module.js"
      }
  }
</script>
```
#### `06_light.js` 파일 최상단에 `OrbitControls`를 import하는 코드 작성 후
```javascript
import {OrbitControls} from '../examples/jsm/controls/OrbitControls.js';
```
#### 함수들을 호출하는 부분에서 `_setupControls` 함수를 호출하는데
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

### __(6) rotation__
#### `scene` 구성에 대한 마지막으로 __작은 구가 원점을 기준으로 회전하도록__ 해보자.
#### `update` 함수 내에 다음과 같은 코드를 작성한다.
```javascript
const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
if(smallSpherePivot) {
  smallSpherePivot.rotation.y = THREE.Math.degToRad(time*50);
}
```
#### 코드를 보면 __`scene`을 구성하는 객체 중 이름이 `smallSpherePivot`인 객체를 얻고 y축으로 회전시키고__ 있다.
![09_rotation][09_rotation]

[09_rotation]: ./img/09_rotation.gif "09_rotation"
#### 이제 광원을 학습하기 위한 scene graph 구성이 완료되었다.

<br>

---

<br>

## __3. Light__
### __(1) AmbientLight__
#### 현재 `_setupLight` 메소드에 `AmbientLight`가 추가되어있는데 __`AmbientLight`는 생성자에 빛의 색상과 세기값을 인자로__ 받는다.
#### 현재 빛의 색상은 흰색인데 이를 빨간색으로 변경해보자.
```javascript
const light = new THREE.AmbientLight(0xff0000, 5)
```
![09_ambientLight][09_ambientLight]

[09_ambientLight]: ./img/09_ambientLight.png "09_ambientLight"
#### 그럼 보이듯이 __객체의 재질에 대한 색상과 광원 색상에 섞여서__ 렌더링된다.
#### 이런 `ambientLight`의 색상과 세기값은 다른 모든 광원에 대해 공통적인 부분이다.

<br>

#### 주변광 또는 환경광이라고도 불리는 __`ambientLight`는 단순히 `scene`에 존재하는 모든 물체에 대해 단일 색상으로__ 렌더링되도록 한다.
#### 대부분의 경우, __세기값을 매우 약하게 지정해서 장면에 추가되는데 광원의 영향을 받지 못하는 물체도 살짝 보여지도록__ 하는 데 사용된다.

<br>

### __(2) HemisphereLight__
#### `HemisphereLight` 역시 `AmbientLight`와 마찬가지로 주변광인데 `AmbientLight`와는 달리 __빛에 대한 색상값이 두개이다.__
#### __하나는 위에서 비치는 빛의 색상이고 하나는 아래에서 비치는 빛의 색상이다.__

<br>

#### 기존 광원에 대한 코드를 주석처리하고 다음과 같이 작성해보자.
```javascript
const light = new THREE.HemisphereLight('#b0d8f5', '#bb7a1c', 1);
```
#### 그럼 보는 것처럼 장면의 위에서 비치는 빛의 색상은 생성자의 첫번째 인자로 결정되고 아래에서 비치는 색상값은 생성자의 두번째 인자로 결정된다.
![09_HemisphereLight][09_HemisphereLight]

[09_HemisphereLight]: ./img/09_HemisphereLight.png "09_HemisphereLight"

<br>

### __(3) DirectionalLight__
#### __태양과 같은 광원으로 태양처럼 빛과 물체간의 거리에 상관없이 동일한 빛의 효과__ 를 주게 된다.
#### 기존 광원에 대한 코드를 주석처리하고 다음과 같이 작성해보자.
```javascript
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 5, 0);
light.target.position.set(0, 0, 0);
this._scene.add(light.target);
```
#### 코드를 보면 빛의 색상은 흰색이고 빛의 세기는 1이며 __광원의 위치를 `(0, 5, 0)`으로__ 지정하고 있다.
#### `light.target.position.set(0, 0, 0)`으로 __광원이 비추는 대상의 위치를 `(0, 0, 0)`으로__ 지정하고 있다.
![09_DirectionalLight][09_DirectionalLight]

[09_DirectionalLight]: ./img/09_DirectionalLight.png "09_DirectionalLight"
#### 결과를 보면 알 수 있듯이 이 광원은 __빛과 물체 간의 거리에 상관없이__ 동일한 빛의 효과를 준다.
#### 그렇기 때문에 이 __빛의 `position`과 `target` 속성의 `position`으로 결정되는 방향만이__ 의미가 있다.

<br>

#### 이 __광원을 화면상에 시각화해주는 `helper` 객체__ 를 추가해보자.
```javascript
const helper = new THREE.DirectionalLightHelper(light);
this._scene.add(helper);
this._lightHelper = helper;
```
#### 결과를 보면 __사각형 부분이 광원의 위치이고 선이 향하는 곳이 광원의 `target`으로 지정된 `(0, 0, 0)`이다.__
![09_helper][09_helper]

[09_helper]: ./img/09_helper.png "09_helper"

#### 여기서 __광원에 대한 `target`의 위치가 회전하는 구의 위치를 추적하도록__ 하기 위해 `update` 함수에 다음 코드를 추가한다.
```javascript
update(time){
  time *= 0.001;

  const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
  if(smallSpherePivot) {
    smallSpherePivot.rotation.y = THREE.Math.degToRad(time*50);

    // 추가된 코드
    if(this._light.target) {
      const smallSphere = smallSpherePivot.children[0];
      smallSphere.getWorldPosition(this._light.target.position);

      if(this._lightHelper) this._lightHelper.update();
    }
    // 
  }
}
```
#### 코드를 보면 __광원에 대해 `target` 속성이 있을 때 `smallSpherePivot`의 첫번째 자식을 얻어오는데 이 첫번째 자식은 `smallSphere`이다.__
#### __`smallSphere.getWorldPosition()` 코드를 통해 `smallSphere`의 `world` 좌표계의 위치를 구해서 광원의 `target` 위치에 지정한다.__
#### 광원의 `target` 속성이 변경되었으므로 이 광원을 시각화해주는 `helper`도 업데이트해줘야 하기 때문에 `update` 함수를 실행시켜준다.

![09_target][09_target]

[09_target]: ./img/09_target.gif "09_target"
#### 결과를 보면 광원이 회전하는 구를 따라가며 비추는 걸 볼 수 있다.

<br>

### __(4) PointLight__
#### __`PointLight`는 빛이 광원 위치에서 사방으로 퍼져 나간다.__
#### 기존 광원에 대한 코드를 모두 주석처리하고 다음과 같이 작성해보자.
```javascript
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(0, 5, 0);
```
#### 이어서 광원의 위치를 파악하기 위해 `helper`를 추가해보자.
```javascript
const helper = new THREE.PointLightHelper(light);
this._scene.add(helper);
```
#### 결과를 보면 __해당 위치로부터 사방으로 빛이 퍼져 나가는__ 걸 알 수 있다.
![09_PointLightHelper][09_PointLightHelper]

[09_PointLightHelper]: ./img/09_PointLightHelper.png "09_PointLightHelper"
#### 광원의 위치가 움직이는 구를 추적하도록 하기 위해 `update` 함수를 다음과 같이 수정하자.
```javascript
update(time){
  time *= 0.001;

  const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
  if(smallSpherePivot) {
    smallSpherePivot.rotation.y = THREE.Math.degToRad(time*50);

    if(this._light) {
      const smallSphere = smallSpherePivot.children[0];
      smallSphere.getWorldPosition(this._light.position);

      if(this._lightHelper) this._lightHelper.update();
    }
  }
}
```
#### 이 광원에는 __`distance`라는 속성이 있는데 지정된 거리까지만 광원의 영향을 받도록__ 하는 속성이다.
#### __기본값은 0으로 무한한 거리까지 광원의 영향을 받도록__ 하는데 `_setupLight` 함수 내에 다음의 코드를 추가해서 `distance` 속성을 제어해보자.
```javascript
light.distance = 10;
```

![09_PointLightTarget][09_PointLightTarget]

[09_PointLightTarget]: ./img/09_PointLightTarget.gif "09_PointLightTarget"

<br>

### __(5) SpotLight__
#### __`SpotLight`는 빛이 광원의 위치에서 깔대기 모양으로 퍼져 나간다.__
#### 기존 광원에 대한 코드를 모두 주석 처리하고 `update` 함수에서도 다음 코드를 주석 처리하자.
```javascript
update(time){
  time *= 0.001;

  const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
  if(smallSpherePivot) {
    smallSpherePivot.rotation.y = THREE.Math.degToRad(time*50);

    // if(this._light) {
    //   const smallSphere = smallSpherePivot.children[0];
    //   smallSphere.getWorldPosition(this._light.position);

    //   if(this._lightHelper) this._lightHelper.update();
    // }
  }
}
```
#### 이어서 `_setupLight` 메소드에 `SpotLight`에 대한 정의를 추가해보고
```javascript
const light = new THREE.SpotLight(0xffffff, 1);
light.position.set(0, 5, 0);
light.target.position.set(0, 0, 0);
light.angle = THREE.Math.degToRad(40);
light.penumbra = 0;
this._scene.add(light.target);
```
#### 코드를 보면 광원의 위치를 `(0, 5, 0)`으로 설정하고 광원이 비추는 대상의 위치는 `(0, 0, 0)`으로 설정했다.
#### __`angle` 속성은 광원이 만드는 깔대기의 각도__ 를 의미한다.
#### `angle`의 값을 변경해보며 결과를 확인하면 __값이 작아질수록 비춰지는 깔대기의 크기도 작아지는__ 걸 확인할 수 있다.

<br>

#### __`penumbra` 속성은 빛의 감쇄율__ 을 정의하며 기본값은 0이다.
#### 즉, __빛의 감쇄가 전혀 없다는건데__ 0과 1 사이의 값으로 변경해보며 결과를 확인하면 __1에 가까워질수록 빛이 중심에서 점점 감쇄되는__ 것을 볼 수 있다.

<br>

#### 광원의 시각화를 위해 `helper` 코드도 추가하자.
```javascript
const helper = new THREE.SpotLightHelper(light);
this._scene.add(helper);
this._lightHelper = helper;
```
![09_SpotLightHelper][09_SpotLightHelper]

[09_SpotLightHelper]: ./img/09_SpotLightHelper.gif "09_SpotLightHelper"

<br>

#### 다음으로 `SpotLight`의 `target` 위치가 회전하는 구를 추적하도록 해보자.
#### 이를 위해 `update` 함수에서 주석으로 처리해둔 부분을 다시 살리고 다음과 같이 변경하자.
```javascript
update(time){
  time *= 0.001;

  const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
  if(smallSpherePivot) {
    smallSpherePivot.rotation.y = THREE.Math.degToRad(time*50);

    if(this._light.target) {
      const smallSphere = smallSpherePivot.children[0];
      smallSphere.getWorldPosition(this._light.target.position);

      if(this._lightHelper) this._lightHelper.update();
    }
  }
}
```

<br>

### __(6) RectAreaLight__
#### __`RectAreaLight`는 형광등이나 창문에서 들어오는 광원__ 이라고 할 수 있다.
#### 이 광원의 사용을 위해 다음과 같이 `06_light.js` 파일의 최상단에 import해보자.
```javascript
import {RectAreaLightUniformsLib} from '../examples/jsm/lights/RectAreaLightUniformsLib.js';
import {RectAreaLightHelper} from '../examples/jsm/helpers/RectAreaLightHelper.js';
```
#### 그리고 기존 광원에 대한 모든 코드를 주석 처리하고 다음과 같이 작성하자.
```javascript
RectAreaLightUniformsLib.init();

const light = new THREE.RectAreaLight(0xffffff, 10, 3, 0.5);
light.position.set(0, 5, 0);
light.rotation.x = THREE.Math.degToRad(-90);

const helper = new RectAreaLightHelper(light);
light.add(helper);
```
#### 코드를 보면 __`RectAreaLight` 광원을 사용하기 위해서는 초기화 코드(`init`)가 선행되어야__ 하며
#### 인자값으로는 __광원의 색상과 세기, 광원의 가로와 세로에 대한 크기__ 를 받는다.
![09_RectAreaLight][09_RectAreaLight]

[09_RectAreaLight]: ./img/09_RectAreaLight.png "09_RectAreaLight"

<br>

#### __광원의 밝기는 세기값 인자뿐만 아니라 광원의 크기값 인자로도 변경할 수 있다.__
#### 즉 __광원의 크기가 커지면 광원의 밝기도 더 세지고 크기가 작아지면 광원의 밝기도 약해진다.__

<br>

#### 이렇게 광원에 대해 알아봤는데 실제로는 보다 나은 렌더링 결과를 위해 __여러 종류의 광원을 2개 이상 설치하여__ 사용한다.
#### 다음 시간에는 `camera`에 대해 알아보도록 하자.

---

[02_Three.js module 활용 - (10) Camera](./10_Three.js_module_camera.md)