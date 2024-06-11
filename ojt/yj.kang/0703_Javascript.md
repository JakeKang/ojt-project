### JavaScript
##### 1.개요
> 1. 프로토타입기반의 객체지향 프로그래밍 언어로, 스크립트 언어에 해당된다.
> 2. 특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다.
> 3. HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다. (동적인 요소)

#### 브라우저에서 할 수 있는 일

브라우저 환경에선 웹페이지 조작, 클라이언트와 서버의 상호작용에 관한 모든 일을 할 수 있다.

1. 페이지에 새로운 HTML을 추가하거나 기존 HTMl, 혹은 스타일 수정
2. 마우스 클릭이나 포인터의 움직임, 키보드 키 눌림 등과 같은 사용자 행동에 반응하기
3. 네트워크를 통해 원격 서버에 요청을 보내거나, 파일 다운로드, 업로드하기(AJAX나 COMET과 같은 기술 사용)
4. 쿠키를 가져오거나 설정하기, 사용자에게 질문을 건네거나 메시지 보여주기
5. 클라이언트 측에 데이터 저장하기(로컬 스토리지)

#### 자바스크립트만의 강점
다양한 장점이 있지만 대표적인 3가지를 예를 들 수 있다.

1. HTML/CSS와 완전히 통합할 수 있음
2. 간단한 일은 간단하게 처리할 수 있게 해줌
3. 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

출처 : [모던 JavaScript 튜토리얼](https://ko.javascript.info/)

#### 사용법
CSS와 비슷하게 `HTML`문서 내에 기술하거나 별도의 파일로 분리하여 사용한다.
```
<!-- HTML 내에 기술 -->
<html>
    <head>
        <script type="text/javascript"> #HTML5부터 생략가능
            document.write('Hello World!');
        </script>
    </head>
    <body>
    </body>
</html>
```
```
<!-- 외부 파일에서 불러오기 -->
<head>
    <script type="text/javascript" src="test.js"></script>
</head>
```

#### 스크립트 언어
`JavaScript `는 스크립트 언어이자 인터프리터 방식이 사용되어 컴파일 과정이 별도로 필요하지 않다.
즉 브라우저에서 즉시 해석되어 실행되는데, 한 곳에서 만든 엔진을 사용하지 않기 때문에 브라우저 마다 완전 동이한게 동작한다고 하기 어렵다.

#### 동적타입 언어
자바스크립트에서는 개발자가 변수의 `타입`을 지정해주지 않는다.
정확히 말하면 변수의 값에 따라 인터프리터가 알아서 변수의 타입을 파악하고 값을 저장한다.
```
var a = 10;
var b = 'K';

function main() {
    return 2;
}

#var, let, const function 이라는 키워드를 사용하며, 타입을 명시하지 않는다.
```

-----

#### 주석
```
/*
여러줄짜리 주석
*/

// 한줄짜리 주석
```

-----

#### var, let, const 차이점
`var`는 `function-scoped` 이고 `let`, `const`는 `block-scoped` 이다.

`var` : 변수 재선언, 재할당이 가능하다.

es2015 추가
`let` : 변수에 재선언은 안되지만 재할당이 가능하다.
`const` : 변수 재선언, 재할당 모두 불가능하다.

`var`를 이용하면 이미 만들어진 변수이름을 재선언 하거나 
```
var a = 'test'
var a = 'test2'
#이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
```
호스팅으로 인한 에러가 표시되지 않는다.
```
c='test'
var c
#hoisting으로 인해 ReferenceError에러가 안난다.
```

es2015에서 추가된 `let`과 `const`가 조금 더 엄격한 호이스팅 기준으로 인하여 기존의 `var`가 가지고 있던 문제를 어느정도 해결해 준다.

출처 [var, let, const 차이점은?](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)

-----

##### 스코프(Scope)
어떤 변수들에 접근할 수 있는지를 정의한다.
1. 전역 스코프(Global Scope)
    * 변수가 함수 바깥이나 중괄호(`{}`) 바깥에 선언 되었다면 전역 스코프에 정의된다.
```
const hello = 'Hello World!"

function sayHello() {
    console.log(hello)
}

console.log(hello) // 'Hello World!"
sayHello() // 'Hello World!'

```
######  전역 스코프 문제점
* 전역 스코프에 변수를 선언할 수는 있어도, 그러지 않는 것이 좋다. 왜냐하면, 두 개 이상의 변수의 이름이 충돌하는 경우가 생길 수도 있기 때문이다. 만약 변수를 `const`나 `let`을 사용하여 선언했다면, 이름에 충돌이 발생할 때마다 에러가 발생한다.
```
let a = "hello"
let a = "World!" // Error, thing has already been declared
```
만약 `var`를 이용하여 변수를 선언했다면, 두 번째 변수가 첫 번째 변수를 덮어쓰게 된다. 이러면 디버깅이 어려워지기 때문에 이런 식으로 사용하면 안된다.

2. 지역 스코프(Local Scope)
    * 코드의 특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있다. 이를 지역 변수라고 부른다.
    * 자바스크립트에서는 두 가지의 지역 변수가 존재한다. 함수 스코프(function scope)와 블록 스코프(block scope)이다.

###### 함수 스코프(Function Scope)
함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있다. 함수 바깥에서는 해당 변수에 접근할 수 없다.
```
function test() {
    const hello = "hello world!"
    console.log(hello)
}
test() // 'hello world!'
console.log(hello) // Error, hello is not defined
```
###### 블록 스코프(Block Scope)
중괄호(`{}`) 내부에서 `const` 또는 `let`으로 변수를 선언하면, 그 변수들은 중괄호 블록 내부에서만 접근할 수 있다.
```
{
    const hello = "hello world!"
    console.log(hello) // "hello world!"
}
console.log(hello) // Error, hello is not defined
```

출처 : [자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)

-----

#### 배열
배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용
```
var arr = [1,2,3,4,5];
#순서대로 0,1,2,3,4 의 인덱스를 가지고 있음

console.log(arr[1]);
#arr의 1번지 값은 2이다.
```

-----

#### 원시타입 
변경 불가능한 값이며 pass-by-value(값에 의한 전달)이다.
> boolean, null, undefined, number, string, symbol(ES6에서 추가)
> 객체 타입 : object

#### undefined
undefined 타입의 값은 `undefined`가 유일하다. 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다.
+ 즉 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 이 값이 반환된다.

#### null
null 타입의 값은 `null`가 유일하다.
+ 대소문자 구분으로 인한 `null`과 Null, NULL 등과 다르다.
의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다.
+ 참조 정보를 제거할 때 사용한다.
+ 또는 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다.
+ HTML 요소를 검색해 반환하는 Document.querySelector()는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 null을 반환한다.

#### Symbol
ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입 값이다.
+ 주로 이름이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용한다.
+ 이때 생성된 심볼 값은 다른 심볼 값들과 다른 유일한 심볼 값이다.
```
var key = Symbol('key');
console.log(typeof key); //symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
#심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
```

-----

#### 변수
프로그램에서 사용되는 데이터를 일정 기간 동안 기억하여 필요한 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자(identifier)를 명시한 것
+ 변수에 명시한 고유한 식별자를 변수명이라한다.
+ 변수로 참조할 수 있는 데이터를 변수값이라 한다.
```
var score; // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score; // 변수의 참조

var average = (50 + 100) /2;
//변수의 선언과 할당
```

###### 변수명 명명 규칙
+ 반드시 영문자(특수문자 제외), underscore(_), 또는 달러 기호($)로 시작하여야 한다. 이어지는 문자에는 숫자(0~9)도 사용할 수 있다.
+ 자바스크립트는 대/소문자를 구별하여 사용할 수 있다.

#### 변수 호이스팅(Variable Hoisting)
```
console.log(test) // undefined
var test = 123;
console.log(test) // 123

#호이스팅은 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성이다.
#변수는 선두로 옮겨져 선언된 것으로 나오지만 값은 선언되지 않아 undefined로 나온다.
```

-----

#### 연산자 정리
연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다.
```
#이항 산술 연산자
+ : 덧셈
- : 뺄셈
* : 곱셈
/ : 나눗셈
% : 나머지

#단항 산술 연산자
++ : 증가
-- : 감소
+ : 변화가 없다 (음수를 양수로 반전하지 않는다)
- : 양수를 음수로 음수를 양수로 반전한 값을 반환한다.

#문자열 연결 연산자
'1' + '2' // '12'
'1' + 2 // '12'

#할당 연산자
= : x = y
+= : x = x + y
-= : x = x - y
*= : x = x * y
/= : x = x / y
%= : x = x % y

#비교 연산자
== : x와 y의 값이 같음(동등)
=== : x와 y의 값과 타입이 같음(일치)
!= : x와 y의 값이 다름(부등)
!== : x와 y의 값과 타입이 다름(불일치)

#대소 관계 비교 연산자
> : x가 y보다 크다
< : x가 y보다 작다
>= : x가 y보다 같거나 크다
<= : x가 y보다 같거나 크다

#삼항 조건 연산자
조건식의 평가 결과에 따라 반환할 값을 결정
물음표(?) 앞의 첫번째 피연산자는 조건식(불리언 타입)
불리언 값이 아니면 불리언 값으로 암묵적 타입 변환된다.
조건식이 참이면 콜론(:) 앞의 두번째 피연산자가 평가되어 반환, 거짓이면 콜론(:) 뒤의 세번째 피연산자가 평가되어 반환

var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 0 이므로 짝수

#논리 연산자
|| : 논리합(or) 하나가 참이면 true
&& : 논리곱(and) 모두가 참이면 true
! : 부정(not)

# 쉼표 연산자
왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환

#그룹 연산자
() 연산자는 그룹내의 표현식을 최우선으로 평가

#typeof 연산자
자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환
```

-----

#### 제어문
##### 1. 블록문
0개 이상의 문들을 중괄호(`{}`)로 묶은 것으로 코드 블록 또는 블록이라 한다.
+ 블록은 단독으로 사용가능하고 일반적으로 제어문이나 함수 선언문 등에서 사용한다.
+ 문의 끝에는 세미콜론(;)을 붙이는 것이 일반적이지만 블록문은 세미콜론을 붙이지 않는다.

##### 2. 조건문
```
#if...else 문
if (조건식1) { 
        // 조건식1이 참이면 이 코드 블록이 실행 
    else if (조건식2) {
        // 조건식2가 참이면 이 코드 블록이 실행
    }
    else {
        // 위의 조건식이 모두 거짓이면 이 코드 블록이 실행
    }
}

#switch 문
switch (표현식) {
    case 표현식1:
        //switch 문의 표현식과 표현식1이 일치하면 실행
        break; switch문 종료
    case 표현식2:
        //switch 문의 표현식과 표현식2가 일치하면 실행
        break;
    default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행
}
```

##### 3. 반복문
```
#for문
for(초기화식; 조건식; 증감식) {
    // 조건식이 참인 경우 반복 실행될 문
}

#while문
while(조건식) {
    조건식이 참이면 계속해서 반복 실행
    평가 결과가 거짓이 되면 실행 종료
    break; 무한루프를 탈출하기 위해서 탈출조건 부여
}

#do...while문
do {
    코드블록
} while(조건식)
// 코드블록을 실행하고 조건식을 평가한다.

#continue문
반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다. break문과 다르게 반복문을 탈출하지는 않는다.
```

-----

#### 타입 변환
```
var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅
console.log(typeof str); // String

var y = 10;

// 암묵적 타입 변환
// 숫자 타입 y의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str2 = y + '';
console.log(typeof str, str) // string 10

// 변수 y의 값이 변경된 것은 아니다.
console.log(y); // 10
```

-----

#### 오브젝트(Object)
자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.

##### 1. 프로퍼티
+ 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol값
+ 프로퍼티 값 : 모든 값

##### 2. 메소드
+ 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다. 즉, 메소드는 객체에 제한되어 있는 함수를 의미한다.

##### 3. 객체 리터럴
일반적인 자바스크립트의 객체 생성 방식이다.
중괄호 (`{}`)를 사용하여 객체를 생성한다.
```
var emptyObject = {}; // 빈 객체

var person = {
    name: 'Kang',
    age: '26',
} // {name: "Kang", age: "26"}
```
#### 4. Object 생성자 함수
`new`연산자와 `Object` 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.
+ 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법이다.
```
// 객체의 생성
var person = new Object();

// 프로퍼티 추가
person.name = 'kang';
person.age = '26';
person.sayHello = function() {
    console.log('hello world');

console.log(typeof person); //object
console.log(person); // {name: 'kang', age: '26', sayHello: f}

person.sayHello(); // hello world
}
```

#### 5. 생성자 함수
동일한 프로퍼티를 갖는 객체임에도 매번 같은 프로퍼티를 기술해야 할때 생성자 함수를 사용하여 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러개를 간편하게 생성할 수 있다.
```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log('hello world' + this.name);
    };
}

// 인스턴스의 생성
Person1 = new Person('kang', '26');
Person2 = new Person('Lee', '25');

console.log('person1: ', person1); // {name: 'Kang' ...}
console.log('person2: ', person2); // {name: 'Lee' ...}
```
#### 6. 프로퍼티 값 읽기
객체의 프로퍼티 값에 접근하는 방법은 `마침표(.) 표기법  `과 `대괄호([]) 표기법`이 있다.
```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10
};

console.log(person);

console.log(person.first-name);    // NaN: undefined-undefined
console.log(person[first-name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
console.log(person.1);    // SyntaxError
```

+ 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있다.
+ 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.
+ 객체에 존재하지 않는 프로퍼티를 참조하면 `undefined`를 반환한다.

#### 7. 프로퍼티 값 갱신
객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
```
var person = {
    'name': 'Kang',
};

person['name'] = 'Kim';
console.log(person['name']); // 'Kim'
```

#### 8. 프로퍼티 동적 생성
객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가한다.

#### 9. 프로퍼티 삭제
`delete` 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다. 이때 피연산자는 프로퍼티 키어야한다.
```
var person = {
    'name' : 'Kang',
    'age' : '26',
};

delete person.age;
```

#### For-in 문
for-in 문을 사용하면 객체(배열포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
```
var person = {
    'name': 'Kang',
    'age' : '26'
};

for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
} // name: Kang age: 26

//prop에 객체의 프로퍼티 이름을 반환한다 (순서는 보장되지 않는다.)
//index를 사용할 경우 배열의 인덱스를 반환한다
```
###### 주의사항
for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법이다.
1. 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다.
2. 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.
3. 배열 요소들만을 순회하지 않는다.

#### for-of 문
for-in 문의 배열에 대한 단점을 극복하기 위해 ES6에서 추가 되었다.
```
const array = [1, 2, 3];

for (const [index,value] of array.entries) {
    console.log(index, value);
}
/*
0 1
1 2
2 3
*/
```

---
#### 객체의 분류
Built-in Object(내장 객체)는 웹페이지 등을 표현하기 위한 공통의 기능을 제공한다.
* Standard Built-in Objects(or Global Objects)
* BOM(Browser Object Model)
* DOM(Document Object Model)

Standard Built-in Objects (표준 빌트인 객체)
BOM과 DOM (Native Object)
Host Object (사용자 정의 객체) -> 사용자가 생성한 객체들

---

### 함수
어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록

* JS에서의 함수는 일급 객체이다 즉 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 뜻한다.

###### 기본적인 함수의 정의
```
function square(number) {
    return number * number;
}

square(2); // 함수는 호출에 의해 실행, 여러번 호출할 수 있다.

//동일한 작업을 반복적으로 수행해야 한다면 미리 정의된 함수를 재사용하는 것이 효율적이다.
```

##### 익명 함수와 기명 함수
```
// 익명 함수
var test1 = function(a, b) {
    return a * b;
};

// 기명 함수
var test2 = function multiply(a, b) {
    return a * b;
};

// 일반 적으로 함수 표현식에서는 함수명을 생략하는 것이 일반적이다.
// 함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다.
// 그러므로 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용해야 한다.
```

##### 매개변수(Parameter, 인자)
함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다. 매개변수는 함수 내에서 변수와 동일하게 동작한다.

###### 매개변수(parameter, 인자) vs 인수(argument)
매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며 함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.
```
var test = function (p1, p2) {
    console.log(p1, p2);
}

test(1); // undefined
```

##### Call-by-value, Call-by-reference
Call-by-value(값에 의한 호출) : 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식 ==(전달이 완료된 원시 타입 값은 변경되지 않는다.)==
```
function test(primitive) {
    primitive += 1;
    return primitive
}

var x = 0;

console.log(test(x)); // 1
console.log(x); // 0
```
Call-by-reference(참조에 의한 호출) : 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식 ==(매개변수의 참조 값을 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.)==

```
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kang';
}

var num = 100;
var obj = {
    name: 'Lee',
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kang'}
```

#### 반환값
함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다.

+ `return` 키워드는 함수를 호출한 코드(caller)에게 값을 반환할 때 사용한다.
+ 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
+ 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
+ `return` 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.

```
function test(a, b) {
    var area = a * b;
    return area // 단일 값의 반환
}

    console.log(test(3, 5)); // 15

function test2(a, b, c) {
    var area = a * b;
    var volume = a * b * c;
    return [area, volume] // 복수 값의 반환   
}

    console.log(test2(3, 2, 3)[0]) // 6
    console.log(test2(3, 2, 3)[1]) // 18 
```

#### 함수 객체의 프로퍼티
함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다.

```
function square(number) {
    return number * number;
}

square.x = 1;
square.y = 2;

console.log(square.x, square.y); // 2
```

###### 추가사항

+ caller 프로퍼티 : 자신을 호출한 함수를 의미
+ length 프로퍼티 : 함수 정의 시 작성된 매개변수 갯수를 의미
+ name 프로퍼티 : 함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 겨우 빈문자열을 값으로 갖는다.
+ `__proto__` 접근자 프로퍼티 : 프로토타입 객체에 접근할 수 있다.
+ prototype 프로퍼티 : 함수가 객체를 생성하는 생성자 함수로 사용될 때, 생성자 함수가 생성한 인스턴스의 프로토타입 객체를 가리킨다.

----

### 함수의 다양한 형태

#### 즉시 실행 함수
함수의 정의와 동시에 실행되는 함수, 최초 한번만 호출되며 다시 호출할 수는 없다.
```
(function test() {
    var a = 3;
    var b = 5;
    return a * b;
}());
```

#### 내부 함수
함수 내부에 정의된 함수를 뜻한다.
부모함수는 자식 함수의 변수에 접근할 수 없지만 자식 함수는 부모함수 변수에 접근할 수 있다.
또한 내부함수는 부모함수의 외부에서 접근할 수 없다.
```
function sayHello(name) {
    var text = 'hello' + name;
    var logHello = function(){ console.log(text); }
    logHello();
}

sayHello('kang'); // Hello Kang
logHello('kang'); // logHello is not defined
```

#### 재귀 함수
자기 자신을 호출하는 함수를 말한다.
```
function factorial(n) { //1부터 자신까지의 모든 양의 정수의 곱
    if(n < 2) return 1; // 조건식을 톨해 재귀 호출을 중지
    return factorial(n - 1) * n;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
```
+ 재귀 함수는 자신을 무한히 연쇄 호출 하므로 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. (stackoverflow에러 방지)

#### 콜백 함수
함수를 명시적으로 호출하는 방식이 아닌 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.

+ 주로 비동기식 처리 모델에 사용된다.
    * 처리가 종료하면 호출될 함수를 미리 매개변수에 전달하고 처리가 종료하면 콜백함수를 호출한다.

```
ex) 이벤트 핸들러 처리
<html>
    <body>
        <button id="myButton">Click</button>
        <script>
            var button = document.getElementbyId('myButton');
            button.addEventListener('click', function() {
                console.log('clicked!');
            });
        </script>
    </body>
</html>

```

+ setTimeout()의 콜백 함수
두번째 매개변수에 전달된 시간이 경과되면 첫번째 매개변수에 전달한 콜백 함수가 호출된다.
```
setTimeout(function() {
    console.log('1초 후 출력');
}, 1000);
```

----

#### Math Property 정리
수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다.
```
# PI값을 반환한다.
Math.PI; // 3.141592653589793

# 인수의 절댓값을 반환한다 (0 또는 양수)
Math.abs(-1); // 1

# 인수의 소수점 이하를 반올림
Math.round(1.4); // 1
Math.round(1.6); // 2
Math.round(-1.6) // -2

# 인수의 소수점 이하를 올림
Math.ceil(1.4); // 2
Math.ceil(1.6); // 2
Math.ceil(-1.6); // -1

# 인수의 소수점 이하를 내림
Math.floor(1.9); // 1
Math.floor(-1.9); // -2

# 인수의 제곱근
Math.sqrt(9); // 3
Math.sqrt(-9); // NaN
Math.sqrt(2); // 1.4142135623....

# 임의의 부동 소수점(0부터 1미만)
Math.random(); // 0 ~ 1 미만의 부동 소수점

#첫번째 인수를 밑, 두번째 인수를 지수로하여 거듭제곱
Math.pow(2, 8); // 256
Math.pow(2, -1); // 0.5

# 인수 중에서 가장 큰 수를 반환
Math.max(1, 2, 3); // 3

# 인수 중에서 가장 작은 수를 반환
Math.min(1, 2, 3); // 1
```

---

#### 동기식 처리 모델 vs 비동기식 처리 모델
```
#동기식 처리 모델 (순차 실행)
function func1() {
    console.log('func1');
    func2();
}

function func2() {
    console.log('func2');
    func3();
}

function func3() {
    console.log('func3');
}

func1();


#비동기식 처리 모델(순차 실행X)
function func1() {
    console.log('func1');
}

function func2() {
    setTimeout(function() {
        console.log('func2');
    }, 0);

    func3();
}

function func3() {
    console.log('func3');
}

func1();

// setTimeout 메소드에 두번째 인수 인터벌을 0초로 설정하여도 콘솔에 순서대로 출력하지 않는다
// setTimeout 메소드가 비동기 함수이기 때문이다.
```

---

#### 이벤트의 종류

참고 : [이벤트 레퍼런스](https://developer.mozilla.org/en-US/docs/Web/Events)

#### 인라인 이벤트 핸들러 방식
HTML 요소의 이벤트 핸들러 어트리뷰트에 이벤트 핸들러를 등록하는 방법이다.
+ 이 방식은 더 이상 사용되지 않으며 사용해서도 않된다.
```
<!DOCTYPE html>
<html>
<body>
  <button onclick="myHandler()">Click me</button>
  <script>
    function myHandler() {
      alert('Button clicked!');
    }
  </script>
</body>
</html>
```

#### 이벤트 핸들러 프로퍼티 방식
인라인 이벤트 핸들러 방식처럼 HTML과 Javascrip가 뒤섞이는 문제를 해결할 수 있는 방식
+ 단점으로 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만을 바인딩할 수 있다.

```
<!DOCTYPE html>
<html>
<body>
  <button class="btn">Click me</button>
  <script>
    const btn = document.querySelector('.btn');

    // 이벤트 핸들러 프로퍼티 방식은 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다
    // 첫번째 바인딩된 이벤트 핸들러 => 실행되지 않는다.
    btn.onclick = function () {
      alert('① Button clicked 1');
    };

    // 두번째 바인딩된 이벤트 핸들러
    btn.onclick = function () {
      alert('① Button clicked 2');
    };
  </script>
</body>
</html>
```

#### addEventLisener 메소드 방식
###### 장점
+ 하나의 이벤트에 대해 하나 이상의 이벤트 핸들러를 추가할 수 있다.
+ 캡처링과 버블링을 지원한다.
+ HTML 요소뿐만아니라 모든 DOM요소에 대해 동작한다.

```
<!DOCTYPE html>
<html>
<body>
  <label>User name <input type='text'></label>

  <script>
    const input = document.querySelector('input[type=text]');

    input.addEventListener('blur', function () {
      alert('blur event occurred!');
    });
  </script>
</body>
</html>
```

* 버블링 : 자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것
* 캡처링 : 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것

#### Event 객체
이벤트를 발생시킨 요소와 발생한 이벤트에 대한 유용한 정보를 제공한다.
```
<!DOCTYPE html>
<html>
<body>
  <p>클릭하세요. 클릭한 곳의 좌표가 표시됩니다.</p>
  <em class="message"></em>
  <script>
  function showCoords(e) { // e: event object
    const msg = document.querySelector('.message');
    msg.innerHTML =
      'clientX value: ' + e.clientX + '<br>' +
      'clientY value: ' + e.clientY;
  }
  addEventListener('click', showCoords);
  </script>
</body>
</html>
```

event 객체는 이벤트 핸들러에 암묵적으로 전달된다.
+ 이벤트 핸들러를 선언할 때, evnet 객체를 전달받을 첫번째 매개변수를 명시적으로 선언하여야 한다.

---

### AJAX (Asynchronous JavaScript and XML)
브라우저에서 웹페이지를 요청하거나 링크를 클릭하면 화면 갱신이 발생한다. 이것은 브라우저와 서버와의 통신에 의한 것이다.

Ajax는 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.
즉, 갱신이 필요한 일부만 로드하여 갱신하면 되므로 빠른 퍼포먼스와 부드러운 화면 표시 효과를 기대할 수 있다.

### JSON (JavaScript Object Notation)
클라이언트와 서버 간에 데이터 교환을 위한 규칙 (데이터 포맷)

일반 텍스트 포맷보다 효과적인 데이터 구조화가 가능하며 XML 포맷보다 가볍고 사용하기 간편하며 가독성도 좋다.

자바스크립트의 객체 리터럴과 매우 흡사하지만 순수한 텍스트로 구성된 규칙이 있는 데이터 구조이다.
```
{
    "name" : "Kang",
    "gender" : "male",
    "age" : 26
#키는 반드시 큰따옴표로 둘러싸야 한다.
}
```
##### JSON 옵션
```
#JSON.stringify : 객체를 JSON 형식의 문자열로 변환한다.

const o = { name : 'kang' };
const strObject = JSON.stringify(o);

#JSON.parse : JSON 데이터를 가진 문자열을 객체로 변환한다.

const obj = JSON.parse(strObject);
```

#### XHMLHttpRequest
브라우저는 XMLHttpRequest 객체를 이용해 Ajax 요청을 생성하고 전송한다. 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리한다.

##### Ajax request
```
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();
// 비동기 방식으로 Request 오픈
xhr.open('GET', '/users');
// 전송
xhr.send();
```

###### XMLHttpRequest.open
method : HTTP method("GET","POST","PUT","DELETE" 등)
url : 요청을 보낼 url
async : 비동기 조작 여부, default는 true이다.

#### XMLHttpRequest.send
기본적으로 서버로 전송하는 데이터는 GET, POST 메소드에 따라 그 전송 방식에 차이가 있다.

GET :URL 일부인 쿼리 문자열로 데이터를 서버로 전송한다.
POST : 데이터를 Request Body에 담아 전송한다.

#### XMLHttpRequest.setRequestHeader
HTTP Request Header의 값을 설정한다.
+ 반드시 XMLHttpRequest.open 메소드 호출 이후에 호출한다.

###### 자주 사용하는 Content-type
__text타입__ : text/plain, text/html, text/css, text/javascript

__Application타입__ : application/json, application/x-www-form-urlencode

__file을 업로드하기 위한 타입__ : multipart /formed-data

```
// json으로 전송하는 경우
xhr.open('POST', '/users');

// 클라이언트가 서버로 전송할 데이터의 MIME-type 지정: json
xhr.setRequestHeader('Content-type', 'application/json');

const data = { id: 3, title: 'JavaScript', author: 'Park', price: 5000};

xhr.send(JSON.stringify(data));
```

###### Accept
HTTP 클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 Accept로 지정할 수 있다.
```
// 서버가 센드백할 데이터의 MIME-type 지정: json
xhr.setRequestHeader('Accept', 'application/json');
```

