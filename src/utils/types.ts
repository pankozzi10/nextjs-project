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

export type Collection = {
	id: string;
	description?: string;
	products: {
		images: {
			alt: string;
			height: number;
			id: string;
			url: string;
			width: number;
		}[];
	}[];
	name: string;
	slug: string;
};

export type Category = {
	description: string;
	id: string;
	name: string;
	slug: string;
	products: {
		images: {
			alt: string;
			height: number;
			id: string;
			url: string;
			width: number;
		}[];
	}[];
};
