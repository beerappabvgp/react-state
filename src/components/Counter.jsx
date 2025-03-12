import { useState } from "react";

export const Counter = () => {
    // let counter = 0;
    console.log("reinitialzed to zero .... ");
    const [count, setCount] = useState(0);
    console.log("react batches the state ... ");
    const handleClick = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        console.log("counter: ", count);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}


// rerendering is nothing but react is calling/invoking your components
// count = 0
// setCount(0 + 1)
// setCount(0 + 1)
// setCount(0 + 1)
// setCount(0 + 1)

// second rendering
// count = 1
// setCount(1 + 1)
// setCount(1 + 1)
// setCount(1 + 1)
// setCount(1 + 1)

// third rendering

// count = 2
// setCount(2 + 1)
// setCount(2 + 1)
// setCount(2 + 1)
// setCount(2 + 1)