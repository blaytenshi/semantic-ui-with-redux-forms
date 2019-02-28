import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import GoogleMapModal from "../components/googleMapModal";

class SemanticReduxMapField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationData: {
        lat: 0,
        lng: 0,
        address: ""
      },
      isGoogleMapModalOpen: false
    };
  }

  triggerGoogleMapModal = () => {
    this.setState({
      isGoogleMapModalOpen: !this.state.isGoogleMapModalOpen
    });
  };

  updateLocation = newLocationData => {
    // Want to see the new location data coming from the GoogleMapModal component? Uncomment this line...
    // console.log("UPDATE LOCATION", newLocationData);
    this.setState({
      locationData: newLocationData
    });
    this.props.input.onChange(newLocationData); // this is calling redux-form's onChange()
  };

  handleAddressChange = (event, data) => {
    const newLocationData = {
      lat: this.props.input.value.lat, // make a copy of old lat/lng data
      lng: this.props.input.value.lng,
      address: data.value
    };
    this.setState({
      locationData: newLocationData
    });
    this.props.input.onChange(newLocationData);
  };

  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <Input
          action={
            <Button
              color={"blue"}
              icon={"location arrow"}
              onClick={this.triggerGoogleMapModal}
            />
          }
          actionPosition="right"
          placeholder={"Address..."}
          onChange={this.handleAddressChange}
          value={this.state.locationData.address}
        />
        <GoogleMapModal
          isOpen={this.state.isGoogleMapModalOpen}
          handleCloseModal={this.triggerGoogleMapModal}
          handleLocationUpdates={this.updateLocation}
        />
      </Form.Field>
    );
  }
}

export default SemanticReduxMapField;
