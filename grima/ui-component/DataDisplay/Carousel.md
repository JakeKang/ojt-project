## DataDisplay

### Carousel
- 캐러셀 컴포넌트는 컨테이너와 함께 확장됩니다.
- 같은 수준의 컨텐츠 그룹이 있는 경우
- 컨텐츠 공간이 부족할 경우 회전문 형태로 공간을 절약할 수 있습니다.
- 일반적으로 그림 / 카드 그룹에 사용됩니다.

### API

#### afterChange
- 현재 인덱스가 변경된 후 호출되는 콜백함수 입니다.
- Type : `function(current)`
- Default : -

```js
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

#### autoplay
- 자동 스크롤 여부에 관한 속성입니다.
- Type : boolean
- Default : false

```js
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel autoplay={true}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

#### beforeChange
- 현재 인덱스가 변경되기 전 호출되는 콜백함수 입니다.
- Type : function(from, to)
- Default : -

```js
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel beforeChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

#### dotPosition
- 점의 위치를 지정할 수 있는 속성입니다.
- Type : string
- Default : `bottom`

```js
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel dotPosition="top">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

#### dots
- 갤러리 하단에 위치 이동을 위한 점을 지정할 수 있는 속성입니다.
- Type : boolean | { className?: string }
- Default : true

```js
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel dots={false}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

#### easing
- 전환 효과를 연결하는 함수의 이름을 지정할 수 있습니다.
- Type : string
- Default : `linear`

#### effect
- 전환 효과를 지정할 수 있는 속성입니다.
- Type : `scrollx` | `fade`
- Default : `scrollx`

```js
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);
```

### Methods

#### goTo(slideNumber, dontAnimate)
- 슬라이드 인덱스로 이동합니다.
- if dontAnimate=true 이면 이동하지 않습니다.

#### next()
- 다음 슬라이드로 이동합니다.

#### prev()
- 이전 슬라이드로 이동합니다.