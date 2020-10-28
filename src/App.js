import React from 'react'
import TypingContext from './contexts/typingContext'

const App = () => {
  const { inputRef, count, time, words, isTimeRunning, handleChange, incre, decre, startClock  } = TypingContext()

  return(
    <div className="App">
      <h1>Speed Typing Test</h1>
      <p>How fast can you type?</p>
      <textarea ref={inputRef} disabled={!isTimeRunning} value={words} rows="10" onChange={handleChange} />
      <div className="timer">
        <button onClick={decre}>-</button>
        <h4>Time Left : {time} sec</h4>
        <button onClick={incre}>+</button>
      </div>
      <button disabled={isTimeRunning} className={isTimeRunning ? "disable" : "normal"} onClick={startClock}>Start</button>
      <h3>Total word Count : {count}</h3>
    </div>
  )
}

export default App;
