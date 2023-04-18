import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
	return (
		<>
			{/* <Navbar /> */}
			<Box padding={10}>
				<Outlet />
			</Box>
		</>
	);
}

export default Layout;
