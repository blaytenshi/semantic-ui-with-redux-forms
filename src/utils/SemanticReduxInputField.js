import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

class SemanticReduxInputField extends Component {
  onChange = (synthEvent, data) => {
    this.props.onChange(synthEvent);
  };

  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <Input onChange={this.onChange} />
      </Form.Field>
    );
  }
}

export default SemanticReduxInputField;
