## DataDisplay
[API - Avatar](###API-Avatar)

[API - API-Avatar.Group(4.5.0+)](###API-Avatar.Group(4.5.0+))

### Avatar
- 아바타는 사람이나 사물을 나타내는 데 사용할 수 있습니다.
- 이미지, `Icon`s 또는 문자를 지원합니다.

---
### API-Avatar
[Top](##DataDisplay)

[API - API-Avatar.Group(4.5.0+)](###API-Avatar.Group(4.5.0+))

#### icon
- 아바타 아이콘을 사용자가 정의할 수 있습니다.
- Type : ReactNode
- Default : -

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar icon={<UserOutlined />} />
      <Avatar>Paragraph Avatar</Avatar>
      <Avatar>User</Avatar>
    </div>
  </>,
  document.getElementById('container'),
);
```

#### shape
- 아바타의 테두리 모양을 정할 수 있는 속성입니다.
- Type : `circle` | `square`
- Default : `circle`

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar shape="square" icon={<UserOutlined />} />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### size
- 아바타의 크기를 지정할 수 있는 속성입니다.
- Type : number | `large` | `small` | `default`
- Default : `default`

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### src
- 아바타의 이미지로 사용할 이미지 주소를 지정할 수 있는 속성입니다.
- Type : string
- Default : -

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### srcSet
- 다양한 해상도에 따라 변경될 이미지 소스를 지정할 수 있는 속성입니다.
- Type : string
- Default : -

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar srcset="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### alt
- 이미지에 대한 설명을 정할 수 있는 속성입니다.
- Type : string
- Default : -

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar 
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="이미지입니다."
      />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### onError
- 이미지 로드시 에러가 발생할 경우를 지정할 수 있습니다.
- fallback 동작을 방지하기 위해 기본으로 false 값을 반환해야 합니다.
- Type : () => boolean
- Default : -

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar 
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="이미지입니다."
      onError={()=>false}
      />
    </div>
  </>,
  document.getElementById('container'),
);
```

#### gap
- 문자 아바타의 경우 아바타 내부의 문자 크기를 변경할 수 있는 속성입니다.
- Type : number
- Default : 4
- Version : 4.3.0

```js
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <div>
      <Avatar gap={1}>User</Avatar>
      <Avatar gap={2}>User</Avatar>
      <Avatar gap={3}>User</Avatar>
      <Avatar gap={4}>User</Avatar>
    </div>
  </>,
  document.getElementById('container'),
);
```

---

### API-Avatar.Group(4.5.0+)
[Top](##DataDisplay)

[API - Avatar](###API-Avatar)

- 아바타 그룹에서 최대 수를 넘는 경우 마지막에 위치에 아바타 그룹을 숫자로 표시해줍니다.

#### maxCount
- 아바타 그룹에서 표시할 아바타의 최대 수를 지정할 수 있는 속성입니다.
- Type : number
- Default : -

```js
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

class Demo extends React.Component {
  render() {
    return (
      <>
        <Avatar.Group
          maxCount={2}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### maxStyle
- 아바타 아이콘 그룹의 스타일을 지정할 수 있는 속성입니다.
- Type : CSSProperties
- Default : -

```js
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

class Demo extends React.Component {
  render() {
    return (
      <>
        <Avatar.Group
          maxCount={2}
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### maxPopoverPlacement
- 초과하는 아바타들을 마우스 호버시 팝오버 애니메이션을 통해 보여질 방향을 지정할 수 있습니다.
- Type : `top` | `bottom`
- Default : `top`

```js
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

class Demo extends React.Component {
  render() {
    return (
      <>
        <Avatar.Group
          maxCount={2}
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
          maxPopoverPlacement="bttom"
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```