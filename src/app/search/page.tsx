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
	} catch {
		return notFound();
	}

	if (data.products.data.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<div className={"mb-4 flex gap-x-5 self-start"}>
				<h3 className={"text-2xl text-neutral-600"}>
					Found <span className={"font-bold text-purple-800"}>{data.products.data.length}</span>{" "}
					products based on your search query:
				</h3>
			</div>
			<ProductList products={data.products.data} />
		</section>
	);
}
