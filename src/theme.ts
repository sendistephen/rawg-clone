import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Add color theme mode specifics
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};
// extend the theme with the mode specifics
const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: '#f9f9f9',
			100: '#ededed',
			200: '#d3d3d3',
			300: '#b3b3b3',
			400: '#a0a0a0a0',
			500: '#898989',
			600: '#63636363',
			700: '#202020',
			800: '#121212',
			900: '#111111',
		},
	},
});

export default theme;
