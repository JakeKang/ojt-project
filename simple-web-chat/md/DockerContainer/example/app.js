const express = require('express');
const redis = require('redis');

let app = express();

const client = redis.createClient(6379, "redis-server"); // docker-compose의 redis-server에 연결해준다.

let redisValue = []; // redis Value를 담을 변수

client.on('connect', () => { // redis 연결 성공시
   console.log('Connected'); 
});

client.on('error', (err)  => { // redis 연결 실패시
    console.log(`연결할 수 없습니다. ${err}`);
});

client.set('name', 'Kang', (err, reply) => { // name이라는 key에 value로 "Kang"을 넣는다.
    console.log(reply);
});

client.get('name', (err, reply) => { // name key 에서 value를 받아온다.
    console.log(reply);
    redisValue.push(reply);
})

app.get('/', (req, res) => { // http://127.0.0.1:3000/
    res.send("Main");
});

app.get('/redis', (req, res) => { // http://127.0.0.1:3000/redis
    res.send(redisValue); // 받아온 Value를 그려준다.
})

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
});