import React,{useRef} from "react";

const Counter = ()=>{
  const counterRef = useRef(0);

  const Increment = ()=>{
    counterRef.current += 1

    alert(`counter is increment ${counterRef.current}`)
  }

  return (
    <div>
          <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter;