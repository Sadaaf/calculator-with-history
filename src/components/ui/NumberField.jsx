import PropTypes from "prop-types";

const NumberField = ({ name, value, onChange }) => {
  const style = {
    padding: "2rem",
    borderRadius: "0.5rem",
    border: "2px solid grey",
    background: "#939393",
    outline: "none",
    marginRight: "2rem",
    fontSize: "1.3rem",
  };
  return (
    <input
      type="number"
      name={name}
      style={style}
      value={value}
      onChange={onChange}
    ></input>
  );
};

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
