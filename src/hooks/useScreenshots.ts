import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

function useScreenshots(gameId: number | undefined) {
	const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
	return useQuery({
		queryKey: ['screenshots', gameId],
		queryFn: apiClient.getAll,
	});
}

export default useScreenshots;
