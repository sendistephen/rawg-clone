import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';

interface Props {
	genres: Genre[];
}
function GameGenres({ genres }: Props) {
	return (
		<Box fontSize='sm' marginY='2' flex='1'>
			<Text color='gray.500'>Genres</Text>
			<HStack>
				{genres.map((genre) => (
					<Fragment key={genre.id}>
						<Text>{genre.name}</Text>
					</Fragment>
				))}
			</HStack>
		</Box>
	);
}

export default GameGenres;
