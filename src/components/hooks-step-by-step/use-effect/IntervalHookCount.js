import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	}, [count])
  return (
    <div style={{color: "red", fontWeight: '900'}}>
      {count}
    </div>
  )
}

export default IntervalHookCounter