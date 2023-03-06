/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Ranille: ['Ranille', 'sans-serif']
			},
			colors: {
				black: '#0D0C07',
				gold: '#937F4D',
				purple: '#C8B1F9',
				hero: '#F1EEE4',
				exchange: '#E3DDCA'
			}
		}
	},
	plugins: []
};
