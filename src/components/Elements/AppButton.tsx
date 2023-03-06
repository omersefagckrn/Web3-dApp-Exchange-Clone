import { FC } from 'react';

type AppButtonProps = {
	text: string;
	icon?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
};

const AppButton: FC<AppButtonProps> = ({ text, icon, onClick, type = 'button', className = 'bg-white' }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className='flex items-center text-center w-full relative hover:transition-all transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
		>
			<div className='py-2 px-4 bg-black absolute h-full w-full top-[5px] left-[5px] z-10' />
			<div className={`${className} flex items-center justify-center text-center ${icon && 'space-x-3'} py-3 px-2 border-black border-2 w-full relative z-20`}>
				{icon && <img src={icon} alt={icon.toString()} />}
				<div className='text-black font-semibold text-xs whitespace-nowrap'>{text}</div>
			</div>
		</button>
	);
};

export default AppButton;
