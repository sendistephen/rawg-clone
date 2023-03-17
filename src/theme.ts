import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Add color theme mode specifics
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};
// extend the theme with the mode specifics
const theme = extendTheme({ config });

export default theme;
