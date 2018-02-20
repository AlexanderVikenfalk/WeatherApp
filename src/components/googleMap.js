import React, {Component} from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
    // new GoogleMap.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    console.log("lat"+this.props.lat)
    console.log("lng"+this.props.lon)
  }
  render() {
    // return (<div ref='map' />)
    return <div id="map" />;
  }
}

export default GoogleMap;