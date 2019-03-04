import React from "react";
import { Form } from "semantic-ui-react";
import { Field as ReduxFormField, reduxForm } from "redux-form";
import SemanticReduxInputField from "../../utils/SemanticReduxInputField";
import SemanticReduxSearchableDropdownField from "../../utils/SemanticReduxSearchableDropdownField";
import SemanticReduxMapField from "../../utils/SemanticReduxMapField";
import SemanticReduxNonEmptyCheckboxField from "../../utils/SemanticReduxNonEmptyCheckboxField";
import SemanticReduxCheckboxes from "../../utils/SemanticReduxCheckboxes";
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
      <ReduxFormField
        name={"symptoms"}
        component={SemanticReduxNonEmptyCheckboxField}
        label={"Does patient exhibit any symptoms?"}
      />
      <ReduxFormField
        name={"drinks"}
        component={SemanticReduxCheckboxes}
        label={"Which drinks have they had?"}
        checkboxOptions={[
          { name: "tea", label: "Tea" },
          { name: "coffee", label: "Coffee" },
          { name: "hotChocolate", label: "Hot Chocolate" },
          { name: "none", label: "None" }
        ]}
      />
    </Form>
  );
}

export default reduxForm({
  form: "myForm"
})(myForm);
