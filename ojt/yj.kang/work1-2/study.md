## Javascript 비동기 Study

### 동기적 처리(Synchronous)
```js
// sync_test
console.log("1st");
console.log("2nd");
console.log("3rd");

// 1st 2nd 3rd
```
코드를 실행하면 순차적으로 콘솔에 해당 내용이 찍히게된다.
코드가 위에서 아래로 내려오며 하나가 끝나면 다음 코드가 실행되는 방식을 동기적 처리라고 한다.

### 비동기적 처리(Asynchronous)
```js
console.log("1st");

setTimeout(()=>{
    console.log("2nd");
}, 0)

console.log("3rd");
// 1st 3rd 2nd
```
`setTimeout()`메소드를 사용, 첫 번째 인자는 콜백함수, 두 번째 인자는 지연시간이다.
두 번째 인자가 0으로 지정되었지만 `setTimeout()`메소드는 비동기적 API 이기 때문에 다음과 같이 동작한다.

1. 첫 번째 줄에서 `console.log("1st");` 만나고, 콘솔에 1st를 찍는다.
2. 세 번째 줄에서 `setTimeout()` 메소드를 만난다. 해당 메소드가 비동기적 메소드임을 파악하고, 이를 비동기를 처리하는 다른 프로그램에게 위임한다.
3. 위임하고 난 뒤에, 곧바로 다음코드 `console.log("3rd");` 를 실행하여 3rd를 콘솔에 찍는다.
4. `setTimeout()` 메소드를 위임받아 처리한 프로그램은 =="비동기적 API를 제외한 모든 코드가 실행된 이후"== 에, 결과를 콘솔에 2nd를 찍는다.

`console.log()`를 아무리 늘려도 비동기적 코드의 실행 결과는 동기적 코드의 실행이 완료되면 값을 반환한다.

#### callback 함수
다른 함수의 인자로 사용되거나 이벤트에 의해 호출되어지는 함수를 말한다.
어떤 함수의 요청이 처리되어 나온 응답(값)을 call back하여 다음 함수에서 사용할 수 있는 것이다.

```js
const arr = [0,1,2,3,4,5];

arr.forEach(function(element) {
    // function이 for Each의 인자로 활용되고 있음.
    console.log(element);
})();
```
너무 많이 중첩하여 사용하면 가독성이 크게 떨어지고 함수끼리 서로 꼬여 에러가 발생할 확률이 커진다.

```js
// 콜백 지옥
async(1, function () {
    async(2, function() {
        async(3, function() {
            async(4, function() {
                async(5. function() {
                    console.log("작업완료?");
                })
            })
        })
    })
})
```

#### setTimeOut
호출될 콜백함수와 지연 시간 두가지 인자를 설정하여 사용한다.
```js
setTimeout(function() {
    console.log("Works!");
}, 3000);
// 3초 후 setTimeout 내부의 함수에 의해 console에 Works!가 찍힌다.
```

#### Promise 함수
callback의 문제점을 해결하기 위해 나온 개념.
콜백을 예측 가능한 패턴으로 사용할 수 있도록 도와주며 callback내의 프로미스 객체를 활용해 성공, 실패, 오류 등 다양한 상황에 따른 후속처리를 가능하게 한다.

+ 비동기 작업들을 순차적으로 진행하거나, 병렬로 진행하는 등 컨트롤이 보다 수월해진다.
+ 내부적으로 예외처리에 대한 구조가 탄탄하기 때문에 오류가 발생했을 때 오류
 처리 등에 대해 가시적으로 관리해줄 수 있다.

```js
// Promise 선언부
let _promise = function (param) {

    return new Promise(function (resolve, reject) { // 나중에 Promise 객체를 생성하기 위해 Promise 객체를 리턴하도록 함수를 감싸고 있다.
    // Promise 객체만 보면 파라미터로 익명함수를 담고, 익명 함수는 resolve와 reject를 파라미터로 받고 있다.

        // 비동기작업을 표현하기 위해 setTimeout 함수를 사용
        window.setTimeout(function () {
            // 파라미터(매개변수)가 참이면,
            if (param) {
                // 성공
                resolve("해결 완료");
            }
            else {
                // 실패
                reject(Error("실패"));
            }
        }, 3000);
    });
};

// Promise 실행부
_promise(true)
.then(function (text) {
    //성공
    console.log(text);
}, function (error) {
    //실패
    console.error(error);
});
```
#### Promise 선언부
"지금은 없는데 이상없으면 나중에 주고 없으면 알려줄게" 라는 약속과 같다.
따라서 다음 중 하나의 상태(state)가 될 것이다.
+ pending
    * 아직 약속을 수행 중인 상태(fulfilled 혹은 reject가 되기 전)이다.
+ fulfilled
    * 약속(promise)이 지켜진 상태이다.
+ rejected
    * 약속(promise)가 어떤 이유에서 못 지켜진 상태이다.
+ settled
    * 약속이 지켜졌든 안지켜졌든 일단 결론이 난 상태이다.

위 코드에서 new Promise로 Promise가 생성되는 직후부터 resolve나 reject가 호출되기 전까지의 순간을 pending 상태라고 볼 수 있다.

이후 비동기 작업이 마친뒤 결과물을 약속대로 줄 수 있다면 resolve 함수를 호출하고, 실패했다면 reject 함수를 호출한다.

#### Promise 실행부
_promise()를 호출하면 Promise

==.then== : 정상적으로 비동기작업이 완료되었을 때 호출하는 API, 위의 예제는 하나의 then API를 호출해서 비동기 작업이 완료되면 결과에 따라 성공 혹은 실패 메시지를 찍어준다.

==.catch== : 체이닝형태로 연결된 상태에서 비동기 작업이 중간에 에러가 날때 처리해주는 API
`.then(null, function(){})`의 형태와 같다.

```js
_promise(true)
    .then(JSON.parse)
    .catch(function() {
        window.alert("체이닝 도중 에러 발생");
    })
    .then(function (text) {
        console.log(text);
    });
```

_promise 함수에서 만든 객체는 성공 혹은 실패시 String을 리턴한다.
JSON.parse에서 Error가 발생하게 되고 다음 then으로 이동하지 못하고 catch에서 받게 된다.
catch는 이와같이 promise가 연결되어 있을 때 발생하는 오류를 처리해주는 역할을 한다.

==.all== : 여러개의 비동기 작업들이 존재하고 이들이 모두 완료되었을 때 작업을 진행하고 싶을때 활용하는 API

```js
// 보기 편하게 간소화, promise2가 먼저 끝나고 promise1이 끝난다고 가정한다.
let promise1 = new Promise(function (resolve, reject) {
    ... console.log("첫번째 Promise 완료");
    resolve("1");
});

let promise2 = new Promise(function (resolve, reject) {
    ... console.log("두번째 Promise 완료");
    resolve("2");
});

Promise.all([promise1, promise2]).then(function (values) {
    console.log("모두 완료됨", values);
})
```
두번째 Promise가 완료된 뒤, 시간이 흘러 첫번째 Promise가 완료되면 최종적으로 전체값을 보여준다.

Promise 출처 : [Promise](https://programmingsummaries.tistory.com/325)

###### 프로미스 체이닝 정리
`.then()`, `.catch()` 메소드는 Promise를 반환하기 때문에 연이어 호출하는 프로미스 체이닝을 구현할 수 있다. ==즉 프로미스 체이닝을 사용하면 콜백의 중첩을 구현할 수 있다.==

```js
//콜백헬
function callback() {
    function callback1() {
        function callback2() {
        }
    }
}

//프로미스 체이닝
promise().then().then();

//이 둘은 동일하다.
```

```js
//프로미스 체이닝
function getData() {
    return new Promise({ //then() 메소드를 호출하고 나면 새로운 프로미스 객체가 반환된다.
        //...        
    });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
    .then(function(data) {
        //...
    })
    .then(function() {

    })
    .then(function() {
        // ...
    });
```

출처 : [Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)


### fetch API

장점
+ 사용이 쉽고 간단하다.
+ Promise 객체로 값을 Return 받음 => .then()
+ Response 타입별로 쉽게 적용 가능(JSON, Blob 등)

```js
// Fetch API 코드 형태
fetch(url)
.then((response) => {
//Code 
}).catch((error) => {
    console.log("error");
});
```

```js
fetch('주소', 설정객체).then(콜백).catch(콜백);
// 기본적인 구조, 주소에 요청을 보낼 주소를 입력해주고 설정 객체에 GET, POST 등의 메소드, 보낼 데이터 등을 넣을 수 있다.
```

통신에 성공할 경우 `then()`을 사용하여 response 객체를 받고 콜백함수를 실행한다.
통신에 실패할 경우 `catch()`를 사용하여 어떻게 처리할 것인지를 수행한다.


