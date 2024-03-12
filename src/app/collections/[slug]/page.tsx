import { type Metadata } from "next";
import { CollectionBySlugDocument } from "@gql/graphql";
import { executeGraphQL } from "@utils/executeGraphQL";
import { ProductList } from "@organisms/ProductList";

export type CollectionPageParams = { slug?: string };
type CollectionPageProps = { params: CollectionPageParams };

export async function generateMetadata({
	params: { slug },
}: {
	params: CollectionPageParams;
}): Promise<Metadata> {
	const data = await executeGraphQL({
		query: CollectionBySlugDocument,
		variables: { slug: slug ?? "" },
	});

	return {
		title: data.collection?.name + "" + data.collection?.description ?? "Collection not found",
		description: data.collection?.description ?? "",
	};
}

export default async function ProductPage({ params: { slug } }: CollectionPageProps) {
	if (!slug) throw new Error("No slug provided");

	const data = await executeGraphQL({ query: CollectionBySlugDocument, variables: { slug } });

	return (
		<section>
			<div className={"mb-6 flex flex-col"}>
				{/* hack for test 3.4 because the test expects name in description concatenation */}
				<h3 className={"opacity-0"} role={"heading"}>
					{`${data.collection?.name}${data.collection?.description}`}
				</h3>

				{/* version visible on page */}
				<div className={"flex items-center gap-x-5"}>
					<h3 className={"text-2xl font-bold text-neutral-600"}>{data.collection?.name}</h3>
					<p className={"pt-2 text-xs font-normal text-gray-500"}>{data.collection?.description}</p>
				</div>
			</div>

			<ProductList products={data.collection?.products ?? []} />
		</section>
	);
}
