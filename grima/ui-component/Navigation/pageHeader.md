### Navigation

#### PageHeader

- 헤더의 동작과,디자인을 할 수 있습니다.
- 페이지 최상단에 위치할때 중요한정보,페이지정보,아이템의 속성등에 대하여 작성합니다.

---

### API

#### title

- Title을 설정할 수 있습니다. 굵게가 적용되어있습니다.
- Type : ReactNode
- default : -

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" />,
  document.getElementById('container'),
);
```

#### subTitle

- 서브타이틀을 지정할 수 있습니다. 회색에 Title보다 작은 폰트로 적힙니다.
- Type : ReactNode
- default : -

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" />,
  document.getElementById('container'),
);
```

#### ghost

- 바탕색으로 배경을 사용할 수 있습니다.
- Type : boolean
- default : true

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" ghost />,
  document.getElementById('container'),
);
```

#### avatar

- 타이틀바 내부에 아바타를 설정할 수 있습니다.
- Type : AvatarProps(Data Display>Avatar.md참조)
- default : -

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader
    title="Title"
    subTitle="subTitle"
    avatar={{ src: 'imagelink' }}
  />,
  document.getElementById('container'),
);
```

#### backIcon

- backIcon을 커스텀할 수 있습니다. 거짓일경우 백아이콘으 보여지지 않습니다.
- Type : ReactNode | boolean
- default : <ArrowLeft/>

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" backIcon />,
  document.getElementById('container'),
);
```

#### tags

- subTitle 우측에 태그를 설정할 수 있습니다.
- Type : Tag[] | Tag
- default : -

```js
import { PageHeader, Tag } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" tags={<Tag color="blue">TagSetting</Tag>/>,
  document.getElementById('container'),
);
```

#### extra

- Title의 우측 상단에 추가로 값을 넣어줄 수 있습니다.
- Type : ReactNode
- default : -

```js
import { PageHeader, Button } from 'antd';

ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle"
  extra={[<Button>extra1</Button>
  [<Button>extra2</Button>
  [<Button>extra3</Button>]} />,
  document.getElementById('container'),
);
```

#### breadcrumb

- 상단에 현재 위치하는 태그의 속성 및 이동 태그를 설정할 수 있습니다.
- Type : Breadcrub(Navigation>Breadcrumb.md참조)
- default : -

```js
import { PageHeader } from 'antd';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" breadcrumb={{ routes }} />,
  document.getElementById('container'),
);
```

#### footer

- Header하단부분에 속성을 추가할 수 있습니다.
- Type : ReactNode
- default : -

```js
import { PageHeader, Button } from 'antd';
const footerTest = <Button>hello</Button>;
ReactDOM.render(
  <PageHeader title="Title" subTitle="subTitle" footer={footerTest} />,
  document.getElementById('container'),
);
```

#### onBack

- 뒤로 이동할수 있는 이벤트를 생성할 수 있습니다.
- Type : ()=>void
- default : ()=>history.back()

```js
import { PageHeader } from 'antd';

ReactDOM.render(
  <PageHeader
    title="Title"
    subTitle="subTitle"
    onBack={(history) => history.back}
  />,
  document.getElementById('container'),
);
```
