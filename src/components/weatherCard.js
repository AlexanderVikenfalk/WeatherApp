import React, { Component } from "react";

// import Clouds from '../../resources/images/mainwheater/clouds.gif'

export default class WeatherCard extends Component {
  Notification() {
    if (this.props.weather) {
        const MainWeather = this.props.weather.weather[0].main;
        console.log (MainWeather)
      switch (MainWeather) {
        case "Snow":
          return <p> Snow </p>;
        case "Clouds":
          return <img src="../../resources/images/mainweather/clouds.gif" />  ;
        default:
          return <p> Other </p>;
      }
    }
  }

  render() {
      console.log(this.props)
    // const WeatherMain = if (props.props.weather[0].main === 'snow') return (<div> snow </div>) else return (<div>not snow</div>)
    return (
      <div className="weatherCard">
        <div className="card">{this.Notification()}        <h1>{this.props.weather.name}</h1></div>

      </div>
    );
  }
}
