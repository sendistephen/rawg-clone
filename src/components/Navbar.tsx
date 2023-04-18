import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onHandleSearch: (searchText: string) => void;
}
function Navbar({ onHandleSearch }: Props) {
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
