import type { FC } from 'react';
import { ArrowDownIcon } from '../../assets/icons';
import { AppInput } from '../Elements';

const Swap: FC = () => {
	return (
		<div className='flex flex-col space-y-3'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-2'>
					<div className='text-xs font-normal'>From: </div>
					<div className='text-xs font-normal'>--</div>
				</div>
				<div className='flex items-center space-x-1'>
					<div className='text-xs font-normal'>Select Token</div>
					<img src={ArrowDownIcon} alt='arrow' />
				</div>
			</div>
			<div className='flex items-center justify-between w-full relative'>
				<AppInput placeholder='0.00' />
				<div className='px-4 pt-1 text-center border border-black bg-white absolute right-4 text-xs leading-0'>MAX</div>
			</div>
			<div className='flex items-center space-x-2'>
				<div className='text-xs font-light'>Balance: </div>
				<div className='text-xs font-light'>0.00</div>
			</div>
		</div>
	);
};

export default Swap;
