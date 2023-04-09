import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
	description: string;
}
function GameDescription({ description }: Props) {
	const [showFullDescription, setShowFullDescription] = useState(false);

	const toggleShowFullDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	const shortDescription = description?.slice(0, 200);
	const isLongDescription = description?.length > 200;

	return (
		<Box marginY='10' maxWidth={{ base: 'xl' }}>
			<Text fontSize='2xl' fontWeight='bold'>
				About
			</Text>
			{showFullDescription ? (
				<>
					<Text>{description}</Text>
					{isLongDescription && (
						<Button size='xs' onClick={toggleShowFullDescription}>
							Show less
						</Button>
					)}
				</>
			) : (
				<>
					<Text>{shortDescription}</Text>
					{isLongDescription && (
						<Button size='xs' onClick={toggleShowFullDescription}>
							Show more
						</Button>
					)}
				</>
			)}
		</Box>
	);
}

export default GameDescription;
