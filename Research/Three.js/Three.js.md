# __Three.js__

## __1. Three.js란?__
#### Three.js는 3D Javascript 라이브러리이다.
#### 웹 상에서 3D 그래픽을 활용하기 위해서는 HTML5, Canvas, WebGL, SVG 등의 다양한 수단을 사용할 수 있는데
#### Three.js는 이런 여러 primitive를 사용한 3D 그래픽을 좀 더 쉽게 구현하기 위해 한 단계를 감싸놓은 Javascript Wrapper 역할을 하는 라이브러리이다.

<br>

---

<br>

## __2. 3D 그래픽의 구성요소__
#### 그럼 우선 3D 그래픽의 구성요소를 하나하나 살펴보며 이해해보자.

<br>


### __(1) 공간 - Scene__
#### 가장 먼저 우리의 Object들을 놓을 공간이 필요하다.
#### Three.js에서는 이러한 공간을 `Scene`이라고 부른다.
```javascript
const scene = new THREE.Scene();
```
#### `Scene`은 말 그대로 우리가 화면에 그리고자 하는 어떤 장면에 해당한다.
#### 정확히는 그 장면에 대한 정보(<i>카메라는 어디서 어떤 방향으로 바라보고 있고, 광원은 어디에 존재하고, 어떤 물체들이 있고 등</i>)를 모두 담고 있는 무언가라고 할 수 있다.

<br>

#### 필요한 정보를 갖고 있어도 이러한 정보를 사람이 보는 화면에 그리기 위해서는 이 정보를 화면에 그려내는 작업이 필요한데
#### 이러한 작업을 하는 녀석을 `Renderer`라고 부른다.
```javascript
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
```
#### `WebGLRenderer` Constructor는 Object의 `option`을 인자로 받는데
#### 위 코드를 보면 투명한 배경(`alpha: true`)에 안티얼라이어싱이(깨지는 것을 막는/`antialias: true`) 적용되게 설정했다.

<br>

### __(2) 피사체: 부피, 질감 - Mesh: Geometry, Material__
#### 우리는 간단한 팔면체를 그리고자 한다.
#### 이 팔면체는 두 층위로 나눠서 생각해볼 수 있다.
#### 1. 8개의 면, 6개의 꼭짓점, 8개의 간선을 갖는 기하학적 형태
#### 2. 일종의 뼈대로서 기능하는, 그 기하학적 형태 위에 덧씌워져 실제로 우리 눈에 보여지는 질감을 가진 표면

<br>

#### 이렇게 두 층위로 나누는 이유는
#### 1번은 말 그대로 형태, 뼈대이다.
#### 2번은 1번 위에 덧씌워지는 표면이다.
#### 이렇게 1번에는 다양한 질감의 표면을 덧씌우고 다양한 형태에는 2번을 덧씌움으로써 다양한 Object가 효율적으로 생성될 수 있다.

<br>

#### 기하학적 형태, 뼈대를 담당하는 부분(1)을 Geometry라 부른다.
#### 특정한 질감, 색, 반사율 등을 갖는 물체의 표면(2)을 Material이라 부른다.

<br>

#### 이렇게 Geometry에 Material이 입혀진 Object를 Mesh라 부른다.
>#### 물체(Mesh) = 뼈대(Geometry) + 표면(Material)

<br>

#### 그럼 팔면체 Mesh를 만들기 위해 Geometry가 필요하다.
#### 3D 모델링의 기본 단위는 삼각형이다. 즉, 모든 면은 삼각형의 합으로 표현된다.
#### 수학시간에 배웠듯이 점점 꼭짓점의 개수를 늘려가다보면 결국 원에 가까워지는 원리와 같다.

<br>

#### 그럼 3D 모델의 뼈대를 만들어내는 가장 기본적인 방법은 다음과 같을 것이다.
>#### 꼭짓점(vertex)를 정의한다.
>#### 어떤 세 꼭짓점이 이어져서 삼각형 면(Face)를 이루는지를 정의한다.
```javascript
  const geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-10, 10, 0),
    new THREE.Vector3(-10, -10, 0),
    new THREE.Vector3(10, -10, 0)
  );
  geometry.faces.push(new THREE.Face3(0, 1, 2));
```
#### 위 코드는 x-y 평면에 세 점(`x= -10, y=10`, `x=-10, y=-10,` `x=10, y=-10`)을 찍은 후
#### Geometry의 첫번째, 두번째, 세번째 점을 잇는 면을 추가하는 코드다.

<br>

#### 이해하기 어려운 개념은 아니지만 이런 식으로 모든 모델링을 해야 한다면
#### 복잡한 물체를 그리려 할 때 코드의 양이 급격히 늘어나고 의도를 파악하기 힘들어질 것이다.
#### 그런 사태를 방지하기 위해 Three.js에서 미리 정의된 다양한 형태의 Geometry를 제공하고 있다.
#### 사면체, 육면체, 팔면체와 같은 다면체와 구, 평면 등의 Geometry를 제공하고 이에 대한 전체 목록은 [공식 가이드](https://threejs.org/docs/#api/en/geometries/BoxGeometry)에 들어가서 확인할 수 있다.

<br>

#### 우리가 필요로 하는 Geometry인 Octahedron Geometry는 다음과 같이 생성할 수 있다.
```javascript
    const RADIUS = 40
    const geometry = new THREE.OctahedronGeometry(RADIUS, 0);
```

<br>

#### Geometry가 준비되었으니 Material을 준비할 시간이다.
#### 일단 이 파트에선 빛과 상호작용하지 않는, 가장 기본적인 표면인 MeshBasicMaterial을 사용하도록 한다.
```javascript
    const material = new THREE.MeshBasicMaterial({ color: '#ff3030' })
```
#### 마지막으로 만들어낸 Geometry와 Material을 이용해 Mesh를 만들어보자.
#### Mesh의 생성자는 Geometry와 Material의 두 인자를 받는다.
```javascript
    const mesh  = new THREE.Mesh(geometry, material)
```
#### 이제 그리고자 하는 물체의 준비가 끝났다.
#### 마지막으로 앞서 준비한 공간에 이 물체를 놓아보자.

<br>

#### 기본적은 scene.add 함수를 통해 공간에 추가한 물체는 (0, 0, 0) 위치에 놓인다.
#### 나중에 관찰을 위해 z축으로 약간 밀어두자.
```javascript
    scene.add(mesh)
    mesh.position.z = -RADIUS * 10
```

<br>

### __(3) 카메라 - Camera__
#### 같은 공간에 같은 물체들이 배치되어 있어도,
#### 어디에 서서 어떤 시선으로 바라보느냐에 따라 보이는 풍경이 다른데
#### 이 시선에 해당하는 것이 카메라다.

<br>

#### 실제 사람의 눈 또는 카메라 렌즈와 비슷하게 투시 투영을 사용하는 `PerspectiveCamera`를 사용해보자.
#### 이외에도 Scene을 바라보는 형태에는 다양한 Camera가 있다.
```javascript
    const FIELD_OF_VIEW = 20;
    const ASPECT = WIDTH / HEIGHT;
    const NEAR = 0.1;
    const FAR = 10000;

    const camera = new THREE.PerspectiveCamera(
      FIELD_OF_VIEW,
      ASPECT,
      NEAR,
      FAR
    )
```

<br>

#### 생성자가 받는 네개의 인자는 각각 다음과 같은 의미를 갖는다.
>#### __- FIELD_OF_VIEW__
>#### 카메라의 시야각을 의미한다. 커질수록 카메라가 바라보는 시야각이 넓어짐을 의미한다. 단위는 degree
>#### __- ASPECT__
>#### 시야의 가로세로비를 의미한다. container의 가로세로비와 동일한 값을 넣어주는 게 좋다. 단위는 없다.
>#### __- NEAR__
>#### 렌더링할 물체 거리의 하한값으로, 너무 가까이 있는 물체를 그리는 것을 막기 위해 사용한다.
>#### __- FAR__
>#### 렌더링할 물체 거리의 상한값으로, 너무 멀리 있는 물체를 그리는 것을 막기 위해 사용한다.
>#### 카메라로부터의 거리가 이 값보다 큰 물체는 화면에 그리지 않는다.

<br>

---

<br>

## __3. Renderer(그려내기)__
#### 앞서 언급했듯이 이 모든 정보를 화면에 그려내는 일은 `renderer`의 일이다.
#### 여기서는 `#three`라는 id를 갖는 `<div>`를 container로 사용하기로 하고
#### 가로, 세로 길이를 각각 200px로 그려보자.
```javascript
    const WIDTH = 200
    const HEIGHT = 200

    renderer.setSize(WIDTH, HEIGHT)
```
#### 그 후 Renderer가 그려낸 장면을 담을 `<canvas>` element를 DOM트리에서 container의 자식으로 추가한다.
#### 해당 element는 renderer.domElement 프로퍼티를 통해 접근할 수 있다.
```javascript
    const container = document.querySelector('#three')
    container.appendChild(renderer.domElement)
```

<br>

#### 마지막으로 우리가 지금까지 만들어놓은 장면과 카메라를 이용해 화면을 실제로 그리라는 명령을 내린다.
#### 이 명령은 `renderer.render` 메소드를 사용한다.
```javascript
    renderer.render(scene, camera)
```

<br>

#### 여기까지 모든 과정을 잘 따라왔다면 아래왁 같은 화면을 볼 수 있을 것이다.
![example1][example1]

[example1]: ./img/example1.png "example1"  

<br>

#### 놀랍게도 이건 마름모로 보이지만 팔면체가 맞다.
#### 그러나 마름모처럼 보이는 이유는 다음과 같다.

>#### 팔면체의 중심은 (0, 0, -400)