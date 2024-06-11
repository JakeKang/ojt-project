/* eslint-disable import/extensions */
import {
  nameTag, timeTag, rightChatPaint, leftChatPaint,
// eslint-disable-next-line import/no-unresolved
} from '../src/public/assets/js/paint';

const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join('./src/public/', 'chat.html')).toString();
const jsdom = new JSDOM(html);

const { expect } = chai;
describe('클라이언트 테스트', () => {
  describe('시간 표시 테스트', () => {
    it('시간이 오후이면 오후 표시', () => {
      const result = timeTag('13:30');
      expect(result).to.equal('오후 01:30');
    });

    it('시간이 오전이면 오전 표시', () => {
      const result = timeTag('8:13');
      expect(result).to.equal('오전 08:13');
    });
  });

  describe('닉네임 테스트', () => {
    it('유저 닉네임 앞 2글자 그리기 테스트', () => {
      const result = nameTag('Jake');
      expect(result).to.equal('Ja');
    });
  });

  describe('나의 메시지 그리기 테스트', () => {
    const dummyData = { name: 'Kang', message: '안녕하세요.', date: '8:3' };

    before(() => { // 테스트 진행 전 html file 로드
      const { window } = jsdom;
      const { document } = window;
      global.window = window;
      global.document = document;
    });
    it('채팅 로그가 잘 그려졌는지 테스트', () => {
      const result = rightChatPaint(dummyData);
      const chatDiv = result;
      // chatDiv 테스트
      expect(chatDiv.tagName).to.equal('DIV');
      expect(chatDiv.className).to.equal('d-flex justify-content-end align-items-center chat-log');
      expect(chatDiv.childElementCount).to.equal(3);
    });
    it('나의 시간이 잘 그려졌는지 테스트', () => {
      const result = rightChatPaint(dummyData);
      const timeSpan = result.children[0];
      // timeSpan 테스트
      expect(timeSpan.tagName).to.equal('SPAN');
      expect(timeSpan.id).to.equal('myTime');
      expect(timeSpan.innerHTML).to.equal('오전 08:03');
    });
    it('나의 메시지가 잘 그려졌는지 테스트', () => {
      const result = rightChatPaint(dummyData);
      const chatDiv = result.children[1];
      const chatTriangle = chatDiv.children[0];
      const chatSpan = chatDiv.children[1];
      // chatDiv 테스트
      expect(chatDiv.tagName).to.equal('DIV');
      expect(chatDiv.className).to.equal('d-flex justify-content-center align-items-center user-text-box-right');
      // chatTriangle 테스트
      expect(chatTriangle.tagName).to.equal('DIV');
      expect(chatTriangle.className).to.equal('triangle-right');
      // chatText 테스트
      expect(chatSpan.tagName).to.equal('SPAN');
      expect(chatSpan.id).to.equal('myText');
      expect(chatSpan.innerHTML).to.equal('안녕하세요.');
    });
    it('나의 이름이 잘 그려졌는지 테스트', () => {
      const result = rightChatPaint(dummyData);
      const circleDiv = result.children[2];
      const circleSpan = circleDiv.children[0];
      // circleDiv 테스트
      expect(circleDiv.tagName).to.equal('DIV');
      expect(circleDiv.className).to.equal('d-flex justify-content-center align-items-center user-circle');
      // circleSpan 테스트
      expect(circleSpan.tagName).to.equal('SPAN');
      expect(circleSpan.id).to.equal('myName');
      expect(circleSpan.innerHTML).to.equal('Ka');
    });
  });

  describe('상대방 메시지 그리기 테스트', () => {
    const dummyData = { name: 'Kim', message: '반갑습니다.', date: '14:7' };

    before(() => { // 테스트 진행 전 html file 로드
      const { window } = jsdom;
      const { document } = window;
      global.window = window;
      global.document = document;
    });
    it('채팅 로그가 잘 그려졌는지 테스트', () => {
      const result = leftChatPaint(dummyData);
      const chatDiv = result;
      // chatDiv 테스트
      expect(chatDiv.tagName).to.equal('DIV');
      expect(chatDiv.className).to.equal('d-flex justify-content-start align-items-center chat-log');
      expect(chatDiv.childElementCount).to.equal(3);
    });
    it('상대방 시간이 잘 그려졌는지 테스트', () => {
      const result = leftChatPaint(dummyData);
      const timeSpan = result.children[2];
      // timeSpan 테스트
      expect(timeSpan.tagName).to.equal('SPAN');
      expect(timeSpan.id).to.equal('userTime');
      expect(timeSpan.innerHTML).to.equal('오후 02:07');
    });
    it('상대방 메시지가 잘 그려졌는지 테스트', () => {
      const result = leftChatPaint(dummyData);
      const chatDiv = result.children[1];
      const chatTriangle = chatDiv.children[0];
      const chatSpan = chatDiv.children[1];
      // chatDiv 테스트
      expect(chatDiv.tagName).to.equal('DIV');
      expect(chatDiv.className).to.equal('d-flex justify-content-center align-items-center user-text-box-left');
      // chatTriangle 테스트
      expect(chatTriangle.tagName).to.equal('DIV');
      expect(chatTriangle.className).to.equal('triangle-left');
      // chatText 테스트
      expect(chatSpan.tagName).to.equal('SPAN');
      expect(chatSpan.id).to.equal('userText');
      expect(chatSpan.innerHTML).to.equal('반갑습니다.');
    });
    it('상대방 이름이 잘 그려졌는지 테스트', () => {
      const result = leftChatPaint(dummyData);
      const circleDiv = result.children[0];
      const circleSpan = circleDiv.children[0];
      // circleDiv 테스트
      expect(circleDiv.tagName).to.equal('DIV');
      expect(circleDiv.className).to.equal('d-flex justify-content-center align-items-center user-circle left-circle');
      // circleSpan 테스트
      expect(circleSpan.tagName).to.equal('SPAN');
      expect(circleSpan.id).to.equal('userName');
      expect(circleSpan.innerHTML).to.equal('Ki');
    });
  });
});
