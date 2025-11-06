import { useState } from "react";

function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`h-20 w-20 m-1 text-3xl font-bold rounded-lg transition-all duration-200 hover:scale-105 ${
        isWinning
          ? "bg-green-400 border-4 border-green-600"
          : "bg-white border-2 border-gray-300 hover:border-blue-400"
      }`}
      onClick={onSquareClick}
    >
      <span className={value === "X" ? "text-blue-600" : "text-red-600"}>
        {value}
      </span>
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];

  let status;

  if (winner) {
    status = `🎉 Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "🤝 It's a Draw!";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  function handClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
      <div
        className={`text-2xl font-bold mb-6 text-center p-4 rounded-lg ${
          winner ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
        }`}
      >
        {status}
      </div>
      <div className="inline-block bg-gray-100 p-4 rounded-xl">
        <div className="flex">
          <Square
            value={squares[0]}
            onSquareClick={() => handClick(0)}
            isWinning={winningLine.includes(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handClick(1)}
            isWinning={winningLine.includes(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handClick(2)}
            isWinning={winningLine.includes(2)}
          />
        </div>

        <div className="flex">
          <Square
            value={squares[3]}
            onSquareClick={() => handClick(3)}
            isWinning={winningLine.includes(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handClick(4)}
            isWinning={winningLine.includes(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handClick(5)}
            isWinning={winningLine.includes(5)}
          />
        </div>

        <div className="flex">
          <Square
            value={squares[6]}
            onSquareClick={() => handClick(6)}
            isWinning={winningLine.includes(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handClick(7)}
            isWinning={winningLine.includes(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handClick(8)}
            isWinning={winningLine.includes(8)}
          />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => jumpTo(move)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
            move === currentMove
              ? "bg-blue-600 text-white scale-105"
              : "bg-white text-gray-700 hover:bg-blue-50 hover:shadow-md border border-gray-200"
          }`}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Tic-Tac-Toe
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="bg-white p-6 rounded-2xl min-w-[250px]">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Game History</h2>
          <ol className="space-y-1">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
