const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

const app = require('../src/index');

const chat1 = { chat: [{ name: 'Kang', message: '안녕하세요.', time: '08:00' }] };
const chat2 = { chat: [{ name: 'Kim', message: '반갑습니다.', time: '08:01' }] };
const chat3 = { chat: [{ name: 'Kang', message: '좋은 아침입니다.', time: '08:02' }] };

describe('Server Test!', () => { // 페이지 접속 테스트
  it('채팅 페이지 접속 테스트', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('메시지 송신 테스트', (done) => {
    chai
      .request(app)
      .post('/')
      .send(chat1)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  // 채팅로그 검사를 위해 2개 더 진행
  it('메시지 송신 테스트2', (done) => {
    chai
      .request(app)
      .post('/')
      .send(chat2)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('메시지 송신 테스트3', (done) => {
    chai
      .request(app)
      .post('/')
      .send(chat3)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('최신 채팅 로그만 가져오기', (done) => {
    chai
      .request(app)
      .post('/message')
      .send({ count: 2 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        const parse = JSON.parse(res.text);
        // 마지막로그 하나만 가져와야한다.
        expect(parse[0]).to.deep.equal([{ name: 'Kang', message: '좋은 아침입니다.', time: '08:02' }]);
        done();
      });
  });

  it('채팅 목록 최신화가 필요 없을때', (done) => {
    chai
      .request(app)
      .post('/message')
      .send({ count: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(typeof res.body).to.deep.equal('object');
        expect(res.body.result).to.deep.equal('no');
        done();
      });
  });

  it('재접속시 채팅 목록 가져오기', (done) => {
    chai
      .request(app)
      .get('/message')
      .end((err, res) => {
        expect(res).to.have.status(200);
        const parse = JSON.parse(res.text);
        expect(parse[0]).to.deep.equal([{ name: 'Kang', message: '안녕하세요.', time: '08:00' }]);
        expect(parse[1]).to.deep.equal([{ name: 'Kim', message: '반갑습니다.', time: '08:01' }]);
        expect(parse[2]).to.deep.equal([{ name: 'Kang', message: '좋은 아침입니다.', time: '08:02' }]);
        done();
      });
  });
});

/*
listen EADDRINUSE: address already in use :::3000 에러 발생시
[terminal]
$ lsof -i TCP:3000
$ kill -9 PID

PID로 해당 프로세스 종료 후 테스트 진행
*/
