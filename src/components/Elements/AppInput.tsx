import type { FC } from 'react';

type AppInputProps = {
	placeholder?: string;
};

const AppInput: FC<AppInputProps> = ({ placeholder }) => {
	return <input className='py-4 px-4 placeholder:text-gold placeholder:text-xs w-full focus:outline-none outline-none' placeholder={placeholder} />;
};

export default AppInput;
