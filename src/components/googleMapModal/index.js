import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
// careful with the library you import! There's at least three difference React-based Google Maps libraries!
// in searching through NPM i found this one, 'google-map-react'
// there was also a 'google-maps-react'
// and there is a really old one (but still relevant!) 'react-google-maps'!
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import googleMaps from "@google/maps";

export default class GoogleMapModal extends Component {
  static defaultProps = {
    center: {
      lat: -33.872,
      lng: 151.207
    },
    zoom: 15
  };

  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0
    };

    this.googleMapsClient = googleMaps.createClient({
      key: "AIzaSyA0mdJv9RMnow7fTCvttJkrNJOhPH8xTTo",
      Promise: Promise
    });
  }

  handleGoogleMapClick = mapProps => {
    // Uncomment this string if you want ot see the captured coordinates from the click
    // console.log("LAT:", mapProps.lat, "LNG:", mapProps.lng);

    this.googleMapsClient
      .reverseGeocode({ latlng: [mapProps.lat, mapProps.lng] })
      .asPromise()
      .then(response => {
        // Uncomment this string if you want to see the address
        // console.log(response.json.results[0].formatted_address);
        const locationData = {
          lat: mapProps.lat,
          lng: mapProps.lng,
          address: response.json.results[0].formatted_address
        };
        this.props.handleLocationUpdates(locationData);
        this.setState(locationData);
      })
      .catch(error => {
        console.log("ERROR", error.message);
      });
  };

  render() {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header content="Select a Location" />
        <div style={{ height: "400px" }}>
          <GoogleMapReact
            // All options here come from https://developers.google.com/maps/documentation/javascript/reference/map under MapOptions Interface
            options={{
              gestureHandling: "greedy",
              streetViewControl: false,
              zoomControl: false
            }}
            boostrapURLKeys={{ key: "AIzaSyA0mdJv9RMnow7fTCvttJkrNJOhPH8xTTo" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick={this.handleGoogleMapClick}
          >
            <MyMarker
              lat={this.state.lat}
              lng={this.state.lng}
              text={this.state.address}
            />
          </GoogleMapReact>
        </div>
        <Modal.Actions>
          <Button
            color="red"
            content="Close"
            onClick={this.props.handleCloseModal}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
