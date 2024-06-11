## Layout

### Layout

- [API-Layout](##API-Layout)
- [API-Sider](##API-Sider)

#### Visualization rules

- 컴포넌트마다 색 블럭이 구별되어야합니다.
  - 배경색이 진한 색이면 현재페이지의 상위 navigation이 이러한 패턴을 사용할 수 있습니다.
- 폰트 강조
- The highlight match stick
- Enlarge the size of font

#### Component Overview

- Layout을 제외한 모든 영역은 Layout안에 포함되어야 합니다.
- Layout : 레이아웃의 묶음입니다. header,content,fotter,sider를 포함할 수도있고 레이아웃 스스로를 포함할 수 있습니다.
- Header : 최상단에 위치하는 기본 스타일입니다.
- Sider : 기본적인 함수와 사이드바의 기본 스타일입니다.
- Content : 내용을 포함하는 기본 스타일입니다.
- Footer : 바닥에 위치하는 기본 스타일입니다.

---

### API-Layout

- [Top](##Layout)
- [API-Sider](##API-Sider)

#### className

- Layout의 클래스명을 지정해줄 수 있습니다.
- Type : String
- default : -

```js
import { Layout } from 'antd';
<Layout className="layoutClass"></Layout>;
```

#### hasSider

- 사이드바를 포함여부를 작성합니다, 일반적으로는 표시할 필요없지만 서버사이드 스크립트에서 깜빡임을 숨기기 위해서 사용됩니다.
- Type : boolean
- default : -

```js
import { Layout } from 'antd';
<Layout hasSider></Layout>;
```

#### style

- 스타일을 설정할 수 있습니다.
- Type : CSSProperties
- default : -

```js
import {Layout} from 'antd';
const style ={
    width:"20px",
    height:"20px"
    border:"1px solid"
}
<Layout style = {{width:"20px", height:"20px" border:"1px solid"}}></Layout>
<Layout style = {style}></Layout>
```

---

### API-Sider

- [Top](##Layout)
- [API-Layout](##API-Layout)

#### breakpoint

- sider를 축소시킬때 원하는 크기를 지정하여 해당 크기 까지 축소하지 않습니다.
- Type : xs | sm | md | lg | xl | xxl
- default : -

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider breakpoint="sm"></Sider>
</Layout>;
```

#### className

- 해당 클레스명을 지정할 수 있습니다.
- Type : string
- default : -

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider className="siderClass"></Sider>
</Layout>;
```

#### collapsed

- 사이드바를 무너뜨린다는 개념입니다. 풀어 설명하면 사이드바를 삭제할지 안할지를 선택할 수 있습니다.
- Type : boolean
- default : -

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider collapsed></Sider>
</Layout>;
```

#### collapsedWidth

- collapsed의 길이는 collapsed일경우 해당 길이가 적용됩니다.
- 0으로 설정하면 특별한 트리거가 적용됩니다.(무너지는 기준이 되면 자연스럽게 길이가 감소합니다.)
- Type : number
- default : 80

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider collapsedWidth="0"></Sider>
</Layout>;
```

#### collapsible

- 사이드바가 닫혀질지 안닫혀질지를 선택할 수 있습니다.
- 아래에 버튼이 생기면서 아이콘만 남을지 안무너질지를 선택할 수 있습니다.
- Type : boolean
- default : false

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider collapsible></Sider>
</Layout>;
```

#### defaultCollapsed

- collapsed의 초기화를 할 수 있습니다.
- Type: boolean
- default : false

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider defaultCollapsed></Sider>
</Layout>;
```

#### reserveArrow

- 사이드바 우측에 닫기,열기 버튼이 생성됩니다.
- Type : boolean
- default : false

```js
import { Layout, Sider } from 'antd';
<Layout>
  <Sider reserveArrow></Sider>
</Layout>;
```

#### style

- 사이드바에 스타일을 적용할 수 있습니다.
- Type : CSSProperties
- default : -

```js
import { Layout, Sider } from 'antd';
const style = {
  backgroundColor = "black"
}

<Layout>
  <Sider style={style}></Sider>
</Layout>;
```

#### theme

- 테마를 설정할 수 있습니다.(밝음,어두움)
- `<Menu></Menu>`태그에도 설정할 수 있습니다.
- theme를 `<Menu></Menu>`가 우선으로 적용됩니다. `<Menu></Menu>`가 default일 경우 sidebar가 적용됩니다.
- Type : light | dark
- default : dark

```js
import { Layout, Sider } from 'antd';

<Layout>
  <Sider theme="light">
    <Menu theme="dark"></Menu>
  </Sider>
</Layout>;
```

#### trigger

- 임의로 트리거를 적용할 수 있습니다.
- Type : String | ReactNode
- default : -

```js
import { Layout, Sider } from 'antd';

class SiderTrigger extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  <Layout>
    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
    </Sider>
  </Layout>
}


ReactDOM.render(<SiderTrigger />,document.getElementById("container"));
```

#### width

- sider의 길이를 지정할 수 있습니다.
- Type : string | number
- default : 200

```js
import { Layout, Sider } from 'antd';

<Layout>
  <Sider width="300px"></Sider>
</Layout>;
```

#### onCollapse

- callback 함수입니다.
- 클릭했을경우 트리거나 작동방법을 레이아웃에 반환해줍니다.
- collapsed는 true,false로 나뉘어지며, type은 Responsive로 출력됩니다.
- Type : (collapsed , type) ={}
- default : -

```js
import { Layout, Sider } from 'antd';

<Layout>
  <Sider
    onBreakpoint={
      (collapsed,
      (type = {
        //broken logic
      }))
    }
  ></Sider>
</Layout>;
```

#### onBerakpoint

- callback 함수입니다.
- breakpoint가 적용되었을때 broken이 true,false로 반환합니다.
- Type : (broken) => {}
- default : -

```js
import { Layout, Sider } from 'antd';

<Layout>
  <Sider
    onBreakpoint={
      (broken = {
        //broken logic
      })
    }
  ></Sider>
</Layout>;
```

#### zeroWidthTriggerStyle

- collapsedWidth가 0 일때 적용될 트리거를 임의로 설정합니다.
- Type : object
- default : -

### breakPoint Width

xs: '480px'
sm: '576px'
md: '768px'
lg: '992px'
xl: '1200px'
xxl: '1600px'
