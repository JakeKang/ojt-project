### Navigation

#### Affix

- 클라이어언트가 보는 페이지에서 고정된 값 위치값을 설정할 수 있습니다.
- 긴 페이지에서 최상단,최하단이동하기나, 위치 이동을할때 유용합니다.
- style에서 position:absolute 상태여서 값을 설정할 수 없습니다.

---

### API

#### offsetBottom

- 페이지에서 상단에 고정됩니다.
- 값을 변경하여 하단에서 얼마나 띄워줄지 설정할 수 있습니다.(픽셀단위입니다.)
- Type : number
- default : -

```js
import { Affix, Button } from 'antd';

<Affix offsetBottom={10}>
  <BUtton>offsetBottom</BUtton>
</Affix>;
```

#### offsetTop

- 페이지에서 하단에 고정됩니다.
- 값을 변경하여 상단에서 얼마나 띄워줄지 설정할 수 있습니다.
- Css에서 sticky와 같이 작용합니다.
- Type : number
- default : 0

```js
import { Affix, Button } from 'antd';

<Affix offsetTop={10}>
  <BUtton>offsetTop</BUtton>
</Affix>;
```

#### target

- target을 지정하면 해당 target내에서 컴포넌트가 이동합니다.
- Type : ()=>HTMLElement
- default : ()=>window

```js
import { Affix, Button } from 'antd';

<div className="containerTarget" ref={setContainer}>
  <Affix target={() => container}>
    <Button>targetTest</Button>
  </Affix>
</div>;
```

#### onChange

- 상태값을 을 변경할 수 있습니다.
- callBack형식입니다.
- Type : function(affixed);
- default : -

```js
import { Affix, Button } from 'antd';

<Affix onChange={(affix) => console.log(affix)}>
  <Button>targetTest</Button>
</Affix>;
```
