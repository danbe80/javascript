# YOUTUBE 드림코딩 엘리님
## javascript 정리

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
