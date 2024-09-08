import NumberField from "../ui/NumberField";
import PropTypes from "prop-types";

const InputSection = ({ inputs, handleInputField }) => {
  return (
    <>
      <h3>Input Numbers</h3>
      <NumberField name="a" onChange={handleInputField} value={inputs.a} />
      <NumberField name="b" onChange={handleInputField} value={inputs.b} />
    </>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputField: PropTypes.func.isRequired,
};

export default InputSection;
