### Node.js
Node.js는 서버 환경에서 작동하는 자바스크립트다.

node.js는 google의 크롬 브라우저에서 사용하는 V8 자바스크립트 엔진을 사용하면서 이벤트 기반의 비동기 방식을 사용하여 이벤트 처리에 있어 빠른 속도를 발휘한다.

처리속도가 빠르기에 대규모 네트워크 앱 개발에 아주 적합하고 최근에는 간단한 스크립트에도 많이 사용되어 지고 있다.

```
// app.js
# 기본적인 HTTP Server
const http = require('http');

http. reateServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
```

---

### npm
npm(node package manager)은 자바스크립트 패키지 매니저이다. Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다. 오픈소스로 자신이 작성한 패키지를 공개할 수도 있고 패키지를 검색하여 재사용할 수도 있다.

##### 패키지 설치
```
$ npm install <package이름>
```

##### 지역 설치와 전역 설치
지역(local) 설치와 전역(global) 설치 옵션이 있다.
옵션을 별도로 지정하지 않으면 지역으로 설치되며, 프로젝트 루트 디렉토리에 `node_modules` 디렉토리가 자동 생성되고 그 안에 패키지가 설치된다.
+ 지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용할 수 있다.

```
# 지역 설치
$ npm install <package>
```

```
# 전역 설치
$npm install -g <package>
```

##### 자주 사용하는 npm 명령어
```
# Package.json 생성

$ npm init
# 기본설정
$ npm init -y
```

```
# 패키지 설치

# 개발 설치
$ npm install --save-dev <package>

# package.json의 모든 패키지 설치
$ npm install
```

```
# 패키지 제거

# 로컬/개발 패키지 제거
$ npm uninstall <package>

# 전역 패키지 제거
$ npm uninstall -g <package>
```

```
# 패키지 업데이트

$ npm update <package>
```

```
# 전역 설치 패키지 확인

$ npm ls -g --depth=0
```

```
# package.json scripts 프로퍼티의 start 실행

$ npm start
```

```
# package.json scripts 프로퍼티의 start 이외의 scripts 실행

$ npm run <script>
```

```
# 전역 패키지 설치 폴더 확인

$ npm root -g
/usr/local/lib/node_modules

# 파인더 오픈
$ open /usr/local/lib/node_modules
```

```
# 패키지 정보 참조

$ npm view <package>
```

```
#  버전 확인
$ npm -v

# 명령어 설명 참조
$ npm help <command>
```

###### macOS 전역 패키지 위치
+ /usr/local/lib/node_modules

##### package.json과 의존성 관리
npm은 `package.json` 파일을 통해서 프로젝트 정보와 패키지의 의존성을 관리한다.

### package.json

`package.json` 생성
```
# 프로젝트 루트에서 해당 명령어 실행
$ npm init

#프로젝트에 대한 여러가지 정보를 입력하도록 요구
#이때 입력된 정보를 바탕으로 package.json 파일을 생성한다.

--yes 또는 -y 옵션을 추가하면 기본 설정값의 파일이 생성된다.
```

```
{
#package.json의 구조
    "name": "NodeTest",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

`package.json`은 프로젝트에 대한 명세라고 할 수 있다. 해당 프로젝트의 이름, 버전, 사용되는 모듈 등의 스펙이 정해져 있으며, `package.json`을 통해 모듈 의존성 모듈 관리도 진행할 수 있다. 만약 어떤 오픈 소스를 다운 받을 때 이 `package.json`만 있다면 해당 오픈 소스가 의존하고 있는 모듈이 어떤 것인지, 그리고 그 모듈들을 아래 명령어로 한 번에 설치 할 수 있다.

```
$ npm install
```

`package.json`이 생성되었으니 `npm`을 통해 모듈을 설치하면 `package.josn`에 해당 모듈에 대한 정보가 추가된다.

---

### module
module은 파일과 1대1의 대응 관계를 가지며 하나의 모듈은 자신만의 독립적인 실행 영역(Scope)를 가지게 된다. 따라서 클라이언트 사이드 JavaScript와는 달리 전역변수의 중복 문제가 발생하지 않는다.

모듈은 `module.exports` 또는 `exports` 객체를 통해 정의하고 외부로 공개한다.

공개된 모듈은 `require` 함수를 사용하여 임포트 한다.

#### Exports

만약 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 exports 객체를 사용해야 한다.

```
// circle.js
const { PI } = Math;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;
```

Circle.js는 독립적인 파일 스코프를 갖는 모듈이다 circle 모듈에서 area와 circumference를 exports 객체의 메소드로 정의하였다.

변수 PI는 circle 모듈에서만 유효한 private 변수가 되고, area와 circumference는 외부에 공개된다.

require 함수를 사용하여 임의의 이름으로 circle 모듈을 import한다. 모듈의 확장자는 생략할 수 있다.

```
// app.js
const circle = require('./circle.js');

console.log(${circle.area(4)});
console.log(${circle.circumference(4)});

$ node app //app.js 실행
50.2654....
25.1327....
```

+ exports
    * exports 객체에는 값을 할당할 수 없고 공개할 대상을 exports 객체에 프로퍼티 또는 메소드로 추가한다.
    * exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달된다.

+ module.exports
    * module.exports 객체에 하나의 값(원시 타입, 함수, 객체)만을 할당한다.
    * module.exports 객체에 할당한 값이 전달된다.

###### module.exports에 함수를 할당하는 방식
```
// foo.js
module.exports = function(a, b) {
    return a + b;
};
```

```
// app.js
const add = require('./foo');

const result = add(1, 2)l
console.log(result); // 3
```

#### exports에 객체를 할당하는 방식

```
//foo.js
module.exports = {
    add (v1, v2) { return v1 + v2 },
    minus (v1, v2) { return v1 - v2 }
};
```
```
// app.js

const calc = require('./foo');

const result1 = calc.add(1, 2);
console.log(result1);

const result2 = calc.minus(1, 2);
console.log(result2);
```

#### require 

```
# 모듈을 명시하지 않고 해당 디렉토리의 index.js 로드
const myModule = require('./module');
```

+ index.js 내에서 calc.js과 print.js를 require하면 한번의 require로 모든 기능을 사용할 수 있다.

```
// module/index.js
module.exports = {
    calc: require('./calc),
    print: require('./print')
};
```

```
// module/calc.js
module.exports = {
    add (v1, v2) { return v1 + v2 },
    minus (v1, v2) { return v1 - v2 };
}
```

```
// module/print.js
module.exports = {
    sayHello() { console.log('hi') }
};
```

```
// app.js
const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();
```

#### 코어 모듈과 파일 모듈
+ 코어 모듈 : Node.js에서 기본을 포함하고 있는 모듈
    * 로딩할 때에는 패스를 명시하지 않아도 무방하다.

```
const http = require('http');
```

+ npm을 통해 설치한 외부 패키지 또한 패스를 명시하지 않아도 무방하다.
```
const mongoose = require('mongoose');
```

+ 파일 모듈 : 코어 모듈과 외부 패키지 이외의 모듈
    * 로딩할 때에는 패스를 명시하여야 한다.
```
const foo = require('./lib/foo');
