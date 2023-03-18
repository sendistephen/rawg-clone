import { Fragment } from 'react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

function GameGrid() {
	const { data, error, isLoading } = useGames();
	const skeletons = Array.from({ length: 8 });
	return (
		<Fragment>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 8 }}
				spacing={10}
				padding={10}>
				{isLoading &&
					skeletons.map((_, skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{data?.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</Fragment>
	);
}

export default GameGrid;
