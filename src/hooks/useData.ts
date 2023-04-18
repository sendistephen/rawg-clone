import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
	count: number;
	results: T[];
}

function useData<T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			// create an instance of the AbortController so we can cancel the API request in-flight
			const controller = new AbortController();
			setIsLoading(true);
			apiClient
				.get<FetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((response) => {
					setData(response?.data.results);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
					setIsLoading(false);
				});

			// Cleanup to abort any ongoing request if component is unmounted or a new render is triggered
			return () => controller.abort();
		},
		deps ? [...deps] : []
	);
	return { data, error, isLoading };
}

export default useData;
