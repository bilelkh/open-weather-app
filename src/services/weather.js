import api from "../api/";

const getWeatherByCity = async (city) => {
  return api.get(
    `/weather?q=${city}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
};

export default getWeatherByCity;
