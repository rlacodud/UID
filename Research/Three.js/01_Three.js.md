# __Three.js__

## __1. Three.js란?__
#### __`Three.js`는 WebGL을 이용해 웹페이지에 3D 객체를 쉽게 렌더링하도록 도와주는 3D Javascript 라이브러리이다.__
>#### __여기서 WebGL이란?__
>#### html의 canvas 요소를 이용하여 웹브라우저에서 인터렉티브한 3D 그래픽을 사용할 수 있도록 하는 도구.
>#### CPU가 아닌 GPU를 사용하여 화면 렌더링이 굉장히 빠르다.
>#### 이를 이용해 웹 게임, 인터렉티브 페이지, VR 콘텐츠 등 여러 3D 작업물을 만들곤 한다.

<br>

#### 웹 상에서 3D 그래픽을 활용하기 위해서는 HTML5, Canvas, WebGL, SVG 등의 다양한 수단을 사용할 수 있는데
#### `Three.js`는 이런 여러 primitive를 사용한 __3D 그래픽을 좀 더 쉽게 구현하기 위해 한 단계를 감싸놓은 Javascript Wrapper__ 역할을 하는 라이브러리이다.

<br>

---

<br>

#### 간단한 예제를 직접 구현해나가며 방법을 터득해볼텐데
#### 우선 Three.js 예제를 진행할 폴더를 생성하고 본인이 사용하는 코드 에디터에서 열어보자.

<br>

#### 그 후 `index.html` 파일을 생성하고 [해당 링크](https://github.com/rlacodud/UID/blob/mit/Research/Three.js/example/js/Three.min.js)에서 `Three.min.js`를 가져와서 html에 연결해준다.

<br>

#### 또는 [Three.js](https://threejs.org/)에 접속하여 `download` 메뉴를 클릭하면 압축폴더를 다운받게 되는데
#### 이를 통해 html과 필요 파일을 연결할 수도 있다.
#### `Three.js` 라이브러리 파일 외에도 __다양한 sample과 API 문서들도 포함되어__ 있으므로 처음 배우는 사람들에게 유용하다.
#### 위 압축폴더 속 파일들을 이용한 예제는 다음 시간에 활용해보도록 하자.

<br>

#### 아래에서 진행하는 코드들은 모두 __html 내부 `<script>` 태그 안에 작성한다.__

<br>

## __2. 3D 그래픽의 구성요소__
#### 그럼 우선 3D 그래픽의 구성요소를 하나하나 살펴보며 이해해보자.
![structure][structure]

[structure]: ./img/structure.png "structure" 

<br>


### __(1) 공간 - Scene__
#### 가장 먼저 우리의 __Object들을 놓을 공간__ 이 필요하다.
#### `Three.js`에서는 이러한 공간을 __`Scene`__ 이라고 부른다.
```javascript
const scene = new THREE.Scene();
```
#### __`Scene`은 말 그대로 우리가 화면에 그리고자 하는 어떤 장면__ 에 해당한다.
#### 정확히는 __그 장면에 대한 정보__ (<i>카메라는 어디서 어떤 방향으로 바라보고 있고, 광원은 어디에 존재하고, 어떤 물체들이 있고 등</i>)를 모두 담고 있는 무언가라고 할 수 있다.

<br>

#### 필요한 정보를 갖고 있어도 이러한 정보를 사람이 보는 화면에 그리기 위해서는 이 __정보를 화면에 그려내는 작업__ 이 필요한데
#### 이러한 작업을 하는 녀석을 __`Renderer`__ 라고 부른다.
```javascript
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
```
#### __`WebGLRenderer` Constructor는 Object의 `option`을 인자로__ 받는데
#### 위 코드를 보면 투명한 배경(`alpha: true`)에 안티얼라이어싱(깨지는 것을 막는/`antialias: true`)이 적용되게 설정했다.

<br>

### __(2) 피사체: 부피, 질감 - Mesh: Geometry, Material__
#### 우리는 간단한 팔면체를 그리고자 한다.
#### 이 팔면체는 두 층위로 나눠서 생각해볼 수 있다.
#### 1. 8개의 면, 6개의 꼭짓점, 8개의 간선을 갖는 __기하학적 형태__
#### 2. 일종의 뼈대로서 기능하는, 그 기하학적 형태 위에 덧씌워져 실제로 우리 눈에 보여지는 __질감을 가진 표면__

<br>

#### 이렇게 두 층위로 나누는 이유는
#### __1번은 말 그대로 형태, 뼈대이다.__
#### __2번은 1번 위에 덧씌워지는 표면이다.__
#### <i>이렇게 1번에는 다양한 질감의 표면을 덧씌우고 다양한 형태에는 2번을 덧씌움으로써 다양한 Object가 효율적으로 생성될 수 있다.</i>

<br>

#### __기하학적 형태, 뼈대를 담당하는 부분(1)을 `Geometry`__ 라 부른다.
#### __특정한 질감, 색, 반사율 등을 갖는 물체의 표면(2)을 `Material`__ 이라 부른다.

<br>

#### 이렇게 `Geometry`에 `Material`이 입혀진 Object를 `Mesh`라 부른다.
>#### __물체(`Mesh`) = 뼈대(`Geometry`) + 표면(`Material`)__

<br>

#### 그럼 팔면체 `Mesh`를 만들기 위해 우선 뼈대인 `Geometry`가 필요하다.
#### __3D 모델링의 기본 단위는 삼각형__ 이다. 즉, 모든 면은 삼각형의 합으로 표현된다.
#### 수학시간에 배웠듯이 점점 꼭짓점의 개수를 늘려가다보면 결국 원에 가까워지는 원리와 같다.

<br>

#### 그럼 3D 모델의 뼈대를 만들어내는 가장 기본적인 방법은 다음과 같을 것이다.
>#### 꼭짓점(vertex)을 정의한다.
>#### 어떤 세 꼭짓점이 이어져서 삼각형 면(Face)을 이루는지를 정의한다.
```javascript
const geometry = new THREE.Geometry();
geometry.vertices.push(
  new THREE.Vector3(-10, 10, 0),
  new THREE.Vector3(-10, -10, 0),
  new THREE.Vector3(10, -10, 0)
);
geometry.faces.push(new THREE.Face3(0, 1, 2));
```
#### 위 코드는 x-y 평면에 세 점(`x= -10, y=10` | `x=-10, y=-10` | `x=10, y=-10`)을 찍은 후
#### `Geometry`의 첫번째, 두번째, 세번째 점을 잇는 면을 추가하는 코드다.

<br>

#### 이해하기 어려운 개념은 아니지만 이런 식으로 모든 모델링을 해야 한다면
#### <i>복잡한 물체를 그리려 할 때 코드의 양이 급격히 늘어나고 의도를 파악하기 힘들어질 것이다.</i>

<br>

#### 그런 사태를 방지하기 위해 __`Three.js`에서 미리 정의된 다양한 형태의 `Geometry`를 제공하고 있다.__
#### 이에 대한 전체 목록은 [공식 가이드](https://threejs.org/docs/#api/en/geometries/BoxGeometry)에 들어가서 확인할 수 있다.

<br>

#### 우리가 필요로 하는 `Geometry`인 `Octahedron Geometry`는 다음과 같이 생성할 수 있다.
```javascript
const RADIUS = 40
const geometry = new THREE.OctahedronGeometry(RADIUS, 0);
```

<br>

#### `Geometry`가 준비되었으니 `Material`을 준비할 시간이다.
#### 일단 이 파트에선 __빛과 상호작용하지 않는, 가장 기본적인 표면인 `MeshBasicMaterial`__ 을 사용하도록 한다.
```javascript
const material = new THREE.MeshBasicMaterial({ color: '#ff3030' })
```
#### 마지막으로 만들어낸 `Geometry`와 `Material`을 이용해 `Mesh`를 만들어보자.
#### __`Mesh`의 생성자는 `Geometry`와 `Material`의 두 인자를__ 받는다.
```javascript
const mesh  = new THREE.Mesh(geometry, material)
```
#### 이제 그리고자 하는 물체의 준비가 끝났다.
#### 마지막으로 앞서 __준비한 공간에 이 물체를 놓아보자.__

<br>

#### 기본적으로 `scene.add` 함수를 통해 공간에 추가한 물체는 `(0, 0, 0)` 위치에 놓인다.
#### 나중에 관찰을 위해 z축으로 약간 밀어두자.
```javascript
scene.add(mesh)
mesh.position.z = -RADIUS * 10
```

<br>

### __(3) 카메라 - Camera__
#### 같은 공간에 같은 물체들이 배치되어 있어도,
#### __어디에 서서 어떤 시선으로 바라보느냐에 따라__ 보이는 풍경이 다른데 이 시선에 해당하는 것이 `camera`다.

<br>

#### 실제 사람의 눈 또는 카메라 렌즈와 비슷하게 __투시 투영을 사용하는 `PerspectiveCamera`__ 를 사용해보자.
#### 이외에도 `Scene`을 바라보는 형태에는 다양한 `Camera`가 있다.
```javascript
const WIDTH = 400
const HEIGHT = WIDTH

const Field_of_View = 20;
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
#### 생성자가 받는 네개의 인자는 각각 다음과 같은 의미를 갖는다.
>#### __- `Field of View`__
>#### __카메라의 시야각__ 을 의미한다. __커질수록 카메라가 바라보는 시야각이 넓어짐을 의미한다.__ 단위는 `degree`
>#### __- `ASPECT`__
>#### __시야의 가로세로비__ 를 의미한다. __`container`의 가로세로비와 동일한 값__ 을 넣어주는 게 좋다. 단위는 없다.
>#### __- `NEAR`__
>#### 렌더링할 물체 거리의 __하한값__ 으로, __너무 가까이 있는 물체를 그리는 것을 막기 위해__ 사용한다.
>#### __- `FAR`__
>#### 렌더링할 물체 거리의 __상한값__ 으로, __너무 멀리 있는 물체를 그리는 것을 막기 위해__ 사용한다.
>#### 카메라로부터의 거리가 이 값보다 큰 물체는 화면에 그리지 않는다.

<br>

---

<br>

## __3. Renderer(그려내기)__
#### 앞서 언급했듯이 이 __모든 정보를 화면에 그려내는 일은 `renderer`의 일이다.__
#### 여기서는 __`#three`라는 id를 갖는 `<div>`를 container로 사용하기로 하고 `<body>` 내부에 추가하고__
#### 위에서 정의한 __가로, 세로를 `renderer`에 적용해보자.__
```javascript
renderer.setSize(WIDTH, HEIGHT)
```

<br>

#### 그 후 `renderer`가 그려낸 장면을 담을 __`<canvas>` element를 DOM트리에서 container의 자식으로 추가한다.__
#### 해당 element는 `renderer.domElement` 프로퍼티를 통해 접근할 수 있다.
```javascript
const container = document.querySelector('#three')
container.appendChild(renderer.domElement)
```

<br>

#### 마지막으로 우리가 지금까지 만들어놓은 __장면과 `camera`를 이용해 화면을 실제로 그리라는 명령__ 을 내린다.
#### 이 명령은 __`renderer.render` 메소드__ 를 사용한다.
```javascript
renderer.render(scene, camera)
```

<br>

#### 여기까지 모든 과정을 잘 따라왔다면 아래와 같은 화면을 볼 수 있을 것이다.
![example1][example1]

[example1]: ./img/example1.png "example1"  

<br>

#### 놀랍게도 이건 마름모로 보이지만 팔면체가 맞다.
#### 그러나 마름모처럼 보이는 이유는 다음과 같다.

>#### 팔면체의 중심은 `(0, 0, -400)`에 놓여있고, 카메라는 `(0, 0, 0)`에 놓여있다.
>#### 우리가 정의한 카메라의 시점은 z축을 따라 __팔면체의 정중앙을 뚫고 지나가고 있다.__
>#### __`MeshBasicMaterial`은 빛과 상호작용을 하지 않는 `Material`__ 이라고 했다. 실제로 우리는 공간에 __빛을 정의조차 하지 않았다.__

<br>

#### __빛의 부재는 곧 공간에서 심도의 부재를 의미한다.__
#### <i>즉, 한 축이 무의미해진 3D는 2D로 나타난다.</i>
#### 이를 해결하기 위해서는 당연하게도 __빛(심도)을 추가하면 된다.__

<br>

---

<br>

## __4. 빛과 질감__
#### 이 작업은 두 단계로 나눌 수 있다.
>#### 공간에 __빛을 추가한다.__
>#### 팔면체가 __빛과 상호작용하도록__ 한다.

<br>

#### 먼저 빛을 추가해보자.
#### 모든 __광원의 생성자는 기본적으로 색깔(`color`)과 세기(`intensity`)의 두 인자를__ 받는다.
#### `Three.js`는 공간 전체를 밝히는 `AmbientLight`, 특정 방향으로 뻗어나가는 `DirectionalLight` 등 다양한 종류의 광원을 제공한다.

<br>

#### 이 글에서는 가장 기본적인 광원 중 하나인 `PointLight`를 사용하겠다.
#### __`PointLight`는 마치 전구처럼 한 점에서 시작해 모든 방향으로 뻗어나가는 광원을__ 표현하기 위해 사용한다.
```javascript
const pointLight = new THREE.PointLight(0xFFFFFF, 0.5)

pointLight.position.x = 100
pointLight.position.y = 100
pointLight.position.z = 30

scene.add(pointLight)
```
#### __백색 광(`0xFFFFFF`)을 정의하고 위치를 잡아준 뒤(`pointLight.position`) 공간에 빛을 더한다.(`scene.add(pointLight)`)__
#### 아직 팔면체의 표면이 빛과 상호작용을 하지 않기 때문에 화면에 아무런 변화가 없는데
#### 이제 `Material`을 변경해보자.

<br>

#### `Three.js`에서는 빛과 상호작용하는 표면 중 자주 쓰이는 표면 모델 몇가지를 기본적으로 제공한다.
#### 그중 여기에서는 __람베르드 반사율(관찰자가 바라보는 각도와 관계없이 같은 겉보기 밝기)을 가지며 물체의 표면을 나타내는 `MashLambertMaterial`__ 을 이용해보겠다.
#### 기존에 작성된 코드에서 `material`의 정의를 아래와 같이 변경해보자.
```javascript
const material = new THREE.MeshLambertMaterial({ color: '0xFF3030 ' })
```
#### 이제 아래와 같이 변경됐을 것이다.
![example2][example2]

[example2]: ./img/example2.png "example2"  
#### 앞서 생성한 빛을 `(100, 100, 30)`에 두었는데
#### 이는 __우측상단에 위치하는 점이고, 실제로 더 많은 빛을 받는 우측 상단은 더 밝은 색을 갖는 반면__
#### __좌측 하단은 빛을 거의 받지 못해 까맣게 보이는 것__ 을 확인할 수 있다.

<br>

#### 그럼 마지막으로 이 팔면체가 3D로 그려졌다는 것을 보다 명확하게 하기 위해 회전시켜보자.

<br>

---

<br>

## __5. 움직임__
#### 브라우저에서는 __`requestAnimationFrame` 함수를 사용해 매끄러운 애니메이션__ 을 그려낼 수 있다.
#### 이 함수는 __콜백 함수를 인자로 받고 한 프레임을 할당받아서 인자로 받은 콜백 함수를 실행한다.__
#### 앞서 작성했던 `renderer.render(scene, camera)`를 다음과 같이 수정하자.
```javascript
function update () {
  const speed = Math.random() / 20
  octahedron.rotation.x += speed
  octahedron.rotation.y += speed
  octahedron.rotation.z += speed
  
  renderer.render(scene, camera)
  requestAnimationFrame(update)
}

requestAnimationFrame(update)
```
#### 매 프레임마다 0 ~ 0.05 사이의 값을 임의로 정한 뒤 __x, y, z축마다 해당 값만큼의 회전__ 을 준다.
#### 그 뒤에 __`scene`을 다시 그리고 자기 자신을 `requestAnimationFrame` 함수의 인자로 다시 넘겨 호출__ 하는 내용이다.
![example3][example3]

[example3]: ./img/example3.gif "example3"
#### 그럼 이제 성공적으로 위와 같이 팔면체가 여러 방향으로 회전할 것이다.

<br>

#### 이렇게 간단한 예제를 진행해보며 `Three.js`에 대해 알아봤다.
#### 위 코드들은 [example폴더](https://github.com/rlacodud/UID/tree/mit/Research/Three.js/example)에서 확인 가능하다.

---

[02_Three.js module 활용 - (1) Basic](./02_Three.js_module_basic.md)