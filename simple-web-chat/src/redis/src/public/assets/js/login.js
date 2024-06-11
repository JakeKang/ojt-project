const root = document.getElementById('root');
const nickNameInput = root.querySelector('#loginName');
const loginBtn = root.querySelector('#loginButton');

// 유저 닉네임 담을 변수
let userNickName = '';

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

// 닉네임 서버로 전송 (중복체크)
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
    .then((res) => nickNameCheck(res.data));
}

// 닉네임 가져오기
function getNickName() {
  userNickName = nickNameInput.value;
  nickNameInput.value = '';

  if (userNickName !== '') {
    nickNameInput.setAttribute('placeholder', '닉네임 입력');
    return postNickName(userNickName);
  }
  nickNameInput.setAttribute('placeholder', '닉네임을 입력해주세요.');
  return null;
}

function tokenCheck() {
  const token = localStorage.getItem('name');
  if (token != null) {
    const back = `${window.location.href = '/chat'}`;
    return back;
  }
  return null;
}

function init() {
  loginBtn.addEventListener('click', getNickName);
  nickNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getNickName();
    }
  });
  tokenCheck();
}

init();
