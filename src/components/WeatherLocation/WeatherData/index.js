import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTempeture from './WeatherTemperature'
import {
    RAIN,
} from '../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTempeture temperature={20} weatherState={RAIN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;