/* eslint-disable import/extensions */
import { rightChatPaint, leftChatPaint } from './paint.js';

const root = document.getElementById('container');

/* 채팅에 담아 보낼 정보 */
const hour = new Date().getHours();
const minute = new Date().getMinutes();

/* 하단 채팅 영역 */
const userInput = root.querySelector('#nickName');
const chat = root.querySelector('#chat');
const chatBtn = root.querySelector('#msgButton');

/* 중앙 채팅 영역 */
const chatContainer = root.querySelector('.chat-container');
const logout = root.querySelector('#logoutBtn');

const user = localStorage.getItem('name');
let paint = '';

/* 메시지 전송 */
function sendMessage() {
  const message = chat.value; // 메시지 가져오기
  const name = userInput.value;
  chat.value = ''; // 초기화
  if (message !== '' && name !== '') {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat: {
          name,
          message,
          date: `${hour}:${minute}`,
        },
      }),
    });
  }
  userInput.setAttribute('placeholder', '닉네임이 없습니다.');
}

// eslint-disable-next-line consistent-return
function paintMessage(data) {
  // 닉네임 입력 후 바로 반영하기 위한 변수
  const nameCheck = userInput.value;
  if (data.result === 'no') {
    return null;
  }
  // eslint-disable-next-line array-callback-return
  data.map((obj) => {
    if (obj.name === nameCheck) {
      paint = rightChatPaint(obj);
      chatContainer.appendChild(paint);
    } else {
      paint = leftChatPaint(obj);
      chatContainer.appendChild(paint);
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
}

/* 채팅 로그 Polling */
function receiveMessage() {
  const count = chatContainer.childElementCount;
  fetch('/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ count }),
  }).then((res) => res.json())
    .then((res) => paintMessage(res));
}
setInterval(receiveMessage, 500); // 0.5초마다 호출

function refresh() { // 재접속시
  fetch('/message')
    .then((res) => res.json())
    .then((json) => {
      paintMessage(json);
    });
}

function saveNickName() {
  const nickName = userInput.value;
  if (nickName !== '') {
    localStorage.setItem('name', nickName);
    userInput.readOnly = true;
  }
}

function logoutChat() {
  localStorage.removeItem('name');
  userInput.value = '';
  userInput.readOnly = false;
}

function tokenCheck() {
  if (user !== null) {
    userInput.readOnly = true;
    userInput.value = user;
  } else {
    userInput.readOnly = false;
    userInput.value = '';
  }
}

function init() {
  chatBtn.addEventListener('click', sendMessage);
  chat.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveNickName();
    }
  });
  logout.addEventListener('click', logoutChat);
  tokenCheck();
  refresh();
}

init();
