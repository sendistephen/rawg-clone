import { Badge, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';

interface Props {
	rating: Rating;
}

function GameRating({ rating }: Props) {
	function getRatingColor(id: number): string {
		switch (id) {
			case 5:
				return 'green';
			case 4:
				return 'blue';
			case 3:
				return 'orange';
			case 1:
				return 'red';
			default:
				return 'gray';
		}
	}

	return (
		<Stack direction='row' alignItems='center'>
			<Box
				width='3'
				height='3'
				backgroundColor={getRatingColor(rating.id)}
				borderRadius='full'
			/>
			<Text fontWeight='bold' textTransform='capitalize'>
				{rating.title}
			</Text>
			<Text fontSize="sm" color='gray.500'>{rating.count}</Text>
		</Stack>
	);
}

export default GameRating;
