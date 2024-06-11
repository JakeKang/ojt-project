const root = document.getElementById('container');
const clock = root.querySelector('#clock');
const buttonContainer = root.querySelector('#buttonContainer');
const labs = root.querySelector('#labs');
const title = root.querySelector('h1');

// 버튼
const toggle = root.querySelector('#toggle');
const start = root.querySelector('#start');
const pause = root.querySelector('#pause');
const record = root.querySelector('#record');
const reset = root.querySelector('#reset');

const time = new Date(); // 정적 함수

// 시계 변수
let clockStart = null;
let timeReturn = null;

// 스톱워치 변수
let swStart = 0; // 스톱워치 시작 시간
let swEnd = 0; // 스톱워치 중지 시간
let startStopWatch = 0; // 스톱워치 시작

// 스톱워치
Date.prototype.stopWatch = function(swStart) {
    let swNow = new Date(Date.now() - swStart); // 시작 시간 - 최종 swStart 값 = 현재 시간

    let min = swNow.getMinutes(); // 분
    let sec = swNow.getSeconds(); // 초
    let millisec = swNow.getMilliseconds(); // 밀리초

    clock.innerHTML = `${min < 10? `0${min}`:min}:${sec < 10? `0${sec}`:sec}:${millisec < 100? `0${millisec}`: millisec }`
}

// 기본 시계
Date.prototype.defaultClock = function(timeReturn) {
const year = timeReturn.getFullYear();
const month = timeReturn.getMonth()+1;
const day = timeReturn.getDate();
const hour = timeReturn.getHours(); // 시
const minute = timeReturn.getMinutes(); // 분
const second = timeReturn.getSeconds(); // 초
                    //paintClock 삼항연산자 10보다 작을때 앞에 0을 붙여서 출력 아니면 그대로 출력
clock.innerHTML = `${year}-${month < 10 ? `0${month}`:month}-${day <10 ? `0${day}`:day}
                    ${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}:${second < 10 ? `0${second}`:second}`;
}

//toggle 버튼 클릭시
Date.prototype.toggle = function() {
    if(buttonContainer.className === "show") {
        buttonContainer.className = "hide";
        title.innerHTML = "CLOCK";

        // 시계로 변경시 스톱워치 전체 종료 및 초기화
        clearInterval(startStopWatch);
        swStart = 0;
        swEnd = 0;
        startStopWatch = 0;


        time.clockStart();

    } else {
        buttonContainer.className = "show";
        title.innerHTML = "STOPWATCH";
        clock.innerHTML = "00:00:000";
        clearInterval(clockStart)
        
    }
}

// 전환시 시계 재실행
Date.prototype.clockStart = function() {
    clockStart = setInterval(()=> {
        timeReturn = new Date(); // timeReturn 변수를 setInterval에 넣어 함수 파라미터로 이용해 동적처리
        time.defaultClock(timeReturn);
    }, 100);
}

//start 버튼 클릭시
Date.prototype.stopWatchStart = function() {
    if(!startStopWatch) {
        if(!swStart) { // 초기 시작, 재시작 시간 설정
            swStart = Date.now() // 초기 (현재 시간 저장)
        } else {
            swStart += (Date.now() - swEnd) // 재시작시 현재 값 + (흐른 시간 - 중지 시점 시간) => 멈췄을 당시 시간값
        }
    
        startStopWatch = setInterval(() => {
            time.stopWatch(swStart);
        }, 10)
    }
}

//pause 버튼 클릭시
Date.prototype.stopWatchPause = function() {
    if(startStopWatch) { // 스톱워치가 실행중일때만
        clearInterval(startStopWatch); // 일시중지
        swEnd = Date.now(); // 중지 시점 시간 저장
        startStopWatch = null; // 재시작을 위해 초기화
    }
}

//reset 버튼 클릭시
Date.prototype.stopWatchReset = function() {
    clearInterval(startStopWatch); // 중지하고
    
    // 초기화 작업
    clock.innerHTML = `00:00:000`;
    swStart = 0;
    swEnd = 0;
    startStopWatch = null; 

    //labs 초기화
    labs.innerHTML = "";
}

//record 버튼 클릭시
Date.prototype.stopWatchRecord = function() {
    li = document.createElement('li');
    li.append(clock.innerHTML);
    labs.appendChild(li);
}

toggle.addEventListener("click", time.toggle);
start.addEventListener("click", time.stopWatchStart);
pause.addEventListener("click", time.stopWatchPause);
reset.addEventListener("click", time.stopWatchReset);
record.addEventListener("click", time.stopWatchRecord);


// 초기 시계 실행
clockStart = setInterval(()=> {
    timeReturn = new Date(); // timeReturn 변수를 setInterval에 넣어 함수 파라미터로 이용해 동적처리
    time.defaultClock(timeReturn);
}, 100);


/*
1.처음 시작할때 현재 시간 값을 swStart 변수에 담는다. 
(swNow = 첫 시작시 현재시간 - 현재시간을 빼면 0부터 시작한다.)
2.중지를 하면 swEnd에 버튼 클릭 당시 시간 값을 변수에 담는다.
3.재시작할때를 위해 진행했던 초기 시간 값에 중지 당시 시간 값을 더해준다.
(swStart(첫 시작 시간값) += 현재시간 - 중지했던 당시 시간) => 멈췄던 시간
4.재시작시 swNow = Interval 중지 후 시간(조금 흐른 시간) - 최종 멈췄던 시간 => 실제 멈췄던 시간값 부터 시작 ex7500 : 00:07:500
5.딜레이를 늦추기 위해 new Date().getTime() 보다 Date.now()를 사용해본다.
*/
