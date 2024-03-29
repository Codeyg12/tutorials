import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    const squaresCpy = [...squares];
    if (squaresCpy[i] || getWinner(squaresCpy)) return;
    squaresCpy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCpy);
    setXIsNext(!xIsNext);
  };

  const getWinner = (squares) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
  };

  useEffect(() => {
    if (getWinner(squares) && squares.every((item) => item !== "")) {
      setWinner("THIS IS A DRAW");
    } else if (getWinner(squares)) {
      setWinner(`The winner is ${getWinner(squares)}`);
    } else {
      setWinner(`Next player is ${xIsNext ? "X" : "O"}`);
    }
  }, [squares]);

  return (
    <div className="ttt-container">
      <div className="ttt-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="ttt-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="ttt-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {winner && <h2>{winner}</h2>}
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
