[02_Three.js module 활용 - (4) Geometry 마무리](./04_Three.js_module_geometry.md)

---

# __Three.js module 활용 - (5) Scene Graph__
## __1. Object 3D__
#### `Mesh`는 `Line`, `Points`와 같이 `Object 3D`의 파생 CLASS인데
#### 3D Object가 3차원 공간 상에 놓이기 위해 다음과 같은 값이 필요하다.
>#### __- `position`__
>#### x, y, z축에 대한 __위치값으로__ 기본값은 모두 0이다.
>#### __- `rotation`__
>#### x, y, z축에 대한 __회전값으로__ 기본값은 모두 0이다.
>#### __- `scale`__
>#### x, y, z축에 대한 __크기의 배수값으로__ 기본값은 모두 1이다.

<br>

#### 이번 시간에는 __위 세가지 값에 변화를 주며 3차원 공간에 3D Object 여러개를 두는 방법에 대해__ 알아보자.

<br>

#### 이전에 생성했던  `01_basic.html`, `css`, `js` 파일들을 복사하여 붙여넣기한 후 파일명을 __`03_scenegraph`로 변경하고__
#### 그에 맞춰 `03_scenegraph.html`에서 `css`와 `js` `link` 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

---

<br>

## __2. 태양 생성__
#### 이어서 `03_scenegraph.js`에서 3D Object를 정의하는 `_setupModel` 함수 내부 코드를 제거하고 다음과 같이 작성하여 __태양을 만들어보자.__
```javascript
// 03_scenegraph.js
_setupModel() {
  const solarSystem = new THREE.Object3D();
  this._scene.add(solarSystem);

  const radius = 1;
  const widthSegments = 12;
  const heightSegments = 12;
  const SphereGeometry = new THREE.SphereGeometry(radius,
    widthSegments, heightSegments);

  const sunMaterial = new THREE.MeshPhongMaterial({
    emissive: 0xffff00, flatShading: true});

  const sunMesh = new THREE.Mesh(SphereGeometry, sunMaterial);
  sunMesh.scale.set(3, 3, 3);
  solarSystem.add(sunMesh);
}
```
#### __반지름을 1로 가지고 가로, 세로 분할 개수가 12인 구를 `SphereGeometry`라는 이름으로 생성했다.__
#### 이 `SphereGeometry`는 __태양뿐만 아니라 지구와 달에게도 적용할 것이기에 변수로 생성__ 한 것이다.

<br>

#### 이어서 __태양의 `Material`을 생성하는데__ 색상은 `ffff00`(yellow)으로 한다.
#### 앞서 생성한 `SphereGeometry`와 `sunMaterial`를 `sunMesh`에 대입함으로써 태양을 생성한다.
#### 태양은 __`SphereGeometry`를 기준으로 3배의 크기를 갖도록__ 하고 이를 __최상위 Mesh인 `solarSystem`에 추가한다.__

<br>

#### 그러고 페이지를 보면 아무것도 안 보이고 까만 화면만 보이는데 이는 `camera`가 태양 내부에 위치해있기 때문이다.
#### __`camera`의 `position.z`를 50으로 변경해보자.__
```javascript
camera.position.z = 50;
```
![05_sun][05_sun]

[05_sun]: ./img/05_sun.png "05_sun"
#### 그럼 위와 같이 노란색 구인 태양이 보이게 된다.

<br>

---

<br>

## __3. 지구 생성__
#### 이어서 다음 코드를 작성함으로써 __지구를 생성해보자.__
```javascript
const earthOrbit = new THREE.Object3D();
solarSystem.add(earthOrbit);

const earthMaterial = new THREE.MeshPhongMaterial({
  color: 0x2233ff, emissive: 0x112244, flatShading: true});

const earthMesh = new THREE.Mesh(SphereGeometry, earthMaterial);
earthOrbit.position.x = 10;
earthOrbit.add(earthMesh);
```
#### __지구 `Mesh`를 담을 `earthOrbit`__ 을 생성하여 최상위 Mesh인 `solarSystem`에 추가하고
#### 태양과 마찬가지로 지구에 대한 `Material` 생성 후 이를 `earthMesh`에 대입함으로써 지구를 생성한다.

<br>

#### 생성된 지구인 `earthMesh`는 __앞서 생성한 `earthOrbit`에 추가하여 `solarSystem`에 추가되도록__ 하고
#### __지구의 `position.x`를 10으로 설정함으로써 태양으로부터 수평으로 10만큼 떨어져있게__ 설정한다.
#### __태양이 기준이 될 수 있는 이유는 최상위 `Mesh`인 `solarSystem`에 바로 태양이 속해있기__ 때문이다.

<br>

#### 코드를 작성하고 화면을 보면 __태양으로부터 10만큼 떨어져있는 지구__ 를 볼 수 있다.
#### 지구가 태양보다 상대적으로 작은 이유는 앞서 __태양의 `scale`을 설정할 때 기준 크기로부터 3배로 설정했기__ 때문이다.
![05_earth][05_earth]

[05_earth]: ./img/05_earth.png "05_earth"

<br>

---

<br>

## __4. 달 생성__
#### 이어서 __달을 만들어보자.__
```javascript
const moonOrbit = new THREE.Object3D();
moonOrbit.position.x = 2;
earthOrbit.add(moonOrbit);

const moonMaterial = new THREE.MeshPhongMaterial({
  color: 0x888888, emissive: 0x222222, flatShading: true});

const moonMesh = new THREE.Mesh(SphereGeometry, moonMaterial);
moonMesh.scale.set(0.5, 0.5, 0.5);
moonOrbit.add(moonMesh);
```
#### 지구와 마찬가지로 달 `Mesh`를 담을 `moonOrbit`을 생성하여 `earthOrbit`에 추가한다.
#### 이 이유는 __달이 지구를 중심으로 공전을 하기에 지구의 자식 요소로__ 넣은 것이다.

<br>

#### 이어서 달의 `position.x`를 2로 설정함으로써 __지구보다는 수평으로 2만큼, 태양보다는 수평으로 12만큼(`지구-10` + `달-2`) 떨어져있게__ 하고
#### 달의 `Material`을 생성하고 이를 `moonMesh`에 대입함으로써 달을 생성한다.
#### 달의 `scale`을 기준 크기로부터 0.5배로 설정하여 작게 만들고 `moonOrbit`에 추가하여 `earthOrbit`을 거쳐 `solarSystem`에 속하게 한다.

<br>

#### 코드를 작성하고 화면을 보면 달이 생성된 것을 볼 수 있다.
![05_moon][05_moon]

[05_moon]: ./img/05_moon.png "05_moon"

<br>

---

<br>

## __5. 애니메이션__
#### 이제 __태양은 자전을, 지구는 태양을 중심으로 공전과 자전을, 달은 지구를 중심으로 공전을__ 하게 만들어보자.
#### 우선 생성한 태양과 지구, 달을 `update` 함수에서 사용하기 위해서는 이전과 같이 __`this`를 이용하여 연결해줘야__ 한다.
#### `_setupModel` 함수 내에 아래와 같은 코드를 작성하자.
```javascript
this._solarSystem = solarSystem;
this._earthOrbit = earthOrbit;
this._moonOrbit = moonOrbit;
```

#### 좀 더 가까이서 확인할 수 있게 `camera`의 `position.z`값을 조정해보자.
```javascript
// _setupCamera
camera.position.z = 15;
```

#### 이제 `update` 함수에 아래와 같이 작성함으로써 태양과 지구와 달을 회전시켜보자.
```javascript
update(time){
  time *= 0.001; // second unit
  this._solarSystem.rotation.y = time / 2;
  this._earthOrbit.rotation.y = time * 2;
  this._moonOrbit.rotation.y = time * 5;
}
```
![05_animation][05_animation]

[05_animation]: ./img/05_animation.gif "05_animation"
#### 가로 방향으로 돌리는데 왜 `x`가 아닌 `y`를 쓰는가 의문이 들었는데
#### __`Three.js`에서 `rotation`의 의미는 해당축으로 막대기를 꽂고 회전시킨다는__ 의미로 이해하면 된다.

<br>

#### 이렇게 `Object 3D`를 이용하여 `scene Graph`를 생성해봤다.
#### 다음엔 이제까지 사용해봤던 `Material`에 대해 자세히 알아보는 시간을 가져보자.

---

[02_Three.js module 활용 - (6) Material](./06_Three.js_module_Material.md)