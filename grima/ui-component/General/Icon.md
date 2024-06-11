## General

### Icon

```js
import {icon name} from '@ant-design/icons';
```

- AntD에서 제공하는 아이콘을 사용할 수 있습니다.
- 설치 : `npm install --save @ant-design/icons`
- 아이콘을 클릭하면 해당 아이콘의 이름을 가져와 적용할 수 있습니다.
- [AntD Icon 목록](https://ant.design/components/icon/)

---

### API

### antd에서 지원하는 아이콘

#### className

- 아이콘에 클래스명을 지정할 수 있습니다.
- 커스텀 아이콘에서는 className을 이용할 수 없습니다.
- Type : string
- default : -

#### style

- fontSize,color을 지정할 수 있습니다.
- Type : CSSProperties
- default : -

```js
import {SearchOutlined} from '@ant-design/icons';

const hstyle = {
fontSize : '150px',
color : '#08c'};

<SearchOutlined style = {{fontSize : '150px',color : '#08c'}}/>
<SearchOutlined style = {hstyle}/>
```

#### spin

- 아이콘을 오른쪽으로 회전 할 수 있습니다.
- Type : boolean
- default : false

```js
import { StarTwoTone } from '@ant-design/icons';

<StarTwoTone spin true />;
```

#### rotate

- 아이콘을 회전 시킬 수 있습니다.
- IE9에서는 사용이 불가능합니다.
- Type : number
- default : -

```js
import { StarTwoTone } from '@ant-design/icons';

<StarTwoTone rotate={100} />;
```

#### twoToneColor

- 투톤컬러 아이콘 태그에 있는 아이콘의 색상을 하나로 지정하여 사용할 수 있습니다.
- Type : string(hex color);

```js
import {BugTwoTone} from '@ant-design/icons';

<BugTwoTone style = {{fontSize : '150px'}} twoToneColor = "##4f452f"/>
<BugTwoTone style = {{fontSize : '150px'}}/>
```

- 투톤 컬러를 미리 설정 해줄 수 있습니다.

```js
import { setTwoToneColor, getTwoToneColor } from '@ant-design/icons';

setTwoToneColor('#eb2f96');
getTwoToneColor(); //eb2f96
```

### Custom Icon

- scriptUrl : 해당 URL경로를 지정합니다.
- Type : string | string[]
- default : -
- extraCommonProps : 컴포넌트에 확장된 속성을 정의할 수 있습니다.
- Type : {[key : string] : any}
- default : {}

```js
const { createFromIconfontCN } = icons;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
  ],
});

ReactDOM.render(
  <div className="icons-list">
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </div>,
  document.getElementById('container'),
);
```

- 사용되어질 아이콘의 크기를 설정해줍니다.
- 버튼에 사용되어질 아이콘의 크기를 설정할 수 있습니다.
- 해당 붉은색 영역이 유효 사이즈입니다.
  ![Icon grid ex](/Image/general/icon-grid.png)
