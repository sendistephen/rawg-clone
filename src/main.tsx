import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* wrap the App in ChakraProvider */}
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Router />
		</ChakraProvider>
	</React.StrictMode>
);
