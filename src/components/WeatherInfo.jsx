import { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Mumbai').then((data) => {
      if (data) setWeather(data);
    });
  }, []);

  return (
    <div>
      <h2>Current Weather</h2>
      {weather ? (
        <p>
          {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
