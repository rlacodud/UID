[02_Three.js module 활용 - (10) Camera](./10_Three.js_module_camera.md)

---

# __Three.js module 활용 - (11) Shadow__
#### `Three.js`에서는 __동적으로 그림자를 렌더링할 수 있는데__ 내부적으로 Texture 맵핑을 통해 그림자를 위한 이미지를 생성하고 이 Texture 맵핑 이미지를 이용해 그림자를 시각화해준다.
#### 코드를 작성하면서 그림자에 대해 구체적으로 살펴보자.

<br>

## __1. 세팅__
#### `06_light.html`, `06_light.css`, `06_light.js`를 복사하여 붙여넣기 한 후 파일명을 __`08_shadow`로 변경한다.__
#### 그에 맞춰 `08_shadow.html`에서 `css`와 `js`를 `import`하는 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

#### `Three.js`에서 __그림자를 제공하는 광원은 `DirectionalLight`와 `PointLight`, `SpotLight`__ 인데 이 세개의 광원에 대한 그림자를 순서대로 살펴보자.
#### 그림자를 보다 더 효과적으로 살펴보기 위해 장면을 구성하는 모델 중 __가운데 하얀색 큰 구를 `TorusKnotGeometry`로 변경할텐데__
#### 이를 위해 __`08_shadow.js` 파일 중 `_setupModel` 함수의 `bigSphereGeometry` 정의 부분을 다음과 같이 수정하자.__
```javascript
// const bigSphereGeometry = new THREE.SphereGeometry(1.5, 64, 64, 0, Math.PI);
const bigSphereGeometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 64, 2, 3);
```

<br>

#### 그리고 다음의 위치를 추가하고 회전시키지 않도록 `rotation.x`값은 주석처리한다.
```javascript
// bigSphere.rotation.x = THREE.Math.degToRad(-90);
bigSphere.position.y = 1.6;
```
#### 그럼 다음과 같이 기본 준비가 완료된다.
![11_basic][11_basic]

[11_basic]: ./img/11_basic.png "11_basic"

<br>

---

<br>

## __2. DirectionalLight__
#### `DirectionalLight`를 적용시키기 위해 `_setupLight` 함수 내용을 다음과 같이 변경한다.
```javascript
_setupLight() {
  const light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(0, 5, 0);
  light.target.position.set(0, 0, 0);
  this._scene.add(light.target);

  this._scene.add(light);
  this._light = light;
}
```

  
#### `update` 함수에서 광원이 비추는 `target`의 위치를 빨간색 작은 구의 위치로 계속 추적하도록 하고 있다.

<br>

#### `Three.js`에서 __그림자를 렌더링하기 위해 세가지 객체에 대한 설정이 필요한데 바로 `Renderer`, `Light`, `Model`__ 이다.

<br>

### __(1) Renderer__
#### `constructor`의 내부에 다음 코드를 추가해서 __`Renderer` 객체에 그림자 맵을 활성화해준다.__
```javascript
renderer.shadowMap.enabled = true;
```

<br>

### __(2) Light__
#### 그리고 __`Light`에서는 그림자를 줄 것인지에 대한 여부를__ 다음 코드를 통해 활성화시킨다.
```javascript
light.castShadow = true;
```

<br>

### __(3) Model__
#### 이제 `Model`들에 대해 그림자를 설정하기 위해 __`ground`와 `bigSphere`, 그리고 `torus`와 `smallSphere`의 그림자를 받아 그림자를 표현하도록__ `_setupModel` 함수에서 다음 코드를 추가해보자.
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
  // 추가된 부분
  ground.receiveShadow = true;
  // 
  this._scene.add(ground);

  const bigSphereGeometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 64, 2, 3);
  const bigSphereMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.1,
    metalness: 0.2
  });
  const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
  bigSphere.position.y = 1.6;
  // 추가된 부분
  bigSphere.receiveShadow = true;
  bigSphere.castShadow = true;
  // 
  this._scene.add(bigSphere);

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
    // 추가된 부분
    torus.receiveShadow = true;
    torus.castShadow = true;
    // 
    this._scene.add(torusPivot);
  }

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
  // 추가된 부분
  smallSphere.receiveShadow = true;
  smallSphere.castShadow = true;
  // 
  this._scene.add(smallSpherePivot);
}
```
#### 장면에서 __그림자가 많이 어둡게__ 표현되고 있는데 이를 개선하기 위해 광원을 추가해보고
```javascript
const auxLight = new THREE.DirectionalLight(0xffffff, 0.5);
auxLight.position.set(0, 5, 0);
auxLight.target.position.set(0, 0, 0);
this._scene.add(auxLight.target);
this._scene.add(auxLight);
```
#### 그림자가 잘려서 표현되는 부분들이 있는데 이 이유를 이해하기 위해 __광원의 그림자를 위한 `camera`를 시각화해보자.__
```javascript
const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
this._scene.add(cameraHelper);  
```
#### 결과를 보면 다음과 같이 `camera`의 절두체가 보이는데 이를 보면 __절두체 안에 담기지 못한 그림자는 짤리고 있다__ 는 것을 확인할 수 있다.
![11_cameraHelper][11_cameraHelper]

[11_cameraHelper]: ./img/11_cameraHelper.png "11_cameraHelper"
#### 이를 해결하기 위해 그림자를 위한 __`camera`의 절두체를 좀 더 크게__ 해주면 된다.
```javascript
light.shadow.camera.top = light.shadow.camera.right = 6;
light.shadow.camera.bottom = light.shadow.camera.left = -6;
```

<br>

#### 이제 그림자의 품질을 향상시켜볼텐데 기본적으로 그림자로 이용되는 Texture 맵핑 이미지의 크기는 가로와 세로 모두 512이다.
#### 다음 코드를 통해 이 __크기를 키우면 그림자의 품질이 자동적으로 향상된다.__
```javascript
light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;
```
#### 상황에 따라 그림자의 경계가 선명하지 않고 블러 처리될 필요가 있는데 이는 `shadow`의 `radius` 값을 통해 설정할 수 있다.
#### 기본값은 1이며 __값이 클수록 블러 효과가 강해진다.__
```javascript
light.shadow.radius = 40;
```

<br>

---

<br>

## __3. PointLight__
#### 광원을 `PointLight`로 변경하기 위해 `DirectionalLight`를 주석처리하고 __`radius` 속성값을 기본값으로 돌려놓고 다음의 코드를 작성한다.__
```javascript
const light = new THREE.PointLight(0xffffff, 0.7);
light.position.set(0, 5, 0);
```
#### 이어서 __`PointLight`의 위치를 움직이는 빨간색 구의 위치에 놓이도록__ 하기 위해 `update` 함수에 다음 코드를 추가한다.
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

    // PointLight
    if(this._light instanceof THREE.PointLight) {
      const smallSphere = smallSpherePivot.children[0];
      smallSphere.getWorldPosition(this._light.position);
    }
  }
}
```
![11_PointLight][11_PointLight]

[11_PointLight]: ./img/11_PointLight.gif "11_PointLight"
#### __`PointLight`의 경우, 사방으로 빛을 퍼지게 하므로 그에 맞게 그림자가 적당하게 변하는 것__ 을 볼 수 있다.

<br>

---

<br>

## __4. SpotLight__
#### `PointLight`에 대한 정의를 주석처리하고 다음의 코드를 추가한다.
```javascript
const light = new THREE.SpotLight(0xffffff, 1);
light.position.set(0, 5, 0);
light.target.position.set(0, 0, 0);
light.angle = THREE.Math.degToRad(30);
light.penumbra = 0.2;
this._scene.add(light.target);
```
#### `update` 함수로 인해 광원이 비추는 대상이 빨간색 구를 추적하고 이에 대한 광원의 변경에 따라 그림자 역시 그에 맞게 적절하게 변하는 것을 볼 수 있다.
![11_SpotLight][11_SpotLight]

[11_SpotLight]: ./img/11_SpotLight.gif "11_SpotLight"

<br>

#### 이렇게 `Three.js`에 대해 알아보는 시간을 가졌다.
#### 모든 과정을 거쳤다면 `Three.js` 초급 단계부터 중급 단계의 사이에 이르렀다고 할 수 있다.

<br>

[전체 코드 파일]()