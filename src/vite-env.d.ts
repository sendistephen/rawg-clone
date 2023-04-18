/// <reference types="vite/client" />

type Platform = {
	id: number;
	name: string;
	slug: string;
};
type Rating = {
	id: number;
	title: string;
	count: number;
};
type Genre = {
	id: number;
	name: string;
	slug: string;
};
type Tag = {
	id: number;
	name: string;
	slug: string;
};

interface Game {
	id: number;
	slug: string;
	name: string;
	released: string;
	background_image: string;
	playtime: number;
	rating_top: number;
	ratings_count: number;
	description_raw: string;
	metacritic: number;
	website: string;
	developers: {
		id: number;
		name: string;
		slug: string;
	}[];
	publishers: {
		id: number;
		name: string;
		slug: string;
	}[];
	tags: Tag[];
	genres: Genre[];
	platforms: { platform: Platform }[];
	ratings: Rating[];
	parent_platforms: {
		platform: Platform;
	}[];
}

interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
}
