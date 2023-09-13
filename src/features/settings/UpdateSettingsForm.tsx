import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  return (
    <Form>
      <FormRow label="Minimum nights/booking" orientation="vertical">
        <Input type="number" id="min-nights" />
      </FormRow>
      <FormRow label="Maximum nights/booking" orientation="vertical">
        <Input type="number" id="max-nights" />
      </FormRow>
      <FormRow label="Maximum guests/booking" orientation="vertical">
        <Input type="number" id="max-guests" />
      </FormRow>
      <FormRow label="Breakfast price" orientation="vertical">
        <Input type="number" id="breakfast-price" />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
