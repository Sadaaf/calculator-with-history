import PropTypes from "prop-types";

const History = ({ histories, restoreHistory }) => (
  <div>
    <h3>History</h3>
    {histories.length === 0 ? (
      <p>There is no history</p>
    ) : (
      <ul>
        {histories.map((history) => (
          <li key={history.id}>
            {history.inputs.a} {history.operation} {history.inputs.b} ={" "}
            {history.result} <small>{history.time}</small>{" "}
            <button onClick={() => restoreHistory(history)}>Restore</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

History.propTypes = {
  histories: PropTypes.array.isRequired,
  restoreHistory: PropTypes.func.isRequired,
};

export default History;
