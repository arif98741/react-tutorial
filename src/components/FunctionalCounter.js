import { useState } from 'react'

/**
 * 
 * @param {*} params 
 * @returns 
 */
function FunctionalCounter(params) {
    const [counter,setCounter] = useState(0); //here setCounter is a function by user; useState(0) is for default value

    const increment = ()=>{
        setCounter(counter+1); 
    }

    const decrement = ()=>{
        setCounter(counter-1); 
    }

    return <div>
        <div>
            Counter Value : { counter }
        </div>
        <div><button onClick={increment}>Plus</button></div>
        <div><button onClick={decrement}>Minus</button></div>

    </div>;
}

export default FunctionalCounter;