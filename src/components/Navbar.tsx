import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function Navbar() {
	return (
		<HStack padding='10px'>
			<Link to='/'>
				<Image src={logo} boxSize='60px' />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
}

export default Navbar;
