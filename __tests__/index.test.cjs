const weatherjs = require('../index.cjs');
const weather = new weatherjs('en', 'c');

test('Get getCurrentData()', async () => {
    expect((await weather.getCurrentData('kyoto')).temperature).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).weather).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).humidity).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).windspeed).toBeDefined();
    expect((await weather.getCurrentData('kyoto')).location).toBeDefined();
});
