import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
