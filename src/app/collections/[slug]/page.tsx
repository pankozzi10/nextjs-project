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
		title: data.collection?.name ?? "Collection not found",
		description: data.collection?.description ?? "",
	};
}

export default async function ProductPage({ params: { slug } }: CollectionPageProps) {
	if (!slug) throw new Error("No slug provided");

	const data = await executeGraphQL({ query: CollectionBySlugDocument, variables: { slug } });

	return (
		<section>
			<div className={"mb-4 flex items-center gap-x-5"}>
				<h3 className={"text-2xl font-bold text-neutral-600"}>{data.collection?.name}</h3>
				<span className={"pt-1 text-xs font-normal text-gray-500"}>
					{data.collection?.description}
				</span>
			</div>

			<ProductList products={data.collection?.products ?? []} />
		</section>
	);
}
