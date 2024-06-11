const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://www.google.com/search?q=weather', { waitUntil: 'domcontentloaded' });

  const newObj = await page.evaluate(() => {
    const scrappedData = [];
    const location = document.querySelector('#wob_loc');
    const updating = document.querySelector('#wob_dts');
    const weatherText = document.querySelector('#wob_dcp');
    const weatherImage = document.querySelector('#wob_tci');
    const temp = document.querySelector('#wob_tm');
    const precipitation = document.querySelector('#wob_pp');
    const humidity = document.querySelector('#wob_hm');
    const windSpeed = document.querySelector('#wob_ws');

    scrappedData.push({
      location: location.innerText,
      updating: updating.innerText,
      weatherText: weatherText.innerText,
      weatherImage: weatherImage.getAttribute('src'),
      temp: temp.innerText,
      precipitation: precipitation.innerText,
      humidity: humidity.innerText,
      windSpeed: windSpeed.innerText,
    });
    return scrappedData;
  });
  console.log(newObj);
  await browser.close();
})();
