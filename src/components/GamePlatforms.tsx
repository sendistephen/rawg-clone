import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
	platforms: {
		platform: Platform;
	}[];
}
function GamePlatforms({ platforms }: Props) {
	const platformNames = platforms?.map((platform) => platform.platform.name);
	const commaSeparatedPlatforms = platformNames?.join(', ');

	return (
		<Box fontSize='sm'>
			<Text color='gray.500'>Platforms</Text>
			<Text>{commaSeparatedPlatforms}</Text>
		</Box>
	);
}

export default GamePlatforms;
