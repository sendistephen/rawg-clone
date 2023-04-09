import { GameQuery } from '../App';
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
const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[
			gameQuery.genre?.id,
			gameQuery.platform?.id,
			gameQuery.sortOrder,
			gameQuery.searchText,
		]
	);

export default useGames;
