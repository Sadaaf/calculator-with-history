import { useState } from "react";

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
  const handleArithmaticOpearation = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("invalid inut");
      return;
    }
    const arithmaticOperation = new Function(
      "operation",
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = arithmaticOperation(operation);
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
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result {result}</h1>
      <div>
        <h3>Input Numbers</h3>
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
      </div>
      <div>
        <h3>Operations</h3>
        <button onClick={() => handleArithmaticOpearation("+")}>+</button>
        <button onClick={() => handleArithmaticOpearation("-")}>-</button>
        <button onClick={() => handleArithmaticOpearation("*")}>*</button>
        <button onClick={() => handleArithmaticOpearation("/")}>/</button>
        <button onClick={() => handleArithmaticOpearation("%")}>%</button>
        <button onClick={handleClearOperation}>clear</button>
      </div>
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
};

export default App;
