import React from 'react';
import useGames from '../hooks/useGames';
import { Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './Skeletons/GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import InfiniteScroll from 'react-infinite-scroll-component';
function GameGrid() {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames();

	const skeletons = Array.from({ length: 8 });

	// if (error) return <Text>{error.message}</Text>;

	// compute total number of items we have fetched so far
	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
	return (
		<>
			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}>
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
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page?.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	);
}

export default GameGrid;
