import axios from 'axios';

export const getMusicRecommendations = async (styleMusical) => {
  const response = await axios.request({
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: styleMusical },
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_SHAZAM_API_HOST,
      'x-rapidapi-key': process.env.REACT_APP_SHAZAM_API_KEY,
    },
  });

  return response.data;
};

export const getWeatherByCity = async (city) => {
  const response = await axios.request({
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  });

  return response.data;
};

export const getWeatherByCoordinates = async (lat, lon) => {
  const response = await axios.request({
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  });

  return response.data;
};
