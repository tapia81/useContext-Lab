import { useContext } from 'react';
import { ColorContext } from '../App';
export const GreenPage = () => {
	const Context = useContext(ColorContext);
	console.log(Context);
	return (
		<div>
			<p>Green Page</p>
		</div>
	);
};
