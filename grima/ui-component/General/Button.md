## General

### Button

```js
import { Button } from 'antd';
```

### 5개의 버튼 타입이 있습니다.

- Primary Button : 주요행동을 표시합니다. 섹션안에는 하나의 기본버튼만 넣어주는것이 좋습니다.

```js
import { Button } from 'antd';
<Button type="primary"></Button>;
```

- Default Button : 우선 순위 없이 일반적인 버튼입니다.

```js
import { Button } from 'antd';

<Button></Button>;
```

- dashed button : 테두리가 대시모양으로 변경됩니다. 일반적으로 추가시켜준다는 의미로 사용됩니다.

```js
import { Button } from 'antd';

<Button type="dashed"></Button>;
```

- 텍스트 버튼 : 텍스트 타입 형태이지만 버튼형식도 사용할 수 있게 해줍니다.

```js
import { Button } from 'antd';
<Button type="text"></Button>;
```

- 링크 버튼 : 일반적인 텍스트가 하이퍼링크 사용한 스타일로 변경 됩니다.

```js
import { Button } from 'antd';
<Button type="link"></Button>;
```

---

### API

#### danger

- antd 4.0. 이후부터 이속성을 이용할 수 있습니다.
- 삭제나 승인같이 위험한 작업에 사용됩니다.
- Type : boolean
- default : false

```js
import { Button } from 'antd';

<Button danger></Button>;
```

#### ghost

- 배경을 투명하게 만들어줍니다.
- Type : boolean
- default : false

```js
import { Button } from 'antd';

<Button ghost>Default</Button>;
```

#### Disabled

- disabled를 적용시켜 선택 및 호버시 클릭불가능 표시를 해줍니다.
- Type : boolean
- default : false

```js
import { Button } from 'antd';

<Button type="dashed">Dashed</Button>//일반적인 버튼

<Button type="dashed" disabled>//disabled를 추가하였을때.
    Dashed(disabled)
</Button>
```

#### Loading

- 로딩시 해당 버튼에 원형이 회전기능을 주어 로딩중임을 보여줍니다.
- Type : boolean | {delay : number}
- default : false

```js
import { Button } from 'antd';
<Button type="primary" loading></Button>;
```

- 로딩 이벤트 주는법

```js
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class loadEvent extends React.Component {
  state = {
    loadings: [],
  };
  onClick = (e) => {
    this.setState(({ loadings }) => (loadings[0] = true));
  };
  render() {
    const { loadings } = this.state;
    return (
      <Button
        type="primary"
        loading={loadings[0]}
        icon={<PoweroffOutlined />}
        onClick={this.onClick}
      />
    );
  }
}

ReactDOM.render(<loadEvent />, document.getElementById('container'));
```

#### Icon

- 버튼 컴포넌트 내부에 아이콘을 넣을 수 있습니다, 아이콘 속성을 설정하거나 아이콘 컴포넌트를 버튼안에 넣어서 사용할 수 있습니다.
- 세밀하게 배치를 제어할 경우에는 아이콘 속성을 이용하는 것 보다 아이콘 컴포넌트를 버튼안에 넣어서 사용하는것이 좋습니다.
- [참조](https://ant.design/docs/spec/icon)
- Type : ReactNode
- default : -

```js
import { Button } from 'antd';
import { DotChartOutlined, SearchOutlined} from '@ant-design/icons';

<Button type="primary" shape="circle" icon={<SearchOutlined />} />
<Button type="primary" shape="circle" icon={<DotChartOutlined />} />
//
```

#### Size

- 3가지(Large,Default,Samll) 버튼 사이즈가 존재합니다.
- state값으로 크기를 지정해줄 수 있습니다.
- 버튼의 크기는 3가지로 불류되며, default가 32px로 +/- 8px로 large,small로 구별됩니다.
- Type : large | middle=default | small
- default : -

```js
state = {
    size : 'large',
}
<Button type="dashed" size={size}>
    Dashed
</Button>
```

#### Multiple Buttons

- 하나의 버튼 안에 여러개의 버튼을 넣어주기 위해서 사용됩니다.
- 프로그램을 이용할때 상단의 해당 프로그램을 속성을 넣어줄때 사용하는 버튼 디자인입니다.
- Dropdown을 이용하여 사용할 수 있습니다.

```js
import { Button, Menu, Dropdown } from 'antd'; //dropdown과 메뉴를 추가해주어야 합니다.

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu}>
  {' '}
  //dropdown을 선언한후 button을 둘러쌓야합니다.
  <Button>Actions</Button>
</Dropdown>;
```

#### Block Button

- 부모태그 넓이에 맞춰서 버튼의 넓이를 정해줍니다.
- 높이는 버튼의 높이로 지정되어 있습니다.
- Type : boolean
- default : false

```js
import { Button } from 'antd';

<Button block></Button>;
```

#### href

- 재지정할 경로를 버튼에 지정할 수 있습니다.
- Type : string
- default : -

```js
import { Button } from 'antd';

<Button href="www.naver.com"></Button>;
```

#### htmlType

- html에서 사용하는 원본 버튼을 생성시켜 줍니다.
- Type : string
- default : button

```js
import { Button } from 'antd';

<button htmlType='button'>
```

#### shape

- 원(circle),타원(round)을 설정 할 수 있습니다.
- Type : string
- default : -

```js
import { Button } from 'antd';

<button shape='circle'>
```

#### target

- a 태그와 동일하게 사용할 수 있습니다.
- href를 지정할때 사용할 수 있습니다.
- Type : string
- default : -
