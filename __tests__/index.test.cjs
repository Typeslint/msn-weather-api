const msnweather = require('../index.cjs');
const weatherjs = new msnweather('en', 'c');

describe('MSN Weather Data', () => {
    test('Get getCurrentData()', async () => {
        const { temperature, humidity, location, weather, windspeed } = (await weatherjs.getCurrentData('kyoto'));
        expect(temperature).toBeDefined();
        expect(humidity).toBeDefined();
        expect(location).toBeDefined();
        expect(weather).toBeDefined();
        expect(windspeed).toBeDefined();
    });

    test('Get getForecastData()', async () => {
        const { date, day, highTemperature, location, lowTemperature, weather } = (await weatherjs.getForecastData('kyoto', 1));
        expect(date).toBeDefined();
        expect(day).toBeDefined();
        expect(highTemperature).toBeDefined();
        expect(location).toBeDefined();
        expect(lowTemperature).toBeDefined();
        expect(weather).toBeDefined();
    });
});
