import React, { useState } from 'react';

function Counter() {
  // Step 1: Declare a state variable `count` and a function to update it
  const [count, setCount] = useState(0);

  // Step 2: Functions to handle increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Step 3: Render the counter and buttons
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default Counter;
