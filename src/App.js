import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const STARTING_TIME = 5
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(STARTING_TIME)
  const [words, setWords] = useState("")
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const inputRef = useRef(null)

  const decre = () => {
    if(time > 1){
      setTime(prevTime => prevTime - 1)
    }
  }

  const incre = () => {
    if(time < 20){
      setTime(prevTime => prevTime + 1)
    }
  }

  const checkCount = (words) => {
    const array1 = words.trim().split(" ")
    return array1.filter(word => word !== "").length
  }

  const startClock = () => {
    setIsTimeRunning(true)
    setTime(STARTING_TIME)
    setWords("")
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  const stopClock = () => {
    setIsTimeRunning(false)
    setCount(checkCount(words))
  }

  useEffect(() => {
    if(isTimeRunning && time > 0){
      setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    }else if(time === 0){
      stopClock()
    }
    // eslint-disable-next-line
  }, [time, isTimeRunning])

  return(
    <div className="App">
      <h1>Speed Typing Test</h1>
      <p>How fast can you type?</p>
      <textarea ref={inputRef} disabled={!isTimeRunning} value={words} cols="50" rows="10" onChange={(e) => setWords(e.target.value)} />
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
