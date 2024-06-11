const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const redis = require('redis');

/* express 상속 */
const app = express();

/* express v4.16.0 => body-parser 설정 */
app.use(express.json());

// 체크 변수
let userList = [];

/* express 정적파일 설정 */
app.use(express.static(path.join(__dirname, 'public')));
const publicPath = path.join(__dirname, 'public');

/* 메인 페이지 */
app.get('/', (request, response) => { // index.html
  response.sendfile(`${publicPath}/index.html`);
});

/* 채팅 페이지 */
app.get('/chat', (request, response) => { // chat.html
  response.sendfile(`${publicPath}/chat.html`);
});

/* 닉네임 중복 체크 */
app.post('/', (request, response) => {
  const nickName = request.body.user.name;
  if (!userList.includes(nickName)) {
    response.json({ data: 'done' });
  } else {
    response.json({ data: 'error' });
  }
});

const server = app.listen(4884, () => { // 서버 실행
  console.log('Server Running at http://127.0.0.1:4884');
});

// socket.io, Redis
const io = socketio.listen(server);

// 로컬 테스트를 진행할때,
// redis-server를 먼저 실행 { host: 'redis' } 삭제 후 서버 실행
const store = redis.createClient({ host: 'redis' });
const pub = redis.createClient({ host: 'redis' });
const sub = redis.createClient({ host: 'redis' });

/* Redis 연결 확인 */
store.on('connect', () => {
  console.log('Redis Connected');
});

store.on('error', (err) => {
  console.log(`Redis Error : ${err}`);
});

pub.on('error', (err) => console.log(err));
sub.on('error', (err) => console.log(err));

sub.subscribe('zipida');

io.sockets.on('connection', (socket) => { // 연결 체크
  sub.on('subscribe', (room, count) => {
    console.log(`현재 ${room} 지피다 채팅방 접속자 수는 ${count} 명 입니다.`);
  });

  socket.on('join', (data) => {
    console.log(`${data} 님이 접속 하셨습니다.`);
    if (data != null && !userList.includes(data)) {
      // eslint-disable-next-line no-param-reassign
      socket.data = data;
      store.sadd('user', data);
      store.smembers('user', (_err, users) => {
        userList = users;
        io.sockets.emit('update', userList);
      });
    }
  });

  socket.on('message', (data) => {
    store.rpush('chatlog', JSON.stringify(data));
    pub.publish('zipida', JSON.stringify(data));
  });

  socket.on('disconnect', () => {
    if (socket.data !== undefined) {
      console.log(`${socket.data} 님이 접속을 종료하셨습니다.`);
      const idx = userList.indexOf(socket.data);
      if (idx > -1) { userList.splice(idx, 1); }
      store.srem('user', socket.data);
      store.smembers('user', (_err, users) => {
        userList = users;
      });
      io.sockets.emit('update', userList);
    }
  });

  store.lrange('chatlog', 0, -1, (_err, reply) => {
    socket.emit('chatlog', reply);
  });
});

sub.on('message', (room, data) => {
  // eslint-disable-next-line no-param-reassign
  io.emit('message', data);
});

// 30초 이상 아무 연결이 없으면 채팅 로그 초기화
const chatlogReset = () => {
  if (userList.length === 0) {
    store.del('chatlog', (_err, res) => {
      if (res === 1) {
        console.log('채팅 로그 초기화 성공');
      } else {
        console.log('초기화할 내역이 없습니다.');
      }
    });
  }
  return null;
};

setInterval(chatlogReset, 30000);

module.exports = server;
