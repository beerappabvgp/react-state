import { useState } from "react"

export const ArrayState = () => {
    const [nums, setNum] = useState([10]);
    const handleClick = () => {
        setNum([...nums, Math.random() * 1000 
            + 100])
    }
    return (
        <div>
            <ol>
                {
                    nums.map((num) => {
                        return <li>{ num }</li>
                    })
                }
            </ol>
            <button onClick={handleClick}>update ... </button>
        </div>
    );
}
// nums = [1,2,4]