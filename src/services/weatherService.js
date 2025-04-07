const WEATHER_API_KEY = 'fea2ec10f643a5c12a91e2a7c468fda9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city = 'Delhi') => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`, {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch weather data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
