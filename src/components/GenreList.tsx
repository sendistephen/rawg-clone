import {
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Text as Button,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
function GenreList({ selectedGenre, onSelectGenre }: Props) {
	const { data } = useGenres();
	return (
		<>
			<Heading fontSize='2xl' marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								whiteSpace='normal'
								textAlign='left'
								variant='link'
								cursor='pointer'>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}

export default GenreList;
