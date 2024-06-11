### DataEntry

#### AutoComplete

- 오토 컴플릿트는 `input`의 함수입니다.

---

### API

#### allowClear

- 입력한 값을 제거해주는 버튼을 추가합니다.
- multifle모드에서만 사용이 가능합니다.
- Type : boolean
- default : false

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete
      style={{ width: '200px' }}
      allowClear
      placeholder="control mode"
    />
  </>,
  document.getElementById('container'),
);
```

#### autoFocus

- AutoComplete에 시작시 포커스 됩니다.
- Type : boolean
- default : false

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete
      style={{ width: '200px' }}
      autoFocus
      placeholder="control mode"
    />
  </>,
  document.getElementById('container'),
);
```

#### backfill

- autoComplete로 자동 완성되어진 값들중에서 키보드로 이동을하면 해당 값을 선택하며, 수정 삭제가 가능합니다.
- Type : boolean
- default : false

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete
      style={{ width: '200px' }}
      backfill
      placeholder="control mode"
    />
  </>,
  document.getElementById('container'),
);
```

#### children(for customize input element)

- input childeren을 설정할 수 있습니다.
- Type : HTMLInputElement | HTMLTextAreaElement | React.ReactElement<InputProps>
- default : `<input>`

#### children(for dataSource)

- data source를 자동으로 완성할 수 있습니다.
- Type : React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>
- default : -

#### defaultActiveFirstOption

- 처음에 작동될 옵션값을 설정할 수 있습니다.
- Type : boolean
- default : true

#### defaultValue

- 기본옵션을 설정할 수 있습니다.
- Type : boolean
- default : -

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete style={{ width: '200px' }} defaultValue={'hello'} />
  </>,
  document.getElementById('container'),
);
```

#### disabled

- 선택을 불가능하게 할 수 있습니다.
- Type : boolean
- default : false

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete
      style={{ width: '200px' }}
      disabled
      placeholder="control mode"
    />
  </>,
  document.getElementById('container'),
);
```

#### filterOption

- input에 필터를 이용하여 값을 넣을때, filterOption을 사용할 수 있습니다.
- 함수는 inputVlaue,option 두개를 받고, true값을 반환합니다.
- 필터에 옵션은 반드시 포함되어야 합니다.
- Type : boolean | function(inputValue,option)
- default : true

```js
import { AutoComplete } from 'antd';

const options = [
  { value: 'hello' },
  { value: 'world' },
  { value: 'this' },
  { value: 'is' },
  { value: 'autoComplete' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### placeholder

- HTML의 `input placeholder` 과 똑같은 기능을 합니다.
- input범위 내에 해당 영역에 대한 설명을 작성할 수 있습니다.
- Type : string
- default : -

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete style={{ width: '200px' }} placeholder="control mode" />
  </>,
  document.getElementById('container'),
);
```

#### value

- 옵션을 선택할 수 있습니다.
- 입력되어진 값을 수정할 수 없습니다.
- Type : string
- default : -

```js
import { AutoComplete } from 'antd';

ReactDOM.render(
  <>
    <AutoComplete style={{ width: '200px' }} value="innerValue" />
  </>,
  document.getElementById('container'),
);
```

#### onBlur

- 값을 선택하면 컴포넌트가 종료가 되어지는데 이때 처리할 이벤트를 사용할 수 있습니다.
- Type : function()
- default : -

```js
import { AutoComplete } from 'antd';

const options = [
  { value: 'hello' },
  { value: 'world' },
  { value: 'this' },
  { value: 'is' },
  { value: 'autoComplete' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    onBlur={() => {
      console.log('onBlur');
    }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### onChange

- 옵션값을 선택하거나, 인풋값이 바뀌거나, 값과 인풋값이 변경될때 불러옵니다.
- Type : function()
- default : -

```js
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, text) => ({
  value: str + ' ' + text,
});

const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText, 'autoCompleteTest1'),
            mockVal(searchText, 'autoCompleteTest2'),
            mockVal(searchText, 'autoCompleteTest3'),
          ],
    );
  };

  const onSelect = (data) => {};

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### onFocus

- 컴포넌트에 focus하면 해당 함수를 실행할 수 있습니다.
- Type : function()
- default : -

```js
import { AutoComplete } from 'antd';

const options = [
  { value: 'hello' },
  { value: 'world' },
  { value: 'this' },
  { value: 'is' },
  { value: 'autoComplete' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    onFocus={() => {
      console.log('its focus');
    }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### onSearch

- 아이템을 검색할 수 있습니다.
- Type : function(value)
- default : -

```js
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, text) => ({
  value: str + ' ' + text,
});

const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText, 'autoCompleteTest1'),
            mockVal(searchText, 'autoCompleteTest2'),
            mockVal(searchText, 'autoCompleteTest3'),
          ],
    );
  };

  const onSelect = (data) => {};

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### onSelect

- 옵션의 선택할 수 있습니다.
- param은 옵션의 값이면 인스턴스입니다.
- Type : function(value,option)
- default : -

```js
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, text) => ({
  value: str + ' ' + text,
});

const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText, 'autoCompleteTest1'),
            mockVal(searchText, 'autoCompleteTest2'),
            mockVal(searchText, 'autoCompleteTest3'),
          ],
    );
  };

  const onSelect = (data) => {};

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### defaultOpen

- options가 들어간 dropdown을 오픈할지 안할지 선택할 수 있습니다.
- Type : boolean
- default : -

```js
import { AutoComplete } from 'antd';

const options = [
  { value: 'hello' },
  { value: 'world' },
  { value: 'this' },
  { value: 'is' },
  { value: 'autoComplete' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    defaultOpen
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### onDropdownVisibleChange

- option이 들어가면 dropdown을 열렸을때 true 선택하거나 닫혔을때 false값을 반환합니다.
- Type : function(open)
- default : -

```js
const options = [
  { value: 'hello' },
  { value: 'world' },
  { value: 'this' },
  { value: 'is' },
  { value: 'autoComplete' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    onDropdownVisibleChange={(open) => {
      console.log(`open status is ${open}`);
    }}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

ReactDOM.render(<Complete />, document.getElementById('container'));
```

#### notFounctContent

- 결과와 매치되는값이 없으면 사용합니다.
- Type : string
- default : Not Found

```js
```

---

### Method

#### blur()

- 포커스를 제거합니다

#### focus()

- 포커스를 가져옵니다
