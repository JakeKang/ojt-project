const root = document.getElementById('root');
const nickNameInput = root.querySelector('#loginName');
const loginBtn = root.querySelector('#loginButton');

/* 유저 닉네임 담을 변수 */
let userNickName = '';

/* 닉네임 중복체크 결과 확인 */
function nickNameCheck(data) {
  if (data === 'done') {
    localStorage.setItem('name', userNickName);
    nickNameInput.setAttribute('placeholder', '닉네임 입력');
    const back = `${window.location.href = '/chat'}`;
    return back;
  }
  nickNameInput.setAttribute('placeholder', '닉네임이 중복됩니다.');
  return null;
}

/* 닉네임 서버로 전송 (중복체크) */
function postNickName(data) {
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: data,
      },
    }),
  }).then((res) => res.json())
    .then((res) => nickNameCheck(res.data)); // 처리 메시지 반환
}

/* 닉네임 가져오기 */
function getNickName() {
  userNickName = nickNameInput.value;
  nickNameInput.value = ''; // 빈 값 초기화

  if (userNickName !== '') { // 빈 값이 아닐때만 실행
    nickNameInput.setAttribute('placeholder', '닉네임 입력');
    return postNickName(userNickName); // 값 반환
  }
  nickNameInput.setAttribute('placeholder', '닉네임을 입력해주세요.');
  return null;
}

/* 로그인 유무 체크 */
function tokenCheck() {
  const token = localStorage.getItem('name');
  if (token != null) {
    const back = `${window.location.href = '/chat'}`;
    return back; // token이 있으면 로그인 못하게 막기
  }
  return null;
}

function init() {
  loginBtn.addEventListener('click', getNickName); // 클릭이벤트
  nickNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getNickName();
    }
  }); // 엔터이벤트
  tokenCheck();
}

init();
