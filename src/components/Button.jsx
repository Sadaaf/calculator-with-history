import PropTypes from "prop-types";

const Button = ({ handleArithmaticOpearation, operationType }) => (
  <button onClick={() => handleArithmaticOpearation(operationType)}>
    {operationType}
  </button>
);

Button.propTypes = {
  handleArithmaticOpearation: PropTypes.func.isRequired,
  operationType: PropTypes.string.isRequired,
};

export default Button;
