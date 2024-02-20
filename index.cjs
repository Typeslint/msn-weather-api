const xml2js = require('xml2js');

/**
 * @class WeatherJS
 */
class WeatherJS {
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
    }

    /**
     * @async
     * @public
     * @param {string} search location name
     * @returns { Promise<{ temperature: string; weather: string; humidity: string; windspeed: string; location: string; }> }
     */
    async getCurrentData(search) {

        if (!search) {
            throw new Error('Please provide a valid search parameter');
        }

        const msnWeatherUrl = `http://weather.service.msn.com/find.aspx?src=outlook&weasearchstr=${search}&weadegreetype=${this.#degree}&culture=${this.#lang}`;

        let temperature, weather, humidity, windspeed, location;

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
        } catch (err) {
            throw new Error('Error fetching or parsing weather data');
        }

        return {
            temperature,
            weather,
            humidity,
            windspeed,
            location
        };
    }
}

module.exports = WeatherJS;
