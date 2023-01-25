import { useState } from "react";
import { Square } from "../Square/Square";
import "./Board.css";
export const Board = () => {
	const [board, setBoard] = useState(Array(9).fill("X"));
	const resetBoard = () => {
		setBoard((board) => board.fill(""));
	};

	return (
		<div>
			<button onClick={resetBoard}>Reset</button>
			<div className="board-container">
				{board.map((sqr, index) => {
					return (
						<Square
							val={sqr}
							key={index}
							onClick={() => console.log(sqr, index)}
						/>
					);
				})}
			</div>
		</div>
	);
};
