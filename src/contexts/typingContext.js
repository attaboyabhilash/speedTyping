import { useState, useRef, useEffect } from 'react'

const TypingContext = (startingTime = 10) => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(startingTime)
    const [words, setWords] = useState("")
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const inputRef = useRef(null)

    const handleChange = (e) => setWords(e.target.value)
  
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
      setTime(startingTime)
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

    return{ inputRef, count, time, words, isTimeRunning, handleChange, incre, decre, startClock }
}

export default TypingContext

