import HistoryItem from "./HistoryItem";
import PropTypes from "prop-types";

const HistorySection = ({ histories, restoreHistory }) => {
  return (
    <>
      <h3>History</h3>
      {histories.length === 0 ? (
        <p>There is no history</p>
      ) : (
        <ul>
          {histories.map((history) => (
            <HistoryItem
              key={history.id}
              history={history}
              restoreHistory={restoreHistory}
            />
          ))}
        </ul>
      )}
    </>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }),
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  restoreHistory: PropTypes.func.isRequired,
};

export default HistorySection;
