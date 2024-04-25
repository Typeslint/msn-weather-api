declare module 'msn-weather-api' {
    type WeatherData = {
        temperature: string;
        weather: string;
        humidity: string;
        windspeed: string;
        location: string;
        date: string;
        icon: string;
    };
    
    type ForecastData = {
        lowTemperature: string;
        highTemperature: string;
        date: string;
        day: string;
        weather: string;
        location: string;
        icon: string;
    };
    
    class WeatherMSN {
        private readonly lang: string;
        private readonly degree: string;
    
        /**
         * 
         * @param {string} lang result language (ISO 639-1: en, id, ja)
         * @param {string} degree degree type (C, F)
         */
        constructor(lang: string, degree: string);
    
        /**
         * @async
         * @public
         * @param {string} search location name
         * @returns {Promise<WeatherData>}
         */
        getCurrentData(search: string): Promise<WeatherData>;
    
        /**
         * @async
         * @public
         * @param {string} search location name
         * @param {number} days many day from today
         * @returns {Promise<ForecastData>}
         */
        getForecastData(search: string, days: number): Promise<ForecastData>;
    }
    
    export = WeatherMSN;
}
