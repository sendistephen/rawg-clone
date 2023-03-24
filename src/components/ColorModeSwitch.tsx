import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { HiSun } from 'react-icons/hi';

function ColorModeSwitch() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch
				colorScheme='green'
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
			/>
			<HiSun size={25}/>
		</HStack>
	);
}

export default ColorModeSwitch;
