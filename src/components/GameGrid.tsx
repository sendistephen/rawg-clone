import useGames from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

interface Props {
	gameQuery: GameQuery;
}

function GameGrid() {
	const { data, error, isLoading } = useGames();

	const skeletons = Array.from({ length: 8 });

	if (error) return <Text>{error}</Text>;
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 5, '2xl': 8 }}
			spacing={4}
			paddingY='10px'>
			{isLoading &&
				skeletons.map((_, skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data?.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
}

export default GameGrid;
