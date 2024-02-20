# msn-weather-xml
<img src="https://img.shields.io/github/package-json/v/Muunatic/msn-weather-xml?style=flat-square">
Weather forecast by MSN weather.

# Usage

```js
const weatherjs = require('msn-weather-xml');
const weather = new weatherjs('en', 'c');

(async () => {
    (await weather.getCurrentData('kyoto')).location;
})();
```

# License

This project is licensed under the ISC License.