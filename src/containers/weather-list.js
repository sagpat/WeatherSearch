import React, {Component} from 'react';
import { connect } from 'react-redux';
import Charts from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temperature = cityData.list.map(cityWeather => cityWeather.main.temp);
    const pressure = cityData.list.map(cityWeather => cityWeather.main.pressure);
    const humidity = cityData.list.map(cityWeather => cityWeather.main.humidity);

    return (
      <tr key={cityName}>
        <td>{ cityName }</td>
        <td> <Charts data={temperature} color = "orange"  units = "K"/> </td>
        <td> <Charts data={pressure} color = "green" units = "hPa" /> </td>
        <td> <Charts data={humidity} color = "black" units = "%" /> </td>
      </tr>
    );
  }

  render(){
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
