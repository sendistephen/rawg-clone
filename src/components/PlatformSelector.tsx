import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
	const { data } = usePlaforms();
	return (
		<Menu>
			<MenuButton as={Button} paddingX='10px' rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						onClick={() => onSelectedPlatform(platform)}
						key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
