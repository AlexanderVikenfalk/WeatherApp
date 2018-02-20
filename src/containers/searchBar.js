import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={event => this.onFormSubmit(event)}
      >
        <input
          placeholder="get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <button className="btn bttn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);