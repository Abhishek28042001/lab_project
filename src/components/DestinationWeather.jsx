import { useState, useEffect } from 'react';

const DestinationWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'fea2ec10f643a5c12a91e2a7c468fda9'; // Replace with your actual API Key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(API_URL, {
          credentials: 'include',
        });
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          setError('');
        } else {
          setError(data.message || 'Error fetching weather data');
        }
      } catch (err) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Weather in {city}</h3>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div>
          <p className="text-gray-600">🌡️ Temp: {weatherData.main.temp}°C</p>
          <p className="text-gray-600">🌬️ Wind: {weatherData.wind.speed} m/s</p>
          <p className="text-gray-600">☁️ {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationWeather;
