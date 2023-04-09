import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

/**
 * Custom hook that fetches a single game
 * @returns {{game:Game, error:string}}
 * Returns an object containing two items: a single game and a string of any error message.
 */
const useGame = (slug: string | undefined) => {
	const [game, setGame] = useState<Game | null>(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		apiClient
			.get<Game>(`/games/${slug}`, { signal: controller.signal })
			.then((response) => {
				setGame(response.data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setIsLoading(false);
			});
		// cleanup to abort any ongoing request if component us unmounted or when a new render is triggered
		return () => controller.abort();
	}, [slug]);

	return { game, isLoading, error };
};

export default useGame;
