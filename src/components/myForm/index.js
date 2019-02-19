import React from "react";
import { Form } from "semantic-ui-react";
import { Field as ReduxFormField, reduxForm } from "redux-form";
import SemanticReduxInputField from "../../utils/SemanticReduxInputField";
import SemanticReduxSearchableDropdownField from "../../utils/SemanticReduxSearchableDropdownField";
import SemanticReduxMapField from "../../utils/SemanticReduxMapField";
import { postcodes } from "../../constants/postcodes";

function myForm() {
  console.log("POSTCODES", postcodes);

  return (
    <Form>
      <ReduxFormField
        name={"name"}
        component={SemanticReduxInputField}
        label={"Name:"}
      />
      <ReduxFormField
        name={"suburbPostcode"}
        component={SemanticReduxSearchableDropdownField}
        label={"Suburb Postcode:"}
        dropdownOptions={postcodes}
      />
      <ReduxFormField
        name={"location"}
        component={SemanticReduxMapField}
        label={"Location:"}
      />
    </Form>
  );
}

export default reduxForm({
  form: "myForm"
})(myForm);
