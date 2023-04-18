import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Text,
	Progress,
	Link,
	theme,
	SimpleGrid,
} from '@chakra-ui/react';

import GameBreadcrumb from './GameBreadcrumb';
import Emoji from './Emoji';
import GameRating from './GameRating';
import GameDescription from './GameDescription';
import GamePlatforms from './GamePlatforms';
import CriticScore from './CriticScore';
import GameGenres from './GameGenres';
import GameTags from './GameTags';
import GameAttributes from './GameAttributes';

function Game() {
	const { slug } = useParams();

	const { game, isLoading, error } = useGame(slug);

	return (
		<>
			{isLoading ? (
				<Progress size='xs' isIndeterminate />
			) : (
				// <Flex>
				// 	<Flex paddingX='2' direction='column'>
				// 		{game && <GameBreadcrumb gameName={game.name} />}
				//
				// 		<Heading as='h1' fontSize={{ base: '4xl', md: '7xl' }}>
				// 			{game?.name}
				// 		</Heading>

				// 		<Flex direction='column' alignItems='center'>
				// 			<Emoji rating={game?.rating_top || 0} showTitle={true} />
				// 			<Text
				// 				textTransform='uppercase'
				// 				fontSize='sm'
				// 				color='gray.500'
				// 				textDecoration='underline'
				// 				letterSpacing='1.2px'
				// 				fontWeight='light'>
				// 				{game?.ratings_count} Ratings
				// 			</Text>
				// 		</Flex>
				// 		<Flex direction='column' alignItems='start'>
				// 			<Flex flexWrap='wrap' gap='4' marginY='2'>
				// 				{game?.ratings.map((rating) => (
				// 					<GameRating key={rating.id} rating={rating} />
				// 				))}
				// 			</Flex>
				// 			<GameDescription description={game?.description_raw as string} />

				// 			<Grid templateColumns='repeat(2, 1fr)' gap={4} maxWidth='sm'>
				// 				<GridItem colSpan={1}>
				// 					<GamePlatforms platforms={game?.platforms || []} />
				// 				</GridItem>
				// 				<GridItem colSpan={1} textAlign='right'>
				// 					<Box>
				// 						<Text fontSize='sm' color='gray.500'>
				// 							Metascore
				// 						</Text>
				// 						<CriticScore score={game?.metacritic || 0} />
				// 					</Box>
				// 				</GridItem>
				// 				<GridItem colSpan={1}>
				// 					<GameGenres genres={game?.genres || []} />
				// 				</GridItem>
				// 				<GridItem colSpan={1} fontSize='sm' textAlign='right'>
				// 					<Text color='gray.500'>Release date</Text>
				// 					<Text>{game?.released}</Text>
				// 				</GridItem>
				// 				<GridItem colSpan={1} fontSize='sm'>
				// 					<Text color='gray.500'>Developer</Text>
				// 					{game?.developers.map((developer) => (
				// 						<Text key={developer.id}>{developer.name}</Text>
				// 					))}
				// 				</GridItem>
				// 				<GridItem colSpan={1} fontSize='sm' textAlign='right'>
				// 					<Text color='gray.500'>Publisher</Text>
				// 					{game?.publishers.map((publisher) => (
				// 						<Text key={publisher.id}>{publisher.name}</Text>
				// 					))}
				// 				</GridItem>
				// 			</Grid>
				// 			<Box marginY='2' fontSize='sm'>
				// 				<Text color='gray.500'>Tags</Text>
				// 				<GameTags tags={game?.tags || []} />
				// 			</Box>
				// 			<Box marginY='2' fontSize='sm'>
				// 				<Text color='gray.500'>Website</Text>
				// 				<Link href={`${game?.website}`} target='_blank'>
				// 					{game?.website}
				// 				</Link>
				// 			</Box>
				// 		</Flex>
				// 	</Flex>
				// </Flex>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
					<GridItem>
						{game && <GameBreadcrumb gameName={game.name} />}
						<GameAttributes game={game} />
					</GridItem>
					<GridItem>Under development</GridItem>
				</SimpleGrid>
			)}
		</>
	);
}

export default Game;
