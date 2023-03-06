import type { FC } from 'react';

const Steps: FC = () => {
	return (
		<div className='py-6 lg:pl-10 lg:py-14'>
			<div className='flex flex-col'>
				<div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center border-[1px] border-black rounded-full w-8 h-8 bg-purple'>
							<div className='text-black font-bold'>1</div>
						</div>
						<div className='text-black text-md'>Starting Swap</div>
					</div>
					<div className='px-4 py-[3px]'>
						<div className='h-[60px] w-[1px] bg-gold' />
					</div>
				</div>
				<div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center border-[1px] border-gold rounded-full w-8 h-8'>
							<div className='text-gold font-bold'>2</div>
						</div>
						<div className='text-black text-md'>Crossing Bridge</div>
					</div>
					<div className='px-4 py-[3px]'>
						<div className='h-[60px] w-[1px] bg-gold' />
					</div>
				</div>
				<div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center border-[1px] border-gold rounded-full w-8 h-8'>
							<div className='text-gold font-bold'>3</div>
						</div>
						<div className='text-black text-md'>Approving Transfer</div>
					</div>
					<div className='px-4 py-[3px]'>
						<div className='h-[60px] w-[1px] bg-gold' />
					</div>
				</div>
				<div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center border-[1px] border-gold rounded-full w-8 h-8'>
							<div className='text-gold font-bold'>4</div>
						</div>
						<div className='text-black text-md'>Complete</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
