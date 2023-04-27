import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

/**
 * Custom hook that fetches a list of games.
 * @returns {{games: Array<Game>, error:string}}
 * Returns object containing two items: an array of games and a string of any error messages.
 */

const apiClient = new APIClient<Game>('/games');
const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useQuery({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: 24 * 60 * 60 * 1000,
	});
};
export default useGames;
