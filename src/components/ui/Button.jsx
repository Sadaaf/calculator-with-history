import PropTypes from "prop-types";

const Button = ({ text, onClick, disabled, customStyle }) => {
  const disabledStyle = {
    backgroundColor: "#999",
    color: "black",
    border: "none",
  };

  const style = {
    height: "4rem",
    width: "4rem",
    padding: "0.2rem 0.5rem",
    backgroundColor: "#e4314e",
    borderRadius: "0.2rem",
    cursor: "pointer",
    marginRight: "1rem",
    ...customStyle,
    ...(disabled && disabledStyle),
  };
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  customStyle: PropTypes.object,
};

Button.defaultProps = {
  customStyle: {},
  disabled: false
};

export default Button;
