import { notFound } from "next/navigation";
import { SearchPageProductListDocument } from "@gql/graphql";
import { executeGraphQL } from "@utils/executeGraphQL";
import { ProductList } from "@organisms/ProductList";

export type SearchPageParams = { query?: string };
type SearchPageProps = { searchParams: SearchPageParams };

export async function generateMetadata({
	searchParams: { query },
}: {
	searchParams: SearchPageParams;
}) {
	return {
		title: `Search page for ${query}`,
		description: "Found products based on your search query",
	};
}

export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
	let data;

	try {
		data = await executeGraphQL({
			query: SearchPageProductListDocument,
			variables: {
				search: query || "",
			},
		});
	} catch (error) {
		return notFound();
	}

	if (data.products.data.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<ProductList products={data.products.data} />
		</section>
	);
}
