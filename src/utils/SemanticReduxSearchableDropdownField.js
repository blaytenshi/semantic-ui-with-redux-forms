import React, { Component } from "react";
import { Form, Dropdown } from "semantic-ui-react";

class SemanticReduxSearchableDropdownField extends Component {
  onChange = (event, data) => {
    this.props.input.onChange(data.value); // redux-form's .onChange() function
  };

  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <Dropdown
          placeholder={this.props.placeholder}
          fluid
          search
          selection
          options={this.props.dropdownOptions}
          onChange={this.onChange}
        />
      </Form.Field>
    );
  }
}

export default SemanticReduxSearchableDropdownField;
