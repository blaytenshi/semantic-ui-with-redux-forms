import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
// careful with the library you import! There's at least three difference React-based Google Maps libraries!
// in searching through NPM i found this one, 'google-map-react'
// there was also a 'google-maps-react'
// and there is a really old one (but still relevant!) 'react-google-maps'!
import GoogleMapReact from 'google-map-react';

export default class GoogleMapModal extends Component {
  static defaultProps = {
    center: {
      lat: -33.872,
      lng: 151.207
    },
    zoom: 15
  };

  handleGoogleMapClick = mapProps => {
    console.log('MAP PROPS LAT', mapProps.lat);
    console.log('MAP PROPS LAT', mapProps.lng);
  };

  render() {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Header content="Select a Location" />
        <div style={{ height: '400px' }}>
          <GoogleMapReact
            options={{
              // All options here come from https://developers.google.com/maps/documentation/javascript/reference/map under MapOptions Interface
              gestureHandling: 'greedy',
              streetViewControl: false
            }}
            boostrapURLKeys={{
              key: 'test'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick={this.handleGoogleMapClick}
          />
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
