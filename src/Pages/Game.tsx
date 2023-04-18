import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Hide,
	Text,
	Progress,
	Link,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';

import GameBreadcrumb from '../components/GameBreadcrumb';
import Emoji from '../components/Emoji';
import GameRating from '../components/GameRating';
import GameDescription from '../components/GameDescription';
import GamePlatforms from '../components/GamePlatforms';
import CriticScore from '../components/CriticScore';
import GameGenres from '../components/GameGenres';
import GameTags from '../components/GameTags';
import GameAttributes from '../components/GameAttributes';

function Game() {
	const { slug } = useParams();

	const { game, isLoading, error } = useGame(slug);

	return (
		<>
			{isLoading ? (
				<Progress size='xs' isIndeterminate />
			) : (
				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
					<GridItem>
						{game && <GameBreadcrumb gameName={game.name} />}
						<GameAttributes game={game} />
						<Heading>{game?.name}</Heading>
						<Hide below='md'>
							<Flex align='center' marginY={2}>
								<Emoji rating={game?.rating_top || 0} showTitle={true} />
								<Text
									textTransform='uppercase'
									fontSize='sm'
									color='gray.500'
									textDecoration='underline'
									letterSpacing='1.2px'
									fontWeight='light'
									marginLeft={2}>
									{game?.ratings_count} Ratings
								</Text>
							</Flex>
						</Hide>

						<Stack
							direction={{ base: 'column', md: 'row' }}
							spacing={{ base: 2, md: 4 }}
							marginY={2}>
							{game?.ratings.map((rating) => (
								<GameRating key={rating.id} rating={rating} />
							))}
						</Stack>
						<GameDescription description={game?.description_raw as string} />
						<Grid templateColumns='repeat(2, 1fr)' gap={4} maxWidth=''>
							<GridItem colSpan={1}>
								<GamePlatforms platforms={game?.platforms || []} />
							</GridItem>
							<GridItem colSpan={1} textAlign='right'>
								<Box>
									<Text fontSize='sm' color='gray.500'>
										Metascore
									</Text>
									<CriticScore score={game?.metacritic || 0} />
								</Box>
							</GridItem>
							<GridItem colSpan={1}>
								<GameGenres genres={game?.genres || []} />
							</GridItem>
							<GridItem colSpan={1} fontSize='sm' textAlign='right'>
								<Text color='gray.500'>Release date</Text>
								<Text>{game?.released}</Text>
							</GridItem>
							<GridItem colSpan={1} fontSize='sm'>
								<Text color='gray.500'>Developer</Text>
								{game?.developers.map((developer) => (
									<Text key={developer.id}>{developer.name}</Text>
								))}
							</GridItem>
							<GridItem colSpan={1} fontSize='sm' textAlign='right'>
								<Text color='gray.500'>Publisher</Text>
								{game?.publishers.map((publisher) => (
									<Text key={publisher.id}>{publisher.name}</Text>
								))}
							</GridItem>
						</Grid>
						<Box paddingY={2} fontSize='sm' width='full'>
							<Text color='gray.500'>Tags</Text>
							<GameTags tags={game?.tags || []} />
						</Box>
						<Box fontSize='sm' width='full'>
							<Text color='gray.500'>Website</Text>
							<Link href={`${game?.website}`} target='_blank'>
								{game?.website}
							</Link>
						</Box>
					</GridItem>
					<GridItem>Under development</GridItem>
				</SimpleGrid>
			)}
		</>
	);
}

export default Game;
