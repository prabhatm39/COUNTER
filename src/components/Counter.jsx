import React, { useState } from 'react'
import style from "./style.module.css"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
      
        setCount(count+1)
    }
    const Decrement = () => {
        setCount(count-1)
    }
    const Double = () =>{
        setCount(count*2)
    }

  return (
    <div >
        <h1>
            Counter :
        </h1>

        <h1 className={`${count %2 ===0 ? `${style.green}` : `${style.red}`}`}>
        {count}
        </h1>
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Double}>Double</button>
        </div>
        </div>
  )
}
