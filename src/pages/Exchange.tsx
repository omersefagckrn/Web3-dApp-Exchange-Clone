import type { FC } from 'react';
import { Exchange, Navigation } from '../components';

const Panel: FC = () => {
	return (
		<>
			<div className='min-h-screen bg-hero'>
				<Navigation />
				<Exchange />
			</div>
		</>
	);
};

export default Panel;
