import React, { Component } from "react";

// import Clouds from '../../resources/images/mainwheater/clouds.gif'

export default class WeatherCard extends Component {
  renderWeatherMain() {
    if (this.props.weather) {
      const MainWeather = this.props.weather.weather[0].main;
      switch (MainWeather) {
        case "Snow":
          return <p> Snow </p>;
        case "Clouds":
          return  <img  src="../../resources/images/mainweather/clouds.svg" />;
        default:
          return MainWeather;
        // return <img src="../../resources/images/mainweather/clouds.svg" />;
      }
    }
  }

  // Since the api will respond with "land [city]" i will trim the string to only show [city].
  renderCity() {
    const trimmed = this.props.weather.name.match(/\S+/g) || [];
    return <h1>{trimmed[1]}</h1>;
  }

  renderWeatherSpecifics() {
    if (this.props.weather) {
      const WeatherSpecifics = this.props.weather.main;
    return (<ul>
              <li><img src="../../resources/images/cloud.svg" /> {WeatherSpecifics.pressure}</li>
              <li><img src="../../resources/images/humidity.svg" />{WeatherSpecifics.humidity}</li>
              <li><img src="../../resources/images/wind.svg" />{this.props.weather.wind.speed}</li>
       </ul>)
    }
  }

  render() {
    console.log(this.props);
    // const WeatherMain = if (props.props.weather[0].main === 'snow') return (<div> snow </div>) else return (<div>not snow</div>)
    return (
      <div className="weatherCard">
        <div className="card scanLines">
    {this.renderWeatherSpecifics()}{this.renderWeatherMain()} {this.renderCity()}
        </div>
      </div>
    );
  }
}
