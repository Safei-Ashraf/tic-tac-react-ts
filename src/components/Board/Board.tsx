import { useState } from "react";
import { Square } from "../Square/Square";
import "./Board.css";
export const Board = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState("");
	const gameWinner = calculateWinner(board as []);
	let status;
	if (gameWinner) {
		status = `Winner is ${gameWinner}`;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	const resetBoard = () => {
		setBoard((prevState) => (prevState = Array(9).fill(null)));
	};
	const handleClick = (index: number): void => {
		const newBoard = board.slice();
		if (xIsNext) {
			newBoard[index] = "X";
			setXIsNext(false);
		} else {
			newBoard[index] = "O";
			setXIsNext(true);
		}
		setBoard((board) => (board = newBoard));
	};
	return (
		<div>
			<p>{status && <span>{status}</span>}</p>
			<div className="board-container">
				{board.map((sqr, index) => {
					return (
						<Square
							val={sqr}
							key={index}
							onClick={() => {
								handleClick(index);
							}}
						/>
					);
				})}
			</div>
			<button className="reset-button" onClick={resetBoard}>
				Reset
			</button>
		</div>
	);
};

function calculateWinner(squares: []) {
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
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
