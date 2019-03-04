import React from "react";
import { Form, Label } from "semantic-ui-react";

class SemanticReduxCheckboxes extends React.Component {
  handleChange = (event, data) => {
    const newFormValue = {
      ...this.props.input.value,
      [data.name]: data.checked
    };
    console.log("NEW INPUT VALUE", newFormValue);
    this.props.input.onBlur(newFormValue); // this is so the field will respond when a user changes the field
    this.props.input.onChange(newFormValue);
  };

  generateCheckboxes = () => {
    if (this.props.checkboxOptions.length > 0) {
      return this.props.checkboxOptions.map(option => {
        return (
          <Form.Checkbox
            key={option.name}
            label={option.label}
            checked={this.props.input.value[option.name]}
            onChange={this.handleChange}
            name={option.name}
          />
        );
      });
    } else {
      return <div>No Options!</div>;
    }
  };

  render() {
    const {
      label,
      requiredAsterisk,
      meta: { touched, error }
    } = this.props;

    console.log("PROPS", this.props);

    return (
      <Form.Field
        error={touched && !!error} // put here and not on input so the whole thing is detected as error
      >
        <Form.Field
          required={requiredAsterisk}
          /* this Form.Field component is put here so there is 'spacing' between the form label and the options below */
        >
          <label>
            {label}
            {touched &&
              (error && (
                <Label color="red" pointing="left" size="tiny">
                  {error}
                </Label>
              ))}
          </label>
        </Form.Field>
        <Form.Group grouped>{this.generateCheckboxes()}</Form.Group>
      </Form.Field>
    );
  }
}

export default SemanticReduxCheckboxes;
