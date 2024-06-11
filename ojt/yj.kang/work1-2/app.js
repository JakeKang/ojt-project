
const root = document.getElementById('root');

const refreshButton = root.querySelector('#refreshButton');
const table = root.querySelector('#incomplete-table');
const thead = root.querySelector('#table-head');
const tbody = root.querySelector('#table-body');

function createThead(data) { // thead row 생성 함수
    const headRow = thead.insertRow(0);
    const dataKey = Object.keys(data);

    dataKey.forEach((data,index)=> {
        headRow.insertCell(index).innerHTML = data;
    })
}

function createTbody(data) { // tbody row 생성 함수
    const row = tbody.insertRow(-1); // 0을 하면 24부터 삽입 -1을 하면 1부터 삽입
    const tableValue = Object.values(data);

    tableValue.forEach((data,index)=> { // data 값, index 값의 번호
        row.insertCell(index).innerHTML = data; // idex 번호로 cell 번호를 지정하고 data를 삽입한다.
    });
}

function newObj(data) { // fetchData의 JSON을 객체에 담는다.
    if(Array.isArray(data)) { // 인자가 Array인지 판별한 후 Array만 받아온다.
        createThead(data[0]);
        data.forEach((data) => {
            createTbody(data);
        });
    }
}

function fetchData() { // JSON 파싱
    //fetch("http://dummy.restapiexample.com/api/v1/employees")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => {
            newObj(json);
    })
}


function tableCheck() { // 테이블 중복생성 방지
    const tbodyCount = tbody.childElementCount;
    if(tbodyCount === 0) { // tbody에 요소가 없으면 테이블을 그려준다.
        fetchData();
    } else { // 요소가 있으면 중복 생성을 방지하기 위해서 지우고 새로 만들어준다.
        table.deleteRow(0);
        for(let i=0; i<=tbodyCount; i++){
            tbody.deleteRow(-1, tbodyCount);
        }
        fetchData();
    }
}


function init() {
        refreshButton.addEventListener("click", tableCheck);
}

init();