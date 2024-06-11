### Navigation

#### Pagination

- 페이지 리스트가 길어질 경우 페이지를 나누어서 사용합니다.
- 로딩이나 렌더링이 길어질 경우 사용됩니다.
- 브라우저에서 페이지 네비게이션 데이터를 사용하기원할때 사용합니다.

---

### API

#### current

- 현재 위치하는 포지션을 설정할 수 있습니다.
- Type : number
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination current={3} total={500} />
  </>,
  document.getElementById('container'),
);
```

#### defaultCurrent

- 현재 위치하는 기본값을 설정할 수 있습니다.
- Type : number
- default : 1

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    < defaultCurrent={3} total={500}/>
  </>,
  document.getElementById('container'),
);
```

#### defaultPageSize

- PageSize의 기본 범위를 설정할 수 있습니다.
- Type : number
- default : 10

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination defaultPageSize={40} total={300} />
  </>,
  document.getElementById('container'),
);
```

![defaultPageSize](../Image/Navigation/pagination-pageSize.png)

#### disabled

- disabled를 적용시켜 선택 및 호버시 클릭불가능 표시를 해줍니다.
- Type : boolean
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination disabled total={300} />
  </>,
  document.getElementById('container'),
);
```

#### hideOnSinglePage

- page또는 single page를 숨겨줍니다.
- Type : boolean
- default : false

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} hideOnSinglePage />
  </>,
  document.getElementById('container'),
);
```

#### itemRender

- item이동 값을 임의로 설정할 수 있습니다.
- Type : (page,type:'page'|'prev'|'next',originalElement) => React.ReactNode
- default : -
- type : {jump-prev,jump-next,prev,next,page}

```js
import { Pagination } from 'antd';
const itemRender = (current, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

<Pagination total={500} itemRender={itemRender} />;
```

#### pageSize

- pageSize를 지정할 수 있습니다.
- Type : number
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} pageSize="77" />
  </>,
  document.getElementById('container'),
);
```

#### pageSizeOption

- pageSize범위를 여러개 지정할 수 있습니다.
- default로 10 값이 들어가며, 이벤트 변경시 10값은 소멸되고 입력된 값만 유지됩니다.
- Type : string[]
- default : [10,20,50,100]

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} pageSizeOptions={['88', '5', '3']} />
  </>,
  document.getElementById('container'),
);
```

#### showLessItems

- 더 적은 아이템 페이지를 보여줍니다.
- Type : boolean
- default : false

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} showLessItems />
  </>,
  document.getElementById('container'),
);
```

#### showQuickJumper

- 우측에 페이지를 한칸씩이 아닌 입력된 값으로 이동할 수 있습니다.
- Type : boolean|{goButton : ReactNode}
- default : false

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} showQuickJumper />
  </>,
  document.getElementById('container'),
);
```

#### showSizeChanger

- 우측에 페이지나누는 단위를 선택할 수 있는 기능
- total이 50이상이면 default값이 참으로 실행됩니다.
- Type :boolean
- default : true

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} showSizeChanger={false} />
  </>,
  document.getElementById('container'),
);
```

#### showTitle

- item타이틀을 보여줍니다.
- Type : boolean
- default : true

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} showTitle />
  </>,
  document.getElementById('container'),
);
```

#### showTotal

- 전체 페이지수와, 나누어진 페이지에서 내부 갯수를 보여줍니다. 보여줍니다.
- Type : function(total,range)
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination
      disabled
      total={300}
      showTotal={(total, range) => {
        console.log(total, range);
      }}
    />
  </>,
  document.getElementById('container'),
);
```

```
> 555 [1, 10]
> 555 [11, 20]
> 555 [21, 30]
> 555 [31, 40]
```

#### simple

- 페이지 단위별로 이동,페이지 나누는 범위조정이 없어집니다.
- QuickJumper한거처럼 범위 이동이 가능합니다.
- Type : boolean
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} simple={true} />
  </>,
  document.getElementById('container'),
);
```

#### size

- 이동버튼의 paddding이 사라집니다.
- Type : default | small
- default : default

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} size={small} />
  </>,
  document.getElementById('container'),
);
```

#### responsive

- 크기가 지정되지 않은경우 윈도우 크기로 자동으로 지정됩니다.
- Type : boolean
- default : -

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} responsive />
  </>,
  document.getElementById('container'),
);
```

#### total

- 총 페이지 크기를 지정할 수 있습니다.
- Type : number
- default : 0

```js
import { Pagination } from 'antd';

ReactDOM.render(
  <>
    <Pagination total={300} />
  </>,
  document.getElementById('container'),
);
```

#### onChange

- 페이지 이동시 이벤트가 실행됩니다, 페이지의 위치와 페이지의 크기에 대해서 출력됩니다.
- Type : function(page,pageSize)
- default : -

```js
import{Pagination} from 'antd';
 <Pagination
    total={500}
    onChange={(page, pageSize) => {
      console.log(page, pageSize);
    }}
  />,
```

```
> 2 10
> 3 10
> 50 10
> 47 10
> 46 10
> 25 20
> 23 20
```

#### onShowSizeChange

- 페이지크기를 변경하면 실행됩니다, 페이지의 위치와 페이지의 크기에 대해서 출력이 됩니다.
- Type : function(current,size)
- default : -

```js
import{Pagination} from 'antd';
 <Pagination
    total={500}
    onShowSizeChange={(current, size) => {
      console.log(current, size);
    }}
  />,
```

```
> 25 20
> 10 50
> 5 100
```
