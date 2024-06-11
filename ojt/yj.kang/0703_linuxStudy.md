### 0703 Linux Study

#### Linux 란?
##### 1.개요
> 커널의 일종인 리눅스 커널, 또는 리눅스 커널을 사용하는 운영체제를 가리키는 말이다.
> 소스 코드가 공개되어 있는 대표적인 오픈소스 소프트웨어이다.

#### 주요 명령어
##### 1. pwd (print working directory)
+ 현재 작업중인 디렉토리 정보 출력
```
$ pwd
/home/example
```

##### 2. cd (change directory)
+ 경로 이동
+ 절대경로와 상대경로로 이동 가능하다.
```
$ cd /home/example/ojt
$ pwd
/home/example/ojt
#절대경로 이동
#최상위 디렉토리(/) 부터 목표 디렉토리까지 가는 경로를 전부 기술하는 방식

$ cd ..
$ pwd
/home/example
#상대경로 이동
#현재 자신이 있는 위치를 기준으로 이동 (자신의 위치는 .(마침표)로 표기)
#이전(상위) 디렉토리는 ..으로 표기
```

##### 3. ls (list)
+ 디렉토리 목록 확인
```
$ ls
yj.kang linuxStudy WebBasic
#현재 디렉토리 안에 있는 디렉토리 목록
```
###### 옵션
 기본적으로 명령어는 조합해서 사용할 수 있다.
+ ls -a : ==숨겨진 파일이나 디렉토리==도 보여준다.
+ ls -l : ==자세한 내용==을 출력한다 (권한, 파일 수, 소유자, 이름, 수정일자 등)
+ ls -S : ==파일 크기 순==으로 정렬하여 출력한다.
+ ls -r : ==거꾸로== 출력한다 (기본 ls명령어는 알파벳 순서이다.)
+ ls -R : ==하위 디렉토리==까지 출력한다.
+ ls -h : K, M, G 단위를 사용하여 ==파일 크기를 보기 좋게== 출력한다.
+ ls -lu : u옵션을 사용하면 ==atime(접근시간)== 을 확인할 수 있다.
+ ls -lc : c옵션을 사용하면 ==ctime(변경시간)== 을 확인할 수 있다.

#### 4. cp (copy)
+ 파일 혹은 디렉토리를 복사
+ 디렉토리를 복사할때는 -r 옵션을 주어야한다.
```
$ ls
testdir/ testfile

$ cp testfile testfile_cp
$ ls
testdir/ testfile testfile_cp
#파일을 지정한 이름으로 복사

$ cp -r testdir testdir_cp
$ ls
testdir/ testdir_cp/ testfile testfile_cp
#디렉토리를 지정한 이름으로 복사
```

#### 5. mv (move)
+ 파일 혹은 디렉토리 이동
+ 원하는 위치로 이동할때도 사용하지만, 이름을 변경하는 용도로도 사용한다.
+ cp 와 달리 디렉토리를 이동할때 별다른 옵션이 필요 없다.
```
$ ls
testdir/ testfile

$ mv testfile testfile_mv
$ ls
testdir/ testfile_mv
#이름 변경

$ testfile_mv testdir/
$ ls
testdir/

$ ls testdir/
testfile
# 파일 이동
```

#### 6. mkdir (make directory)
+ 디렉토리 생성
+ -p 옵션을 통해 하위 디렉토리까지 한 번에 생성 가능하다.
```
$ ls
testfile

$ mkdir testdir
$ ls
testdir/ testfile
#디렉토리 생성

$ mkdir -p a/b/c
$ ls -R a/

a:
b/

a/b:
c/

a/b/c:
#하위 디렉토리까지 한 번에 생성
```

#### 7. rm (remove)
+ 파일이나 디렉토리를 삭제
+ 디렉토리를 삭제할때는 -r 옵션을 주어야 한다. 
+ -f 옵션을 이용하면 ==사용자에게 삭제 여부를 묻지 않고 바로 삭제==한다.
+ ==디렉토리를 삭제할때는 하위 디렉토리까지 모두 삭제==되므로 유의해야한다.

```
$ ls
testdir/ testfile1 testfile2

$ rm -f testfile1
$ ls
testdir/ testfile2
#삭제 여부를 묻지 않고 파일 삭제

$ rm -rf testdir/
$ ls
testfile2
#삭제 여부를 묻지 않고 디렉토리 삭제
```

#### 8. touch
+ 파일이나 디렉토리의 최근 업데이트 일자를 현재 시간으로 변경한다.
+ ==파일이나 디렉토리가 존재하지 않으면 빈 파일을 만든다.==
```
$ ls -l
total 0
-rw-r--r--(권한) 소유자 날짜 0 7월 3일 13:23 testfile1

$ touch testfile1
-rw-r--r--(권한) 소유자 날짜 0 7월 3일 13:25 testfile1
#최근 업데이트 일자를 현재 시간으로 변경

$ touch testfile2
-rw-r--r--(권한) 소유자 날짜 0 7월 3일 13:25 testfile1
-rw-r--r--(권한) 소유자 날짜 0 7월 3일 13:27 testfile2
#testfile2 라는 빈 파일을 생성하고 업데이트 일자를 현재 시간으로 변경
```

#### 9. cat (concatenate)
+ 단순히 파일의 내용을 출력할 수 있다.
+ 파일 여러개를 합쳐서 하나의 파일로 만들 수 있다.
+ 기존의 한 파일의 내용을 다른 파일에 덧붙일수 있다.
+ 새로운 파일을 만들 수 있다.
```
$ ls
file1  file2  file3


$ cat file1
1
#file1의 내용

$ cat file2
2
#file2의 내용

$ cat file3
3
#file3의 내용

$ cat file1 file2 > file1_2
$ ls
file1  file1_2  file2  file3
#file1과 file2의 내용을 합쳐 file1_2에 저장

$ cat file1_2
1
2
#합쳐진 file1과 file2의 내용

$ cat file1 >> file2
$ cat file2
2
1
# file1의 내용을 file2 뒤에 덧붙인다.

$ cat > file4
hello
world
#작성이 끝나면 ctrl +d 로 파일 저장
# 새로운 file4를 생성 내용은 "hello, world"

$ cat file4
hello
world
#file4 내용 출력
```

#### 10. head
+ ==파일의 앞부분을 보고싶은 줄 수만큼== 보여준다.
+ 옵션을 지정하지 않으면 파일 상위 10줄을 보여준다.
```
$ cat testfile
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
# testfile의 전체내용

$ head -3 testfile
1
2
3
#testfile의 상위 3줄만 출력

$ head testfile
1
2
3
4
5
6
7
8
9
10
#옵션을 지정하지 않았으므로 testfile의 상위 10줄 출력
```

#### 11. tail
+ ==파일의 뒷부분을 보고싶은 줄 수만큼== 보여준다.
+ 옵션을 지정하지 않으면 파일 하위 10줄을 보여준다.
+ -F 옵션을 사용하면 파일 내용을 화면에 계속 띄워주게 되고 새롭게 업데이트 된 내용을 갱신해준다.
```
$ cat testfile
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
#testfile의 전체내용

$ tail -3 testfile
13
14
15
#testfile의 하위 3줄만 출력한다.

$ tail testfile
6
7
8
9
10
11
12
13
14
15
#옵션을 지정하지 않았으므로 testfile의 하위 10줄 출력

$ tail -F testfile
6
7
8
9
10
11
12
13
14
15
#명령어가 종료되지 않고 계속 해당 화면을 출력하며, 파일 내용 변경시 자동으로 갱신해준다.
```
#### 12. find
+ 특정 파일이나 디렉토리를 검색한다.
> find [검색경로] -name [파일명]
```
$ ls
dir1/  dir3/  file1  file3  picture1.jpg  picture3.jpg
dir2/  dir4/  file2  file4  picture2.jpg  picture4.jpg


$ find ./ -name 'file1'
./file1
#file1을 검색

$ find ./ -name "*.jpg"
./picture1.jpg
./picture2.jpg
./picture3.jpg
./picture4.jpg
#확장자가 .jpg인 파일을 검색
```
###### 옵션
```
$ find ./ -name "*.jpg" -exec rm {} \;
$ ls
dir1/  dir2/  dir3/  dir4/  file1  file2  file3  file4
#-exec 옵션을 사용하면 지정된 파일만 찾아서 바로 삭제할 수 있다.
```
```
$ find ./ -type d
./
./dir1
./dir2
./dir3
./dir4
#디렉토리만 검색 -type d

$ find ./ -type f
./file1
./file2
./file3
./file4
#파일만 검색 -type f
```
```
$ find ./ -type f | wc -l
4
#조건에 맞는 파일 혹은 디렉토리가 몇개 존재하는지 숫자로 알 수 있다.
```
-----
#### SSH 란?
##### 1.개요
> 시큐어 셸(Secure Shell, SSH)은 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해 주는 응용 프로그램 또는 그 프로토콜을 가리킨다.

#### 1. SSH 접속방법
```
$ ssh 사용자명@도메인(또는 IP주소)
#22번포트(기본값)을 사용하는 경우

$ ssh -p 포트번호 사용자명@도메인(또는 IP주소)
#사용자 지정 포트를 사용하는 경우
```
#### 2. SSH에서 자주 사용하는 명령어
```
$ cat /etc/passwd
#계정 목록 확인

$ useradd yj.kang
#계정 추가

$ passwd yj.kang
#해당 계정에 비밀번호 부여

$ pwd
#현재 위치의 절대 경로 보기

$ chown name:name /home/name/www
#파일/디렉토리 소유권 수정

$ chmod 744 ./name.php
#파일/디렉토리 권한 수정

$ grep "검색할 내용" /home/name/www (검색할 대상 디렉토리 경로)
# -r 옵션을 사용하면 대상의 모든 하위 디렉토리 포함
#파일 내용 검색

권한의 이미 차이
#1. 파일에 대한 권한
r : 파일을 읽을 수 있는 권한
w : 파일을 수정할 수 있는 권한
x : 파일을 실행할 수 있는 권한

#2. 디렉토리에 대한 권한
r : 디렉토리 안에 1s CMD 수행할 수 있는 권한
w : 디렉토리 안에 파일을 삭제 또는 생성할 수 있는 권한
x : 디렉토리 안에 cd CMD 수행할 수 있는 권한
```
------

#### Vim 에디터 단축키
```
i
# 현재 줄, 커서에서 insert 모드로 전환

w
# 문서 저장하기

q
# 현재 문서 닫기

dd
#현재 커서가 위치한 라인 삭제

G
#문서 마지막으로 이동

$
#현재 커서가 위치한 라인의 마지막으로 이동

^
#현재 커서가 위치한 라인의 처음으로 이동
```