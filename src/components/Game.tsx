import useGame from '../hooks/useGame';
import { useParams } from 'react-router-dom';
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import GameBreadcrumb from './GameBreadcrumb';
import PlatformIconList from './PlatformIconList';

function Game() {
	const { slug } = useParams();

	const { game, isLoading, error } = useGame(slug);
	console.log(isLoading);
	console.log(game);
	return (
		<Flex
			height='100vh'
			backgroundPosition='center'
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
			justifyContent='center'
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
			<Flex direction='column' flexWrap='wrap' alignItems='center'>
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
				<Heading as='h1' fontSize='4xl' paddingX="2">
					{game?.name}
				</Heading>
			</Flex>
		</Flex>
	);
}

export default Game;
