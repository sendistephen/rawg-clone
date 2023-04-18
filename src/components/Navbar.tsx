import { Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function Navbar() {
	return (
		<HStack paddingTop={10} paddingX='10px'>
			<Link to='/'>
				<Heading as='h1'>RawG</Heading>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
}

export default Navbar;
