import Link from "next/link";
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

	return !data?.products.data.length ? (
		<div className="flex flex-grow items-center justify-center">
			<div className="rounded-lg bg-white p-8 text-center">
				<h1 className="text-5xl font-bold">
					<span className={"text-purple-800"}>No products</span> found
				</h1>
				<p className="my-8 text-gray-500">It looks like nothing was found for your query.</p>
				<Link
					href="/"
					className="mt-4 rounded-md bg-purple-800 px-4 py-2 font-semibold text-white transition-all hover:bg-purple-600"
				>
					Go To Homepage
				</Link>
			</div>
		</div>
	) : (
		<section className="flex flex-col justify-between">
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
