### DataEntry

- [API-Checkbox](#API-Checkbox)
- [API-Checkbox Group](#API-CheckboxGroup)

#### Checkbox

- 값을 여러개 선택하는 옵션을 제공하기 위해서 사용합니다.
- 하나의 체크박스만 있다면 스위치 토글을 이용해서 두개의 상태를 보여줄 수 있습니다. 스위치는 즉시 값을 변환해줍니다, 체킹되어진 값들은 변경이되어 이전에는 반드시 값에대한 처리가 필요합니다.

---

### API-Checkbox

- [Top](###DataEntry)
- [API-Checkbox Group](###API-CheckboxGroup)

#### autoFocus

- CheckBox에 시작시 포커스 됩니다.
- Type : boolean
- default : false

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox>Checkbox1</Checkbox>
    <Checkbox autoFocus>Checkbox2</Checkbox>
    <Checkbox>Checkbox3</Checkbox>
    <Checkbox>Checkbox4</Checkbox>
  </>,
  document.getElementById('container'),
);
```

#### checked

- checkbox의 체크 상태로 변환해줍니다.
- 설정되어지면 값을 취소할 수 없습니다
- Type : boolean
- default : false
  import { Checkbox } from 'antd';

```js
ReactDOM.render(
  <>
    <Checkbox>Checkbox1</Checkbox>
    <Checkbox>Checkbox2</Checkbox>
    <Checkbox checked>Checkbox3</Checkbox>
    <Checkbox>Checkbox4</Checkbox>
  </>,
  document.getElementById('container'),
);
```

#### defaultChecked

- checkbox의 체크 상태로 변환해줍니다.
- 설정되어진 값을 취소할 수 있습니다.
- Type : boolean
- default : false

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox>Checkbox1</Checkbox>
    <Checkbox defaultChekced>Checkbox2</Checkbox>
    <Checkbox>Checkbox3</Checkbox>
    <Checkbox>Checkbox4</Checkbox>
  </>,
  document.getElementById('container'),
);
```

#### disabled

- check를 못하도록 막습니다.
- Type : boolean
- default : false
  import { Checkbox } from 'antd';

ReactDOM.render(<>
<Checkbox disabled>Checkbox1</Checkbox>
<Checkbox >Checkbox2</Checkbox>
<Checkbox >Checkbox3</Checkbox>
<Checkbox >Checkbox4</Checkbox>
</>,
document.getElementById('container'));

#### indetermiate

- 미결정되어진 체크박스 상태로 설정되어집니다.
- 설정되어지면 체크박스를 전체다 체우지 않고 padding을 적용시켜 흰색테두리를 만듭니다.
- Type : boolean
- default : false

import { Checkbox } from 'antd';

ReactDOM.render(<>
<Checkbox indetermiate>It's not confirm</Checkbox>
<Checkbox >Checkbox2</Checkbox>
<Checkbox >Checkbox3</Checkbox>
<Checkbox >Checkbox4</Checkbox>
</>,
document.getElementById('container'));

#### onChange

- checkbox의 상태가 변경되면 함수가 실행됩니다.
- Type : function(e:Event)
- default : -

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox onChange={(e) => console.log(e.target.checked)}>
      Checkbox1
    </Checkbox>
    <Checkbox>Checkbox2</Checkbox>
    <Checkbox>Checkbox3</Checkbox>
    <Checkbox>Checkbox4</Checkbox>
  </>,
  document.getElementById('container'),
);
```

---

### API-CheckboxGroup

- [Top](###DataEntry)
- [API-Checkbox](###API-Checkbox)

#### defaultValue

- 기본적으로 선택할 값들을 선택할 수 있습니다.
- 값을 취소할 수 있습니다.
- Type : string[]
- default : []

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox.Group
      options={['hello', 'this', 'Checkbox', 'Group']}
      defaultValue={['Checkbox']}
    ></Checkbox.Group>
  </>,
  document.getElementById('container'),
);
```

#### disabled

- CheckBox를 그룹단위로 사용 불가능하게 만들 수 있습니다.
- Type : boolean
- default : false

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox.Group
      disabled
      options={['hello', 'this', 'Checkbox', 'Group']}
      defaultValue={['Checkbox']}
    ></Checkbox.Group>
  </>,
  document.getElementById('container'),
);
```

#### name

- checkBox의 이름을 설정할 수 있습니다.
- Type : string
- default : -

#### options

- checkBox.Group에 들어갈 옵션들을 선택할 수 있습니다.
- Type : string[]
- default : []

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox.Group
      options={['hello', 'this', 'Checkbox', 'Group']}
    ></Checkbox.Group>
  </>,
  document.getElementById('container'),
);
```

#### value

- 기본적으로 선택할 값들을 선택할 수 있습니다.
- 값을 취소할 수 있습니다.
- Type : string[]
- default : []

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox.Group
      options={['hello', 'this', 'Checkbox', 'Group']}
      defaultValue={['Checkbox']}
      value={['hello']}
    ></Checkbox.Group>
  </>,
  document.getElementById('container'),
);
```

#### onChange

- options의 상태 변경마다 이벤트가 발생합니다.
- 반환값이 배열형태로 반환되어집니다. 내부 요소는 string으로 반환되어집니다.
- Type : function(checkedValue)
- default : -

```js
import { Checkbox } from 'antd';

ReactDOM.render(
  <>
    <Checkbox.Group
      options={['hello', 'this', 'Checkbox', 'Group']}
      onChange={(checkedValue) => {
        console.log(checkedValue);
      }}
    />
  </>,
  document.getElementById('container'),
);
```

---

### Method

#### blur()

#### focus
