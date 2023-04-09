/// <reference types="vite/client" />

type Platform = {
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
	parent_platforms: {
		platform: Platform;
	}[];
};
