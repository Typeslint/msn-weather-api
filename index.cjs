const xml2js = require('xml2js');

/**
 * @class WeatherMSN
 */
class WeatherMSN {
    /**
     * @private
     */
    #lang;
    /**
     * @private
     */
    #degree;

    /**
     * @constructor
     * @param {string} lang result language (ISO 639-1: en, id, ja)
     * @param {string} degree degree type (C, F)
     */
    constructor(lang, degree) {
        this.#lang = lang;
        this.#degree = degree;

        if (!this.#lang) throw new Error('Please provide a valid lang parameter');
        if (!this.#degree) throw new Error('Please provide a valid degree parameter');
    }

    /**
     * @async
     * @public
     * @param {string} search location name
     * @returns {Promise<{ temperature: string; weather: string; humidity: string; windspeed: string; location: string; }>}
     */
    async getCurrentData(search) {

        if (!search) {
            throw new Error('Please provide a valid search parameter');
        }

        const msnWeatherUrl = `http://weather.service.msn.com/find.aspx?src=outlook&weasearchstr=${search}&weadegreetype=${this.#degree}&culture=${this.#lang}`;

        let temperature, weather, humidity, windspeed, location, date, icon;

        try {
            const response = await fetch(msnWeatherUrl, {
                method: 'GET'
            });
            const xml = await response.text();
            const parser = new xml2js.Parser();
            const data = await parser.parseStringPromise(xml);
            temperature = data.weatherdata.weather[0].current[0]['$'].temperature;
            weather = data.weatherdata.weather[0].current[0]['$'].skytext;
            humidity = data.weatherdata.weather[0].current[0]['$'].humidity;
            windspeed = data.weatherdata.weather[0].current[0]['$'].windspeed;
            location = data.weatherdata.weather[0].current[0]['$'].observationpoint;
            date = data.weatherdata.weather[0].current[0]['$'].date;
            icon = data.weatherdata.weather[0]['$'].imagerelativeurl + 'law/' + data.weatherdata.weather[0].current[0]['$'].skycode;

            return {
                temperature,
                weather,
                humidity,
                windspeed,
                location,
                date,
                icon
            };
        } catch (err) {
            throw new Error('Error fetching or parsing weather data');
        }
    }

    /**
     * @async
     * @public
     * @param {string} search location name
     * @param {number} days many day from today
     * @returns {Promise<{ lowTemperature: string; highTemperature: string; date: string; day: string; weather: string; location: string; }>}
     */
    async getForecastData(search, days) {

        if (!search && !days) {
            throw new Error('Please provide a valid search parameter and days parameter');
        }

        if (typeof days !== 'number') {
            throw new Error('Please provide a valid day type');
        }

        days -= 1;

        if (days < 0 || days > 4) {
            throw new Error('Days parameter can\'t be less than one or greater than five');
        }

        const msnWeatherUrl = `http://weather.service.msn.com/find.aspx?src=outlook&weasearchstr=${search}&weadegreetype=${this.#degree}&culture=${this.#lang}`;

        let lowTemperature, highTemperature, date, day, weather, location, icon;

        try {
            const response = await fetch(msnWeatherUrl, {
                method: 'GET'
            });
            const xml = await response.text();
            const parser = new xml2js.Parser();
            const data = await parser.parseStringPromise(xml);
            lowTemperature = data.weatherdata.weather[0].forecast[days]['$'].low;
            highTemperature = data.weatherdata.weather[0].forecast[days]['$'].high;
            date = data.weatherdata.weather[0].forecast[days]['$'].date;
            day = data.weatherdata.weather[0].forecast[days]['$'].day;
            weather = data.weatherdata.weather[0].forecast[days]['$'].skytextday;
            location = data.weatherdata.weather[0].current[0]['$'].observationpoint;
            icon = data.weatherdata.weather[0]['$'].imagerelativeurl + 'law/' + data.weatherdata.weather[0].forecast[days]['$'].skycode;

            return {
                lowTemperature,
                highTemperature,
                date,
                day,
                weather,
                location,
                icon
            };
        } catch (err) {
            throw new Error('Error fetching or parsing weather data');
        }
    }
}

module.exports = WeatherMSN;
