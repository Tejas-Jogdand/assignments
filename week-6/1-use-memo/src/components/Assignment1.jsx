import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count, setCount] = useState(0);
    // Your solution starts here
    //3 => 3*2*1
    const factorial =  useMemo(()=>{
        console.log("inside renders")
        let expensiveValue = 1;
        for(let i = 1; i <= input; i++) {
        expensiveValue = expensiveValue * i;
        }
        return expensiveValue
    },[input])


// Your solution ends here

return (
    <div>
        <input
            type="number"
            onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <p>Calculated Value: {input == '' ? 0 : factorial}</p>
    </div>
);
}