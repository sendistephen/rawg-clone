import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
	id: number;
	name: string;
}
interface GenreResponse {
	count: number;
	results: Genre[];
}

function useGenres() {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// create an instance of the AbortController so we can cancel the API request in-flight
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<GenreResponse>('/genres', { signal: controller.signal })
			.then((response) => {
				setGenres(response.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		// Cleanup to abort any ongoing request if component is unmounted or a new render is triggered
		return () => controller.abort();
	}, []);
	return { genres, error, isLoading };
}

export default useGenres;
