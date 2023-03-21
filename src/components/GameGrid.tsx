import { Fragment } from 'react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
	selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
	const { data, error, isLoading } = useGames(selectedGenre);

	const skeletons = Array.from({ length: 8 });
	return (
		<Fragment>
			{error && <p>{error}</p>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5, '2xl': 8 }}
				spacing={4}
				padding='10px'>
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
		</Fragment>
	);
}

export default GameGrid;
