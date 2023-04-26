import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlaforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>('/platforms/lists/parents')
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: platforms,
	});

export default usePlaforms;
