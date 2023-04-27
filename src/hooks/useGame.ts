import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

/**
 * Custom hook that fetches a single game
 * @returns {{game:Game, error:string}}
 * Returns an object containing two items: a single game and a string of any error message.
 */
const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
