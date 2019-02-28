import React, { Component } from "react";
import {
  Form,
  Input,
  Icon,
  Radio,
  Checkbox,
  Accordion
} from "semantic-ui-react";

class SemanticReduxNonEmptyCheckboxField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckboxOptionsVisible: false
    };
  }

  handleYesNo = (e, data) => {
    console.log("DATA", data);
    this.setState({
      isCheckboxOptionsVisible: data.value
    });
  };

  onChange = (synthEvent, data) => {
    this.props.input.onChange(synthEvent);
  };

  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <Form.Field>
          <Radio
            label={"Yes"}
            checked={this.state.isCheckboxOptionsVisible === true}
            value={true}
            onChange={this.handleYesNo}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={"No"}
            checked={this.state.isCheckboxOptionsVisible === false}
            value={false}
            onChange={this.handleYesNo}
          />
        </Form.Field>
        <Accordion
          styled
          fluid
          style={{
            display: this.state.isCheckboxOptionsVisible
              ? "inline-block"
              : "none"
          }}
        >
          <Accordion.Title active={this.state.isCheckboxOptionsVisible}>
            What kind of symptoms?
          </Accordion.Title>
          <Accordion.Content active={this.state.isCheckboxOptionsVisible}>
            <Form.Field>
              <Checkbox label={"Headache"} />
            </Form.Field>
          </Accordion.Content>
        </Accordion>
      </Form.Field>
    );
  }
}

export default SemanticReduxNonEmptyCheckboxField;
