import PropTypes from "prop-types";
const InputField = ({ inputState, handleInputField }) => (
  <>
    <input
      type="number"
      name="a"
      value={inputState.a}
      onChange={handleInputField}
    />
    <input
      type="number"
      name="b"
      value={inputState.b}
      onChange={handleInputField}
    />
  </>
);
InputField.propTypes = {
  inputState: PropTypes.object.isRequired,
  handleInputField: PropTypes.func.isRequired,
};

export default InputField;
