const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const puppeteer = require('puppeteer');

const server = http.createServer((request, response) => {
  const serverUrl = url.parse(request.url).pathname;
  const filePath = path.join(`${__dirname}/public/${serverUrl}`);

  if (serverUrl === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(fs.readFileSync(`${filePath}/index.html`));
  } else if (serverUrl === '/index.css') {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.end(fs.readFileSync(filePath));
  } else if (serverUrl === '/weather.js') {
    response.writeHead(200, { 'Content-Type': 'text/javascript' });
    response.end(fs.readFileSync(filePath));
  } else if (serverUrl === '/data') {
    let coords = '';
    request.on('data', (chunk) => {
      coords = chunk.toString();
      coords = JSON.parse(coords);
    }).on('end', () => {
      (async () => {
        const browser = await puppeteer.launch({ devtools: true });
        const page = await browser.newPage();

        const context = browser.defaultBrowserContext();
        await context.overridePermissions('https://www.google.com/search?q=weather', ['geolocation']);

        await page.setGeolocation({
          latitude: coords.lat,
          longitude: coords.lng,
        });

        await page.goto('https://www.google.com/search?q=weather');
        await page.reload({ waitUntil: 'domcontentloaded' });

        const newObj = await page.evaluate(() => {
          const location = document.querySelector('#wob_loc');
          const updating = document.querySelector('#wob_dts');
          const weatherText = document.querySelector('#wob_dcp');
          const weatherImage = document.querySelector('#wob_tci');
          const temp = document.querySelector('#wob_tm');
          const precipitation = document.querySelector('#wob_pp');
          const humidity = document.querySelector('#wob_hm');
          const windSpeed = document.querySelector('#wob_ws');

          const scrappedData = {
            location: location.innerText,
            updating: updating.innerText,
            weatherText: weatherText.innerText,
            weatherImage: weatherImage.getAttribute('src'),
            temp: temp.innerText,
            precipitation: precipitation.innerText,
            humidity: humidity.innerText,
            windSpeed: windSpeed.innerText,
          };
          return scrappedData;
        });
        await browser.close();
        
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        response.write(JSON.stringify(newObj));
        response.end();
      })();
    });
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>페이지를 찾을 수 없습니다.</h1>');
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000');
});
