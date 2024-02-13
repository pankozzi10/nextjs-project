import type { Metadata } from "next";
import { ProductList } from "@organisms/ProductList";
import type { ProductListItemProps } from "@molecules/ProductListItem";
import { Pagination } from "@molecules/Pagination";

const PAGE_SIZE = 20;

interface ProductPageProps {
	offset: number;
}

const getProducts = async ({ offset }: ProductPageProps) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${PAGE_SIZE}&offset=${offset}`,
	);
	return (await response.json()) as ProductListItemProps[];
};

type ProductsPageParams = { page: string };

export async function generateMetadata({
	params: { page },
}: {
	params: ProductsPageParams;
}): Promise<Metadata> {
	return {
		title: `Products list: page ${page}`,
		description: "Products list page with pagination.",
	};
}

export default async function ProductsPage({ params: { page } }: { params: ProductsPageParams }) {
	const products: ProductListItemProps[] = await getProducts({
		offset: (parseInt(page) - 1) * PAGE_SIZE,
	});

	return (
		<section className="flex flex-col items-center justify-between">
			<ProductList products={products} />
			<Pagination setHref={(page) => `/products/${page}`} pageSize={PAGE_SIZE} totalItems={100} />
		</section>
	);
}
