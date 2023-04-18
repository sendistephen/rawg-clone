import usePlaforms from './usePlatforms';

function usePlatform(platformId?: number) {
	const { data: platforms } = usePlaforms();
	return platforms?.find((p) => p.id === platformId);
}

export default usePlatform;
