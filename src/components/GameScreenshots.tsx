import { Box, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
	gameId: number | undefined;
}
function GameScreenshots({ gameId }: Props) {
	const { screenshoots, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;
	if (error) return <p>{error}</p>;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
			{screenshoots?.map((file: Screenshot) => (
				<img key={file.id} src={file.image} alt='screenshot' />
			))}
		</SimpleGrid>
	);
}

export default GameScreenshots;
