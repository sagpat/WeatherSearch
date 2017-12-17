import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer-weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
