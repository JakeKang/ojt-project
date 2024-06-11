import '@babel/polyfill';

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ms = 1000;

(async () => {
  console.log('Hello Starter!');

  await timeout(ms);
  console.log(`Delayed by ${ms}ms`);
})();
