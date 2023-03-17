import { Fragment } from 'react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

function GameGrid() {
	const { games, error } = useGames();

	return (
		<Fragment>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 8 }}
				spacing={10}
				padding={10}>
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</Fragment>
	);
}

export default GameGrid;
