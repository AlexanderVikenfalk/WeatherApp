import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
  renderWeather(cityData) {
    const weather = cityData.weather[0].main;
    // const name = cityData.city.name;
    // const temps = cityData.list.map(weather => weather.main.temp);    
    // const pressures = cityData.list.map(weather => weather.main.pressure);
    // const humidities = cityData.list.map(weather => weather.main.humidity);
    // const {lon, lat} = cityData.city.coord;
    
    
    return (
      <div> Your weather is {weather} </div>
      // <tr key={name}>
      //   <td>
      //       <GoogleMap lon={lon} lat={lat} />
      //   </td>
      //   <td>
      //     <Chart data={temps} color="red" units="°C"/>{" "}
      //   </td>
      //   <td>
      //     <Chart data={pressures} color="blue" units="hPa"/>{" "}
      //   </td>
      //   <td>
      //     <Chart data={humidities} color="green" units="%" />{" "}
      //   </td>
      // </tr>
    );
  }

  render() {
 
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
