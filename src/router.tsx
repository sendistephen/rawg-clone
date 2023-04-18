import { createBrowserRouter } from 'react-router-dom';
import Game from './components/Game';
import Home from './Pages/Home';
import Layout from './Pages/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> }, // Root page -> home page
			{
				path: 'games/:slug',
				element: <Game />, // game details page
			},
		],
	},
]);
export default router;
