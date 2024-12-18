import React,{useState} from "react";

const TimerApp = () =>{
const [time,setTime] = useState(0);
const [intervalId,setIntervalId] = useState(null);

const startTimer = () =>{
  console.log(intervalId)
  if (intervalId == null){
    const id = setInterval(()=>{
      setTime((prevTime)=> prevTime + 1)
      // console.log(intervalId)
    },1000);
    setIntervalId(id);
  }
}

const pauseTimer = ()=>{
  if (intervalId){
    clearInterval(intervalId)
    setIntervalId(null)
  }
}
const resetTimer = ()=>{
  // pauseTimer()
  setTime(0)
  startTimer()
}



return (
  <div>
    <h1>Timer :{time<10? "0"+time:time}</h1>
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  </div>
)

}

export default TimerApp;