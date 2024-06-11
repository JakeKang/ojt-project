function create({ id, parent, width, height }) {
  const canvasElement = document.createElement('canvas');
  canvasElement.id = id;
  canvasElement.width = width;
  canvasElement.height = height;

  parent.appendChild(canvasElement);

  const ctx = canvasElement.getContext('2d');

  return { ctx, id };
}

function drawRect({ ctx, width, height, x, y, color }) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);

  return { length, x, y, color };
}

function clear({ ctx, width, height }) {
  ctx.clearRect(0, 0, width, height);
}

export { create, drawRect, clear };
