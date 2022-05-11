[02_Three.js module 활용 - (9) 광원](./09_Three.js_module_light.md)

---

# __Three.js module 활용 - (10) Camera__
#### `Three.js`에서 제공하는 기본적인 `camera`는 2가지인데 __`perspectiveCamera`와 `OrthographicCamera`이다.__
#### 둘 다 __`Camera` CLASS를 상속받으며 `camera`는 `Object3D` CLASS를 상속받는다.__

<br>

## __1. 세팅__
#### `06_light.html`, `06_light.css`, `06_light.js`를 복사하여 붙여넣기 한 후 파일명을 __`07_camera`로 변경한다.__
#### 그에 맞춰 `07_camera.html`에서 `css`와 `js`를 `import`하는 부분을 변경된 파일명에 맞춰 수정해보자.

<br>

---

<br>

## __2. `PerspectiveCamera`__
#### __가까이 있는 물체가 멀리 있는 물체보다 상대적으로 크게 보이도록__ 거리감(원근감)을 표현해서 렌더링한다.
#### `07_camera.js` 파일 중 `camera`를 담당하는 __`_setupCamera` 함수를 보면 `perspectiveCamera`가 사용되고 있는 것__ 을 볼 수 있다.
![10_perspectiveCamera][10_perspectiveCamera]

[10_perspectiveCamera]: ./img/10_perspectiveCamera.png "10_perspectiveCamera"
#### `PerspectiveCamera`는 4개의 인자를 받는데 위 사진에서도 알 수 있듯이 `fovy`, `aspect`, `zNear`, `zFar`이고
#### 이 __4개의 인자값을 통해 그림 속 연두색 육면체가 구성되는데 이 육면체를 절두체__ 라고 한다.
#### 이 __절두체 안에 존재하는 물체가 `camera`를 통해 보여지게 되고 화면상에 렌더링된다.__
>#### __- `fovy`__
>#### 절두체의 높이 방향에 대한 각도
>#### __- `aspect`__
>#### 절두체의 가로 길이를 세로 길이로 나눈 비율
>#### __- `zNear`__
>#### `camera`로부터의 거리 | 해당 거리 사이에 존재하는 물체의 일부만 렌더링되고 이 영역을 벗어나면 렌더링되지 않는다.
>#### __- `zFar`__
>#### `camera`로부터의 거리 | 해당 거리 사이에 존재하는 물체의 일부만 렌더링되고 이 영역을 벗어나면 렌더링되지 않는다.

<br>

---

<br>

## __2. `OrthographicCamera`__
#### __물체 간의 거리감(원근감)없이 물체의 크기대로__ 렌더링된다.
![10_OrthographicCamera][10_OrthographicCamera]

[10_OrthographicCamera]: ./img/10_OrthographicCamera.png "10_OrthographicCamera"
#### 이 `camera`가 구성하는 절두체의 모양은 그림 속 직육면체와 같은데 이 직육면체를 정의하기 위해서는 6개의 값이 필요하다.
>#### __- `xLeft`__
>#### 그림 속 검정색 점을 원점으로 했을 때 수평축에 대한 좌표값이다.
>#### __- `xRight`__
>#### 그림 속 검정색 점을 원점으로 했을 때 수평축에 대한 좌표값이다.
>#### __- `yTop`__
>#### 그림 속 검정색 점을 원점으로 했을 때 수직축에 대한 좌표값이다.
>#### __- `yBottom`__
>#### 그림 속 검정색 점을 원점으로 했을 때 수직축에 대한 좌표값이다.
>#### __- `zNear`__
>#### `camera`로부터의 거리 | 해당 거리 사이에 존재하는 물체의 일부만 렌더링되고 이 영역을 벗어나면 렌더링되지 않는다.
>#### __- `zFar`__
>#### `camera`로부터의 거리 | 해당 거리 사이에 존재하는 물체의 일부만 렌더링되고 이 영역을 벗어나면 렌더링되지 않는다.

<br>

#### `OrthographicCamera`를 적용해보기 위해 기존 `_setupCamera` 힘수의 코드를 주석 처리하고 다음과 같이 작성한다.
```javascript
_setupCamera () {
  // const width = this._divContainer.clientWidth;
  // const height = this._divContainer.clientHeight;
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   width / height,
  //   0.1,
  //   100
  // );

  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(
    -1*aspect, 1*aspect, // xLeft, xRight
    1, -1, // yTop, yBottom
    0.1, 100 // zNear, zFar
  );
  
  // camera.position.z = 2;
  camera.position.set(7, 7, 0);

  camera.lookAt(0, 0, 0);

  this._camera = camera;
}
```
#### 그리고 화면을 보면 장면이 너무 크게 렌더링되고 있는데 이는 __절두체를 구성하는 직육면체의 밑면의 크기를 너무 작게__ 지정했기 때문이다.
#### 이 밑면의 크기를 키우기 위해 코드를 다음처럼 변경해보자.
```javascript
const camera = new THREE.OrthographicCamera(
  -10*aspect, 10*aspect, // xLeft, xRight
  10, -10, // yTop, yBottom
  0.1, 100 // zNear, zFar
);
```
#### 결과를 보면 모든 물체가 화면에 들어오는 것을 알 수 있고
#### 이전에 `perspectiveCamera`가 적용되어있던 `scene`과 비교해보면 __`OrthographicCamera`는 거리감(원근감)없이 렌더링된다__ 는 것도 알 수 있다.
![10_OrthographicCamera_scene][10_OrthographicCamera_scene]

[10_OrthographicCamera_scene]: ./img/10_OrthographicCamera_scene.png "10_OrthographicCamera_scene"

<br>

#### 이 외에도 크기를 조정하는 다른 방법이 있는데 __코드를 원래대로 돌려놓고 다음 코드를 추가한다.__
```javascript
camera.zoom = 0.15;
```
#### __위에서 `camera` 설정을 보면 `xLeft`와 `xRight`에 대해 이 `aspect`값을 곱해주고__ 있는데 그 이유는 렌더링 결과가 표시되는 __DOM 요소 크기에 대한 종횡비를 적용시켜 자연스러운__ 결과를 얻기 위함이다.

<br>

#### 이처럼 DOM 요소의 크기에 따라 `xLeft`와 `xRight`의 값이 지정되므로 __DOM 요소의 크기가 변경되면 `camera`의 `xLeft`와 `xRight`값도 변경해줘야__ 한다.
#### 이를 위해 기존의 __`resize` 메소드를 주석처리하고 다음과 같이 새롭게 정의한다.__
```javascript
resize() {
  const width = this._divContainer.clientWidth;
  const height = this._divContainer.clientHeight;
  const aspect = width / height;

  if(this._camera instanceof THREE.PerspectiveCamera) {
    this._camera.aspect = aspect;
  } else {
    this._camera.left = -1 * aspect; // xLeft
    this._camera.right = 1 * aspect; // xRight
  }

  this._camera.updateProjectionMatrix();

  this._renderer.setSize(width, height);
}
```
#### 코드를 보면 __`camera`가 `PerspectiveCamera`일 때에는 `aspect` 속성을 지정하고 `PerspectiveCamera`가 아닌, `OrthographicCamera`인 경우에는 `left`와 `right` 속성을 지정한다.__

<br>

#### 이렇게 `camera`의 기본인 `PerspectiveCamera`와 `OrthographicCamera`에 대해 알아봤다.
#### 여기서 더 나아가 __`camera`의 위치를 움직이는 빨간색 구의 위치로 지정하고 `camera`가 바라보는 위치를 빨간색 구가 움직이는 방향을 향하도록__ 해보자.
#### 그러기 위해 `update` 메소드에 다음 코드를 추가해보자.
```javascript
const smallSphere = smallSpherePivot.children[0];
smallSphere.getWorldPosition(this._camera.position);
```
#### 결과를 보면 `camera`의 위치가 빨간색 구를 따라가고 있지만 바라보는 시점은 수정되어야 한다.
#### 이제 __`camera`가 바라보는 위치를 빨간색 구가 움직이는 다음 위치로 향하도록__ 해보자.
```javascript
const targetPivot = new THREE.Object3D();
const target = new THREE.Object3D();
targetPivot.add(target);
targetPivot.name = 'targetPivot';
target.position.set(3, 0.5, 0);
this._scene.add(targetPivot);
```
#### `targetPivot`을 빨간색 구를 생성하듯이 똑같이 생성하는데 차이점은 __`Mesh` 대신 `Object3D`로 생성했으므로 화면상에 렌더링되지는 않지만__ `scene`의 구성요소로 자리잡고 있다.
#### `targetPivot`의 자식인 `target`이 빨간색 구의 다음 위치에 놓이도록 `update` 메소드에 다음 코드를 추가하자.
```javascript
const targetPivot = this._scene.getObjectByName('targetPivot');
if(targetPivot) {
  targetPivot.rotation.y = THREE.Math.degToRad(time * 50 + 10);

  const target = targetPivot.children[0];
  const pt = new THREE.Vector3();

  target.getWorldPosition(pt);
  this._camera.lookAt(pt);
}
```
#### 위에서 생성한 빨간색 구와 똑같은 경로를 따르는 `targetPivot`을 찾아 `targetPivot` 상수에 대입하고 이를 빨간색 구보다 10 빨리 회전하도록 한다.
#### 그리고 __새로운 좌표를 `pt`로 생성하고 이를 `target`의 `position`을 가져와 시점으로 설정함으로써__ 빨간색 구의 궤도와 시점을 따라갈 수 있도록 한다.
![10_target_before][10_target_before]

[10_target_before]: ./img/10_target_before.gif "10_target_before"
#### 결과를 보면 뭔가 이상해보이는데 __원근감(거리감)이 없는 `OrthographicCamera`로 설정되어있기 때문에__ 그렇다.
#### 이를 `OrthographicCamera`를 주석처리하고 __`PerspectiveCamera` 주석을 해제시킴으로써__ 변경해보자.
![10_target][10_target]

[10_target]: ./img/10_target.gif "10_target"

<br>

#### 이렇게 `Three.js`의 `Camera`에 대해 알아봤다.
#### 다음 시간에는 마지막으로 그림자에 대해 알아보며 마칠까 한다.

---

[전체 코드 파일](https://github.com/rlacodud/UID/blob/mit/Research/Three.js/three.js-master/study/07_camera.js)
[02_Three.js module 활용 - (11) 그림자](./11_Three.js_module_shadow.md)