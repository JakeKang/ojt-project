## 0703 Web Basic Study
------
### HTML5
##### 1.개요
> HTML(HyperText Markup Language)은 웹페이지를 기술하기 위한 마크업 언어이다. 
>
> 웹페이지의 내용(content)과 구조(structure)를 담당하는 언어로 HTML태그를 통해 구조화 하는 것이다.

#### HTML5 시작하기
##### HTML5의 DOCTYPE(문서타입)
기존의 DOCTYPE은 SGML[^1] 기반이었기 때문에 DTD[^2]를 명시해야 했으나, HTML5에서는 브라우저가 표준모드로 작동되게 하는 역할만 하면 되기 때문에 아주 간소화해 졌다.

[^1] : SGML(Standard Generalized Markup Language)은 문서용 마크업 언어를 정의하기 위한 메타 언어이다.
[^2] : Document Type Definition

```
<!DOCTYPE html>
#DOCTYPE 정의는 유효성 검증을 위해 고안된 것이다.
#정확한 DOCTYPE 이 선언되어 있다면 표준모드(standards mode)로 작동할 것이고 DOCTYPE이 없다면 비표준모드(quirks mode)로 작동하게 된다.
```

---
##### 휴먼 랭귀지
W3C 규격에 따르면 lang속성은 요소의 콘텐츠와 텍스트를 포함하고 있는 요소의 속성에 대한 기본 언어를 지정한다. 만약 영어로 페이지를 작성하는 게 아니라면, 정확하게 언어 코드를 지정하는 편이 좋다.

[전체언어목록](http://www.iana.org/assignments/language-subtag-registry)

```
<meta lang="ko">
```

##### 문자 인코딩
마크업 문서의 문자 인코딩을 명시할때 사용한다.
```
<meta charset="UTF-8">
```

##### 단순화
Javascript와 CSS 파일 링크에 type을 생략할 수 있다.
```
<script src="test.js"></script>
#javascript [type="text/javascript] 생략

<link rel="stylesheet" href="file.css">
#CSS [type="text/css"] 생략
```

##### 위의 내용을 종합한 기본 HTML5 구조
```
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>홈페이지 제목</title>
        <link rel="stylesheet" href="file.css"> #css 파일
    </head>
    <body>
        본문 내용
        <script src="test.js"><script>
    </body>
</html>
```

##### 브라우저 동작 방식에 따른 `<script>` 태그 위치
보통 `<body>` 태그 최하단에 위치하는게 가장 좋다.

###### 브라우저의 동작 방식
> 1. HTML을 읽기 시작한다.
> 2. HTML을 파싱한다.
> 3. DOM 트리를 생성한다.
> 4. Render 트리 (DOM tree + CSS의 CSSOM 트리 결합 ) 가 생성된다.
> 5. Display에 표시된다.

+ HTML을 파싱하고 DOM 트리를 생성하는 과정에서 브라우저는 HTML 태그들을 읽어나가게 된다.
+ 여기서 `<script>` 태그를 만나게 되면 파싱을 중단하고 javascript 파일을 로드한 후 javascript 코드를 파싱한다.
+ javascript 코드 파싱이 완료 된 후 HTML 파싱을 재개한다.

###### 결론
이로인해 HTML태그들 사이에 script 태그가 위치하면 두가지 문제가 발생한다.

1. HTML을 읽는 과정에 스크립트를 만나면 중단 시점이 생기고 그만큼 Display에 표시되는 것이 지연된다.
2. DOM 트리가 생성되기전에 자바스크립트가 생성되지도 않은 DOM의 조작을 시도할 수 있다.

위와 같은 상황을 막기 위해 script 태그는 body 태그 최하단에 위치하는 게 가장 좋다.

------
### HTML5의 추가 기능
1. 멀티미디어(Multimedia)
    * 플래시와 같은 플러그인의 도움없이 비디오 및 오디오 기능을 자체적으로 지원
<br/>
2. 그래픽(Graphics & Effects)
    * SVG, 캔버스를 사용한 2차원 그래픽과 CSS3, WebGL을 사용한 3차원 그래픽을 지원
<br/>
3. 통신(Connectivity)
    * 지금까지의 HTML은 단방향 통신만이 가능하였으나 HTML5는 서버와의 소켓 통신을 지원하므로 서버와의 양방향 통신이 가능
<br/>
4. 디바이스 접근(Device acess)
    * 카메라, 동작센서 등의 하드웨어 기능을 직접적으로 제어할 수 있다.
<br/>
5. 오프라인 및 저장소(Offline & Storage)
    * 오프라인 상태에서도 애플리케이션을 통작시킬 수 있다. 이는 HTML5가 플랫폼으로서 사용될 수 있음을 의미
<br/>
6. 시맨틱 태그(Semantics)
    * HTML 요소의 의미를 명확히 설명하는 시맨틱 태그를 도입하여 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명할 수 있다. 이를 통해 HTML 요소의 의미를 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹을 실현할 수 있다.

###### 시맨틱 웹 : 기계가 이해할 수 있는 형태로 제작된 웹을 의미

7. CSS3
    * HTML5는 CSS3를 완벽하게 지원한다.
<br/>

출처 : [HTML5 특징](https://webdir.tistory.com/85)
출처 : [MDN web docs](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5)
출처 : [HTML5 기능](https://poiemaweb.com/html5-syntax)

#### HTML5 요소(Element)
html의 요소는 시작 태그(start tag)와 종료 태그(end tag)그리고 태그 사이에 위치한 content로 구성된다.

HTMl Document는 요소(Element)들의 집합으로 이루어진다.

* 요소는 중첩될 수 있다. 즉, 요소는 다른 요소를 포함할 수 있다. 이때 부자관계가 성립된다.
* 이러한 부자관계로 정보를 구조화하는 것이다.

##### 빈 요소
content를 가질 수 없는 요소를 빈 요소라고 한다.
대표적으로 `br` `hr` `img` `input` `link` `meta` 태그가 있다.

#### 어트리뷰트(Attribute)
어트리뷰트(Attribute 속성)이란 요소의 성질, 특징을 정의하는 명세이다. 
*   요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는 요소의 추가적 정보(경로, 크기, 옵션)를 제공한다.
```
<img src="test.png">
#src : 어트리뷰트명
#html.png : 어트리뷰트값
#어트리뷰트는 시작 태그에 위치해야 하며 이름과 값의 쌍을 이룬다.
```

####  주석(Comments)
```
<!-- HTML의 주석 -->
```

#### HTML5 추가된 시맨틱 태그
header : 헤더를 의미
nav : 내비게이션을 의미
aside : 사이드에 위치하는 공간을 의미
section : 본문의 여러 내용(article)을 포함하는 공간을 의미
article : 본문의 주내용이 들어가는 공간을 의미
footer : 푸터를 의미

#### 목록 (List)
1.1 순서없는 목록(ul)
```
<ul>
    <li>a</li>
    <li>b</li>
</ul>

# 'a
# 'b
```

1.2 순서있는 목록(ol)
```
<ol>
    <li>a</li>
    <li>b</li>
</ol>

# 1.a
# 2.b
```

#### 멀티미디어
1. 이미지
```
<img src="경로" alt="이미지가 없을때 표시될 문장" width="너비" height="높이">
```

2. 오디오
```
<audio src="경로" preload="재생 전에 파일을 불러올 것인지" autoplay="자동재생여부" loop="반복여부" controls(재생도구표시)>
# src를 제외한 모든 속성은 "true" "false"를 사용
```

3. 비디오(HTML5에 새롭게 추가)
```
<video width="너비" height"높이" controls(재생도구표시)>
    <source src="경로" poster="썸네일경로" autoplay="자동재생" loop="반복">
</video>
```

#### Form 전송방식
##### GET
+   전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식
ex) http://주소/==posts?userId=1&id=1==
+ '?'를 통해 데이터의 시작을 알려준다.
+ 1개 이상의 전송 데이터는 '&'로 구분한다.
+ URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있으며 전송할 수 있는 데이터의 한계가 있다(최대 255자)
+ REST API에서 GET메소드는 모든 또는 특정 리소스의 ==조회==를 요청한다.

##### POST
+ Request Body에 정보를 담아 보내는 방식
ex) http://주소/==posts==
+ URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
+ REST API에서 POST 메소드는 특정 리소스의 ==생성==을 요청한다.