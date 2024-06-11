## 2020/07/02 Git Study (yj.kang)

------

####Slack
#####[특정 주제에 대한 대화를 위한 방법]
+ 채팅의 Start a Thread 기능을 통해 한 채팅을 주제로 Thread를 쌓아서 대화 할 수 있습니다.

------

####Git
#####[Git 작업을 위한 초기 세팅]
+ 터미널 접속 후 
    + mkdir 명령어를 통해 작업 폴더 생성
    + cd <폴더명> 으로 작업 폴더로 이동
    + VSCode : shift + command + p -> shell... 을 설치 
    + 터미널에서 code . 명령어를 통해 작업 폴더에서 바로 VSCode 실행


------

#####[기초적인 Git 사용법]
> Github 원본 repository의 내용을 본인의 계정으로 Fork하여 복사한 후 복사된 repository에서 작업하는것을 기본으로 합니다.

1. repository clone
```
git clone <repository주소> 
#프로젝트 폴더로 해당 레포티지의 로컬 저장소를 생성한다.
```
2. repository 주소
```
git remote -v 
#현재 프로젝트의 repository 주소
#(Origin : 내 원격저장소 이름)

git remote add <이름> <원본 깃주소> 
#해당 이름과 주소를 가진 원본에 대한 remote를 추가합니다.
```

3. branch 생성
```
git branch <이름> 
#작업할 브랜치 생성

git checkout <이름> 
#<이름>의 브랜치를 HEAD로 지정

git status 
#커밋되지 않은 변경사항 조회

git branch 
#작업중인 브랜치 확인
```

###### 참고사항
> branch 명을 잘 지으면 Commit 이후 무슨 내용을 수정했는지 확인할 수 있다.
> HEAD의 위치는 "*" 표시로 확인할 수 있다.
> >ex) master
> >    *ojt/yj.kang <- 현재 작업중인 브랜치(HEAD 위치)

<br/>

4. 변경사항 Git Commit
```
git add . 
#바뀐 staging 전체를 올린다.
# -i 옵션은 대화명 모드가 시작되며 파일 일부분만 선택해서 스테이징이 가능하다.
# -p 옵션을 사용하면 -i 대화명모드 없이 바로 패치모드를 사용할 수 있다.

git commit 
#vi 편집을 거쳐 Commit

git push origin <브랜치이름> 
#해당 origin의 로컬 브랜치를 원격 Repository와 동기

#push 진행시 github email, password 입력

git commit -m "내용" 
#간단한 제목을 추가하여 commit
```

+ git commit vi 편집기
    + i : 작성 모드, u : 작업 되돌리기
    + #1 첫 줄 제목 입력
    + #2
    + #3 컨텐츠 내용 (80줄을 초과하지 않는게 좋다.)
    + :wq -> 저장 및 종료

<br/>

5. 원본의 변경사항을 연동하여 최신화 (fetch, merge&rebase)
```
git fetch <주소> 
#해당 주소의 내용을 현재 작업중인 브랜치에 복사한다. (반영X)

ex) git fetch upstream master
#upstream의 master를 받아온다.

git rebase upstream/master 
#fetch로 받아온 내용을 브랜치를 베이스로 커밋을 재정렬 한다.

git merge upstream/master 
#fetch로 받아온 내용을 브랜치의 master에 Head로 새로 추가한다.
```

5-2. 원본의 변경사항을 연동하여 최신화 (pull 사용)
```
git pull upstream master 
#upstream/master의 내용을 받아와 자동으로 merge 시킨다.

git pull --rebase upstream master 
#pull의 Default 값은 fetch&merge가 아닌 fetch&rebase를 실행한다.
```

------

#####[기초적인 Github 사용법]
>+ push 완료 후 본인 계정 혹은 원본 계정의 github 저장소에 접속하면 Compare & pull request 버튼이 활성화 되어 있다.
><br/>
>+ 해당 버튼을 클릭하여 메시지를 작성하고 pull reqeust를 생성한다.

+ pull reqeust를 받은 원본 저장소 관리자 및 공동 작업자는 해당 PR을 확인한다.
    + Files changed를 누르고 문제 있는 코드라인 옆 "+" 버튼을 눌러 코드리뷰를 한다.
    + 문제가 없다면 Viewed를 체크한다.
    + 이슈 발생시 PR 옆 Issues 탭을 통해 작성한다.
    + git commit -m “Fix(#3)” #<번호>를 통해 Github에서 자동으로 해당 이슈 번호에 대한 PR의 링크를 달아준다.
    + 완료 후 merge 하여 수정사항을 원본파일에 반영시킨다.

###### 참고사항
```
Create a merge commit
#가장 기본적인 merge (PR의 내용을 원본파일에 합쳐준다.)

Squash and merge
#Commit이 2개 이상일 경우, 합쳐도 문제가 없을 경우에 Commit history 관리를 위해 사용한다.

Rebase and merge
#Commit이 1개일 경우 base branch에 rebase 해준다.
```