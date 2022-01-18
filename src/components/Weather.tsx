import React, { useEffect, useState } from 'react';
import { Period } from '../models/weather';
import fetchWeather from '../services/WeatherApiService';

const Weather = () => {
    const [weather, setWeather] = useState<Period[]>([])

    useEffect(() => {
        fetchWeather().then(periods => setWeather(periods))} , []);


    return (
        <div>
            <h2>Weather Forecast</h2>
            <ul>
                {weather.map((forecast, i) => <li key={i}>
                    <h3>{forecast.name}</h3>
                    <p>Temperature: {forecast.temperature}{forecast.temperatureUnit}</p>
                    <img src={forecast.icon} alt="icon of weather" />
                    <p>{forecast.detailedForecast}</p>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Weather;