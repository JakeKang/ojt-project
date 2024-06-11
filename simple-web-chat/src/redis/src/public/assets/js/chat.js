/* eslint-disable import/extensions */
import { nameTag, rightChatPaint, leftChatPaint } from './paint.js';

const root = document.getElementById('container');
// eslint-disable-next-line no-undef
const socket = io();

/* 채팅에 담아 보낼 정보 */
const user = localStorage.getItem('name');
const hour = new Date().getHours();
const minute = new Date().getMinutes();

/* 하단 채팅 영역 */
const chat = root.querySelector('#chat');
const chatBtn = root.querySelector('#msgButton');

/* 중앙 채팅창 영역 */
const chatContainer = root.querySelector('.chat-container');
const logout = root.querySelector('#logoutBtn');

/* 유저정보 부분 */
const userDiv = root.querySelector('.user-wrapper');
const topUser = root.querySelector('#topUserName');

/* 접속 유저 배열 */
let userList = [];
let paint = ''; //

/* 로그아웃 */
function logoutChat() {
  if (user !== null) {
    localStorage.removeItem('name');
    const back = `${window.location.href = '/'}`;
    return back;
  }
  return null;
}

/* 로그인 유무 체크 */
function loginCheck() {
  if (user === null) {
    const back = `${window.location.href = '/'}`;
    return back; // token이 있으면 로그인 못하게 막기
  }
  topUser.innerHTML = nameTag(user);
  return null;
}

/* 채팅 */
function sendMessage() { // 메시지 전송
  const chatMessage = chat.value;
  chat.value = ''; // 초기화
  if (chatMessage !== '') {
    socket.emit('message', {
      name: user,
      message: chatMessage,
      date: `${hour}:${minute}`,
    });
    chat.setAttribute('placeholder', '메시지를 입력하세요.');
  } else {
    chat.setAttribute('placeholder', '메시지를 입력하지 않았습니다.');
  }
}

/* 닉네임 전송 */
socket.emit('join', user);

/* Socket Message */
socket.on('message', (message) => {
  const parse = JSON.parse(message);
  if (parse.name === user) {
    paint = rightChatPaint(parse);
    chatContainer.appendChild(paint);
  } else {
    paint = leftChatPaint(parse);
    chatContainer.appendChild(paint);
  }
  chatContainer.scrollTop = chatContainer.scrollHeight;
});

/* 유저 정보 업데이트 */
socket.on('update', (users) => {
  userList = users;
  while (userDiv.hasChildNodes()) {
    userDiv.removeChild(userDiv.firstChild);
  }
  for (let i = 0; i < userList.length; i += 1) {
    const memDiv = document.createElement('div');
    const memImg = document.createElement('img');
    const memSpan = document.createElement('span');

    memDiv.setAttribute('class', 'user-wrap');
    memImg.setAttribute('class', 'member-circle');
    memImg.setAttribute('src', 'assets/img/Frame-2.png');
    memDiv.appendChild(memImg);
    memSpan.setAttribute('class', 'full-name');
    memSpan.innerHTML = users[i];
    memDiv.appendChild(memSpan);
    userDiv.appendChild(memDiv);
  }
});

/* 채팅 로그 */
socket.on('chatlog', (data) => {
  data.forEach((obj) => {
    if (JSON.parse(obj).name === user) {
      paint = rightChatPaint(JSON.parse(obj));
      chatContainer.appendChild(paint);
    } else {
      paint = leftChatPaint(JSON.parse(obj));
      chatContainer.appendChild(paint);
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
});

function init() {
  chatBtn.addEventListener('click', sendMessage); // 메시지 버튼 이벤트
  chat.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }); // 메시지 엔터 이벤트
  logout.addEventListener('click', logoutChat); // 로그아웃 이벤트
  loginCheck();
}

init();
