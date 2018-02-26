import React, { Component } from "react";
import CurrentWeather from '../containers/currentWeather'
// import SearchBar from "../containers/searchBar";
// import WeatherList from "../containers/weatherList";

export default class App extends Component {
  render() {
    return (
      <div>
        <CurrentWeather />
      </div>
    );
  }
}
