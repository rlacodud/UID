[02_Three.js module 활용 - (6) Material](./06_Three.js_module_Material.md)

---

# __Three.js module 활용 - (7) Texture Material__
#### __`Texture`는 우리가 이전에 사용해본 `map`을 중심으로__ 작동한다.
#### 이전에 진행했던 `04_material.js` 파일을 그대로 사용한다.

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

#### 기본적으로 Texture 맵핑은 Geometry에 UV 좌표 개념으로 맵핑되어있는데
#### 이 UV 좌표는 Three.js에서 제공하는 Geometry에 기본적으로 지정되어 있고 이 반영된 UV 좌표대로 Texture가 맵핑되는 것이다.