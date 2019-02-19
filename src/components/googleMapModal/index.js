import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

export default class GoogleMapModal extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleGoogleMapClick = mapProps => {
    console.log("MAP PROPS LAT", mapProps.lat);
    console.log("MAP PROPS LAT", mapProps.lng);
  };

  render() {
    return (
      <Modal open={this.props.isOpen}>
        <Modal.Content>
          <div style={{ height: "400px" }}>
            <GoogleMapReact
              boostrapURLKeys={{
                key: "test"
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              onClick={this.handleGoogleMapClick}
            />
          </div>
        </Modal.Content>
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
