import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';
import ScreenshotModal from './ScreenshotModal';

interface Props {
	gameId: number | undefined;
}
function GameScreenshots({ gameId }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;
	// if (error) return <p>{error}</p>;

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
				{data?.results?.map((file: Screenshot) => (
					<img
						onClick={onOpen}
						key={file.id}
						src={file.image}
						alt='screenshot'
						className='screenshot-image'
					/>
				))}
			</SimpleGrid>
			{isOpen && (
				<ScreenshotModal
					screenshots={data?.results}
					isOpen={isOpen}
					onClose={onClose}
				/>
			)}
		</>
	);
}

export default GameScreenshots;
