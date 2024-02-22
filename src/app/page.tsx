import { CollectionList } from "@organisms/CollectionList";
import { ProductList } from "@organisms/ProductList";
import { executeGraphQL } from "@utils/executeGraphQL";
import { HomePageDocument } from "@gql/graphql";

export default async function Home() {
	const data = await executeGraphQL({ query: HomePageDocument, variables: { take: 4, skip: 0 } });

	return (
		<section className="flex flex-col gap-y-14">
			<div className="flex flex-col gap-y-4">
				<h3 className={"text-2xl font-bold text-neutral-600"}>Collections:</h3>
				<CollectionList collections={data.collections.data} />
			</div>
			<div className="flex flex-col gap-y-4">
				<h3 className={"text-2xl font-bold text-neutral-600"}>Products:</h3>
				<ProductList products={data.products.data} />
			</div>
		</section>
	);
}
