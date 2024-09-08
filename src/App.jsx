import { useState } from "react";

/**
 * TODO
 *COMPLETE 1. Handle user input fields
 *COMPLETE 2. Handle user operations button
 * 3. Handle list of histories
 * 4. Render history list
 * 5. Restore history
 * 6. Show result
 */

const initialInputState = { a: 0, b: 0 };

const App = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);

  const handleClearOperation = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };
  const handleArithmaticOpearation = (operation) => {
    const arithmaticOperation = new Function(
      "operation",
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    // Instead of creating a dynamic function the eval function can be used to calculate the result
    setResult(arithmaticOperation(operation));
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
      <p>There is no history</p>
    </div>
  );
};

export default App;
