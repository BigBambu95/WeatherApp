import React from 'react';

import { CloudyIcon, SunnyIcon } from '../icons';

const WeatherPanel = ({ weatherData = {}, tempType = 'C' }) => {

  const getFarenheit = (weatherData) => Math.floor(parseFloat(weatherData.main.temp) * 1.8 + 32);

  const temp = tempType === 'F' ? getFarenheit(weatherData) : Math.floor(weatherData.main.temp);

  const weatherIcon = () => {
    switch(weatherData.weather[0].main) {
      case 'Clouds':
        return <CloudyIcon />

      case 'Clear':
        return <SunnyIcon />
    }
  }

  return(
    <div className="weather-panel">
      <div>
        <span>Температура: </span> 
        <span>{temp} {tempType}</span>
      </div>
      {weatherIcon()}
    </div>
  )
};

export default WeatherPanel;