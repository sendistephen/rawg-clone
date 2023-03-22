import { Fragment } from 'react';
import useGames, { Platform } from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
	const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

	const skeletons = Array.from({ length: 8 });
	return (
		<Fragment>
			{error && <p>{error}</p>}
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
		</Fragment>
	);
}

export default GameGrid;
