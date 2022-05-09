[02_Three.js module 활용 - (8) 사용자 정의 Geometry](./08_Three.js_module_custom_geometry.md)

---

# __Three.js module 활용 - (9) 광원 Light__
#### `Three.js`에는 `Light` CLASS를 상속받는 6개의 광원 CLASS가 있다.
>#### __- AmbientLight__
>#### 환경광 또는 주변광으로 불린다.
>#### __- HemisphereLight__
>#### 환경광 또는 주변광으로 불린다.
>#### __- DirectionalLight__
>#### 단순한 주변광이 아닌 빛의 방향성을 가진다.
>#### __- PointLight__
>#### 단순한 주변광이 아닌 빛의 방향성을 가진다.
>#### __- SpotLight__
>#### 단순한 주변광이 아닌 빛의 방향성을 가진다.
>#### __- RectAreaLight__
>#### 단순한 주변광이 아닌 빛의 방향성을 가진다.

<br>

## __1. 세팅__
#### 이제 6개의 광원을 이해하기 위해 먼저 장면을 구성해보자.
#### `01_basic.html`, `01_basic.css`, `01_basic.js`를 복사하여 붙여넣기 한 후 파일명을 __`06_light`로 변경한다.__
#### 그에 맞춰 `06_light.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

#### `06_light.js` 파일에서 `_setupModel`의 코드를 삭제하고 해당 코드 삭제로 영향을 받는 `update` 메소드의 이 코드도 주석 처리한다.
```javascript
update(time){
  time *= 0.001;
  // this._cube.rotation.x = time;
  // this._cube.rotation.y = time;
}
```
#### 그리고 광원을 설정하고 있는 `_setupLight`의 모든 코드를 제거한다.

<br>

---

<br>

## __2. setupModel__
### __(1) ground__
#### 본격적으로 여러 광원들을 적용시켜볼 scene graph를 만들어보자.
#### 우선 지면이 될 ground `Mesh`를 만들기 위해 `Geometry`와 `Material`을 생성하고 `scene`에 추가하자.
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