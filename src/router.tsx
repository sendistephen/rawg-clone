import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Game from './components/Game';

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/games/:slug',
			element: <Game />,
		},
	]);
	return <RouterProvider router={router} />;
}
