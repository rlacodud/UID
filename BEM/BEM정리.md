__BEM 방식__
===

* class명으로 명시 -> 기본적으로 ID 사용X / class만을 사용.
* '어떤 목적인가'에 따라 작명.
* 이름을 연결할(단어의 조합) 때에는 하이픈(-) 하나만 사용.  
 ex) search-form
#
## __Block__Element--Modifier__  
<br/>

### 1. Block은 재사용 가능한 기능적으로 독립적인 페이지 컴포넌트.  
##### &nbsp; ex) Logo는 header, footer 등 다양한 곳에서 사용 가능.  
![Block][block]

[block]: https://t1.daumcdn.net/cfile/tistory/235E3133568B047227 "Block"  
<br/>

##### __Block은 항상 맨 앞에 위치하도록 함.__
 ```html
  <div class="header">
  ```  

<br/>
<br/>

### 2. Element는 Block을 구성하는 단위(조각).  
![Element][element]

[element]: https://t1.daumcdn.net/cfile/tistory/993FCF4A5C7BF68F27 "element"
#### &nbsp; Block과 달리 의존적인 형태로, 자신이 속한 Block 내에서만 의미를 가짐.
#### &nbsp;&nbsp; __'~의' 로 생각하면 파악 용이.__  
<br/>

 ```html
      <div class="header__search">
        <div class="search">
          <form>
            <div class="search__inner">
              <div class="search__title">
              </div>
            </div>
          </form>
        </div>
      </div>
  ```

##### &nbsp; + 위 코드에서 search는 header에서도 footer에서도 사용될 수 있는 기능을 가진 독립적인 형태이기에 Block 단위로 표현.
##### &nbsp; + 그러나 search__inner, search__title의 경우에는 search에 의존해서 존재하는 영역이고 독립적이지 않기에 언더바(__)로 Block에 귀속돼있음을 명시.  

<br/>
<br/>

### 3. Modifier는 Block이나 Element의 속성 담당.
 #### &nbsp; [Element의 속성을 명시하는 두가지 방식]
##### &nbsp;&nbsp; __(1) 불리언(boolean) 타입(그 값이 true라고 가정하고 사용)__  
 ```html
  <li class="tab__item tab__item--focused">탭 01</li>
  ```
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tab__item의 속성(상태)이 focused라는 걸 명시.  
<br/>
  
##### &nbsp;&nbsp; __(2) 키-밸류(key-value) 타입(성질-내용)__
 ```html
  <strong class="title title--color-gray">VIP 로그인 (준비중)</strong>
 ```
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; color속성이 gray로 설정되었다는 걸 명시.

<br/>

--------------  
<br/>

   장점   |    단점  
--------- | ---------  
class name만으로 마크업 구조 파악 용이 -> 협업 시 설명 단축. | class name이 길어짐.
SASS의 부모참조자(&)로 효율적인 코딩 가능. | 더블클릭 혹은 Ctrl + Shift + 방향키로 class name을 분리해서 선택하기 어려움.
쉬운 유지보수 작업.

#
[CSS 방법론](https://nykim.work/15)  
[BEM 사용 대표 사이트](https://tutsplus.com/)