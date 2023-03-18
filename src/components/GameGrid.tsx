import { Fragment } from 'react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';

function GameGrid() {
	const { games, error, isLoading } = useGames();
	const skeletons = Array.from({ length: 8 });
	return (
		<Fragment>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 8 }}
				spacing={10}
				padding={10}>
				{isLoading &&
					skeletons.map((_, skeleton) => <GameCardSkeleton key={skeleton} />)}
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</Fragment>
	);
}

export default GameGrid;
