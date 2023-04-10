import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
	tags: Tag[];
};
function GameTags({ tags }: Props) {
	const tagNames = tags.map((tag) => tag.name);
	const commaSeparatedTags = tagNames.join(', ');
	return (
		<Flex maxWidth={{ base: 'xl' }} fontSize='sm'>
			<Text>{commaSeparatedTags}</Text>
		</Flex>
	);
}

export default GameTags;
