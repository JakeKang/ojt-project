const userClass = 'd-flex justify-content-start align-items-center';
const myClass = 'd-flex justify-content-end align-items-center';
const initClass = 'd-flex justify-content-center align-items-center';

function nameTag(data) {
  return data.substring(0, 2);
}

function timeTag(data) {
  const timeArray = data.split(':');

  if (timeArray[0] < 12) {
    return `오전 ${timeArray[0] < 10 ? `0${timeArray[0]}` : `${timeArray[0]}`}:${timeArray[1] < 10 ? `0${timeArray[1]}` : `${timeArray[1]}`}`;
  }
  return `오후 ${timeArray[0] < 13 ? `${timeArray[0]}` : `0${timeArray[0] - 12}`}:${timeArray[1] < 10 ? `0${timeArray[1]}` : `${timeArray[1]}`}`;
}

/* 내가 보낸 메시지 그리기 */
function rightChatPaint(data) {
  // 원
  const circleDiv = document.createElement('div');
  const circleSpan = document.createElement('span');
  // 채팅
  const chatDiv = document.createElement('div');
  const chatBox = document.createElement('div');
  const chatTriangle = document.createElement('div');
  const chatSpan = document.createElement('span');
  const chatTime = document.createElement('span');
  // 채팅 내역
  chatDiv.setAttribute('class', `${myClass} chat-log`);
  // 채팅 시간
  chatTime.innerHTML = timeTag(data.date);
  chatTime.setAttribute('id', 'myTime');
  chatDiv.appendChild(chatTime);
  // 채팅 박스
  chatBox.setAttribute('class', `${initClass} user-text-box-right`);
  chatTriangle.setAttribute('class', 'triangle-right');
  chatBox.appendChild(chatTriangle);
  // 채팅 내용
  chatSpan.innerHTML = data.message;
  chatSpan.setAttribute('id', 'myText');
  chatBox.appendChild(chatSpan);
  chatDiv.appendChild(chatBox);
  // 원 영역
  circleDiv.setAttribute('class', `${initClass} user-circle`);
  circleDiv.setAttribute('id', 'myCircle');
  circleSpan.innerHTML = nameTag(data.name);
  circleSpan.setAttribute('id', 'myName');
  circleDiv.appendChild(circleSpan);
  chatDiv.appendChild(circleDiv);
  // 최종 완성본
  return chatDiv;
}

/* 상대방이 보낸 메시지 그리기 */
function leftChatPaint(data) {
  // 원
  const circleDiv = document.createElement('div');
  const circleSpan = document.createElement('span');
  // 채팅
  const chatDiv = document.createElement('div');
  const chatBox = document.createElement('div');
  const chatTriangle = document.createElement('div');
  const chatSpan = document.createElement('span');
  const chatTime = document.createElement('span');
  // 채팅 내역
  chatDiv.setAttribute('class', `${userClass} chat-log`);
  // 원 영억
  circleDiv.setAttribute('class', `${initClass} user-circle left-circle`);
  circleSpan.innerHTML = nameTag(data.name);
  circleSpan.setAttribute('id', 'userName');
  circleDiv.appendChild(circleSpan);
  chatDiv.appendChild(circleDiv);
  // 채팅 박스
  chatBox.setAttribute('class', `${initClass} user-text-box-left`);
  chatTriangle.setAttribute('class', 'triangle-left');
  chatBox.appendChild(chatTriangle);
  // 채팅 내용
  chatSpan.innerHTML = data.message;
  chatSpan.setAttribute('id', 'userText');
  chatBox.appendChild(chatSpan);
  chatDiv.appendChild(chatBox);
  // 채팅 시간
  chatTime.innerHTML = timeTag(data.date);
  chatTime.setAttribute('id', 'userTime');
  chatDiv.appendChild(chatTime);
  // 최종 완성본
  return chatDiv;
}

export {
  nameTag, timeTag, rightChatPaint, leftChatPaint,
};
