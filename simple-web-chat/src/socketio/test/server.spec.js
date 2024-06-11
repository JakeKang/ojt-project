const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

// eslint-disable-next-line import/no-extraneous-dependencies
const io = require('socket.io-client');
require('../build/index'); // 테스트시 서버 실행

const socketURL = 'http://localhost:4885'; // 테스트용 URL

const options = {
  transports: ['websocket'],
  forceNew: true,
  reconnection: false, // 매번 새로운 연결을 강제
};

const chatUser1 = 'Kang'; // 유저 1
const chatUser2 = 'Kim'; // 유저 2

describe('Socket.io Server', () => {
  it('클라이언트 접속 및 유저리스트 반환', (done) => {
    const client1 = io.connect(socketURL, options); // 클라이언트1 연결
    client1.on('connect', () => {
      client1.emit('join', chatUser1); // join으로 유저 정보 전송

      const client2 = io.connect(socketURL, options); // 클라이언트2 연결
      client2.on('connect', () => {
        client2.emit('join', chatUser2); // join으로 유저 정보 전송
      });

      const userList = ['Kang', 'Kim'];
      client2.on('update', (users) => { // 연결 해제시 새로운 유저 리스트를 받는다.
        expect(users).to.deep.equal(userList); // 모두 들어와 있으므로 유저 리스트와 동일
        setTimeout(done, 100);
      });
    });
  });

  it('메시지를 주고 받을 수 있는지 테스트', (done) => {
    let client1 = '';
    let clietn2 = ''; // 클라이언트
    const message = '안녕하세요!'; // 테스트 메시지
    let messageCount = 0; // 메시지 카운트

    const checkMessage = (client) => { // 메시지 체크 함수
      client.on('message', (msg) => {
        expect(message).to.equal(msg); // 보낸 메시지가 받은 메시지랑 동일한치 체크
        messageCount += 1; // 메시지 카운트 추가
        if (messageCount === 2) { // 2명이므로 2가 되면 완료처리
          setTimeout(done, 150);
          console.log(msg);
        }
      });
    };

    client1 = io.connect(socketURL, options);
    checkMessage(client1);
    client1.on('connect', () => {
      clietn2 = io.connect(socketURL, options);
      checkMessage(clietn2);

      clietn2.on('connect', () => {
        client1.send(message);
      });
    });
  });

  it('저장된 메시지를 받을 수 있는지 테스트', (done) => {
    let client1 = '';
    const messagelist = ['안녕하세요!'];
    client1 = io.connect(socketURL, options);
    client1.on('chatlog', (data) => {
      expect(data).to.deep.equal(messagelist);
      done();
      console.log(data);
    });
  });
});
