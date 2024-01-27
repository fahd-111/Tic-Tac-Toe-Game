import Start from "./Components/Start";
import { useEffect, useState } from "react";

function App() {
    // Load the initial state from localStorage or default to false
    const [pressed, setPressed] = useState(
        localStorage.getItem("pressed") === "true"
    );

    const handlePressed = () => {
        // Set the state to false and update localStorage
        setPressed(true);
        localStorage.setItem("pressed", "false");
    };

    useEffect(() => {
        // Set the state to false and update localStorage when the component unmounts
        return () => {
            setPressed(false);
            localStorage.setItem("pressed", "false");
        };
    }, []);

    return (
        <>
            <div className="fixed-section">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                    {!pressed ? (
                        <>
                            <span>WELCOME</span>
                            <br />
                        </>
                    ) : null}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                        onClick={handlePressed}
                    >
                        <Start />
                    </div>
                    {!pressed ? (
                        <>
              <span>
                  TIC TAC TOE GAME <br /> by FAHAD
              </span>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default App;
