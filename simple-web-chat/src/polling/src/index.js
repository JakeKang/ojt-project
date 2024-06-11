const express = require('express');
const path = require('path');

/* express 상속 */
const app = express();

/* express v4.16.0 => body-parser 설정 */
app.use(express.json());

/* 체크 배열 */
const chatLog = []; // 새로고침, 재접속 채팅 로그 기록

/* express 정적파일 설정 */
app.use(express.static(path.join(__dirname, 'public')));
const publicPath = path.join(__dirname, 'public');

/* 메인 페이지 */
app.get('/', (request, response) => { // index.html
  response.sendfile(`${publicPath}/index.html`);
});

app.post('/', (request, response) => {
  const log = request.body.chat;
  chatLog.push(log);
  response.send();
});

app.get('/message', (request, response) => { // 재접속시 채팅로그 전송
  response.send(chatLog);
});

app.post('/message', (request, response) => {
  const { count } = request.body;
  const { length } = chatLog;

  if (length > count) { // 유저의 카운터가 전체 메시지 로그보다 작을때만 전송
    const result = chatLog.slice(count, length);
    response.send(result);
  } else {
    response.send({ result: 'no' });
  }
});

/* 서버 실행 */
app.listen(4885, () => { // 서버 실행
  console.log('Server Running at http://127.0.0.1:4885');
});

module.exports = app;
