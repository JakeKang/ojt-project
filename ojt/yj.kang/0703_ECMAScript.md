### ECMAScript 요약 정리
ECMA에서 자바스크립트가 표준을 준수하는지에 따라 버전을 나누고 있다.


#### ES6(2015)
ECMA-262 표준의 버전 6이며 짧게 'ES6' 'ES2015' 라고도 한다.

##### Arrows
ES6에서는 익명함수를 화살표('=>')로 축약해 표현할 수 있다.
+ Arrow Function Expression 또는 Fat Arrow Function 이라고 부른다.

```
param => expression

([param][, param]) => {
    statements
}

param : 매개변수, 컴마로 구분하고 괄호로 싸서 호출한다.
# 파라미터가 한 개인 경우엔, 괄호를 생략해도 좋다.

statements or expression : 여러 구문은 중괄호({})로 감싸 준다.
#한 개의 표현식이라면 중괄호를 생략해도 된다.
```

```
간단한 예시
setTimeout( () => {
    console.log('delayed');
}, 100);
```

##### Classes
class를 이용하여 명료하게 클래스를 만들 수 있게 되었다.

```
class Person {
    constructor(name) { // constructor(생성자)
        this._name = name;
    }
}
```

#### Enhanced object literals
ES6에서 객체 리터럴은 선언문에서 아래와 같은 기능을 할 수 있도록 함.
+ 프로토타입 설정
+ foo: foo 선언을 위한 단축 표기법
+ 메서드 정의, super 클래스 호출 및 동적 속성명을 지원
```
var obj = {
    // __proto__
    __proto__: theProtoObj,

    // ;handler: handler'의 단축 표기
    handler,

    // Methods
    toString() {
        // Super calls
        return "d " + super.toString();
    },

    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ] : 42
};
```

#### Template strings
ES6 부터는 Template literals라 부름 문법적으로 더 편하게 String을 생성할 수 있게 함.
+ Perl, Python 등의 문자열 보간과 유사
+ Tagged template literals는 인젝션 공격 방어 혹은 문자열로부터 상위 데이터 구조체 재조립 등을 위해 String 생성을 커스터마이징 가능하게 함.
```
console.log("string text line 1\n" + "string text line 2");

# 큰 따옴표나 작은 따옴표 대신 백틱(``)을 이용한다.
console.log(`string text line1 string text line 2`);
```

#### Destructuring
배열과 객체에 패턴 매칭을 통한 데이터 바인딩을 제공
+ 할당 실패에 유연, 실패 시 undefined 값이 자동 할당
+ foo["bar"]와 같이 객체의 속성 값도 자동으로 검색하여 바인딩
```
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(x); // 2
#구조 분해 할당을 통해 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의 가능
```

#### Default + Rest + Spread
파라미터에 기본 값을 설정 가능
```
function f(x, y=12) {
    return x + y;
}
f(3) // 15
```
가변인자를 사용가능하며, 배열로 치환시켜 준다.
```
function f(x, ...y) {
    // y is an Array ["hello", true]
    return x * y.length;
}
f(3, "hello", true) //6
```
함수 호출 시 배열을 일련의 인자에 나누어 주입시켜 줍니다.
```
function f(x, y, z) {
    return x + y + z;
}
f(...[1,2,3]) // 6
```

#### Let + Const
+ let
    * block (function, for, if 등) 안에서 유효한 변수
+ const
    * const는 수정 불가능한 불변성(immutable)을 말하는 것이 아니라 값 재할당이 불가능한 것이다.
    * const를 사용하더라도, 배열과 오브젝트의 값을 변경하는 게 가능하다.
```
const list = ["test1", "test2", "test3"];
list.push("test4");
console.log(list);
// ["test1","test2","test3","test4"]
```

#### Itorators + For...Of
Iterators 객체는 사용자 정의의 반복을 가능하게 해줍니다.

for...of 반복문이 ES6에서 추가 되었으며 for...in 반복문과 달리 iterator 기반의 컬렉션 전용 반복문 입니다.

```
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;

        return {
            next() {
                [pre, cur] = [cur, pre = cur];
                return { done: false, value: cur}
            }
        }
    }
}

for (var n of fibonacci) {
    if (n > 1000)
    break;
    console.log(n) // 1, 2, 3, 5, 8 .... 987
}
```

참고자료 : [for...of 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)

Generators
function*와 yieId 키워드를 이용하여 iterator 선언을 단순하게 작성할 수 있게 도와 준다.
+ function*로 선언한 함수는 Generator 객체를 반환한다.
+ Generators는 iterator의 하위 타입이며 next와 throw 메서드를 가지고 있다.
+ 이 메서드들로 인해 yieId 키워드로 반환된 값은 다시 generator에 주입되거나 예외처리를 할 수 있게 되었다.

```
function* gen() {
    yieId* ["a", "b", "c"];
}

var a = gen();

a.next(); // { value: "a", done: false}
a.next(); // { value: "b", done: false}
a.next(); // { value: "c", done: false}
a.next(); // { value: "undefined", done: true}
```

#### Unicode
완전한 유니코드를 지원하기 위해 문자열에 새로운 유니코드 리터럴과 정규표현식에 u모드가 추가 되었다.

```
 '\x7A' === 'z'
 //true
```

 #### Modules
 언어 차원에서 컴포넌트 정의를 위한 모듈을 지원한다.
 + 런타임 동작은 호스트에 정의된 기본 로더에 의해 정의 된다.
 + 묵시적 비동기 형태로 요구되는 모듈들이 정상적으로 로
드되기 전까지 코드가 실행되지 않는다.

```
# 'math'라는 variable로 접근하여 사용하는 방법
import * as math from "lib/math";
console.log(math.sum(math.pi, math.pi)); // 6.283...

# export 한 모듈의 이름을 import해서 사용하는 방법
import {sum, pi} from "lib/math";
console.log(sum(pi, pi)); // 6.283...
```

#Module loaders
+ 동적 로딩
+ 상태 격리
+ 전역 네임스페이스 격리
+ 컴파일 훅
+ 중첩 가상화

```
// 동적 로딩 - 'System' is default loader
System.import('lib/math').then(function(m) {
    console.log(m.sum(m.pi, m.pi));
});

// 실행 샌드박스 생성 - new Loaders
var loader = new Loader({
    global: fixup(window) // replace 'console.log'
});
loader.eval("console.log('hello world:');");

// 모듈 캐시 직접 조작
System.get('jquery');
System.set('jquery', Module({$: $})); // WARNING: not yet finalized
```

#### Map + Set + WeakMap + WeakSet

일반 알고리즘을 위한 효율적인 데이터 구조를 제공
+ WeakMap과 WeakSet는 메모리 누수로 부터 자유롭게 해준다.
+ 이들 내 저장된 객체에 다른 참조가 없는 경우, 가비지 컬렉션이 될 수 있다.
```
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
}

// Maps
var m = new Map();
m.set("heelo", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size // undefined (사용된 곳이 없다.)
}

// Weak Sets
var ws = new WeakSet();
ws.add( { data: 42 });
wm.size // undefined (사용된 곳이 없다.)
```

#### Proxies
프록시(Proxy)를 사용하면 호스트 객체에 다양한 기능을 추가하여 객체를 생성할 수 있다.

```
// Proxying a normal object
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};

var p = new Proxy(target, handler);
p.world // `Hellom world!`;
```

#### Symbols
심볼은 객체 상태의 접근 제어를 가능하게 한다.
+ 새로운 원시 타입으로 이름 충돌의 위험 없이 속성의 키로 사용할 수 있다.

```
var map = {};
var a = Symbol('a');

map[a] = 123;
map["b"] = 456;

console.log(map[a]); // 123
console.log(map["b"]); // 456

for (let key in map) {
    console.log(key); // b
}

Object.keys(map); // ["b"]
```

#### Subclassable Built-ins
Array, Date, DOM Element 같이 내장 객체들은 상속이 가능하다.

#### Promises
비동기 프로세싱을 위해 사용된다.
가독성이 좋으며 중첩된 콜백의 단점을 완화한다.
+ 대기중(pending)
+ 이행됨(fulfilled)
+ 거부됨(rejected)

```
var promiseTest = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 3 ) {
            resolve(num);
        } else {
            reject("err");
        }
    })
}

promiseTest(5)
    .then(val => console.log(val)) // 5
  .catch(err => console.log(err));
```

#### 라이브러리 추가
core Math 라이브러리, Array 생성 helper, String helper, 복사를 위한 Object.assign 등 많은 라이브러리 들이 추가 되었다.

#### Binary and Octal literals
2 진법(b), 8 진법(o) numeric 리터럴 형식이 추가
```
0b111110111 === 503 // true
0o767 === 503 // true
```

#### Reflect API
런타임 시 객체에 대해 작업을 수행할 수 있다. 프록시 트랩과 같은 메타 함수들을 가지고 있다.
```
class Greeting {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello ${name}`;
    }
}

function greetingFactory(name) {
    return Reflect.construct(Greeting, [name], Greeting);
}

greetingFatory('a'); // Greeting { name: "a" }
```

#### Tail Calls
마지막에 호출되는 함수가 호출 스택이 초과되게 하지 않는다.
재귀 알고리즘을 매우 큰 입력 값에서도 안전하게 만든다.

```
function factorial(n, acc = 1 ) {
    'use strict';
    if(n <= 1) return acc;
    return factorial(n - 1, n * acc);

    factorial(100000);
    // ES6는 스택 오버플로우에 대해서 안전하다.
}
```

### ES7(2016)

#### 제곱연산자
`Math.pow(a, b)` 대신에 연산자를 이용하여 표현할 수 있다.

```
const i = 3;
i ** 3; // 15
let i **=3; // 15
```

#### 배열.includes(찾을 요소, 시작 순서)
`indexOf` 메소드와 동작이 유사하나 `NaN`에 대한 처리가 다르다
```
[NaN].includes(NaN); // true
[NaN].indexOf(NaN) > -1; // false
```

### ES8(2017)

#### String
문자열에 padding을 추가하기 위한 메소드 지원

#### 문자열.padStart(최종길이, 보충문자열)
```
'kang'.padStart(10); // '      kang' (빈칸 6글자 + kang 4글자)
'kang'.padStart(10, 'babo'); // 'babobakang' (baboba 6글자 + kang 4글자)
```

#### 문자열.padEnd(최종길이, 보충문자열)
```
'kang'.padEnd(10) // 'kang     '
'kang'.padEnd(10, 'babo'); // 'kangbaboba'
```

### ES9(2018)

#### Promise finally
Promise의 성공/실패와 상관없이 무조건 실행된다.
```
Promise.resolve('hello')
    .then((msg) => Promise.resolve(msg))
    .finally(() => console.log('finally'))
    .then((msg) => console.log(msg)); 

    //finally hello
```

#### Async iteration
비동기 반복 처리에 대하여 아래와 같이 처리가 가능해짐.
```
(async() => {
    const promises = ['1000', '2000', '3000'].map((timer) => (
        new Promise((res, rej) => {
            setTimeout(() => res(timer), timer);
        })
    ));
    for await (const result of promises) {
        console.log(result);
    }
})();
```

#### 정규표현식
`s` 플래그, lookbehind, 캡쳐링 그룹을 사용할 수 있다.

```
/yj.kang/s.test('kang\ncho') // true
/yj.kang/.test('kang\ncho') // false

const result = /(?<age>나이)(?<name>Kang)/.exec('나이kang');
result.groups.age; // 나이
result.groups.name; // Kang
result.groups[1]; // 나이
result.groups[2]; // Kang
```

### ES10(2019)

#### Object.fromEntries
Object.entries의 반대 기능
```
Object.entries({ a: 'kang', b: ['hello']}); 
// [['a', 'Kang'], ['b', [hello']]]
Object.fromEntries([['a', 'Kang'], ['b', ['hello']]]);
// {a: 'Kang', b: ['hello']}
```

#### Array.prototype.flat, Array.prototype.flatMap
다중 배열을 펼치는 기능
```
let multi = [1,2,3,[4,5,6,[7,8,9,[10.11.12]]]];

multi.flat(); // [1,2,3,4,5,6,Array(4)]
multi.flat().flat(); // [1,2,3,4,5,6,7,8,9,Array(3)]
multi.flat().flat().flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]
multi.flat(Infinity); // [1,2,3,4,5,6,7,8,9,10,11,12]

let array = [1 2, 3, 4, 5];
array.map(x => [x, x * 2]);
array.flatMap( v => [v, v *2]); // [1,2,3,4,5,6,7,8,9,10]
```

#### String.prototype.trimStart, trimEnd, trimLeft, trimRight
```
let greeting = "     Space     ";
greeting.trimEnd(); // "          Space";
greeting.trimStart(); //"Space          "
```

#### Optional Catch
`try-catch` 구문을 사용 시에 error 매개변수를 사용하지 않는 경우 생략이 가능하다.
```
try {
    JSON.parse(text);
    return true;
}
catch
{
    return false;
}
```

#### Function.toString()
```
function sayHello(text) {
    console.log('Hello ${text}`)
}
console.log(sayHello.toString())
// function sayHello(text) {console.llog(`Hello $(text)`)}

console.log(Number.parseInt.toString())
// function parseInt() { [native code] }
```