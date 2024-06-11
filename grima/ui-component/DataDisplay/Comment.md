## DataDisplay

### Comment

- 웹사이트에 사용자 의견 및 토론을 표시합니다.
- 페이지, 블로그 게시물, 이슈 또는 기타 등등에 대한 토론을 가능하게 하는 데 사용될 수 있습니다.

### API

#### actions
- `Comment` 아래 들어갈 액션들을 지정해 줄 수 있습니다.
- Type : Array<ReactNode>
- Default : -

```js
import React, { createElement, useState } from 'react';
import { Comment, Tooltip, } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const Demo = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### author
- `comment` 작성자 이름을 지정해 줄 수 있습니다.
- Type : string | ReactNode
- Default : -

```js
import { Comment, Tooltip, Avatar } from 'antd';

const Demo = () => {
  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### avatar
- `comment` 작성자의 아바타를 지정해 줄 수 있습니다.
- 일반적으로 기본 아바타 혹은 `src`로 지정해 줄 수 있습니다.
- Type : string | ReactNode
- Default : -

```js
import { Comment, Tooltip, Avatar } from 'antd';

const Demo = () => {
  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### children
- 중첩된 `comment`에 대해 하위 목록으로 설정할 수 있는 속성입니다.
- Type : ReactNode
- Default : -

```js
import { Comment, Avatar } from 'antd';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

ReactDOM.render(
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>,
  document.getElementById('container'),
);
```

#### content
- `comment` 의 내용에 해당하는 속성입니다.
- Type : string | ReactNode
- Default : -

```js
import { Comment, Tooltip, Avatar } from 'antd';

const Demo = () => {
  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
```

#### datetime
- `comment` 의 작성 시간을 표시해줄 수 있습니다.
- Type : string | ReactNode
- Default : -

```js
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const Demo = () => {
  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
```