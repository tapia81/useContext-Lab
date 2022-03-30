import { useContext } from 'react';
import { ColorContext } from '../App';
export const YellowPage = () => {
	const Context = useContext(ColorContext);
	console.log(Context);
	return (
		<div>
			<p>Yellow Page</p>
		</div>
	);
};
