### Navigation

> Menu.md,Dropdown.md을 먼저보고 오시면 이해하기 좋습니다.

- [API-Breadcrumb](###API-Breadcrumb)
- [API-Breadcrumb.Item](##A#PI-Breadcrumb.Item)
- [API-Breadcrumb.Separator](###API-Breadcrumb.Separator)

#### Breadcrumb

- 현재 위치에서 섹션별로 계층을 나누어서 사용할 수 있습니다.
- 부모태그/자식태그/자식태그/... 형태로 이루어집니다.
- 시스템이 두개의 계층으로 나누어질때 사용하기 좋습니다.
- 클라이언트가 사용할때 부모태그를 찾거나 위치하고 있는지 확인하기 좋습니다.
- 부모태그로 이동하고 싶을때 제공하기 좋습니다.

---

### API-Breadcrumb

- [Top](###Navigation)
- [API-Breadcrumb.Item](###API-Breadcrumb.Item)
- [API-Breadcrumb.Separator](###API-Breadcrumb.Separator)

#### itemRender

- item render을 임의대로 설정할 수 있습니다.
- Type : (route,params,routes,pathe) => ReactNode
- default : -

#### params

- 라우팅 파라미터값을 설정할 수 있습니다.
- Type : object
- default : -

#### routes

- 라우터 정보를 설정할 수 있습니다.
- Type : routes[]
- default : -

#### separator

- 펼침 기능에서 값을 나눌때 separator값으로 나눌 수 있습니다.
- Type : string | ReactNode
- default : /

```js
import { Breadcrumb } from 'antd';

<Breadcrumb separator="@">
  <Breadcrumb.item>separator</Breadcrumb.item>
  <Breadcrumb.item>is</Breadcrumb.item>
  <Breadcrumb.item>@</Breadcrumb.item>
</Breadcrumb>;
```

---

### API-Breadcrumb.Item

- [Top](###Navigation)
- [API-Breadcrumb](###API-Breadcrumb)
- [API-Breadcrumb.Separator](###API-Breadcrumb.Separator)

#### href

- Breadcrumb의 ITEM의 하이퍼링크를 적용할 수 있습니다.
- Type : string
- default : -

```js
import { Breadcrumb } from 'antd';

<Breadcrumb>
  <Breadcrumb.Item href="https://www.naver.com"></Breadcrumb.Item>
</Breadcrumb>;
```

#### overlay

- dropdown메뉴를 설정할 수 있습니다.
- Type : Menu | () => Menu (Navigation > Menu.md참조)
- defualt : -

```js
import { Breadcrumb,Menu } from 'antd';
const overlayTest=(
  <Menu>
    <Menu.Item>
        this
    </Menu.Item>
    <Menu.Item>
        is
    </Menu.Item>
    <Menu.Item>
        overlay
    </Menu.Item>
  </Menu>
)
<Breadcrumb>
  <Breadcrumb.item overlay={overlayTest}></Breadcrumb.item>
</Breadcrumb>;
```

#### onClick

- click이벤트의 핸들러를 설정할 수 있습니다.
- Type : (e:MouseEvent)=>void
- default : -

```js
import {Breadcrumb.Button} from 'antd';

<Breadcrumb>
    <Breadcrumb.Item onClick={(e)=>console.log(e)}>
        <Button>  Application Center</Button>
    </Breadcrumb.Item>
</Breadcrumb>
```

#### dropdownProps

- 드랍다운시 프롭값을 설정할 수 있습니다.
- Type : dropdown(Navigation > dropdown.md참조)
- defualt : -

---

### API-Breadcrumb.Separator

- [Top](###Navigation)
- [API-Breadcrumb](###API-Breadcrumb)
- [API-Breadcrumb.Item](###API-Breadcrumb.Item)

#### children

- separator 값을 원하는 위치에 사용할 수 있습니다.
- Type : string | RecatNode
- default : /

```js
import { Breadcrumb} from 'antd'

<Breadcrumb separator="">
    <Breadcrumb.Separator ="/">
        <Breadcrumb.Item>/로 나누어짐</Breadcrumb.Item>
    </Breadcrumb.Separator>
    <Breadcrumb.Separator ="@">
        <Breadcrumb.Item>@로 나누어짐</Breadcrumb.Item>
    </Breadcrumb.Separator>
    <Breadcrumb.Separator ="$">
        <Breadcrumb.Item>$로 나누어짐</Breadcrumb.Item>
    </Breadcrumb.Separator>
<Breadcrumb>
```
