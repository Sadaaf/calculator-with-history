import PropTypes from "prop-types";
import Button from "../ui/Button";
import { useState } from "react";

const HistoryItem = ({ history, restoreHistory, disabled }) => {
  const [show, setShow] = useState(false);

  const handleToggle = ()=>{
    setShow(!show)
  }

  return (
    <li key={history.id}>
      {history.inputs.a} {history.operation} {history.inputs.b} ={" "}
      {history.result}
      <Button text={show ? "Hide" : "Show"} onClick={handleToggle} />
      {show && <>
        <small>{history.time}</small>{" "}
        <Button
          onClick={() => restoreHistory(history)}
          disabled={disabled}
          text="Restore"
        />
      </>}
    </li>
  );
};

HistoryItem.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }),
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  restoreHistory: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
