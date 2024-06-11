선임님 Git 강의 메모

2020.07.02

Slack 채팅 Start Thread -> 한 채팅을 주제로 쓰레드로 쌓아서 대화 (특정 주제에 대한 대화를 위한 방법)
1.기본 레포티지를 Fork하여 내 계정으로 복제(Clone)하여 작업 및 수정 
2.수정된 레포티지를 full request 하여 코드 리뷰 이후 적용

Fork -> 내 계정으로 레포티지를 복사

터미널
mkdir -> 폴더 생성
cd -> 이동

git clone 주소 -> 프로젝트 폴더로 해당 레포티지 로컬 저장소 생성

git remote -v : 현재 프로젝트 레포티지 주소(origin : 내 원격저장소 이름)

원본 주소를 upstream 으로 등록
git remote add <이름> <원본 깃주소>

git branch ojt/yj.kang 브랜치 생성
git checkout ojt/yj.kang 생성된 브랜치로 전환

Shift + command + P 