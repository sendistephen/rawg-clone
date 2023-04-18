import {
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Text as Button,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import GenreSkeleton from './Skeletons/GenreSkeleton';

function GenreList() {
	const { data, isLoading } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const skeletons = Array.from({ length: 31 });

	return (
		<>
			<Heading fontSize='2xl' marginBottom={3} marginTop={9}>
				Genres
			</Heading>
			<List>
				{isLoading &&
					skeletons.map((_, skeleton) => <GenreSkeleton key={skeleton} />)}
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
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize='md'
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
