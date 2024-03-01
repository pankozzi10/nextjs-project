import { notFound } from "next/navigation";
import { type ProductSortBy, ProductsPageListDocument } from "@gql/graphql";
import { PAGE_SIZE } from "@utils/constants";
import { executeGraphQL } from "@utils/executeGraphQL";
import { ProductList } from "@organisms/ProductList";
import { Pagination } from "@organisms/Pagination";

type ProductsPageParams = { page?: string };
type ProductPageSearchParams = { orderBy: ProductSortBy };
type ProductsPageProps = { params: ProductsPageParams; searchParams: ProductPageSearchParams };

export async function generateMetadata({ params: { page } }: { params: ProductsPageParams }) {
	return {
		title: `Products list - page ${page}`,
		description: "Products list page with pagination.",
	};
}

export default async function ProductsPage({
	params: { page },
	searchParams: { orderBy },
}: ProductsPageProps) {
	if (!page) return notFound();

	const data = await executeGraphQL({
		query: ProductsPageListDocument,
		variables: {
			skip: (parseInt(page) - 1) * PAGE_SIZE,
			take: PAGE_SIZE,
			orderBy: orderBy,
		},
	});

	if (data.products.data.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<ProductList products={data.products.data} orderSelect={{ route: `/products/${page}` }} />
			<Pagination
				setHref={(page) => `/products/${page}?orderBy=${orderBy}`}
				pageSize={PAGE_SIZE}
				totalItems={data.products.meta.total}
			/>
		</section>
	);
}
