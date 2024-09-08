import shortid from "shortid";
import Button from "../ui/Button";
import PropTypes from "prop-types";

const OperationSection = ({
  handleArithmeticOperation: handleArithmeticOperation,
  handleClearOperation,
}) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleArithmeticOperation("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleArithmeticOperation("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleArithmeticOperation("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleArithmeticOperation("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleArithmeticOperation("%"),
    },
    {
      id: shortid.generate(),
      text: "**",
      onClick: () => handleArithmeticOperation("**"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onClick: handleClearOperation,
    },
  ];

  return (
    <div>
      <h3>Operations</h3>
      {operations.map((operation) => (
        <Button
          key={operation.id}
          onClick={operation.onClick}
          text={operation.text}
        />
      ))}
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmeticOperation: PropTypes.func.isRequired,
  handleClearOperation: PropTypes.func.isRequired,
};

export default OperationSection;
