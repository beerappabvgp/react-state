import { useState } from "react"

export const StateUpdates = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    const handleUpdatePosition = () => {
        // position.x = 10;
        // position.y = 10;
        const updatedPosition = { x: position.x + 10, y: position.y + 10 }
        setPosition(updatedPosition)    
    }
    return (
        <div>
            <h2>X coordinate is: {position.x}</h2>
            <h2>Y coordinate is: {position.y}</h2>
            <button onClick={handleUpdatePosition}>updatePosition</button>
        </div>
    );
}