import Board from "./Board";
import {useState} from "react";

const Start = () => {

    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
       setPressed(true);
    }
    return (
        <>
            <div className="StartPage ">
                {pressed ? <Board/> :
                    <button onClick={handleClick}
                    className={'button-36'}>
                        Start
                    </button>}
            </div>
        </>
    )
}
export default Start;
