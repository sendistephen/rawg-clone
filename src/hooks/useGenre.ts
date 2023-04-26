import useGenres from './useGenres';

function useGenre(genreId?: number) {
	const { data } = useGenres();
	return data?.results?.find((g) => g.id === genreId);
}

export default useGenre;
