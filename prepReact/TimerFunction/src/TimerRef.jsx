
import React,{useState,useRef} from "react";

const Timer = ()=>{
  const [Time,setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = ()=>{
    if (timeRef.current == null){
      timeRef.current = setInterval(() => {
        setTime((prev)=> prev + 1)
      },1000);
    }
  }

  const pauseTimer
  return (
    <div>
      <h1>
        Timer : {Time}
      </h1>
      <div>
        <button onClick={startTimer}>Start</button>
      </div>

    </div>
  )
}

export default Timer;