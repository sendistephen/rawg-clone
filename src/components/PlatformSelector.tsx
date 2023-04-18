import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlaforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {
	const { data } = usePlaforms();
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const selectedPlatform = usePlatform(selectedPlatformId);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						onClick={() => setSelectedPlatformId(platform.id)}
						key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
