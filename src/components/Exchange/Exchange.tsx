import type { FC } from 'react';

import { Steps, Swap } from '.';
import { RoundedArrowDownIcon } from '../../assets/icons';
import { AppButton } from '../Elements';

const Exchange: FC = () => {
	return (
		<div className='lg:mt-16 pb-20 lg:pb-0 mx-4'>
			<div className='flex-col-reverse lg:flex-row flex lg:space-x-10 items-start justify-center'>
				<section className='flex flex-col items-center w-full lg:w-[656px]'>
					<div className='flex items-center justify-between w-full'>
						<div className='text-3xl font-normal'>Cross Swap</div>
						<div className='flex items-center space-x-2'>
							<div className='text-black text-xs font-normal'>Recent Transactions</div>
							<span className='text-gold font-normal'>(0)</span>
						</div>
					</div>
					<div className='mt-6 w-full'>
						<div className='bg-exchange pt-10 px-10 pb-11 space-y-6'>
							<Swap />
							<div className='flex items-center justify-center animate-bounce'>
								<img src={RoundedArrowDownIcon} alt='rounded-arrow-down' />
							</div>
							<Swap />
							<AppButton className='bg-purple' text='Connect Wallet' />
						</div>
					</div>
				</section>
				<section>
					<Steps />
				</section>
			</div>
		</div>
	);
};

export default Exchange;
