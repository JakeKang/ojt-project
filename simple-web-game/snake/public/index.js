import { create, clear } from './modules/canvas.js';
import { render, renderLoop } from './modules/game.js';
import { snake } from './snake.js';
import { defaultInterval, gameConfig } from './config.js';

// create canvas
const { ctx } = create({ id: 'canvas', parent: document.body, width: gameConfig.width, height: gameConfig.height });

// game main
renderLoop({
  render: ({ time }) => render({
    clear: clear({ ctx, width: gameConfig.width, height: gameConfig.height }),
    game: snake({ ctx, time }),
    time,
  }),
  time: 0,
  interval: defaultInterval,
});
