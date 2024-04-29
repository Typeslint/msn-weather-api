# msn-weather-api

<p align="left">
<img src="https://img.shields.io/github/package-json/v/Typeslint/msn-weather-api?style=flat-square">
<img src="https://img.shields.io/github/actions/workflow/status/typeslint/msn-weather-api/test.yml?branch=development&style=flat-square&label=Testing">

Weather forecast by MSN weather.

# Installation

##### NPM
```sh
$ npm install msn-weather-api
```
##### Yarn
```sh
$ yarn add msn-weather-api
```

# Usage

```js
const WeatherMSN = require('msn-weather-api');
const weather = new WeatherMSN('en', 'c');

(async () => {
    const current = await weather.getCurrentData('kyoto');
    const forecast = await weather.getForecastData('kyoto', 1);

    current.weather; // Cloudy
    forecast.weather; // Light Rain
})();
```

# License

This project is licensed under the ISC License.