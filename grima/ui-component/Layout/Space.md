## Layout

### Space

- 컴포넌트의 공백 범위를 지정할 수 있습니다.
- 컴포넌트를 정렬할때 사이 공백범위나 공간을 나눌때 사용합니다.

---

### API

#### align

- 내부 아이템을 어떤식으로 정렬할지 정할 수 있습니다.
- 좌측상단 | 좌측하단 | 중앙 |
- Type : start|end|center|baseline
- default : -
- version 4.2.0

```js
import { Space, Button } from 'antd';

<Space align="center">
  <Button>start</Button>
  <Button>second</Button>
  <Button>third</Button>
</Space>;
```

#### direction

- 수평으로 갈지 수직으로 갈지 지정할 수 있습니다.
- Type : vertical | horizontal
- default : horizontal
- version : 4.1.0

```js
import { Space, Button } from 'antd';

<Space direction="vertical">
  <Button>start</Button>
  <Button>second</Button>
  <Button>third</Button>
</Space>;
```

#### size

- Type : small | middle | large | number
- default : small
- version : 4.1.0

```js
import { Space, Button } from 'antd';

<Space size={100}>
  <Button>start</Button>
  <Button>second</Button>
  <Button>third</Button>
</Space>;

<Space size="middle">
  <Button>start</Button>
  <Button>second</Button>
  <Button>third</Button>
</Space>;
```
