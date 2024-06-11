# 스토리지 기본 사용 방법

## Redis


### 설치

###### MAC
```
brew install redis
```

###### Windows
```
https://github.com/rgl/redis/downloads -> 다운 받아서 설치 (최신 버전을 지원하지 않는다.)

http://redis.io -> 소스 코드를 다운 받아서 컴파일을 통해 설치
```

###### Linux
```
sudo apt-get install redis-server
```

### 구동
```
redis-server

// windwos
redis-cli.exe
```

###### Redis.js TestCode 구동 순서
```
npm install express
brew install redis

redis-server

node Redis.js
```

## 기본 사용법

###### 명령어
- redis 서버 실행  : `redis-server`
- redis 클라이언트로 접속 : `redis-cli` [서버 on 상태일때]

###### 클라이언트
- redis key : `set key value`
- redis key : `get key`
- 모든 키 조회 : `keys *`
- 데이터베이스 전환 : `select number`
- redis 서버 저장 후 정지 : shutdown save
- redis 서버 정지 : shutdown nosave

## Code

###### node.js에서 redis 서버와 연결하기
```js
const redis = require('redis');
const client = redis.createClient();
// or
const client = redis.createClient(port, host);

client.on("connect", function() {
    console.log("connected");
})
// or
client.on("error", function(error) {
    console.log(error);
});
```

###### 데이터 조작하기(키/값)
```js
client.set('key', 'value', redis.print);
// redis.print는 수행 결과 혹은 오류를 출력해준다.

client.get('key', function(err, value) => {
    if(err) throw err; // 오류가 있으면 오류를 던져준다.
    console.log(value); // 오류가 없으면 결과를 출력해준다.
})
```

###### string
- 키-값 문자열
- `set`으로 설정하고 `get`으로 가져온다.

```js
client.set('key', 'value');
client.get('key', (err, reply) => {
    console.log(reply); // value
});
```

###### hash
- 키-해시
- 객체를 저장한다고 볼 수 있다.
- `hmset`으로 설정하고 `hgetall`로 가져온다.
```js
client.hmset('key', 'filed', 'value', 'filed', 'value');
client.hgetall('key', (err, obj) => {
    console.log(obj); // { filed: 'value', filed: 'value' }
});
```

###### list
- 키-배열
- 중복 데이터를 허용
- `rpush`는 JavaScript `push` 와 비슷하다.
- `lpush`는 JavaScript `unshift` 랑 비슷하다.
- 가져올 때는 `lrange` 메소드를 사용한다.
- 0, -1은 처음과 끝 인덱스를 의미한다.

```js
client.rpush('key', 'value', 'value');
client.lpush('key', 'value', 'value');
client.lrange('key', index from start, index from end, (err, arr) => {
    console.log(arr);
});
```

```js
client.rpush('fruits', 'apple', 'orange', 'apple');
client.lpush('fruits', 'banana', 'pear');
client.lrange('fruits', 0, -1, (err, arr) => {
    console.log(arr); // ['pear', 'banana', 'apple', 'orange', 'apple']
});
```

###### set
- 키-셋
- 배열과 비슷하지만 중복을 허용하지 않는다.
- `sadd` 로 `set`한다.
- `smembers` 로 가져온다.
```js
client.sadd('key', 'member', 'member', 'member');
client.smembers('key', (err, set) => {
    console.log(set);
});
```

```js
client.sadd('animals', 'dog', 'cat', 'bear', 'cat', 'lion');
client.smembers('animals', (err, set) => {
    console.log(set); // ['cat', 'dog', 'bear', 'lion']
});
```

###### sorted set
- 키-정렬 `Set`
- `Set`인데 순서를 정렬할 수 있다.
- `zadd` 로 `set` 한다.
- `zrange` 로 가져온다.
- 기본적으로 오름차순으로 정렬된다.
- `zrevrange`를 사용하면 내림차순으로 정렬할 수 있다.

```js
client.zadd('key', 'score', 'member', 'score', 'member', 'score', 'member');
client.zrange('key', index from start, index from end, (err, sset) => {
    console.log(sset); // ['member', 'member', 'member', 'member']
})
```

```js
client.zadd('height', 180, 'Kang', 168, 'Kim', 175, 'Ha')
client.zrange('height', 0, -1, (err, sset) => {
    console.log(sset); // ['Kim', 'Ha', 'Kang'];
});
```

###### geo
- 키-경도위도
- longitude가 먼저이다.
- 위치들을 추가한 후 위치간 거리나 특정 좌표 중심으로 해당하는 지역을 구할 수 있다.

```js
client.geoadd('cities', 126.97, 37.56, 'seoul', 129.07, 35.17, 'busan', 126.70, 37.45, 'incheon');
client.geodist('cities', 'seoul', 'busan', (err, dist) => {
    console.log(dist); // 325619.5465
});
client.geradius('cities', 126.8, 37.5, 50, 'km', (err, cities) => {
    console.log(cities); // ['incheon', 'seoul']
});
```

###### 기타 명령어

__삭제__

```js
client.del('key');
```

__Key 존재유무 확인__

```js
client.exists('Key');
```

__Key 이름 변경__

```js
client.rename('name', 'rename');
```

[레디스 명령어](https://redis.io/commands)

###### express-session과 함께 사용하기
보통 레디스는 세션 저장 용도로 많이 사용한다.
```
// express용 redis 설치
npm install connect-redis
```

```js
const session = require('express-session');
const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);
const sess = {
    resave: false,
    saveUninitialized: false,
    secret: sessionSecret,
    name: 'sessionId',
    cookie: {
        httpOnly: true,
        secure: false,
    },
    store: new RedisStore({url: '레디스 호스팅 주소', logErrors: true}),
};
app.use(session(sess));
```

store는 세션을 저장할 장소를 뜻한다.
기본값은 메모리 스토어로, 서버의 메모리에 저장한다.
따라서 서버가 꺼지면 세션 데이터들이 다 날아가게 된다.
RedisStore로 변경하면 서버가 꺼져도 데이터가 유지된다.
logErrors는 에러를 로깅하는 것이라 필요에 따라 껏다 켰다 하면 된다.

[Redis - Node 와 연동하기](https://www.zerocho.com/category/NodeJS/post/5a3238b714c5f9001b16c430)

## 구현

```js
// routes/index.js

const express = require('express');
const router = express.Router();
const redis = require('redis');
const Client = redis.createClient({
    // 레디스 설정
    host : "127.0.0.1",
    port : 6379,
    db : 0,
    password: "password"
}); // 모두 기본 값이다.

router.get('/', function(req, res, next){ // http://127.0.0.1:port/
    Client.get("name", (err, result) => { 
        // Redis에 name이라는 key로 value "Kang"이 저장되어있다.
        console.log(result) // Kang 출력
    });
    res.render('index', { title: 'Express' });
})
```

1. redis package를 Node.js에 require 한다.
2. redis를 통해 새로운 클라이언트를 생성한다.
3. 옵션은 host, port, db, password가 있다. (설정 값이 없으면 명시하지 않아도 된다.)

## Redis가 지원하는 연산

###### 키의 존재 확인
```js
client.exists('key', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('no exists');
    }
})
```

###### 키 삭제 및 만료
```js
// 삭제
client.del('key', function(error, reply) {
    console.log(reply);
})

// 만료 시간 설정
client.set('key', 'val')
client.expire('key', 30); // 30초 이후 키가 삭제된다.
```

###### 증가 및 감소
```js
client.set('key', 10, function() {
    client.incr('key', function(err, reply) {
        console.log(reply); // 11
    });
});
```

`incr()` 함수는 키 값을 1씩 증가시킨다.
다른 양만큼 증가해야하는 경우 `incrby()` 함수를 사용할 수 있다.
마찬가지로, 키를 감소 `decrb()`, `decr()` 및 `decrby()` 와 같은 함수를 사용할 수 있다.


## 추가적인 내용

###### Promises
v4 버전부터 Promises를 지원한다.
Node.js의 `util.promisify` 메소드를 이용한다.

```js
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

getAsync.then(console.log).catch(console.error);
```

###### Commands
Redis의 명령은 `client` 객체에 함수로 노출된다.
모든 함수는 인자로 배열을 가지고 함수로 콜백할 수 있다.

```js
client.hmset(["key", "foo", "bar"], function(err, res) {
    // ...
});

// 아래 모두 위와 동일하다.
client.hmset("key", ["foo", "bar"], function(err, res) {
    // ...
});

client.hmset("key", "foo", "bar", function(err, res) {
    // ...
});
```
