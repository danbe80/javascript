# YOUTUBE 드림코딩 엘리님
## javascript 강의 정리

### 1. 자바스크립트 이것도 모름?
 - 역사를 통한 개념정리
 - https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2

1993년 Marc andreessen이 누구나 사용할 수 있는 컴퓨터 (UI요소가 더해진)Mosaic Web Browser를 발명 => Netscape 설립<br>

Marc andreessen는 조금더 UI요소를 더함 -> 1994년 Netscape Navigator를 만듬<br>

마크 앤드리슨은 어떻게 동적인 웹사이트를 만들 수 있을까 하는 고민에 빠짐<br>

그리곤 Scripting언어를 추가하자 라는 생각을 함<br>

생각한 언어는 1. JAVA 2. Brendan Eich이 만든 Scheme 둘 중 고민<br>

넷스케이프에서 브렌던 아이크한테 10일만에 Scripting 언어를 만들자고 함<br>

1994년 9월 Mocha라는 언어 출시 -> Live Script로 변경 Live Script 언어가 돌아가는 Engine인 interpreter가 포함<br>

넷스케이프 회사는 인긴가 많던 JAVA의 인기에 숟가락을 얹고 싶었고 스크립트 언어의 이름을 Javascript라는 언어로 출시함<br>

1995년 Microsoft는 그게 부러웠뜸 ㅋㅋㅋ 그래서 Reverse enginneeing해서 JScript라는 언어를 출시 => 개발자들은 대혼란<br>

1997년 7월 넷스케이프사가 Javascript를 표준화 언어로 선정되어 ECMAScript가 나옴<br>

1998년 ECMAScript2 1999년 ECMAScript3 2000년 ECMAScript4 까지 나오고 Explore가 갑자기 인기 급상승<br>

마이크로사에서 포준화언어에 Class를 추가하자는 의견에 불만을 토로하게 되고 배째라는 식으로 나가버림<br>

결국 표준화 진행이 더뎌짐<br>

2004년 FireFox(Moz://a)에서 ActionScript3와 Tamarin을 만들어 표준화 제안하지만 이미 있는 표준화가 너무 진행 되서 거절당함<br>

그 후 Jesse James Garrett가 AJAX 비동기 프로그래밍을 출시<br>

2008년 Chrome이 JIT(Just in Time) 강력한 엔진 출시<br>

그 뒤로 ECMAScript10까지 잘 만들고 제일 많은 변화를 준것은 ECMAScript5~6이다.<br>

개발자들이 늘면서 커뮤니티가 생겨 jQuery와 같은 스크립트언어를 사용하기 편리하게 하는 라이브러리를 개발해냄 개발자들이 편하게 스크립트 언어를 사용하기 위해

자바스크립트 역사에 관해서 15분만에 쫙 알 수 있어서 알찬 강의임!

------

### 2. async / defer

Javascript 공부할 사이트 <br>
-> 공식: ecma-international.org <br>
-> MDN developer.mozilla.org -> 추천

1. head안에 스크립트
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="main.js"></script>
</head>
<body></body>
</html>
```
<img src="https://user-images.githubusercontent.com/85651246/129821490-995c7334-5209-4480-b982-b9af5f6e5a72.jpg"/>

단점) 사용자가 웹사이트를 보기까지 많은 시간이 소요될 수 있음 -> HTML파싱 도중 파싱을 멈추고 스크립트를 다운받고 실행했기 때문에 

2. body 안 끝에

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<script src="main.js"></script>
</body>
</html>
```
<img src="https://user-images.githubusercontent.com/85651246/129821800-cd4880d8-e789-4424-af2c-1772535e6dc5.jpg"/>

단점) 사이트가 자바스크립트에 의존적인 사이트라면 사용자가 의미 있는 컨텐츠를 보기위해선 자바스크립트에서 받아올 데이터가 있다면 자바스크립트를 받아와야하는 시간이 소요가 됨

3. head + async(boolean type)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script async src="main.js"></script>
</head>
<body></body>
</html>
```

<img src="https://user-images.githubusercontent.com/85651246/129822014-ec526f75-6af3-4212-a8ee-331319db6511.PNG"/>


장점) 자바스크립트가 HTML 파싱중일 때 병렬적으로 다운받아졌기 때문에 소요시간이 단축<br>

단점) 단 파싱이 되기전에 자바스크립가 시작되는 위험이 있고 페이지를 보는데 약간의 소요시간이 걸릴 수 있음

4. head + defer

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script defer src="main.js"></script>
</head>
<body></body>
</html>
```

<img src="https://user-images.githubusercontent.com/85651246/129822184-c9993bf3-e0ec-4183-a33b-bbc19f2bc2b3.PNG"/>

HTML파싱할 때 스크립트를 병렬적으로 다운로드 받고 파싱이 끝난 후 스크립트를 실행시킨다.<br>

4가지 방법 중에 제일 좋은 방법!

순수 바닐라 js쓸 때 써줄 코드 'use strict' <br>
자바스크립트는 엄청 유연한 언어로 즉 위험한 언어이다. use strict를 써서 모던한 언어로 만들어줌 

----

### 3. 자바스크립트 데이터 타입
프로그래밍 언어에서 제일 중요하게 생각하는 것?<br>
 -> 입력, 연산, 출력, 전송 <br>
 CPU에 최적화된 연산을 짜는 로직도 중요<br>
 메모리의 사용을 최소화<br>

 어플리케이션을 실행하게 되면 어플리케이션마다 쓸 수 있는 메모리가 할당<br>
 이 메모리는 비어 있는 박스들이다.<br>
 어플리케이션마다 쓸 수 있는 메모리가 할당되어 진다.<br>
 변수를 하나 정의 하면 메모리를 가르키고 있는 포인터가 생성되게 되고 
 변수에 저장된 값을 메모리에 저장하게 된다.

 - block scope<br>
  블록안에서 정의한 변수들은 블록 밖에서 사용할 수 없고,<br>
	글로벌 스콥은 은 전역에 선언된 변수로 어느 블록에서는 사용 가능하다.<br>
	글로벌 변수들은 앱이 실행되고 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는것이 좋고 필요한 부분에서만 정의해서 쓰는 것이 좋다


- hoisting<br>
어디에 선언했는지 상관없이 선언만 항상 파일 상위로 끌어올려주는 것을 말합니다.

- var
  - 블록 스코프를 무시한다. 
  - var hoisting (선언만 파일의 최상위로 끌어올려준다.)
  - ES6에서 let이 나오고 사용하지 않는다.
  - 변수 재선언 가능, 재할당 가능
  
```js
console.log(age); // undefined - var hoisting
	age = 4;
	var age;
console.log(age); // 4
```

- let
  - 값 재할당이 가능 =mutable data type(변수 재선언은 불가능)
  - block scope
  - ES6에 var를 보완하고자 탄생

- const<br>
  값이 변경될 수 없는 데이타 타입이다.(immutable data type)<br>
	변수 재선언 불가능
	웬만하면 값을 한번 할당하면 값을 변경하지 않는 이유
	- 보안성
	- thread의 안정성
	- 인간의 실수를 방지

- 변수 타입(Variable types)
  - primitive(원시타입), single item : number, string, boolean, null, undefined, symbol
  - object, box container
  - function first-class-function 
  

- number : 자바스크립트에서는 type이 Dynamic하게 결정 되기 때문에 runtime 실행 중 할당된 값에 따라 타입이 정해진다.
  - speical numeric value: infinity, -infinity, NaN

```js
const infinty = 1 / 0; // infinty
const negativeinfinty = -1 / 0; // -infinty
const nAn = 'not a number' / 0; //NaN
```

- bigInt (fairly new, don't use it yet) : 아직 많은 곳에서 사용하지 않음 현재 사용가능한 브라우저는 chrome, firefox
```js
const bigInt = 123456789123456789n; // bigInt(chrom, firefox만 사용가능)
```

- string
```js
const char = 'c'; // string
const brenden = 'brenden'; // string
const greeting = 'hello' + brenden; // hello brenden 출력
const helloBob = `hi ${brenden}!`; // hi brenden! 출력
```

- boolean
  - false : 0, null, undefined, NaN, ''
  - true : any other value
```js
const canRead = true;
const test = 3 < 1; // false
```
- null / undefined
  - 차이점 : null은 변수를 선언하고 null이라는 빈값을 넣어줌 <br>undefined는 변수를 선언하고 값을 넣어주지 않음
  - 공통점: 같은 빈값 
  - '==' : true / '===' : false

```js
let nothing = null;

let x; // let x = undefined;
```
- symbol : create unique identifiers for objects
  - value값이 똑같고 심볼을 똑같게 만들라면 .for를 붙임
  - 심볼의 value값을 출력할려면 .description을 붙여야함

```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 둘 심볼은 다름
console.log(symbol1 === symbol2); // false

const symbol1 = Symbol.for('id');
const symbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
```

-  object : 일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스 (객체) 
-  real-life object, data structure

```js
const hyerin = { name: 'hyerin', age: 20 };
hyerin.age = 21;
```
변수가 const로 정의 되었고 reference가 들어가 있다.<br>
reference를 변경할 순 없지만 reference안에 있는 data값은 변경이 가능하다.<br>
ex) hyerin.age = 21;

- Dynamic typing : dynamically typed language
- 자바스크립 : 동적 언어 (유연한 언어)
  
```js
let txt = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${txt}, type: ${typeof txt}`); // string
txt = 1;
console.log(`value: ${txt}, type: ${typeof txt}`); // number
txt = '7' + 5;
console.log(`value: ${txt}, type: ${typeof txt}`); // string
txt = '8' / '2';
console.log(`value: ${txt}, type: ${typeof txt}`); // number
console.log(text.charAt(0)); // error
// 자바스크립트는 런타임 도중에 타입이 결정되는 것이 많기 때문에
// 이러한 에러가 런타임 도중에 많이 나는 이걸 보완하고자 나온 것이
// typescript이다. 
```


호환성을 생각하면서 코드짜야한다. 
ES6는 internet explorer는... => babel 사용해서 짜야할 듯...

----
### 4. 자바스크립트 연산 / 반복문