## DataDisplay
[API - Collapse](##API-Collapse)

[API - Collapse.Panel](##API-Collapse.Panel)

### Collapse
- 접거나 펼칠 수 있는 컨텐츠 영역입니다.
- 페이지를 깔끔하게 유지하기 위해 복잡한 영역을 그룹화하거나 숨기는 데 사용할 수 있습니다.

---

### API-Collapse
[Top](##DataDisplay)

[API - Collapse.Panel](##API-Collapse.Panel)

#### activeKey
- `Key`를 이용해 펼칠 컨텐츠를 지정할 수 있습니다.
- Type : string[] | string, number[] | number
- Default : 기본값은 없지만 `accordion` 에서는 첫 번째 패널이 기본값입니다.

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse activeKey={1}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### defaultActiveKey
- `Key`를 이용해 기본적으로 펼쳐져있을 컨텐츠를 지정할 수 있습니다.
- Type : string[] | string, number[] | number
- Default : -

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={2}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### bordered
- 패널의 테두리 속성을 지정할 수 있는 속성입니다.
- Type : boolean
- Default : true

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse bordered={false}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### accordion
- 한 번에 하나의 패널만 펼칠 수 있는 속성을 지정할 수 있습니다.
- Type : boolean
- Default : true

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse accordion={true}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### onChange
- 펼친 패널이 변경될때 함수를 Callback 할 수 있습니다.
- Type : function
- Default : -

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse onChange={callback}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### expandIcon
- 패널이 접혔을때 나타날 아이콘을 사용자가 지정할 수 있습니다.
- Type : (panelProps) => ReactNode
- Default : -

#### expandIconPosition
- 패널의 아이콘 위치를 지정할 수 있습니다.
- Type : `left` | `right`
- Default : -

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse expandIconPosition="right">
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### destroyInactivePanel
- 비활성화된 패널을 제거합니다.
- Type : boolean
- Default : false

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse destoryInactivePanel={true}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### ghost
- 패널의 테두리를 제거하면서 축소시키고 배경을 투명하게 만들어주는 속성입니다.
- Type : boolean
- Default : false

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse ghost={true}>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

---

### API-Collapse.Panel

[Top](##DataDisplay)

[API - Collapse](##API-Collapse)

#### disabled
- 패널을 펼칠 수 없는 상태로 비활성화 시킵니다.
- Type : boolean
- Default : false

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### forceRender
- 패널을 펼칠때 내용 표시를 지연시키는게 아닌 강제로 표시 하는 속성입니다.
- Type : boolean
- Default : false

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse>
    <Panel forceRender={true}>
      <p>{text}</p>
    </Panel>
    <Panel>
      <p>{text}</p>
    </Panel>
    <Panel disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### header
- 패널의 제목을 설정할 수 있습니다.
- Type : string | ReactNode
- Default : -

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse>
    <Panel header="This is panel header 1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### key
- 패널에 고유한 `key`를 지정할 수 있는 속성입니다.
- Type : string | number
- Default : -

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={1}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### showArrow
- 패널에 화살표 아이콘 표시 유무를 지정할 수 있는 속성입니다.
- Type : boolean
- Default : true

```js
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse defaultActiveKey={1}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" showArrow={false}>
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
);
```

#### extra
- 패널 제목 끝부분에 별도의 속성을 지정할 수 있습니다.
- Type : ReactNode
- Default : -

```js
import { Collapse } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Demo extends React.Component {
  render() {
    return (
      <>
        <Collapse
          defaultActiveKey={['1']}
        >
          <Panel header="This is panel header 1" key="1" extra="test">
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra="1">
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
```
