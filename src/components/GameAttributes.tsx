import { HStack, Text, theme } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}
function GameAttributes({ game }: Props) {
	return (
		<HStack marginY='5' spacing='4' flexWrap='wrap'>
			<Text
				backgroundColor={theme.colors.white}
				color={theme.colors.gray[900]}
				paddingX='2'
				paddingY='1'
				borderRadius='md'
				textTransform='uppercase'
				fontSize='small'>
				{game?.released}
			</Text>
			<PlatformIconList
				platforms={game?.parent_platforms.map((p) => p.platform)}
				color=''
			/>
			<Text
				textTransform='uppercase'
				letterSpacing='2px'
				fontSize='small'
				paddingY={{ base: '2', md: '0' }}
				fontWeight='normal'>
				Average Playtime: {game?.playtime} hours
			</Text>
		</HStack>
	);
}

export default GameAttributes;
