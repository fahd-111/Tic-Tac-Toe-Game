import React, { useState } from 'react';
import Cross from "./Cross";
import Circle from "./Circle";


// Helper function to determine the winner
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
                {squares.map((square, i) => (
                    <button className="square" onClick={() => handleClick(i)} key={i}>
                        {square === 'X' ? <Cross /> : square === 'O' ? <Circle /> : null}
                    </button>
                ))}
            </div>
            <div className="game-info">
                <div>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</div>
                <button onClick={startNewGame} className='button-29'>Restart Game</button>
            </div>
        </>
    );
}
