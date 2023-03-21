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
const useGames = (selectedGenre: Genre | null) =>
	useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
