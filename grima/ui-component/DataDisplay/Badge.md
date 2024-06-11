## DataDisplay
[API - Badge](###API-Badge)

[API - Badge.Ribbon(4.5.0+)](###API-Badge.Ribbon(4.5.0+))

### Badge
- UI요소에 대해 작은 숫자값 또는 상태를 보여줍니다.

---

### API-Badge
[Top](##DataDisplay)

[API - Badge.Ribbon(4.5.0+)](###API-Badge.Ribbon(4.5.0+))

#### color
- 점 스타일의 뱃지의 색상을 지정할 수 있는 속성입니다.
- Type : string
- Default : -

```js
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div>
    <Badge color="blue">
      <a href="#" className="head-example" />
    </Badge>
    <Badge color="red">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

#### count
- 뱃지에 상태를 숫자로 표시할 수 있습니다.
- Type : ReactNode
- Default : -

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

#### dot
- `count` 대신에 점으로 표시할지를 지정할 수 있습니다.
- Type : boolean
- Default : false

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge dot={true}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

#### offset
- 뱃지가 표시될 위치를 지정할 수 있는 속성입니다.
- Type : [number, number]
- Default : -

```js
import { Badge } from 'antd';

ReactDOM.render(
  <>
    <Badge count={5} offset={[10, 10]}>
      <a href="#" className="head-example" />
    </Badge>
  </>,
  document.getElementById('container'),
);
```

#### overflowCount
- 뱃지에 표시될 `count`의 최대값을 지정할 수 있는 속성입니다.
- Type : number
- default : 99

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge count={99}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={100}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

#### showZero
- 뱃지에 `count`가 `0`일때의 표시 여부를 지정할 수 잇는 속성입니다.
- Type : boolean
- Default : false

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

#### status
- 뱃지에 상태에 따라 다른 색상의 점을 표시할 수 있습니다.
- Type : `succes` | `processing` | `default` | `error` | `warning`
- Default : -

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
  </div>,
  document.getElementById('container'),
);
```

#### text
- `status`를 설정한 경우 해당 상태를 텍스트로도 표시 해줄지를 정할 수 있는 속성입니다.
- Type : ReactNode
- Default : -

```js
import { Badge } from 'antd';

ReactDOM.render(
  <div>
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>,
  document.getElementById('container'),
);
```

#### title
- 뱃지에 마우스 호버시 보여질 뱃지의 타이틀을 지정할 수 있는 속성입니다.
- Type : string
- Defulat : -

```js
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div>
    <Badge color="blue" title="알림뱃지입니다.">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  document.getElementById('container'),
);
```

---

### API-Badge.Ribbon(4.5.0+)
[Top](##DataDisplay)

[API - Badge](###API-Badge)

- 리본 형태로 뱃지를 보여줄 수 있습니다.

#### color
- 리본의 색상을 지정할 수 있는 속성입니다.
- Type : string
- Default : -

```js
import { Badge, Card } from 'antd';

ReactDOM.render(
  <Badge.Ribbon color="red">
    <Card>And raises the spyglass.</Card>
  </Badge.Ribbon>,
  document.getElementById('container'),
);
```

#### placement
- 리본이 달릴 위치를 지정할 수 있는 속성입니다.
- Type : `start` | `end`
- Default : `end`

```js
import { Badge, Card } from 'antd';

ReactDOM.render(
  <Badge.Ribbon color="red" placement="start">
    <Card>And raises the spyglass.</Card>
  </Badge.Ribbon>,
  document.getElementById('container'),
);
```

#### text
- 리본에 들어갈 텍스트를 지정할 수 있는 속성입니다.
- Type : ReactNode
- Default : -

```js
import { Badge, Card } from 'antd';

ReactDOM.render(
  <Badge.Ribbon color="red" text="리본에 들어갈 텍스트 입니다.">
    <Card>And raises the spyglass.</Card>
  </Badge.Ribbon>,
  document.getElementById('container'),
);
```