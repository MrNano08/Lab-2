import { useState } from 'react'
const number = Math.floor(Math.random() * 20);
export function useCounter(){
    const [count, setCount] = useState(0)
    const clickCounter = () => {
      const newCount = count + 1;
      setCount(newCount);
  
      if (newCount === number) {
        alert("¡El número es " + number + "¡");
      }
  
    };
    const clickReducer = () => {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount === number) {
        alert("¡El número es " + number + "¡");
      }
    }
    return {count, clickCounter, clickReducer}
  }