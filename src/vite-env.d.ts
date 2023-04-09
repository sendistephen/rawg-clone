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

type Game = {
	id: number;
	slug: string;
	name: string;
	released: string;
	background_image: string;
	playtime: number;
	rating_top: number;
	ratings_count: number;
	ratings: Rating[];
	parent_platforms: {
		platform: Platform;
	}[];
};
