import '@babel/polyfill';
import express from 'express';
import path from 'path';

const app = express();
const port = 4332;
const rank = []; // 랭킹을 담을 변수

app.use(express.json());

// set path
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

// router
app.get('/', (_, response) => {
  response.sendfile(`${staticPath}/index.html`);
});

// rank
app.post('/rank', (request, response) => {
  const logDate = new Date();
  const { name, score } = request.body;
  if (Number.isInteger(score) && score > 0 && name !== '' && name.length <= 12) {
    console.log(`New Log : ${name}, ${score} : ${logDate}`);
    rank.push({ name, score });
    response.send(rank);
  }
});

// start
app.listen(port, () => {
  console.log(`Server Running at http://127.0.0.1:${port}`);
});

module.exports = app;
