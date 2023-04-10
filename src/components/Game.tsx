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
} from '@chakra-ui/react';

import GameBreadcrumb from './GameBreadcrumb';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';
import GameRating from './GameRating';
import GameDescription from './GameDescription';
import GamePlatforms from './GamePlatforms';
import CriticScore from './CriticScore';
import GameGenres from './GameGenres';

function Game() {
	const { slug } = useParams();

	const { game, isLoading, error } = useGame(slug);

	return (
		<>
			{isLoading ? (
				<Progress size='xs' isIndeterminate />
			) : (
				<Flex
					height='100vh'
					backgroundPosition='center'
					backgroundSize='cover'
					backgroundRepeat='no-repeat'
					justifyContent='center'
					backgroundAttachment='fixed'
					backgroundImage={`
            linear-gradient(
                to bottom, 
                rgba(15,15,15,0),  
                rgb(21,21,21)
            ),
            linear-gradient(
                to bottom, 
                rgba(21,21,21,0.6), 
                rgba(21,21,21,0.5)
            ),
            url(${game?.background_image})
`}>
					<Flex paddingX='2' direction='column' alignItems='center'>
						{game && <GameBreadcrumb gameName={game.name} />}
						<HStack
							marginY='5'
							spacing='4'
							flexWrap='wrap'
							justifyContent='center'
							alignItems='center'>
							<Box
								backgroundColor='white'
								paddingX='2'
								paddingY='1'
								borderRadius='md'
								textTransform='uppercase'
								fontSize='small'
								color={'gray.900'}>
								{game?.released}
							</Box>
							<PlatformIconList
								platforms={game?.parent_platforms.map((p) => p.platform)}
								color='white'
							/>
							<Text
								textTransform='uppercase'
								color={'white'}
								letterSpacing='2px'
								fontSize='small'
								paddingY={{ base: '2', md: '0' }}
								fontWeight='normal'>
								Average Playtime: {game?.playtime} hours
							</Text>
						</HStack>
						<Heading
							textAlign='center'
							as='h1'
							fontSize={{ base: '4xl', md: '7xl' }}>
							{game?.name}
						</Heading>

						<Flex direction='column' alignItems='center'>
							<Emoji rating={game?.rating_top || 0} showTitle={true} />
							<Text
								textTransform='uppercase'
								fontSize='sm'
								color='gray.500'
								textDecoration='underline'
								letterSpacing='1.2px'
								fontWeight='light'>
								{game?.ratings_count} Ratings
							</Text>
						</Flex>
						<Flex direction='column' alignItems='start'>
							<Flex flexWrap='wrap' gap='4' marginY='2'>
								{game?.ratings.map((rating) => (
									<GameRating key={rating.id} rating={rating} />
								))}
							</Flex>
							<GameDescription description={game?.description_raw as string} />

							<Grid templateColumns='repeat(2, 1fr)' gap={4} maxWidth='sm'>
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
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
}

export default Game;
