### Babel

#### 1.개요
최신 버전의 자바스크립트 코드를(ECMA 2015+/ES 6) ES5 환경에서 ==(브라우저 기준)== 동작하도록 컴파일하는 자바스크립트 컴파일러이다. (트랜스파일러라고 칭하기도 함)

#### 주요 역할
+ 문법의 변형
+ 타켓 환경에서 누락되어있는 부분을 보충하는 Polyfill 기능
+ 소스코드의 변형(codemods)

```
#ES6 화살표 함수와 ES7 지수 연산자
[1, 2, 3].map(n => n ** n);
```

```
#Babel을 통한 ES5 이하의 버전으로 변환
// ES5
"use strict";

[1, 2, 3].map(function (n) {
    return Math.pow(n, n);
});
```

#### Babel CLI 설치
npm을 사용하여 설치
+ 프로젝트에 따라 설정이 다를 수 있으므로 전역으로 설치하지 말고 로컬로 설치하는걸 추천한다.

```
# 프로젝트 폴더 생성
$ mkdir es6-project && cd es6-project

# package.json 생성
$ npm init -y //기본값

# babel-core, babel-cli 설치
$ npm install --save-dev @babel/core @babel/cli
```

```
#설치가 완료된 이후 package.json
{
    "name": "es6-project",
    "version": "1.0.0",
    "devDependencies" {
        "@babel/cli": "^7.7.0",
        "@babel/core": "^7.7.2"
    }
}
```

#### .babelrc 설정 파일 작성
`@babel/preset-env`를 설치하여야 Babel을 사용할 수 있다. Babel 플러그인을 모아 둔 것으로 Babel 프리셋이라고 부른다.

###### 공식 Babel 프리셋
+ @babel/preset-env
+ @babel/preset-flow
+ @babel/preset-react
+ @babel/preset-typescript

Preset은 Babel Plugin들의 모음이다. 함께 자주 쓰이는 특정 플러그인들의 조합을 묶음으로 만들어 놓은 것이다.

`@babel/preset-env`은 필요한 플러그인 들을 프로젝트 지원 환경에 맞게 동적으로 결정해 준다.

프로젝트 지원 환경은 Browserslist 형식으로 .browserslistrc 파일에 상세히 설정할 수 있다. 생략하면 기본값으로 설정된다.

```
# env preset 설치
$ npm install --save-dev @babel/preset-env
```

설치가 완료되면 프로젝트 루트에 .bablerc 파일을 생성하고 @babel/preset-env를 사용하겠다고 명시해준다.

```
{
    "presets": ["@babel/preset-env"]
}
```

#### 트랜스파일링
Babel CLI명령어가 아닌 npm script를 사용하여 ES6+ 코드를 ES5 이하의 코드로 트랜스파일링 하는 방법이다.

`package.json` 파일에 scripts를 추가한다.

```
{
"name": "es6-project",
"version: "1.0.0",
"scripts": {
    "build": "babel src/js -w -d dist/js"
}
 ....   
}
```

+ src/js 폴더(타깃)에 있는 모든 ES6+ 파일들을 트랜스파일링한 후 결과물을 dist/js 폴더에 저장한다.
    * -w : 타깃 폴더에 있는 모든 파일들의 변경을 감지하여 자동으로 트랜스파일한다.
    * -d : 트랜스파일링된 결과물이 저장될 폴더를 지정한다.

```
$ npm run build // 트랜스파일링을 실행한다.
```

#### Babel 플러그인
Babel 공식 홈페이지를 통해 설치가 필요한 플러그인을 검색할 수 있다.

```
#Babel 플러그인 설치
$ npm install --save-dev @babel/<플러그인이름>

//설치 이후 package.json에 정보가 저장된다.
```

설치한 플러그인은 .babelrc 파일에 추가해줘야 한다.

```
# 플러그인 추가
{
    "presets": ["@babel/preset-env"],
    "plugins": [@babel/<플러그인이름>]
}
```

#### Babel이 소스코드를 ES5로 변환하는 과정
1. parsing : 구문 분석, 소스 코드를 읽어 추상 구문 트리(AST)로 변환하는 단계
2. transformtion : 변환, 정해진 규칙대로 추상 구문 트리(AST)에 변형을 가하는 단계
3. printing : 출력, 변형이 가해진 추상구문 트리(AST)를 다시 코드로 출력

transformation 단계에서 사용할 변환 규칙이 필요한데 Babel Plugun이 이 규칙의 역할을 한다.

참고: [Babel Plugin](https://babeljs.io/docs/en/plugins)


#### Polyfill
최신 ECMAScript 환경을 만들기 위해 코드가 실행되는 환경에 존재하지 않는 builtin/method 등을 구현하여 추가 되는 것을 Babel polyfill이라 한다.

예를 들어, Promise같은 builtin이나 Array.prototype.includes 등의 메소드 코드에 있다면 지원하지 않는 환경에서는 에러가 날 수 밖에 없다.

Babel polyfill은 내부적으로 core-js에 의존하며 실행환경에서 이런 builtin, method등이 존재하는지 확인하고 추가한다. (런타임에 동작)