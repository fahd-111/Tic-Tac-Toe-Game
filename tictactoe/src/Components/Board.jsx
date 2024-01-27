import React, { useState } from 'react';
import Cross from "./Cross";
import Circle from "./Circle";
import WinnerPopup from "./WinnerPopup";

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6],             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        if (winner || squares[i]) return;

        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const startNewGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <>
            <div className="Board">
                {[0, 3, 6].map((startIdx) => (
                    <div key={startIdx} className="board-row">
                        {[0, 1, 2].map((col) => {
                            const i = startIdx + col;
                            return (
                                <button
                                    key={i}
                                    className="square"
                                    onClick={() => handleClick(i)}
                                >
                                    {squares[i] === 'X' ? <Cross /> : squares[i] === 'O' ? <Circle /> : null}
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>
            {winner ?
                <WinnerPopup winner={winner} resetGame={startNewGame}/>
                : ( '' )
            }
            <div className="game-info">
                <button onClick={startNewGame} className='button-29'>Restart Game</button>
            </div>
        </>
    );
}
