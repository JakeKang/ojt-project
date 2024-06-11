const root = document.getElementById('root'); // HTML <div id="root">

const addButton = root.querySelector('#add-button'); // HTML <input id="add-button">
const todoList = root.querySelector('#incomplete-tasks') // HTML <ul id="incomplete-tasks">
const todoForm = root.querySelector('#new-task') // // HTML <input id="new-task">

let toDos = []; // todolist를 담기위한 localstorage key "toDos" 배열

function addTodo(e) { // 버튼 클릭 이벤트
    const todoValue = todoForm.value;

    if (e.key==='Enter' || e.type=="click") { // 엔터키를 누르거나 버튼 클릭시 이벤트 발생
        if(todoValue=="") { // 입력 받은 후 빈칸 체크
            alert("빈칸입니다.") // 에러 메시지
            todoForm.focus(); // 입력창 포커스
        } else {
            insertTodo(todoValue); // todoValue -> function todoInput(text);
            todoForm.value = ""; // todoForm 초기화
        }
    }
}

function insertTodo(text) {
    let li = document.createElement("li"); // li 동적 생성
    let deleteBtn = document.createElement("button"); // Delete Button 동적 생성
    li.innerText = text; // todoValue 삽입
    deleteBtn.innerText = "Delete"; // Delete Text 삽입
    deleteBtn.id = "deleteBtn"
    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(deleteBtn); // li 태그에 deleteBtn 버튼 추가
    todoList.appendChild(li);

    todoObj = {
        text : text // todoText 저장
    };

    toDos.push(todoObj); // todoObj를 배열에 순차적으로 push

    saveTodo(); // localstorage key = todoId, Value = todoObj;
}

function deleteTodo(event) {
    const deleteList = event.target.parentNode; // 선택된 li 태그
    const selectList = document.querySelectorAll("li");
    const arrayList = [...selectList] // htmlCollection -> list
    const listIndex = arrayList.indexOf(deleteList); // arrayList에서 선택된 li태그의 index 값 반환

    let listToDo = localStorage.getItem("toDos");
    listToDo = JSON.parse(listToDo); // object -> array
    
    deleteList.remove(); // 리스트 삭제

    listToDo.splice(listIndex, 1); // 선택된 li index 번호를 기준으로 해당 인덱스 번호의 객체 삭제

    toDos = listToDo;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem("toDos", JSON.stringify(toDos)); // obj -> strin
}

function loadTodo() {
    const todoLoacl = localStorage.getItem("toDos"); // localStorage Key "toDos" 가져오기

    let todoParse = JSON.parse(todoLoacl); // string -> obj
    if(todoParse != null) {
        todoParse.forEach(function(e) { // toDos Value => text 값을 insertTodo로 전송
            insertTodo(e.text);
        });
    }
}


function init() {
    todoForm.addEventListener("keypress", addTodo); // 한글 2번 입력 오류로 keydown -> keypress 로 변경
    addButton.addEventListener("click", addTodo);
    loadTodo();
}

init();