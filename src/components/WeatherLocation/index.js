import React from 'react';
import Location from './Location';
import Index from './WeatherData/index';

const WeatherLocation = () => (
    <div>
        <Location city={"CDMX"}/>
        <Index/>
    </div>
);

export default WeatherLocation;