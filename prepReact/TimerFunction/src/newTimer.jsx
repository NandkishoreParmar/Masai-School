import React,{useState} from "react";

const TimerApp = ()=>{
  const [Time,setTime] = useState(0);
  const [intervalId,setIntervalId] = useState(null);

  const StartTimer = ()=>{
    if (intervalId == null){
      const id = setInterval(()=>{
        setTime((prev)=> prev+1)

      },1000)
      setIntervalId(id)
    }
  }

  const pauseTime = ()=>{
    if (intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  const Reset = ()=>{
    setTime(0);
    StartTimer()
  }

  return (
  <div>
    <h1>Timer : {Time}</h1>
    <div>
      <button onClick={StartTimer}>Start</button>
      <button onClick={pauseTime}>Pause</button>
      <button onClick={Reset}>Reset</button>
    </div>
  </div>

  )
}

export default TimerApp;