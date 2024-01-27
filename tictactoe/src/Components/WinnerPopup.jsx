

const WinnerPopup = ({ winner, resetGame }) => {
    return (
        <div className="winner-popup">
            <div className="winner-popup-inner">
                <h1>Winner: {winner}</h1>
                <button
                    className={"button-29"}
                    onClick={resetGame}>Start New Game</button>
            </div>
        </div>
    );
}
export default WinnerPopup;