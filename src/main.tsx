import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

import { RouterProvider } from 'react-router-dom';
import router from './router';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* wrap the App in ChakraProvider */}
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<RouterProvider router={router} />
				<ReactQueryDevtools />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
