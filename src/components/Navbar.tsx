import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function Navbar() {
	return (
		<HStack>
			<Image src={logo} boxSize='60px' />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
}

export default Navbar;
