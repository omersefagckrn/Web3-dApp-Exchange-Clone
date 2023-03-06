import { Dialog } from 'primereact/dialog';
import type { FC } from 'react';

type SwitchNetworkProps = {
	visible: boolean;
	setVisible: (visible: boolean) => void;
	header?: string;
};

import { BnbchainIcon, CrosmosIcon, EthereumIcon, FantomIcon, PolygonIcon } from '../../assets/web3';

const SwitchNetwork: FC<SwitchNetworkProps> = ({ visible, setVisible, header = 'Header' }) => {
	return (
		<>
			<Dialog
				maximizable={window.outerWidth > 775 ? false : true}
				className='w-full lg:max-w-[774px]'
				draggable={false}
				header={header}
				visible={visible}
				onHide={() => setVisible(false)}
			>
				<div className='flex flex-col space-y-4'>
					<div className='flex items-center justify-start py-3 pl-4 bg-gray-100 rounded-lg space-x-2 cursor-pointer hover:scale-105'>
						<img src={EthereumIcon} alt={EthereumIcon.toString()} />
						<div className='font-bold leading-6 text-center text-base text-black'>Ethereum</div>
					</div>
					<div className='flex items-center justify-start py-3 pl-4 bg-gray-100 rounded-lg space-x-2 cursor-pointer hover:scale-105'>
						<img src={BnbchainIcon} alt={BnbchainIcon.toString()} />
						<div className='font-bold leading-6 text-center text-base text-black'>Binance Smart Chain</div>
					</div>
					<div className='flex items-center justify-start py-3 pl-4 bg-gray-100 rounded-lg space-x-2 cursor-pointer hover:scale-105'>
						<img src={CrosmosIcon} alt={CrosmosIcon.toString()} />
						<div className='font-bold leading-6 text-center text-base text-black'>Cosmos</div>
					</div>
					<div className='flex items-center justify-start py-3 pl-4 bg-gray-100 rounded-lg space-x-2 cursor-pointer hover:scale-105'>
						<img src={FantomIcon} alt={FantomIcon.toString()} />
						<div className='font-bold leading-6 text-center text-base text-black'>Fantom</div>
					</div>
					<div className='flex items-center justify-start py-3 pl-4 bg-gray-100 rounded-lg space-x-2 cursor-pointer hover:scale-105'>
						<img src={PolygonIcon} alt={PolygonIcon.toString()} />
						<div className='font-bold leading-6 text-center text-base text-black'>Polygon</div>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default SwitchNetwork;
