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
type Game = {
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
	genres: Genre[];
	platforms: { platform: Platform }[];
	ratings: Rating[];
	parent_platforms: {
		platform: Platform;
	}[];
};
