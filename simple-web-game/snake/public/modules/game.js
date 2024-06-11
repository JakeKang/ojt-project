function render({ clear, game, time = 0 }) {
  // * clear *
  if (clear) {
    clear({ time });
  }

  // * game *
  if (game) {
    game({ time });
  }
  
  // * gametime *
  return time;
}

// loop
function renderLoop({ render, time = 0, interval = 1 }) {
  if (!render) return;

  setInterval(() => {
    time = render({ time: time + interval });
  }, interval);
}

export { render, renderLoop };
