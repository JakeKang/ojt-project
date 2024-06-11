const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });
  const page = await browser.newPage();

  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://www.google.com/search?q=weather', ['geolocation']);

  await page.setGeolocation({
    latitude: 35.189465,
    longitude: 128.077271,
  });

  await page.goto('https://www.google.com/search?q=weather');
  await page.reload({ waitUntil: 'domcontentloaded' });

  await page.evaluate(() => {
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

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
