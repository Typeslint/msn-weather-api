const msnweather = require('../index.cjs');
const weather = new msnweather('en', 'c');

test('Get getCurrentData()', async () => {
    expect((await weather.getCurrentData('kyoto')).temperature).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).weather).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).humidity).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).windspeed).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).location).toBeDefined();
});

test('Get getForecastData()', async () => {
    expect((await weather.getForecastData('kyoto', 1)).lowTemperature).toBeDefined();
    expect((await weather.getForecastData('kyoto', 1)).highTemperature).toBeDefined();
    expect((await weather.getForecastData('kyoto', 1)).date).toBeDefined();
    expect((await weather.getForecastData('kyoto', 1)).day).toBeDefined();
    expect((await weather.getForecastData('kyoto', 1)).weather).toBeDefined();
    expect((await weather.getForecastData('kyoto', 1)).location).toBeDefined();
});
