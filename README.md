# msn-weather-xml
<img src="https://img.shields.io/github/package-json/v/Muunatic/msn-weather-xml?style=flat-square">
Weather forecast by MSN weather.

# Usage

```js
const msnweather = require('msn-weather-xml');
const weather = new msnweather('en', 'c');

(async () => {
    (await weather.getCurrentData('kyoto')).weather;
    (await weather.getForecastData('kyoto')).weather;
})();
```

# License

This project is licensed under the ISC License.