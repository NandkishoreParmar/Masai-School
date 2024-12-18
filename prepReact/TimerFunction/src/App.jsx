
import React, {useState} from "react";

const App = () =>{
  const [Time, setTime] = useState(0);
  const [intervalId,setIntervalId] = useState(null);

  const startTimer = ()=>{
    if (intervalId == null){
      const id = setInterval(()=>{
        setTime((prev) => prev + 1)

      },1000)
      setIntervalId(id)
    }
  }

  const pauseTimer = ()=>{
    if (intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
    }
   
  }
const resetTimer = ()=>{
  setTime(0)
  startTimer()
}
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer :{Time}</h1>
      <div>
        <button style={{margin:"10px"}} onClick={startTimer}>Start</button>
        <button style={{margin:"10px"}} onClick={pauseTimer}>Pause</button>
        <button style={{margin:"10px"}} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default App;