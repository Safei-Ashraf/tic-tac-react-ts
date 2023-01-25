import { useState } from "react";
import { Square } from "../Square/Square";
import "./Board.css";
export const Board = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xisNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState("");

	const resetBoard = () => {
		setBoard((prevState) => (prevState = Array(9).fill(null)));
	};
	const handleClick = (index: number): void => {
		const newBoard = board.slice();
		if (xisNext) {
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
			<button onClick={resetBoard}>Reset</button>
			<p className="game-turns">
				{winner.length === 0 && xisNext
					? "Player X Turn "
					: "Player O Turn"}
			</p>
			<p>{winner.length > 0 ? `Player ${winner} Won!` : ""}</p>
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
		</div>
	);
};
