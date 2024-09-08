import PropTypes from "prop-types";

const HistoryItem = ({ history, restoreHistory, disabled }) => {
  return (
    <li key={history.id}>
      {history.inputs.a} {history.operation} {history.inputs.b} ={" "}
      {history.result} <small>{history.time}</small>{" "}
      <button disabled={disabled} onClick={() => restoreHistory(history)}>
        Restore
      </button>
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
    time: PropTypes.object.isRequired,
  }).isRequired,
  restoreHistory: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
