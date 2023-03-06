import { FC, useState } from 'react';

import { AppButton } from './Elements';
import { SwitchNetwork } from './Modal';

import { ArrowDownIcon, BnbIcon } from '../assets/icons';
import Logo from '../assets/Logo.svg';

const Navigation: FC = () => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<>
			<SwitchNetwork header='Switch Network' visible={visible} setVisible={() => setVisible(false)} />

			<div className='flex items-center justify-between mx-4 lg:mx-40 py-7'>
				<img src={Logo} alt='logo' />
				<div className='hidden lg:flex items-center space-x-8 whitespace-nowrap'>
					<div className='text-black font-semibold'>Cross Swap</div>
					<div className='flex items-center space-x-1'>
						<div className='font-normal text-xs'>Explorer</div>
						<img src={ArrowDownIcon} alt='arrow-down' />
					</div>
					<AppButton onClick={() => setVisible(true)} className='bg-white' text='BNB Chain' icon={BnbIcon} />
					<AppButton className='bg-purple' text='Connect Wallet' />
				</div>
			</div>
		</>
	);
};

export default Navigation;
