import useGenres from './useGenres';

function useGenre(genreId?: number) {
	const { data: genres } = useGenres();
	return genres?.find((g) => g.id === genreId);
}

export default useGenre;
