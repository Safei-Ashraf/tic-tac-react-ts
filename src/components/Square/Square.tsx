import "./Square.css";
interface SquareProps {
	val: string;
	onClick: () => void;
}

export const Square = ({ val, onClick }: SquareProps): JSX.Element => {
	return (
		<button className="square" onClick={onClick}>
			{val}
		</button>
	);
};
