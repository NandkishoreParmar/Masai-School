import React, { useRef } from 'react';

function Counter() {
  const countRef = useRef(0); 

  const increment = () => {
    countRef.current += 1; 
    alert(`Counter: ${countRef.current}`); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: not updated</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
