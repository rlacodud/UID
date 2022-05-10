[02_Three.js module 활용 - (10) Camera](./10_Three.js_module_camera.md)

---

# __Three.js module 활용 - (11) Shadow__
#### `Three.js`에서는 __동적으로 그림자를 렌더링할 수 있는데__ 내부적으로 Texture 맵핑을 통해 그림자를 위한 이미지를 생성하고 이 Texture 맵핑 이미지를 이용해 그림자를 시각화해준다.
#### 코드를 작성하면서 그림자에 대해 구체적으로 살펴보자.

<br>

## __1. 세팅__
#### `06_light.html`, `06_light.css`, `06_light.js`를 복사하여 붙여넣기 한 후 파일명을 __`08_shadow`로 변경한다.__
#### 그에 맞춰 `08_shadow.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

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
#### `Three.js`에서 그림자를 렌더링하기 위해 세가지 객체에 대한 설정이 필요한데 바로 `Renderer`, `Light`, `Model`이다.
#### `Renderer` 객체에는 다음 코드를 추가해서 그림자 맵을 활성화해준다.