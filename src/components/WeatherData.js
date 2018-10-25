import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTempeture from './WeatherTemperature'
const WeatherData = () => (
    <div>
        <WeatherTempeture/>
        <WeatherExtraInfo/>
    </div>
);

export default WeatherData;