const express = require('express');
const path = require('path');
const socketio = require('socket.io');

/* express 상속 */
const app = express();

/* express v4.16.0 => body-parser 설정 */
app.use(express.json());

/* 체크 배열 */
const userCheck = []; // 닉네임 중복체크
const chatLog = []; // 새로고침, 재접속 채팅 로그 기록

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
  if (!userCheck.includes(nickName)) {
    response.json({ data: 'done' });
  } else {
    response.json({ data: 'error' });
  }
});

/* 서버 실행 */
const server = app.listen(4887, () => { // 서버 실행
  console.log('Server Running at http://127.0.0.1:4887');
});

/* socket.io */
const io = socketio.listen(server);

io.sockets.on('connection', (socket) => { // 연결 체크
  /* 접속 */
  socket.on('join', (data) => {
    console.log(`${data} 님이 접속 하셨습니다.`);
    if (data != null && !userCheck.includes(data)) {
      // eslint-disable-next-line no-param-reassign
      socket.data = data;
      userCheck.push(data);
    }
    io.sockets.emit('update', userCheck);
  });
  /* 연결 해제 */
  socket.on('disconnect', () => {
    if (socket.data !== undefined) {
      console.log(`${socket.data} 님이 접속을 종료하셨습니다.`);
      const idx = userCheck.indexOf(socket.data);
      if (idx > -1) { userCheck.splice(idx, 1); }
    }
    io.sockets.emit('update', userCheck);
  });
  /* 메시지 */
  socket.on('message', (message) => {
    io.sockets.emit('message', message);
    chatLog.push(message);
  });
  /* 채팅 로그 유지 */
  socket.emit('chatlog', chatLog);
});

module.exports = server;
