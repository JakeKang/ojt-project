import { drawRect } from './modules/canvas.js';
import { gameConfig } from './config.js';

// 메인 Div
const root = document.getElementById('root');

// 게임 시작 화면
const startDiv = document.createElement('div');
const startTitle = document.createElement('span');
const nickInput = document.createElement('input');
const startBtn = document.createElement('button');
let name = ''; // 유저 닉네임을 받을 변수

// 게임 화면
let keyEvent = false; // 게임 시작 전 키보드 이벤트 방지
const topDiv = document.createElement('div');
const scoreSpan = document.createElement('span');
const nickNameSpan = document.createElement('span');

// 게임 오버 화면
let gameOver = false;
const endDiv = document.createElement('div');
const endTitle = document.createElement('span');
const rankDiv = document.createElement('div');
const btnDiv = document.createElement('div');
const restartBtn = document.createElement('button');
const endBtn = document.createElement('button');

// 모바일용 버튼 생성
const arrowDiv = document.createElement('div');
const upDiv = document.createElement('div');
const downDiv = document.createElement('div');
const arrowUpBtn = document.createElement('button');
const arrowDownBtn = document.createElement('button');
const arrowLeftBtn = document.createElement('button');
const arrowRightBtn = document.createElement('button');

const snakeObject = {
  direction: 'N',
  pos: { x: 200, y: 200 }, // default pos
  beforeDirection: null,
  size: 1,
  score: 0,
  body: [],
  apple: { x: 0, y: 0 },
  newApple: { x: 0, y: 0 },
};

function snake({ ctx }) {
  // 항상 머리를 앞으로 유지하면서 이동에 따라 새로 업데이트한다.
  snakeObject.body.unshift({ x: snakeObject.body[0].x, y: snakeObject.body[0].y });
  snakeObject.body.pop();

  snakeObject.direction = snakeObject.beforeDirection;

  if (snakeObject.direction === 'W') {
    snakeObject.body[0].x -= gameConfig.size;
  } else if (snakeObject.direction === 'E') {
    snakeObject.body[0].x += gameConfig.size;
  } else if (snakeObject.direction === 'N') {
    snakeObject.body[0].y -= gameConfig.size;
  } else if (snakeObject.direction === 'S') {
    snakeObject.body[0].y += gameConfig.size;
  }

  renderSnake({ ctx, snake: snakeObject, color: '#5c9a63' });
}

function renderSnake({ ctx, snake, color }) {
  for (let f = 0; f < snake.body.length; f ++) {
    crashCheck(snake.body[0].x, snake.body[0].y); // 실시간 게임오버 요소 충돌 감지

    if (f === 0) {
      drawRect({ ctx, x: snake.body[f].x, y: snake.body[f].y, width: gameConfig.size, height: gameConfig.size, color: '#104216' });
    } else {
      drawRect({ ctx, x: snake.body[f].x, y: snake.body[f].y, width: gameConfig.size, height: gameConfig.size, color });
    }
    drawRect({ ctx, x: snake.apple.x, y: snake.apple.y, width: gameConfig.size, height: gameConfig.size, color: 'red'});
  }
}

function move(key) {
  if (keyEvent) {
  // 입력받은 키의 방향과 반대 방향, 진행 방향이 아닐때 (중복 및 역주행 방지)
    if (key === 'ArrowUp' && snakeObject.direction !== 'S') {
      snakeObject.beforeDirection = 'N';
    } else if (key === 'ArrowDown' && snakeObject.direction !== 'N') {
      snakeObject.beforeDirection = 'S';
    } else if (key === 'ArrowLeft' && snakeObject.direction !== 'E') {
      snakeObject.beforeDirection = 'W';
    } else if (key === 'ArrowRight' && snakeObject.direction !== 'W') {
      snakeObject.beforeDirection = 'E';
    }
  }
}

// 사과와 충돌 했을 때
function appleMake() {
  snakeObject.newApple.x = Math.floor(Math.random() * (gameConfig.width / gameConfig.size)) * gameConfig.size;
  snakeObject.newApple.y = Math.floor(Math.random() * (gameConfig.height / gameConfig.size)) * gameConfig.size;
  for (let i = 0; i < snakeObject.body.length; i ++) {
    if (snakeObject.body[i].x !== snakeObject.newApple.x && snakeObject.body[i].y !== snakeObject.newApple.y) {
      snakeObject.apple = snakeObject.newApple;
    } else {
      // 겹치면 새로 다시 랜덤으로 생성
      snakeObject.newApple.x = Math.floor(Math.random() * (gameConfig.width / gameConfig.size)) * gameConfig.size;
      snakeObject.newApple.y = Math.floor(Math.random() * (gameConfig.height / gameConfig.size)) * gameConfig.size;
    }
  }
}

function paintInfo() {
  // 게임 시작
  startDiv.setAttribute('id', 'start-div');
  startTitle.setAttribute('class', 'title');
  nickInput.setAttribute('id', 'nickInput');
  nickInput.setAttribute('maxlength', '12');
  startBtn.setAttribute('id', 'start');
  startTitle.innerText = 'Simple Web Snake';
  startBtn.innerText = '게임시작';
  startDiv.appendChild(startTitle);
  startDiv.appendChild(nickInput);
  startDiv.appendChild(startBtn);
  root.appendChild(startDiv);

  // 게임화면
  topDiv.setAttribute('id', 'top-div');
  topDiv.setAttribute('class', 'hide');
  scoreSpan.setAttribute('class', 'score');
  nickNameSpan.setAttribute('class', 'name');
  topDiv.appendChild(scoreSpan);
  topDiv.appendChild(nickNameSpan);
  root.appendChild(topDiv);

  // 버튼 생성
  arrowDiv.setAttribute('class', 'arrow-div');
  upDiv.setAttribute('class', 'up-div');
  downDiv.setAttribute('class', 'down-div');
  arrowUpBtn.setAttribute('id', 'upBtn');
  arrowUpBtn.setAttribute('class', 'arrow-btn');
  arrowUpBtn.innerHTML = '&#8593';
  arrowDownBtn.setAttribute('id', 'downBtn');
  arrowDownBtn.setAttribute('class', 'arrow-btn');
  arrowDownBtn.innerHTML = '&#8595';
  arrowLeftBtn.setAttribute('id', 'leftBtn');
  arrowLeftBtn.setAttribute('class', 'arrow-btn');
  arrowLeftBtn.innerHTML = '&#8592';
  arrowRightBtn.setAttribute('id', 'rightBtn');
  arrowRightBtn.setAttribute('class', 'arrow-btn');
  arrowRightBtn.innerHTML = '&#8594';
  upDiv.appendChild(arrowUpBtn);
  downDiv.appendChild(arrowLeftBtn);
  downDiv.appendChild(arrowDownBtn);
  downDiv.appendChild(arrowRightBtn);
  arrowDiv.appendChild(upDiv);
  arrowDiv.appendChild(downDiv);
  setTimeout(() => {
    document.body.append(arrowDiv);
  }, 100);

  // 게임 오버
  endDiv.setAttribute('id', 'end-div');
  endDiv.setAttribute('class', 'hide');
  endTitle.setAttribute('class', 'over-title');
  endTitle.innerText = 'Ranking Board';
  endDiv.appendChild(endTitle);
  rankDiv.setAttribute('class', 'rank-div');
  endDiv.appendChild(rankDiv);
  root.appendChild(endDiv);
}

// 게임 초기화 함수
function reset() {
  snakeObject.beforeDirection = null;
  snakeObject.direction = 'N';
  snakeObject.body = [];
  snakeObject.body.push({ x: snakeObject.pos.x, y: snakeObject.pos.y });
  appleMake();
}

// 게임 화면 함수
function gameIn() {
  reset(); // 초기화
  snakeObject.score = 0; // 점수는 따로 초기화

  gameOver = false; // 게임오버 비활성화
  keyEvent = true; // 키보드 이벤트

  scoreSpan.innerText = 'score : 0'; // 점수 표시
  nickNameSpan.innerText = name; // 닉네임 표시

  startDiv.setAttribute('class', 'hide');
  topDiv.removeAttribute('class');
  endDiv.setAttribute('class', 'hide');
}

function gameStart() {
  reset();
  snakeObject.score = 0; // 점수는 따로 초기화

  gameOver = false;

  startDiv.removeAttribute('class');
  topDiv.setAttribute('class', 'hide');
  endDiv.setAttribute('class', 'hide');

  nickInput.value = ''; // 초기 빈칸으로 초기화

  const addNick = () => {
    if (nickInput.value !== '' && nickInput.value !== undefined) {
      name = nickInput.value;
      nickInput.removeAttribute('placeholder');
      gameIn();
    } else {
      nickInput.setAttribute('placeholder', '닉네임을 입력하세요.');
    }
  };
  startBtn.addEventListener('click', addNick);
}

// 랭킹 함수
function ranking(json) {
  // 랭킹을 초기화 후 새로 그려준다.
  while (rankDiv.hasChildNodes()) {
    rankDiv.removeChild(rankDiv.firstChild);
  }

  // 점수가 높은 순으로 정렬
  json.sort((a, b) => b.score - a.score);

  json.forEach((e, i) => {
    const rankSpan = document.createElement('span');
    rankSpan.setAttribute('class', 'rank-span');
    rankSpan.innerText = `${i + 1} . ${e.name} ${e.score}점`;
    rankDiv.appendChild(rankSpan);
  });
}

function gameEnd() {
  reset(); // 게임 초기화
  gameOver = true; // 게임오버 활성화
  keyEvent = false; // 키보드 이벤트 방지

  startDiv.setAttribute('class', 'hide');
  topDiv.setAttribute('class', 'hide');
  endDiv.removeAttribute('class');

  // 현재 유저의 랭킹을 서버로 보내고 랭킹 데이터를 받아온다.
  fetch('/rank', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, score: snakeObject.score }),
  })
    .then((res) => res.json())
    .then((json) => ranking(json));

  btnDiv.setAttribute('class', 'btn-div');
  restartBtn.setAttribute('id', 'restart');
  endBtn.setAttribute('id', 'end');
  restartBtn.innerText = '다시하기';
  endBtn.innerText = '끝내기';
  btnDiv.appendChild(restartBtn);
  btnDiv.appendChild(endBtn);
  endDiv.appendChild(btnDiv);

  restartBtn.addEventListener('click', gameIn);
  endBtn.addEventListener('click', gameStart);
}

// 충돌 감지 함수
function crashCheck(headX, headY) {
  // 게임 플레이 중일 때
  if (!gameOver) {
    // 가로벽 충돌 체크
    if (headX < 0 || headX > gameConfig.width - 10) {
      gameEnd();
    }
    // 세로벽 충돌 체크
    if (headY < 0 || headY > gameConfig.height - 10) {
      gameEnd();
    }
    // 자기 몸과 충돌하는지 체크
    // 사과를 먹고 새로생긴 머리와 목부분을 제외하고 체크
    for (let i = 2; i < snakeObject.body.length; i ++) {
      if (headX === snakeObject.body[i].x && headY === snakeObject.body[i].y) {
        gameEnd();
      }
    }
    // 사과와 충돌 했을 때
    if (headX === snakeObject.apple.x && headY === snakeObject.apple.y) {
      snakeObject.score += 10 * snakeObject.body.length;
      scoreSpan.innerText = `score : ${snakeObject.score}`;
      appleMake();
      snakeObject.body.unshift({ x: snakeObject.body[0].x, y: snakeObject.body[0].y }); // 머리를 기준으로 추가해준다.
    }
  }
}

function init() {
  paintInfo(); // 게임 스타트, 점수, 게임 종료 화면
  gameStart(); // 첫 시작시 스타트화면 출력
  document.addEventListener('keydown', (e) => move(e.key)); // 키보드 이벤트

  // 버튼 이벤트
  arrowUpBtn.addEventListener('click', () => {
    move('ArrowUp');
  });
  arrowDownBtn.addEventListener('click', () => {
    move('ArrowDown');
  });
  arrowLeftBtn.addEventListener('click', () => {
    move('ArrowLeft');
  });
  arrowRightBtn.addEventListener('click', () => {
    move('ArrowRight');
  });
}

init();

export { keyEvent, gameOver, snakeObject, snake, renderSnake, move, appleMake, reset, ranking, gameEnd, crashCheck }