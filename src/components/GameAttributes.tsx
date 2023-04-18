import { Button, Stack, Text, theme } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game | null;
}
function GameAttributes({ game }: Props) {
	return (
		<Stack
			direction={{ base: 'column', md: 'row' }}
			spacing={{ base: 2, md: 3 }}
			align='center'
			marginY={2}>
			<Button fontSize='sm'>{game?.released}</Button>
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
		</Stack>
	);
}

export default GameAttributes;
