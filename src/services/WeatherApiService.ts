import React from 'react';
import axios from 'axios';
//only have to import the end of nested interfaces
import {Period} from '../models/weather'

const fetchWeather = (): Promise<Period[]> => {
    return axios.get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(res => res.data.properties.periods)
}

export default fetchWeather;