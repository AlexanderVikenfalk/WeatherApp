import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherCard from "./weatherCard";
import Loading from "./loading";

class DisplayWeather extends Component {
  render() {
    const weather = this.props.weather.selectedWeather;
    return (<div>
    {weather ? <WeatherCard weather={weather}/> : <Loading />}
  </div>)
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(DisplayWeather);
