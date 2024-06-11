const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

const app = require('../src/index');

describe('서버테스트', () => {
  it('접속 테스트', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('서버에 닉네임과 점수가 전송과 저장하는지 테스트', (done) => {
    chai
      .request(app)
      .post('/rank')
      .send({ name: 'Kang', score: 100 })
      .end((_, res) => {
        expect(res).to.have.status(200);
        expect(res.body[0].name).to.deep.equal('Kang');
        expect(res.body[0].score).to.deep.equal(100);
        done();
      });
  });
});
