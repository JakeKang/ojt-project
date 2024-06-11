### Navigation

- [API-Dropdwon](###API-Dropdwon)
- [API-Dropdwon.Button](###API-Dropdwon.Button)

#### Dropdown

- 드랍다운 리스트를 생성합니다.
- 선택한 옵션에서 옵션의 세부정보를 래핑하여 많은 목록을 보여주기위해서 사용합니다.
- 호버나,클릭이벤트로 이것을 작동시킬 수 있습니다.

---

### API-Dropdown

- [Top](##Navigation)
- [API-Dropdwon.Button](##API-Dropdwon.Button)

#### arrow

- dropdown이벤트시 해당 박스와 버튼쪽 테두리에 화살표가 생깁니다.
- Type : boolean
- default : false

```js
import { Menu, Dropdown } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown arrow overlay={menu}>
  <Button>Items</Button>
</Dropdown>;
```

#### disabled

- disabled를 적용시켜 선택 및 호버시 클릭불가능 표시를 해줍니다.
- 배경색이 회색으로 변합니다.
- Type : boolean
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown disabled overlay={menu}>
  <Button>Items</Button>
</Dropdown>;
```

#### getPopupContainer

- 드랍다운 메뉴를 컨테이너를 설정합니다.
- 기본값으로 div태그로 생성되어 있습니다.
- Type : function(triggerNode)
- default : ()=>document.body

#### overlay

- dropdown하면 아래에 생성될 리스트를 출력해줍니다.
- Type : Menu | ()=>Menu
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu}>
  <Button>Items</Button>
</Dropdown>;
```

#### overlayClaaName

- dropdown의 부모요소의 클래스명을 지정할 수 있습니다.
- Type : String
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} overlayCalssName="thisIsOverlayClassName">
  <Button>Items</Button>
</Dropdown>;
```

#### overlay Style

- overlay의 스타일을 설정할 수 있습니다.
- 내부의 아이템은 스타일이 적용 안됩니다.
- Type : object
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} style={backgroundColor:"green"}>
  <Button>Items</Button>
</Dropdown>;
```

#### placement

- overlay박스의 위치를 선정할 수 있습니다.
- 좌측,우측 정렬은 모서리를 기준으로 정렬 됩니다.
- Type : String (bottomLeft,bottomCneter,bottomRight,topLeft,topCenter,topRight)
- default : bottomLeft

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} placement="topCenter">
  <Button>Items</Button>
</Dropdown>;
```

#### trigger

- dropdown의 메뉴가 어떤식으로 작동할지를 선택할 수 있습니다.
- contextMenu는 선택되어진 위치에서 아이템리스트가 출력이 됩니다. 우클릭으로 이벤트를 실행할 수 있습니다.
  - {["contextMenu"]}
- Type : Array<click|hover|contextMenu>
- default : [hover]

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} trigger="click">
  <Button>click</Button>
</Dropdown>
<Dropdown overlay={menu} trigger={["contextMenu"]}>
  <Button>contextMenu</Button>
</Dropdown>
```

#### visible

- dropdown내부의 아이템들이 보여질지 안보여질지를 선택할 수 있습니다.
- Type : boolean
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} visible>
  <Button>Items</Button>
</Dropdown>;
```

#### onVisibleChange

- dropdown의 내부의 아이템이 보여질때와 안보여질때에 따라서 함수를 적용할 수 있습니다.
- Type : function(visible)
- default : -

```js
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

<Dropdown overlay={menu} onVisibleChange={(true) => console.log('hello')}>
  //내부의 함수가 보여지면 hello가 찍힙니다.
  <Button>Items</Button>
</Dropdown>;
```

---

### API-Dropdwon.Button

- [Top](##Navigation)
- [API-Dropdwon.Button](##API-Dropdwon.Button)
- Dropdwon.Button은 생성시 우측에 ... 버튼이 생성되며, 해당 버튼에서만 dropdown이벤트가 적용됩니다.

#### disabled

- dropdownItem을 disabled를 적용시켜 선택 및 호버시 클릭불가능 표시를 해줍니다.
- Type : boolean
- default : -

```js
import { Menu, Dropdown } from 'antd';
const menu = (
  <Menu>
    <Menu.Item disabled>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton disabled overlay={menu}>
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### icon

- Type : ReactNode
- default : -

```js
import { Menu, Dropdown } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item icon={<SlidersOutlined />}>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton icon={<SliderOutlined />} overlay={menu}>
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### overlay

- Type : Menu | ()=>Menu
- default : -

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu}>Items</DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### placement

- overlay박스의 위치를 선정할 수 있습니다.
- 좌측,우측은 오른쪽 ...부분의 좌측모서리를 기준으로 나누어집니다.
- Type : String (bottomLeft,bottomCneter,bottomRight,topLeft,topCenter,topRight)
- default : bottomLeft

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu} size="bottomLeft">
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### size

- Button의 크기를 조절할 수 있습니다.
- Type : string (large | middle | small)
- default : default

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu} size="large">
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### trigger

- dropdown의 메뉴가 어떤식으로 작동할지를 선택할 수 있습니다.
- contextMenu는 선택되어진 위치에서 아이템리스트가 출력이 됩니다. 우클릭으로 이벤트를 실행할 수 있습니다.
- Type : Array<click|hover|contextMenu>
- default : [hover]

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu} trigger="click">
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### type

- 버튼의 테두리 타입을 설정할 수 있습니다.(General>Button.md참조)
- Type : string(dash | ghost | primary)
- default : default

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu} type="dashed">
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### visible

- dropdown의 내부가 보여질지 안보여질지를 선택할 수 있습니다.
- Type : boolean
- default : -

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton overlay={menu} visible>
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### onClick

- onClick의 이벤트를 실행할 수 있습니다.
- 영역은 우측 ... 부분이 아니라 좌측 텍스트가 있는 부분에서 클릭 이벤트가 실행됩니다.
- Type : function
- default : -

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton
      overlay={menu}
      type="dashed"
      onClick={() => console.log('hello~!')}
    >
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### onVisibleChange

- dropdown의 내부의 아이템이 보여질때와 안보여질때에 따라서 함수를 적용할 수 있습니다.
- dropdwon의 내부의 아이템이 보여야 하므로, 좌측 텍스트를 눌러도 이벤트가 실행되지 않습니다.
- Type : function(visible)
- default : -

```js
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <DropdownButton
      overlay={menu}
      type="dashed"
      onVisibleChange={(ture) => console.log('hello~!')} //우측 ...버튼을 누를경우 hellow가 찍힙니다.
    >
      Items
    </DropdownButton>
  </>,
  document.getElementById('container'),
);
```

#### buttonsRender

- DropdownButton의 내부를 커스텀할 수 있습니다.
- Type : ([buttons : ReactNode[]])=>ReactNode
- default : -

```js
import { Menu, Dropdown, Tooltip } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <Dropdown.Button
      overlay={menu}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton, { loading: true }),
      ]}
    >
      With Tooltip
    </Dropdown.Button>
  </>,
  document.getElementById('container'),
);
```
