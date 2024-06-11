## Layout

- [API-Row](###API-Row)
- [API-Col](###API-Col)

### Grid

- 많은양을 저장해야할때 표시 영역 문제를 디자인 영역에서 해결이 필요할때 사용됩니다.
- 12개의 grid systems이 존재하고, divided를 이용하여 24개의 영역을 지원합니다.
- 나누는 단위를 `Box` 라고 하며, 가로박스를 지원합니다.

### Outlined

- row,column을 기반으로 프레임을 정의합니다.
- 가로 영역을 row로 정의한후 column으로 나누어 사용합니다.
- 콘텐츠요소에는 column을에 배치하고, column을은 row에 배치합니다.
- column의 속성중 span은 1~24까지 지원하며, 최대24를 기준으로 배치해야합니다. 예를들어 6개를 배치할때 `<Col span={4}/>`로 배치해야합니다.
  - 24이상이 될경우 col이 새로운라인에서 생성을 합니다.

---

### API-Row

- [Top](##Layout)
- [API-Col](###API-Col)

#### align

- 위,중간,아래 3개로 나누어저 column이 어디에 들어갈지를 선택합니다.
- Type : String | top,middle,bottom
- default : top

```js
import { Row } from 'antd';

<Row align="middle"></Row>;
```

#### gutter

- 그리드 사이의 거리를 숫자나 객체로 전달하거나, `[horizontal,vertical]`을 이용하여 배열 형태로도 사용이 가능합니다.
- Type : Number | Object | Array
- default : 0
- {xs(extra small(0px~575px)) sm(small(576px~)) md(medium(768px~)) lg(large(992px~)) xl(extra large(1200px~)) xxl(extra extra large(1600px~))}

```js
import {Row} from 'antd';

<Row gutter={16}></Row>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}></Row>
<Row gutter={[16, 24]}></Row>
```

#### justify

- 가로의 영역범위를 지정합니다.
- Type : start | end | center | space-around | space-between
- default : start
- start : 왼쪽이나 상단을 기준으로 진행합니다.
- end : 우측이나 하단을 기준으로 진행됩니다.
- center : 중앙을 기준으로 진행됩니다.
- space-around : 크기에 맞춰 일정한 간격으로 배치되며 양쪽에 공간을 넣습니다.
- space-between : 크기에 맞춰 일정한 간격으로 배치되며 양쪽에 공간을 없앲니다.

```js
import { Row, Col } from 'antd';
<Row justify="space-around">
  <Col span={6}>justifyTest</Col>
  <Col span={6}>justifyTest</Col>
  <Col span={6}>justifyTest</Col>
</Row>;
```

---

### API-Col

- [Top](##Layout)
- [API-Row](###API-Row)

#### flex

- 화면을 기준으로 칼럼의 영역을 나누어 줍니다.
- 크기를 지정할때 유연하게 지정해줍니다. 즉 남은 간격에 맞게 지정할 수 있습니다.
- Type : String | number
- default : 0
  ![flex이미지](/image/layout/grid-flex.png)

```js
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };
const style1 = { background: '#26733a', padding: '8px 0' };
const style2 = { background: '#a152a8', padding: '8px 0' };

ReactDOM.render(
  <>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Percentage columns
    </Divider>
    <Row>
      <Col flex={2} style={style}>
        2 / 5
      </Col>
      <Col flex={3} style={style1}>
        3 / 5
      </Col>
      <Col span={20} style={style2}>
        span{20}
      </Col>
    </Row>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Fill rest
    </Divider>
    <Row>
      <Col flex="auto" style={style}>
        auto
      </Col>
      <Col span={4} style={style1}>
        Span{4}
      </Col>
    </Row>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Raw flex style
    </Divider>
    <Row gutter={15}>
      <Col flex="1 0 200px" style={style}>
        1 0 200px
      </Col>
      <Col flex="1 1 300px" style={style1}>
        1 1 300px
      </Col>
      <Col flex="2 1 300px" style={style2}>
        2 1 300px
      </Col>
    </Row>
  </>,
  mountNode,
);
```

#### offset

- 셀의 숫자를 왼쪽에서 부터 간격을 지정할 수 있습니다.
- Type : number
- default : 0

```js
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

<Row>
  <Col offset={10}>offset-10</Col>
  <Col offset={15}>offset-15</Col>
</Row>;
```

#### order

- 셀의 우선순위를 지정할 수 있습니다.
- 최상단 좌측부터 우선순위대로 진행됩니다.
- 먼저 선언되어진 값들이 앞에 옵니다.
- Type : number
- default : 0

```js
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

<Row justify="end">
  <Col span={6} order={0} style={style}>
    raster0
  </Col>
  <Col span={6} order={1} style={style}>
    raster1
  </Col>
  <Col span={6} order={2} style={style}>
    raster2
  </Col>
  <Col span={6} order={3} style={style}>
    raster3
  </Col>
  <Col span={6} order={2} style={style}>
    raster4
  </Col>
  <Col span={6} order={0} style={style}>
    raster5
  </Col>
</Row>;
```

#### pull

- 왼쪽으로 1cell만큼 이동합니다.
- 한 라인당 최대 24입니다.
- Type : number
- default : 0

```js
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

<Row>
  <Col span={10}>span Text</Col>
  <Col pull={10}>pull Text</Col> //두개의 글자가 겹쳐집니다.
</Row>;
```

#### push

- 오른쪽으로 1cell만큼 이동합니다.
- 한 라인당 최대 24입니다.
- Type : number
- default : 0

```js
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

<Row>
  <Col span={10} push={10}>
    push Text
  </Col>
  <Col span={10}>span Text</Col>//두개의 글자가 겹쳐집니다.
</Row>;
```

#### span

- span의 1마다 1cell을 의미합니다.
- 한 라인당 최대 24입니다. 24를 초과하면 길이는 다시 잛아집니다.
- Type : number
- default : none

```js
import { Row, Col } from 'antd';

<Row>
  <Col span={10}>span Text1</Col>
  <Col span={10}>span Text2</Col>
  <Col span={10}>span Text3</Col>
  <Col span={10}>span Text4</Col>
</Row>;
```

#### xs,sm,md,lg,xl,xxl

- span값을 숫자 혹은 객체로 포함할 수 있습니다.
- xs(extra small(0px~575px))
- sm(small(576px~))
- md(medium(768px~))
- lg(large(992px~))
- xl(extra large(1200px~))
- xxl(extra extra large(1600px~))
