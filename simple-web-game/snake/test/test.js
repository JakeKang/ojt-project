import { drawRect } from '../public/modules/canvas.js';
import { gameConfig } from '../public/config.js';

// 게임
let keyEvent = true; // 게임 시작 전 키보드 이벤트 방지

// 게임오버
let gameOver = false;

const snakeObject = {
  direction: 'N',
  pos: { x: 0, y: 0 },
  beforeDirection: null,
  size: 1,
};

let body = []; // 스네이크 배열
let score = 0; // 점수
let apple = { x: 0, y: 0 };
const newApple = { x: 0, y: 0 };

body.push({ x : snakeObject.pos.x, y: snakeObject.pos.y });

function snake({ ctx }) {
  // 항상 머리를 앞으로 유지하면서 이동에 따라 새로 업데이트한다.
  body.unshift({ x: body[0].x, y: body[0].y });
  body.pop();

  if (snakeObject.beforeDirection === 'W') {
    body[0].x -= gameConfig.size;
  } else if (snakeObject.beforeDirection === 'E') {
    body[0].x += gameConfig.size;
  } else if (snakeObject.beforeDirection === 'N') {
    body[0].y -= gameConfig.size;
  } else if (snakeObject.beforeDirection === 'S') {
    body[0].y += gameConfig.size;
  }

  snakeObject.direction = snakeObject.beforeDirection;

  renderSnake({ ctx, snake: snakeObject, color: 'black' });
}

function renderSnake({ ctx, snake, color }) {
  for (let f = 0; f < body.length; f ++) {
    crashCheck(body[0].x, body[0].y); // 실시간 게임오버 요소 충돌 감지

    drawRect({ ctx, x: body[f].x, y: body[f].y, width: gameConfig.size, height: gameConfig.size, color });
    drawRect({ ctx, x: apple.x, y: apple.y, width: gameConfig.size, height: gameConfig.size, color: 'red'});
  }
}

function move(key) {
  if (keyEvent) {
  // 입력받은 키의 방향과 반대 방향, 진행 방향이 아닐때 (중복 및 역주행 방지)
    if (key === 'ArrowUp' && snakeObject.beforeDirection !== 'S') {
      snakeObject.beforeDirection = 'N';
    }
    if (key === 'ArrowDown' && snakeObject.beforeDirection !== 'N') {
      snakeObject.beforeDirection = 'S';
    }
    if (key === 'ArrowLeft' && snakeObject.beforeDirection !== 'E') {
      snakeObject.beforeDirection = 'W';
    }
    if (key === 'ArrowRight' && snakeObject.beforeDirection !== 'W') {
      snakeObject.beforeDirection = 'E';
    }
  }
}

// 사과와 충돌 했을 때
function appleMake() {
  newApple.x = Math.floor(Math.random() * (gameConfig.width / gameConfig.size)) * gameConfig.size;
  newApple.y = Math.floor(Math.random() * (gameConfig.height / gameConfig.size)) * gameConfig.size;
  for (let i = 0; i < body.length; i ++) {
    if (body[i].x !== newApple.x && body[i].y !== newApple.y) {
      apple = newApple;
    } else {
      // 겹치면 새로 다시 랜덤으로 생성
      appleMake();
    }
  }
}

// 게임 초기화 함수
function reset() {
  snakeObject.beforeDirection = null;
  snakeObject.direction = 'N';
  snakeObject.pos = { x: 0, y: 0 };
  body = [];
  body.push({ x: snakeObject.pos.x, y: snakeObject.pos.y });
  appleMake();
}

// 랭킹 함수
function ranking(json) {
  let scoreSort = [];
  // 점수가 높은 순으로 정렬
  json.sort((a, b) => b.score - a.score);

  json.forEach((e, i) => scoreSort.push({ name: e.name, score: e.score }));

  return scoreSort;
}

function gameEnd() {
  reset(); // 게임 초기화
  gameOver = true; // 게임오버 활성화
  keyEvent = false; // 키보드 이벤트 방지
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
    for (let i = 2; i < body.length; i ++) {
      if (headX === body[i].x && headY === body[i].y) {
        gameEnd();
      }
    }
    // 사과와 충돌 했을 때
    if (headX === apple.x && headY === apple.y) {
      score += 10 * body.length;
      appleMake();
      body.unshift({ x: body[0].x, y: body[0].y }); // 머리를 기준으로 추가해준다.
    }
  }
}

export { keyEvent, gameOver, snakeObject, body, score, apple, newApple, snake, renderSnake, move, appleMake, reset, ranking, gameEnd, crashCheck }