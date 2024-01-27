import Board from "./Board";
import { useState } from "react";

const Start = () => {
    const [showBoard, setShowBoard] = useState(false);

    const handleStart = () => {
        // Set showBoard to true when the Start button is clicked
        setShowBoard(true);
    };

    return (
        <>

                {!showBoard ? (
                    <div>

                        <button className={"button-29"} onClick={handleStart}>Start Game</button>
                    </div>
                ) : (
                    <div  style={{ marginTop: -120 }}>
                    <Board />
                        </div>
                    )}
        </>
    );
};

export default Start;
