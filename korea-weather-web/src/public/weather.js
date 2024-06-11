const root = document.getElementById('container');
const title = root.querySelector('#location');
const date = root.querySelector('#updating');
const weatherImg = root.querySelector('#weatherImg');
const weather = root.querySelector('#weather');
const temp = root.querySelector('#temp');
const celsius = root.querySelector('#celsius');
const humidity = root.querySelector('#humidity');
const windSpeed = root.querySelector('#windSpeed');
const precipitation = root.querySelector('#precipitation');

const refresh = root.querySelector('#refresh');

const time = 1000 * 60 * 60;

function paintHTML(data) {
  title.innerText = data.location;
  date.innerText = data.updating;
  weatherImg.setAttribute('src', data.weatherImage);
  weather.innerText = data.weatherText;
  temp.innerText = data.temp;
  celsius.innerText = '°C';
  humidity.innerText = `습도 : ${data.humidity}`;
  windSpeed.innerText = `풍속 : ${data.windSpeed}`;
  precipitation.innerText = `강수확률 : ${data.precipitation}`;
}

function loadJSON() {
  fetch('/data')
    .then((res) => res.json())
    .then((json) => {
      paintHTML(json);
    });
}

function sendJSON(pos) {
  const coords = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };
  fetch('/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coords),
  });
  loadJSON();
}

const myGeo = () => {
  const loadGeo = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return loadGeo;
};

myGeo().then((pos) => {
  sendJSON(pos);
});

function init() {
  refresh.addEventListener('click', loadJSON);
}

init();

setInterval(() => {
  loadJSON();
}, time);
