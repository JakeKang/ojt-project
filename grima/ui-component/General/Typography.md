## General

- [API-Text](###API-Text)
- [API-Title](###API-Title)
- [API-Paragraph](###API-Paragraph)

### Typography

- 글을 작성할때 단락,색상,크기,하이라이트 외에도 설정을 할 수 있습니다.
- 바디,헤더,타티틀,리스트 외에도 사용이 가능합니다,
- 단락을 나누어서 작성해야할 문서를 쉽게 사용할 수 있습니다.
- 복사,수정을 가능하게 하거나 텍스트를 줄일 수 있습니다.

### API-Text

- [TOP](##General)
- [API-Title](###API-Title)
- [API-Paragraph](###API-Paragraph)

#### code

- 코드 스타일로 지정할 수 있습니다.
- md 파일에서 코드를 작성할때 사용하는 ``과 똑같은 형태로 사용할 수 있습니다.
- Type : boolean
- default : false

```js
import { Typography } from  'antd'
const { Text } = Typography

<Text code>hello world!</Text>
```

#### copyable

- 작성한 텍스트를 복사 간편하게 복사할 수 있게 해줍니다,
- 텍스트 설정,카피,아이콘설정,툴팁설명이 가능합니다.
- 옵션으로 다양한 기능을 설정할 수 있습니다.
- Type : text : string , onCopy : function, icon :ReactNode, tooltips : [ReactNode,ReactNode]
- default : false

```js
import { Typography } from 'antd';
import { smileOutlined } from '@ant-design/icons';
const { Text, Paragraph } = Typography;

class CopyText extends React.Component {
  render() {
    return (
      <>
        <Text copyable>카피기능추가</Text>
        //우측에 버튼이 생기며 기본적인 형태입니다.
        <br />
        <Text copyable={{ text: 'Hello, Ant Design!' }}>카피값 변경</Text>
        //설정한 text값이 복사됩니다.
        <br />
        <Text copyable={{ icon: <SmileOutlined /> }}>아이콘 변경가능</Text>
        //기본아이콘이 아닌 아이콘을 새롭게 설정해줄 수 있습니다.
        <Text copyable={{ tooltips: ['click here', 'you clicked!!'] }}>
          툴팁 변경
        </Text>
        //hover시 click here 이 출력되고 클릭하면 your clicked라는 툴팁이 생성됩니다.
      </>
    );
  }
}

ReactDOM.render(<CopyText />, document.getElementById('container'));
```

#### delete

- 취소선을 그어줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
import { Text } from 'antd'

<Text delete></Text>
```

#### disabled

- 복사를 불가능하게합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text disabled></Text>
```

#### editable

- 텍스트를 수정가능하게 변경해줍니다.
- 수정을 하기위해서는 따로 함수를 생성해주어야합니다.
- Type : boolean | {editing : boolean, onStart : function ,onChange : function(string)}

```js
import {Typographt} from 'antd
const { Text } = Typography

class Demo extends React.Component {
  state = {
    str: 'This is an editable text.',
  }

  onChange = str => {
    console.log('Content change:', str)
    this.setState({ str })
  }
  render() {
    return (
      <>
        <Text editable={{ onChange: this.onChange }}>{this.state.str}</Text>
   </>
    )
  }
}

ReactDOM.render(<Demo />,   document.getElementById("container"))

```

#### onChange

- edit를 할경우 트리거를 지정할수 있습니다.
- Type : function(string)
- default : -

```js
onChange = (str) => {
  console.log('Content change:', str);
  this.setState({ str });
};
```

#### ellipsis

- 텍스트가 화면을 넘어서면은 해당 화면만큼 텍스트를 보여줍니다.
- Type : boolean
- default : false

#### mark

- 형광펜으로 그은거 처럼 텍스트 배경에 색을 추가시켜줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text mark></Text>
```

#### underline

- 밑줄을 추가합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text underline></Text>
```

#### keyboard

- 키보드형태로 변경시켜 줍니다.
- 코드설정과 유사하게 생겼습니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text keyboard></Text>
```

#### strong

- 글씨체를 굵게 해줍니다.(bold)
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text strong></Text>
```

#### type

- 해당 스트링의 타입을 지정해줍니다.
- Type : secondary | warning | danger
- default : -

```js
import {Typographt} from 'antd
const { Text } = Typography

<Text type='danger'></Text>
```

---

### API-Title

- [TOP](##General)
- [API-Text](###API-Text)
- [API-Paragraph](###API-Paragraph)

- Head에넣을 타이틀을 지정할 수 있습니다.

#### code

- 코드 스타일로 지정할 수 있습니다.
- md 파일에서 코드를 작성할때 사용하는 ``과 똑같은 형태로 사용할 수 있습니다.
- Type : boolean
- default : false

```js
import { Typography } from  'antd'
const { Title } = Typography

<Title code>hello world!</Title>
```

#### copyable

- 작성한 타이틀을 복사 간편하게 복사할 수 있게 해줍니다,
- 텍스트 설정,카피,아이콘설정,툴팁설명이 가능합니다.
- 옵션으로 다양한 기능을 설정할 수 있습니다.
- Type : text : string , onCopy : function, icon :ReactNode, tooltips : [ReactNode,ReactNode]
- default : false

```js
import { Typography } from 'antd';
import { smileOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;

class CopyText extends React.Component {
  render() {
    return (
      <>
        <Title copyable>카피기능추가</Title>
        //우측에 버튼이 생기며 기본적인 형태입니다.
        <br />
        <Title copyable={{ text: 'Hello, Ant Design!' }}>카피값 변경</Title>
        //설정한 Title값이 복사됩니다.
        <br />
        <Title copyable={{ icon: <SmileOutlined /> }}>아이콘 변경가능</Title>
        //기본아이콘이 아닌 아이콘을 새롭게 설정해줄 수 있습니다.
        <Title copyable={{ tooltips: ['click here', 'you clicked!!'] }}>
          툴팁 변경
        </Title>
        //hover시 click here 이 출력되고 클릭하면 your clicked라는 툴팁이 생성됩니다.
      </>
    );
  }
}

ReactDOM.render(<CopyText />, document.getElementById('container'));
```

#### delete

- 취소선을 그어줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
import { Title } from 'antd'

<Title delete></Title>
```

#### disabled

- 복사를 불가능하게합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Title } = Typography

<Title disabled></Title>
```

#### editable

- 텍스트를 수정가능하게 변경해줍니다.
- 수정을 하기위해서는 따로 함수를 생성해주어야합니다.
- Type : boolean | {editing : boolean, onStart : function ,onChange : function(string)}

```js
import {Typographt} from 'antd
const { Title } = Typography

class Demo extends React.Component {
  state = {
    str: 'This is an editable Title.',
  }

  onChange = str => {
    console.log('Content change:', str)
    this.setState({ str })
  }
  render() {
    return (
      <>
        <Title editable={{ onChange: this.onChange }}>{this.state.str}</Title>
   </>
    )
  }
}

ReactDOM.render(<Demo />,   document.getElementById("container"))

```

#### ellipsis

- 타이틀이 화면을 넘어서면은 해당 화면만큼 타이틀을 보여줍니다.
- Type : boolean | rows: number, expandable: boolean, onExpand: function(event), onEllipsis: function(ellipsis)
- default : false

```js
class Demo extends React.Component {
  state = {
    rows: 1,
  };

  onChange = (rows) => {
    this.setState({ rows });
  };

  render() {
    const { rows } = this.state;
    const article = '';
    return (
      <>
        <Slider value={rows} min={1} max={10} onChange={this.onChange} />
        <Title
          ellipsis={{
            rows, //길이만큼 출력
            expandable: true, // 확장버튼 추가
            onEllipsis: (ellipsis) => {
              console.log('Ellipsis changed:', ellipsis);
            },
          }}
          title={`${article}+${suffix}`} //초기에 출력할 디자인 설정.
        >
          {article}
        </Title>
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### level

- Title 폰트 크기를 조정합니다.
- level은 4까지 존재하며, 숫자가 높을수록 작아집니다.
- Type : number(1~4)
- default : 1

```js
import {Typographt} from 'antd
const { Title } = Typography
<Title level={2}></Title>
```

#### onChange

- edit를 할경우 트리거를 지정할수 있습니다.
- Type : function(string)
- default : -

```js
onChange = (str) => {
  console.log('Content change:', str);
  this.setState({ str });
};
```

#### mark

- 형광펜으로 그은거 처럼 텍스트 배경에 색을 추가시켜줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Title } = Typography

<Title mark></Title>
```

#### underline

- 밑줄을 추가합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const { Title } = Typography

<Title underline></Title>
```

#### type

- 해당 스트링의 타입을 지정해줍니다.
- Type : secondary | warning | danger
- default : -

```js
import {Typographt} from 'antd
const { Title } = Typography

<Title type='danger'></Title>
```

---

### API-Paragraph

- [TOP](##General)
- [API-Text](###API-Text)
- [API-Title](###API-Title)

- 딘락을 지정할 수 있습니다.

#### code

- 코드 스타일로 지정할 수 있습니다.
- md 파일에서 코드를 작성할때 사용하는 ``과 똑같은 형태로 사용할 수 있습니다.
- Type : boolean
- default : false

```js
import { Typography } from  'antd'
const {  Paragraph } = Typography

<Paragraph code>hello world!</Paragraph>
```

#### copyable

- 작성한 텍스트를 복사 간편하게 복사할 수 있게 해줍니다,
- 텍스트 설정,카피,아이콘설정,툴팁설명이 가능합니다.
- 옵션으로 다양한 기능을 설정할 수 있습니다.
- Type : Paragraph : string , onCopy : function, icon :ReactNode, tooltips : [ReactNode,ReactNode]
- default : false

```js
import { Typography } from 'antd';
import { smileOutlined } from '@ant-design/icons';
const {  Paragraph } = Typography;

class Copy Paragraph extends React.Component {
  render() {
    return (
      <>
        < Paragraph copyable>카피기능추가</ Paragraph>
        //우측에 버튼이 생기며 기본적인 형태입니다.
        <br />
        < Paragraph copyable={{  text: 'Hello, Ant Design!' }}>카피값 변경</ Paragraph>
        //설정한  Paragraph값이 복사됩니다.
        <br />
        < Paragraph copyable={{ icon: <SmileOutlined /> }}>아이콘 변경가능</ Paragraph>
        //기본아이콘이 아닌 아이콘을 새롭게 설정해줄 수 있습니다.
        < Paragraph copyable={{ tooltips: ['click here', 'you clicked!!'] }}>
          툴팁 변경
        </ Paragraph>
        //hover시 click here 이 출력되고 클릭하면 your clicked라는 툴팁이 생성됩니다.
      </>
    );
  }
}

ReactDOM.render(<Copy Paragraph />,   document.getElementById("container"));
```

#### delete

- 취소선을 그어줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
import {  Paragraph } from 'antd'

< Paragraph delete></ Paragraph>
```

#### disabled

- 단락을 선택 및 드래그를 불가능하게합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

< Paragraph disabled></ Paragraph>
```

#### editable

- 텍스트를 수정가능하게 변경해줍니다.
- 수정을 하기위해서는 따로 함수를 생성해주어야합니다.
- Type : boolean | {editing : boolean, onStart : function ,onChange : function(string)}

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

class Demo extends React.Component {
  state = {
    str: 'This is an editable  Paragraph.',
  }

  onChange = str => {
    console.log('Content change:', str)
    this.setState({ str })
  }
  render() {
    return (
      <>
        < Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</ Paragraph>
      </>
    )
  }
}

ReactDOM.render(<Demo />,   document.getElementById("container"))

```

#### onChange

- edit를 할경우 트리거를 지정할수 있습니다.
- Type : function(string)
- default : -

```js
onChange = (str) => {
  console.log('Content change:', str);
  this.setState({ str });
};
```

#### ellipsis

- 텍스트가 화면을 넘어서면은 해당 화면만큼 텍스트를 보여줍니다.
- Type : boolean rows: number,
  expandable: boolean,
  suffix: string,
  symbol: React.ReactNode,
  onExpand: function(event),
  nEllipsis: function(ellipsis)
- default : false

```js
class Demo extends React.Component {
  state = {
    rows: 1,
  };

  onChange = (rows) => {
    this.setState({ rows });
  };

  render() {
    const { rows } = this.state;
    const article = '';
    return (
      <Paragraph>
        <Slider value={rows} min={1} max={10} onChange={this.onChange} />
        <Title
          ellipsis={{
            rows, //길이만큼 출력
            expandable: true, // 확장버튼 추가
            suffix: '꼬릿말', // 접미사
            onEllipsis: (ellipsis) => {
              console.log('Ellipsis changed:', ellipsis);
            },
          }}
          title={`${article}+${suffix}`} //초기에 출력할 디자인 설정.
        >
          {article}
        </Title>
      </Paragraph>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### mark

- 형광펜으로 그은거 처럼 텍스트 배경에 색을 추가시켜줍니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

< Paragraph mark></ Paragraph>
```

#### underline

- 밑줄을 추가합니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

< Paragraph underline></ Paragraph>
```

#### keyboard

- 키보드형태로 변경시켜 줍니다.
- 코드설정과 유사하게 생겼습니다.
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

<Paragraph keyboard></Paragraph>
```

#### strong

- 글씨체를 굵게 해줍니다.(bold)
- Type : boolean
- default : false

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

<Paragraph strong></Paragraph>
```

#### type

- 해당 스트링의 타입을 지정해줍니다.
- Type : secondary | warning | danger
- default : -

```js
import {Typographt} from 'antd
const {  Paragraph } = Typography

<Paragraph type='danger'></Paragraph>
```
