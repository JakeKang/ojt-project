# Simple Web Chat

## Socket io
socket.io를 이용한 간단한 채팅 웹사이트 입니다.

### 설치

#### Visual Studio Code 설치
https://code.visualstudio.com/

#### Docker Desktop
https://www.docker.com/get-started

#### Homebrew, Node, Yarn 설치
```
# 본 환경은 Mac os 기준으로 작성되었습니다.

# Homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Node 12.18.3 LTS (2020/08/28 기준)
$ brew install node@12
$ node -v
$ npm -v

# Yarn
$ brew install yarn
```
> 본 프로젝트는 Node 12.18.3 환경에서 개발되었습니다.
>
> brew, npm, yarn 은 패키지 관리자 툴 입니다.

#### Node module 설치
```
# socketio Directory
$ npm install

# 문제가 발생한다면?
$ npm install socket.io -g

$ npm install mocha -g

$ npm install express -g

$ npm install nodemon -g

# 위 항목을 전역으로 설치하면 됩니다.
```

### 실행방법

```
$ yarn start

# or

$ yarn dev
```
> 개인환경에서 테스트할 시 크롬, 사파리, 엣지등 서로 다른 브라우저를 통해 접속해야합니다.

## Docker

#### Docker Image 제작
```
$ docker build --tag tagname:1.0 .
```

#### Docker push (docker hub 이미지 업로드)
> 진행을 위해 docker hub 가입과 Repositories 생성이 우선입니다.
```
# 터미널을 이용해 로그인 하거나 desktop app 을 통해 로그인 하세요.
$ docker login

$ docker tag [push할 image ID or name] [docker hub ID]/[image name]:[version]

$ docker push [docker hub ID]/[image name]:[version]
```

#### docker pull (docker hub 이미지 다운)
```
$ docker pull yjkang95/simple-web-chat:socketio
```

#### docker run
```
# 이미지 실행
$ docker run -itp 4887:4887 yjkang95/simple-web-chat:socketio

# 새로운 터미널 (서버 실행)
$ docker exec <CONTAINER ID> yarn start

$ docker exec -it <CONTAINER ID> <명령어>
$ docker exec -it <CONTAINER ID> bash
 
# 컨테이너 종료: Ctrl + D
# 컨테이너 종료하지 않고 나오기 : Ctrl + P, Q
# 컨테이너 조회 : $ docker ps

# test, start가 완전히 종료되지 않아 4887 포트 에러가 뜬다면,
$ docker rm -f <CONTAINER ID>
컨테이너를 닫고 다시 실행해서 명령어 실행을 하면 됩니다.
```
> 도커에서 yarn start 할시 http://127.0.0.1:4887 으로 채팅을 접근합니다.

#### scripts
```
# 프로젝트 빌드
$ yarn build

# 프로젝트 실행
$ yarn start

# 프로젝트 개발모드
$ yarn dev

$ 프로젝트 lint
$ yarn lint

# 프로젝트 클라이언트 모듈 연결(트랜스파일링 이후 require 에러 방지)
$ yarn browserify

$ 프로젝트 테스트
$ yarn test
```
> mocha 모듈을 통해 테스트를 진행합니다.
>
> babel 모듈은 ES6 코드를 하위 버전 브라우저에서 지원하기 위해 ES5 이하 문법으로 트랜스파일링 해줍니다.
>
> nodemon 모듈은 소스코드의 수정사항이 발생할 시 서버를 자동으로 다시 실행시켜줍니다.
>
> browserify 모듈은 클라이언트 모듈의 연결에 도움을 줍니다.
>
> lint 모듈은 코드의 오류, 버그, 스타일의 점검을 도와줍니다.
