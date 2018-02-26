import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserPosition, getCurrentWeather } from "../actions";
import { getLocationState } from "../reducers/reducerLocation";

import DisplayWeather from "../components/displayWeather";

class CurrentWeather extends Component {
  componentDidMount() {
    this.props.getUserPosition().then(data => {
      this.props.getCurrentWeather(data.payload.coords);
    });
  }

  render() {
    return (

        <DisplayWeather />

    );
  }
}

const mapState = state => ({
  ...getLocationState(state.location)
});

export default connect(mapState, { getUserPosition, getCurrentWeather })(
  CurrentWeather
);
//
