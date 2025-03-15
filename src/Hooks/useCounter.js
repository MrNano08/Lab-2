import { useState, useEffect } from 'react'

export function useCounter() {
  const [count, setCount] = useState(() => {
    try {
      return Number(window.localStorage.getItem('count')) || 0
    } catch (error) {
      return 0
    }
  })

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  const clickCounter = () => setCount(prev => prev + 1)
  const clickReducer = () => setCount(prev => (prev > 0 ? prev - 1 : 0))
  const resetCounter = () => setCount(0)

  return { 
    count, 
    clickCounter, 
    clickReducer,
    resetCounter
  }
}