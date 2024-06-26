# 웹 채팅의 구현 종류와 한계

http는 양방향이 되지 않는 모델이다.

request, response 형태로 단방향만 가능하다.

문제는 http에서 서버에서 클라이언트로 역으로 요청하는 건 불가능하다는 것이다.
Client만이 Server로 연락할 수 있고, Server는 Client의 요청을 응답하는 것만 가능하다.

## Polling
하나의 장치 (또는 프로그램)이 충돌 회피 또는 동기화 처리 등을 목적으로 다른 장치( 또는 프로그램)의 상태를 주기적으로 검사하여 일정한 조건을 만족할 때 송수신 등의 자료처리를 하는 방식을 말한다.

http 프로토콜에서 마치 통신하는 것처럼 느끼게 만드는 방법으로 가장 초기모델이다.

__나는 너를 ==계속해서== 관찰하겠다.__

1. 주기적으로 물어보므로 ==응답 간격을 일정하게 할 수 있다.==
2. 주기적으로 몰아서 물어보는 게 가능하므로 자동으로 ==배치프로세싱(일괄처리)== 되어서 DB 튜닝을 하는 효과가 나온다.
3. ==실시간으로 주는 건 불가능하다.== 실시간 효과를 내려면 간격을 줄여야 하지만 서버와 클라이언트 모두에게 부담된다.
4. ==보낼 데이터가 없어도 계속해서 데이터를 줘야 하므로== 서버의 리소스를 낭비하게 된다.


## Long Polling
클라이언트가 웹서버에 새로운 내용이 있는지 물어보았을 때 웹서버에 새로운 내용이 없다면 대답해주지 않다가 새로운 내용이 생기면 이때 대답해 주는 방식이다.

__나는 너랑 ==연결이 끊기지== 않을 거야__

Polling 방식에서 문제가 된 실시간성을 해결하기 위해 고안된 새로운 기법
Polling 방식처럼 무한히 물어보는 것은 동일하지만 Long polling은 일단 보내고 time out 될 때까지 무한정 기다린다는 것이다.

서버 측에서 연결이 오래되어 끊으려고 하면 다시 연결을 시도한다.
그 결과로 연결이 끊이지 않게 된다. 그래서 마치 실시간으로 데이터를 받는 느낌을 받게 된다.

1. ==항상 연결이 유지== 되어 있다.
2. 변경에 매우 민감하게 반응한다. ==사실상 실시간으로 통신이 가능==하다.
3. 데이터가 주어지는 즉시 바로바로 반응하고 보내므로 요청 간격이 줄어든다면 ==polling보다 훨씬 데이터를 많이 보내게 된다.==

데이터 이동이 활발하다면 주기적으로 한 번에 보내는 polling 방식보다 훨씬 더 많은 데이터를 보내게 된다.

## Socket
위에서 언급한 대로 Http 통신은 Client의 요청(request)이 있을 때만 Server가 응답(response)하여 처리를 한 후에 연결을 끊는 방식이다. 단방향 적 통신으로 Server가 Client로 요청을 보낼 수는 없다.

[Http 통신의 특징]
1. Client가 요청을 보내는 경우에만 Server가 응답하는 단방향 통신이다.
2. Server로부터 응답을 받은 후에는 연결이 바로 종료된다.
3. 실시간 연결이 아니고, 필요한 경우에만 Server로 요청을 보내는 상황에 유용하다.

__Socket__ 통신은 Server와 Client가 특정 Port를 통해 실시간으로 양방향 통신을 하는 방식이다.

Server 역시 Client로 요청을 보낼 수 있으며, 계속 연결을 유지하는 연결지향형 통신이기 때문에 실시간 통신이 필요한 경우에 자주 사용한다. 

[Socket 통신의 특징]
- Server와 Client가 계속 연결을 유지하는 양방향 통신이다.
- Server와 Client가 실시간으로 데이터를 주고받는 상황이 필요한 경우에 사용된다.
- 실시간 동영상 Streaming이나 온라인 게임 등의 경우에 자주 사용된다.

###### 추가 정리 소켓과 포트의 차이
__Host__
네트워크에 연결된 모든 종류의 장치를 노드(Node)라고 부르는데, 노드 중에서도 네트워크 주소(IP 주소)가 할당된 애들을 호스트(Host)라고 부른다. 인터넷에 연결돼 있으면 호스트라고 보면 된다. 호스트들끼리 서로 데이터를 주고받는다.

__네트워크 공간상에서 데이터를 주고받는다는 것은, 엄밀히 말하면 호스트의 프로세스까지 데이터가 오감을 의미한다.__

__포트(Port)__ : 네트워크를 통해 데이터를 주고받는 프로세스를 식별하기 위해 호스트 내부적으로 프로세스가 할당받는 고유한 값이다.

__소켓(Socket)__ : 프로세스가 네트워크를 통해서 데이터를 주고받으려면 반드시 열어야 하는 창구 같은 것이다.

소켓을 열기 위해선 호스트에 할당된 IP 주소, 포트 넘버, 프로토콜(Protocol) 등이 필요하며, 이 세 가지가 소켓을 정의한다.



출처 : [소켓(Socket) 포트(Port) 뜻과 차이점](https://blog.naver.com/PostView.nhn?blogId=myca11&logNo=221389847130&categoryNo=24&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)