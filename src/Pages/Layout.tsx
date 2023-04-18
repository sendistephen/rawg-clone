import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
	return (
		<>
			<Navbar />
			<Box paddingY={10} paddingX={5}>
				<Outlet />
			</Box>
		</>
	);
}

export default Layout;
