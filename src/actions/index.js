import axios from 'axios';

const API_KEY = 'b3d6d5fb50932dfe0725c222ac3bdf7e';
ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators always have to return an action and an action is an object which always return a type.
export function fetchWeather(city) {
  const url = `{ROOT_URL}&q={city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
