export type Product = {
	id: string;
	categories: {
		id: string;
		name: string;
	}[];
	description?: string;
	images: {
		alt: string;
		height: number;
		id: string;
		url: string;
		width: number;
	}[];
	name: string;
	price: number;
	rating?: number | null;
};
