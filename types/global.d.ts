declare global {
    interface WeatherData {
        temperature: string;
        weather: string;
        humidity: string;
        windspeed: string;
        location: string;
    }

    interface ForecastData {
        lowTemperature: string;
        highTemperature: string;
        date: string;
        day: string;
        weather: string;
        location: string;
    }
}

export {};
