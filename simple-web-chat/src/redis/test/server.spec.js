const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

// eslint-disable-next-line import/no-extraneous-dependencies
const io = require('socket.io-client');
require('../build/index'); // 테스트시 서버 실행

const socketURL = 'http://localhost:4884'; // 테스트용 URL

const options = {
  transports: ['websocket'],
  forceNew: true,
  reconnection: false, // 매번 새로운 연결을 강제
};

const chatUser1 = 'Kang';
const chatUser2 = 'Kim';

describe('Socket.io Redis Test', () => {
  let client1 = null;
  let client2 = null;

  beforeEach(() => {
    client1 = io.connect(socketURL, options);
    client2 = io.connect(socketURL, options);
  });

  it('접속 테스트', (done) => {
    client1.emit('join', chatUser1);
    client2.emit('join', chatUser2);

    client2.on('update', (data) => {
      expect(typeof data).to.deep.equal('object');
      expect(data).to.deep.equal(['Kim', 'Kang']);
      client1.disconnect();
      client2.disconnect();
      done();
    });
  });

  it('메시지 송수신 테스트', (done) => {
    const dummy = { name: chatUser1, message: '안녕하세요', time: '08:00' };
    client1.emit('message', dummy);

    client1.on('message', (data) => {
      expect(typeof data).to.deep.equal('string');
      const result = JSON.parse(data);
      expect(typeof result).to.deep.equal('object');
      expect(result.name).to.deep.equal(dummy.name);
      expect(result.message).to.deep.equal(dummy.message);
      expect(result.time).to.deep.equal(dummy.time);
    });

    client2.on('message', (data) => {
      expect(typeof data).to.deep.equal('string');
      const result = JSON.parse(data);
      expect(typeof result).to.deep.equal('object');
      expect(result.name).to.deep.equal(dummy.name);
      expect(result.message).to.deep.equal(dummy.message);
      expect(result.time).to.deep.equal(dummy.time);
      client1.disconnect();
      client2.disconnect();
      done();
    });
  });

  it('재접속 시 채팅로그를 받아오는지 테스트', (done) => {
    // 첫 테스트시 1개의 메시지가 전송되어 성공,
    // 연속 테스트시 30초마다 Redis 채팅로그가 초기화 되므로 메시지가 쌓여서 실패,
    const dummy = ['{"name":"Kang","message":"안녕하세요","time":"08:00"}'];
    client1.on('chatlog', (data) => {
      expect(typeof data).to.deep.equal('object');
      expect(data).to.eql(dummy);
      console.log(data);
      done();
    });
  });
});
