import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import TimerApp from './App.jsx'
// import App from './App'
// import Timer from './TimerRef'
// import TimerApp from './newTimer'
// import SimpleFetch from './FetchDataApi'
import Counter from './test'

// import Counter from './useREfCounter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TimerApp/> */}
    {/* <App/> */}
      {/* <Timer/> */}
      {/* <TimerApp/> */}
      {/* <SimpleFetch/> */}
      <Counter/>
  </StrictMode>,
)
