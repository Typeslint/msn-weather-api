const msnweather = require('../index.cjs');
const weatherjs = new msnweather('en', 'c');

describe('Validate MSN Weather', () => {
    test('Valid lang parameter', () => {
        expect(() => new msnweather(null, 'c')).toThrow(/^Please provide a valid lang parameter$/g);
    });

    test('Invalid degree parameter', () => {
        expect(() => new msnweather('en', null)).toThrow(/^Please provide a valid degree parameter$/g);
    });

    test('Valid search parameter in getCurrentData()', async () => {
        await expect(weatherjs.getCurrentData('kyoto')).resolves.not.toThrow();
    });

    test('Invalid parameters in getCurrentData()', async () => {
        await expect(weatherjs.getCurrentData(null)).rejects.toThrow();
    });

    test('Invalid location in getCurrentData()', async () => {
        await expect(weatherjs.getCurrentData('msnweather')).rejects.toThrow(/^Error fetching or parsing weather data$/g);
    });

    test('Valid search and days parameters in getForecastData()', async () => {
        await expect(weatherjs.getForecastData('kyoto', 1)).resolves.not.toThrow();
    });

    test('Invalid parameters in getForecastData()', async () => {
        await expect(weatherjs.getForecastData(null, null)).rejects.toThrow();
    });

    test('Invalid location in getForecastData()', async () => {
        await expect(weatherjs.getForecastData('msnweather', 1)).rejects.toThrow(/^Error fetching or parsing weather data$/g);
    });

    test('Non-number days parameter in getForecastData()', async () => {
        await expect(weatherjs.getForecastData('kyoto', 'one')).rejects.toThrow();
    });

    test('Negative days parameter in getForecastData()', async () => {
        await expect(weatherjs.getForecastData('kyoto', -1)).rejects.toThrow();
    });
});

describe('MSN Weather Data', () => {
    test('Get getCurrentData()', async () => {
        const { temperature, humidity, location, weather, windspeed, date, icon } = (await weatherjs.getCurrentData('kyoto'));
        expect(temperature).toBeDefined();
        expect(humidity).toBeDefined();
        expect(location).toBeDefined();
        expect(weather).toBeDefined();
        expect(windspeed).toBeDefined();
        expect(date).toBeDefined();
        expect(icon).toBeDefined();
    });

    test('Get getForecastData()', async () => {
        const { date, day, highTemperature, location, lowTemperature, weather, icon } = (await weatherjs.getForecastData('kyoto', 1));
        expect(date).toBeDefined();
        expect(day).toBeDefined();
        expect(highTemperature).toBeDefined();
        expect(location).toBeDefined();
        expect(lowTemperature).toBeDefined();
        expect(weather).toBeDefined();
        expect(icon).toBeDefined();
    });
});
