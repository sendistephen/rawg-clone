import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onHandleSearch: (searchText: string) => void;
}
function Navbar({ onHandleSearch }: Props) {
	return (
		<HStack>
			<Image src={logo} boxSize='60px' />
			<SearchInput onHandleSearch={onHandleSearch} />
			<ColorModeSwitch />
		</HStack>
	);
}

export default Navbar;
