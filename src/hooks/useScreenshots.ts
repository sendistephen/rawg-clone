import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchScreenshotResponse {
	count: number;
	results: Screenshot[];
}

function useScreenshots(gameId: number | undefined) {
	const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		apiClient
			.get<FetchScreenshotResponse>(`/games/${gameId}/screenshots`, {
				signal: controller.signal,
			})
			.then((response) => {
				setScreenshots(response.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setIsLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { screenshots, isLoading, error };
}

export default useScreenshots;
