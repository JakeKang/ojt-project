import assert from 'assert';
import { keyEvent, gameOver, snakeObject, body, score, apple, newApple, snake, renderSnake, move, appleMake, reset, ranking, gameEnd, crashCheck } from './test';

describe('클라이언트 테스트', function() {
  before(function() {
    reset();
  })
  it('처음 시작시 keyEvent가 열려있고 게임오버가 아니다.', function() {
    assert.deepEqual(true, keyEvent);
    assert.deepEqual(false, gameOver);
  })
  describe('스네이크 오브젝트 Default', function() {
    it('스네이크의 기본 방향은 N 이다.', function() {
      assert.deepEqual('N', snakeObject.direction);
    });
    it('스네이크는 처음에 x:0, y:0 좌표를 가지고 있다.', function() {
      assert.deepEqual(0, snakeObject.pos.x);
      assert.deepEqual(0, snakeObject.pos.y);
    });
    it('첫 시작시 스네이크의 길이는 1이고 머리의 위치는 x: 0, y: 0 이다.', function() {
      assert.deepEqual(0, body[0].x);
      assert.deepEqual(0, body[0].y);
      assert.deepEqual(1, body.length);
    });
    it('스네이크의 다음 방향은 null 이다.', function() {
      assert.deepEqual(null, snakeObject.beforeDirection);
    });
  });

  describe('방향 테스트', function() {
    it('왼쪽 화살표를 누르면 다음 방향이 W가 된다.', function() {
      move('ArrowLeft');
      assert.deepEqual('W', snakeObject.beforeDirection);
    });
    it('아래쪽 화살표를 누르면 다음 방향이 S가 된다.', function() {
      move('ArrowDown');
      assert.deepEqual('S', snakeObject.beforeDirection);
    });
    it('오른쪽 화살표키를 누르면 다음 방향이 E가 된다.', function() {
      move('ArrowRight');
      assert.deepEqual('E', snakeObject.beforeDirection);
    });
    it('위쪽 화살표키를 누르면 다음 방향이 N이 된다.', function() {
      move('ArrowUp');
      assert.deepEqual('N', snakeObject.beforeDirection);
    });
    it('머리 방향이 위쪽일때 반대방향인 아래쪽을 누르면 아무 변화가 없다.', function() {
      move('ArrowDown');
      assert.deepEqual('N', snakeObject.beforeDirection);
    })
  });
  
  describe('사과 테스트', function() {
   it('사과를 생성하면 랜덤으로 좌표가 변경된다.', function() {
    appleMake();
    assert.notDeepEqual(0, newApple.x);
    assert.notDeepEqual(0, newApple.y);
    // 사과를 생성하고 미리 충돌 시킨다.
    // 랜덤 생성된 사과의 좌표를 머리 좌표로 인식
    crashCheck(apple.x, apple.y);
   });
   it('사과를 먹으면 몸길이가 길어지고 점수가 증가한다.', function() {
    assert.deepEqual(2, body.length);
    assert.deepEqual(10, score);

    // 한번 더 사과를 먹는다.
    crashCheck(apple.x, apple.y);
   });
   it('사과와 재 충돌시 몸길이가 길어지고 점수가 몸길이 * 10 점 상승한다.', function() {
    assert.deepEqual(3, body.length);
    assert.deepEqual(30, score);
   });
  });
  
  describe('충돌 감지 게임오버 테스트', function() {
    beforeEach(function() {
      // 충돌 테스트를 위해 초기화 하고 몸을 늘린다.
      reset();
      body.push({x : 10, y: 0});
      body.push({x : 20, y: 0});
      body.push({x : 30, y: 0});
      body.push({x : 40, y: 0});
      body.push({x : 50, y: 0});
    })
   it('좌측 벽에 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    crashCheck(-10, 0);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
   it('우측 벽에 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    crashCheck(390, 0);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
   it('위쪽 벽에 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    crashCheck(0, -10);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
   it('아래 벽에 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    crashCheck(0, 390);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
   it('자기 몸과 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    // 현재 스네이크 길이는 6이다.
    // 머리부터 몸통 3까지 총 4의 길이 까지는 충돌이 없다.
    crashCheck(body[4].x, body[4].y);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
   it('자기 꼬리와 충돌하면 Game Over 판정과 키보드 이벤트를 막는다.', function() {
    crashCheck(body[5].x, body[5].y);
    assert.deepEqual(true, gameOver);
    assert.deepEqual(false, keyEvent);
   });
  });

  describe('랭킹 테스트', function() {
    let rank = null;
    beforeEach(function() {
      rank = ranking([{name: 'Kang', score: 200}, {name: 'Kim', score: 500}, {name: 'Lee', score: 350}]);
    });
    it('1등은 Kim 이다.', function() {  
      assert.deepEqual({name: 'Kim', score: 500}, rank[0]);
    });
    it('2등은 Lee 이다.', function() {  
      assert.deepEqual({name: 'Lee', score: 350}, rank[1]);
    });
    it('3등은 Kang 이다.', function() {  
      assert.deepEqual({name: 'Kang', score: 200}, rank[2]);
    });
  });

  describe('리셋 테스트', function() {
    beforeEach(function() {
      reset();
    })
    it('스네이크의 다음 방향이 null 로 초기화 된다.', function () {
      assert.deepEqual(null, snakeObject.beforeDirection);
    });
    it('스네이크의 방향이 N으로 초기화 된다.', function () {
      assert.deepEqual('N', snakeObject.direction);
    });
    it('스네이크 위치가 x: 0, y: 0 으로 초기화 된다.', function () {
      assert.deepEqual({ x: 0, y: 0 }, snakeObject.pos);
    });
    it('body가 초기화 되고 처음 위치에 머리만 존재한다.', function () {
      assert.deepEqual([{ x: 0, y: 0 }], body);
    });
  });
});