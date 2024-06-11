## Layout

### Divider

- 문서의 영역을 나누어줍니다.
- 텍스트나,링크를 각각 명령별로도 나눌 수 있습니다.
- 줄을 그려서 해당 가로,글자별로 분리할 수 있습니다.
- 가로값이 기본입니다.

---

### API

#### className

- 클래스 네임을 지정할 수 있습니다.
- Type : string
- default : -

```js
import { Divider } from 'antd';

ReactDom.render(
  <>
    <Divider className="class"></Divider>
  </>,
);
```

#### dashed

- 구분선에 대시모양으로 변경 시켜줍니다.
- Type : boolean
- default : false

```js
import { Divider } from 'antd';

ReactDom.render(
  <>
    hello
    <Divider dashed></Divider>
    world
  </>,
);
```

#### orientation

- 구분선에 글을 추가할 수 있습니다.
- Type : left,right,center
- default : center

```js
import { Divider } from 'antd';

ReactDom.render(
  <>
    <Divider orientation="left">hello</Divider>
    <Divider orientation="right">world</Divider>
  </>,
);
```

#### style

- 구분선에 스타일 객체를 추가시켜줄 수 있습니다.
- Type : CSSProperties
- default : -

```js
import { Divider } from 'antd';

const hstyle = {
  color: "black"
};

ReactDOM.render(
  <>
    hello
    <Divider style={hstyle}></Divider>
    <Divider style={{color: "red"}></Divider>
    hello
  </>,
    document.getElementById("container"),
);
```

#### type

- 세로,가로를 설정할 수 있습니다.
- 세로의 default 길이는 글자 길이이고, 가로는 컴포넌트의 길이입니다.
- Type : vertical , horizontal
- default : horizontal

```js
import { Divider } from 'antd';

ReactDom.render(
  <>
    hello
    <Divider type="vertical">hello</Divider>
    world
    <Divider>hello</Divider>
    hello
  </>,
);
```
