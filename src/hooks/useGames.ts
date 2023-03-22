import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

/**
 * Custom hook that fetches a list of games.
 * @returns {{games: Array<Game>, error:string}}
 * Returns object containing two items: an array of games and a string of any error messages.
 */
const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null
) =>
	useData<Game>(
		'/games',
		{ params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
		[selectedGenre?.id, selectedPlatform?.id]
	);

export default useGames;
