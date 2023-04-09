import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';
import { Link } from 'react-router-dom';

interface Props {
	game: Game;
}
function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<HStack>
					<Link to={`/games/${game.slug}`}>
						<Heading fontSize='2xl'>{game.name}</Heading>
					</Link>
					<Emoji rating={game.rating_top} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
