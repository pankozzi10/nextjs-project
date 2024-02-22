import { notFound } from "next/navigation";
import { executeGraphQL } from "@utils/executeGraphQL";
import { CategoryProductsDocument } from "@gql/graphql";
import { ProductList } from "@organisms/ProductList";

type CategoryPageBySlugParams = { slug?: string };
type CategoryPageBySlugProps = { params: CategoryPageBySlugParams };

export async function generateMetadata({ params: { slug } }: { params: CategoryPageBySlugParams }) {
	return {
		title: `Category ${slug} list - Page`,
		description: "Category ${slug} list page with pagination.",
	};
}

export default async function CategoryPage({ params: { slug } }: CategoryPageBySlugProps) {
	if (!slug) return notFound();

	const data = await executeGraphQL({
		query: CategoryProductsDocument,
		variables: {
			slug: slug ?? "",
		},
	});

	if (data.category?.products.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<ProductList products={data.category?.products ?? []} />
		</section>
	);
}
