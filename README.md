# msn-weather-api
<img src="https://img.shields.io/github/package-json/v/Typeslint/msn-weather-api?style=flat-square">

Weather forecast by MSN weather.

# Usage

```js
const msnweather = require('msn-weather-api');
const weather = new msnweather('en', 'c');

(async () => {
    (await weather.getCurrentData('kyoto')).weather;
    (await weather.getForecastData('kyoto', 1)).weather;
})();
```

# License

This project is licensed under the ISC License.