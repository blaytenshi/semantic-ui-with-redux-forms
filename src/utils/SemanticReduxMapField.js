import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import GoogleMapModal from "../components/googleMapModal";

class SemanticReduxMapField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoogleMapModalOpen: false
    };
  }

  triggerGoogleMapModal = () => {
    this.setState({
      isGoogleMapModalOpen: !this.state.isGoogleMapModalOpen
    });
  };

  render() {
    return (
      <div>
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
          />
          <GoogleMapModal
            isOpen={this.state.isGoogleMapModalOpen}
            handleCloseModal={this.triggerGoogleMapModal}
          />
        </Form.Field>
      </div>
    );
  }
}

export default SemanticReduxMapField;
