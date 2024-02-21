import { notFound } from "next/navigation";
import { ProductsPageListDocument } from "@gql/graphql";
import { PAGE_SIZE } from "@utils/constants";
import { executeGraphQL } from "@utils/executeGraphQL";
import { ProductList } from "@organisms/ProductList";
import { Pagination } from "@organisms/Pagination";

export type ProductsPageParams = { page?: string };
type ProductsPageProps = { params: ProductsPageParams };

export async function generateMetadata({ params: { page } }: { params: ProductsPageParams }) {
	return {
		title: `Products list - page ${page}`,
		description: "Products list page with pagination.",
	};
}

export default async function ProductsPage({ params: { page } }: ProductsPageProps) {
	if (!page) return notFound();

	const data = await executeGraphQL({
		query: ProductsPageListDocument,
		variables: {
			skip: (parseInt(page) - 1) * PAGE_SIZE,
			take: PAGE_SIZE,
		},
	});

	if (data.products.data.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<ProductList products={data.products.data} />
			<Pagination
				setHref={(page) => `/products/${page}`}
				pageSize={PAGE_SIZE}
				totalItems={data.products.meta.total}
			/>
		</section>
	);
}
