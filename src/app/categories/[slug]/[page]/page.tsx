import { notFound } from "next/navigation";
import { executeGraphQL } from "@utils/executeGraphQL";
import { CategoryProductsDocument } from "@gql/graphql";
import { ProductList } from "@organisms/ProductList";
import { Pagination } from "@organisms/Pagination";
import { CATEGORY_PAGE_SIZE } from "@utils/constants";

type CategoryPageBySlugParams = { slug?: string; page: string };
type CategoryPageBySlugProps = { params: CategoryPageBySlugParams };

export async function generateMetadata({ params: { slug } }: { params: CategoryPageBySlugParams }) {
	const data = await executeGraphQL({
		query: CategoryProductsDocument,
		variables: {
			slug: slug ?? "",
		},
	});

	return {
		title: `${data.category?.name ?? "Category"}`,
		description: "Category ${slug} list page with pagination.",
	};
}

export default async function CategoryPage({ params: { slug, page } }: CategoryPageBySlugProps) {
	if (!slug) return notFound();

	const PageNumber = Number(page) || 1;

	const data = await executeGraphQL({
		query: CategoryProductsDocument,
		variables: {
			slug: slug ?? "",
		},
	});

	if (data.category?.products.length === 0) return notFound();

	return (
		<section className="flex flex-col justify-between gap-y-5">
			<div className={"flex items-center"}>
				<h1 className={"text-2xl font-bold text-neutral-600"}>{data.category?.name}</h1>
			</div>
			<ProductList
				products={
					[...(data.category?.products || [])].splice(
						(PageNumber - 1) * CATEGORY_PAGE_SIZE,
						CATEGORY_PAGE_SIZE,
					) ?? []
				}
			/>
			<Pagination
				setHref={(page) => ({ pathname: `/categories/${slug}/${page}` })}
				pageSize={CATEGORY_PAGE_SIZE}
				totalItems={data.category?.products.length ?? 0}
			/>
		</section>
	);
}
