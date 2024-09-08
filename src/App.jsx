import { useState } from "react";
import InputSection from "./components/inputs/InputSection";
import OperationSection from "./components/operations/OperationSection";
import HistorySection from "./components/history/HistorySection";

/**
 * TODO
 *COMPLETE 1. Handle user input fields
 *COMPLETE 2. Handle user operations button
 *COMPLETE 3. Handle list of histories
 *COMPLETE 4. Render history list
 *COMPLETE 5. Restore history
 *COMPLETE 6. Show result
 */

const initialInputState = { a: 0, b: 0 };

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();

const App = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleClearOperation = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };
  const handleArithmeticOperation = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("invalid inut");
      return;
    }
    const arithmeticOperation = new Function(
      "operation",
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = arithmeticOperation(operation);
    // Instead of creating a dynamic function the eval function can be used to calculate the result
    setResult(result);
    const history = {
      id: getId.next().value,
      inputs: inputState,
      operation,
      result,
      time: new Date().toLocaleTimeString(),
    };
    setHistories([history, ...histories]);
  };

  const restoreHistory = (history) => {
    setInputState({ a: history.inputs.a, b: history.inputs.b });
    setResult(history.result);
  };

  // The following two solutions are alternative for handling the user input
  // const handleInputField = (key, value) =>
  //   setInputState({
  //     ...inputState,
  //     [key]: parseInt(value),
  //   });

  // const handleInputField = (object) =>
  //   setInputState({
  //     ...inputState,
  //     ...object,
  //   });

  const handleInputField = (event) =>
    setInputState({
      ...inputState,
      [event.target.name]: parseInt(event.target.value),
    });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica",
          backgroundColor: "#ff7300",
          borderRadius: "2rem",
          padding: "5rem",
          display: "inline-block",
          color: "#676767",
        }}
      >
        <InputSection inputs={inputState} handleInputField={handleInputField} />
        <p style={{ fontSize: "2rem" }}>
          Result <strong>{result}</strong>
        </p>
        <OperationSection
          handleArithmeticOperation={handleArithmeticOperation}
          handleClearOperation={handleClearOperation}
        />
        <HistorySection histories={histories} restoreHistory={restoreHistory} />
      </div>
    </div>
  );
};

export default App;
