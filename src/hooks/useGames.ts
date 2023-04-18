import useGameQueryStore from '../store';
import useData from './useData';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	slug: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

/**
 * Custom hook that fetches a list of games.
 * @returns {{games: Array<Game>, error:string}}
 * Returns object containing two items: an array of games and a string of any error messages.
 */
const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	const { data, isLoading, error } = useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genreId,
				platforms: gameQuery.platformId,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[
			gameQuery.genreId,
			gameQuery.platformId,
			gameQuery.sortOrder,
			gameQuery.searchText,
		]
	);
	return { data, isLoading, error };
};
export default useGames;
