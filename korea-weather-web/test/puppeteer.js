const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://www.weather.go.kr/w/index.do');
  await page.screenshot({ path: 'test.png' });
  await browser.close();
})();
