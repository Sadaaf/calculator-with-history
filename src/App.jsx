import { useState } from "react";

/**
 * TODO
 * 1. Handle user input fields
 * 2. Handle user operations button
 * 3. Handle list of histories
 * 4. Render history list
 * 5. Restore history
 * 6. Show result
 */

const initialInputState = { a: 0, b: 0 };

const App = () => {
  const [inputState, setInputState] = useState(...initialInputState);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result 0</h1>
      <div>
        <h3>Input Numbers</h3>
        <input type="number" value={inputState.a} />
        <input type="number" value={inputState.b} />
      </div>
      <div>
        <h3>Operations</h3>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>clear</button>
      </div>
      <h3>History</h3>
      <p>There is no history</p>
    </div>
  );
};

export default App;
