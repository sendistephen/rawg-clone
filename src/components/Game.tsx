import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import GameBreadcrumb from './GameBreadcrumb';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';
import GameRating from './GameRating';
import GameDescription from './GameDescription';
import GamePlatforms from './GamePlatforms';
import CriticScore from './CriticScore';

function Game() {
	const { slug } = useParams();

	const { game, isLoading, error } = useGame(slug);

	return (
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
					<Flex gap='4' maxWidth='sm'>
						<GamePlatforms platforms={game?.platforms || []} />
						<Box>
							<Text fontSize='sm' color='gray.500'>
								Metascore
							</Text>
							<CriticScore score={game?.metacritic || 0} />
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Game;
