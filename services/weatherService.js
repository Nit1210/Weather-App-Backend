const axios = require('axios');

const getCityWeather = async (city, apiKey) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await axios.get(URL);
    return { citydata: response.data.location, weatherData: response.data.current };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('API key expired');
    }
    throw new Error('Error fetching data');
  }
};

module.exports = {
  getCityWeather,
};
