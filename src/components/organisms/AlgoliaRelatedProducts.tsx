"use client";

import algoliasearch from "algoliasearch";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch";
import { type Product } from "@utils/types";
import { AlgoliaListItem } from "@molecules/AlgoliaListItem";

interface AlgoliaRelatedProductsProps {
	category?: string;
	productId?: string;
}

export const AlgoliaRelatedProducts = ({ category, productId }: AlgoliaRelatedProductsProps) => {
	const client = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
		process.env.ALGOLIA_ADMIN_KEY!,
	);

	// init Algolia
	const index = client.initIndex(process.env.INDEX_NAME!);

	// fetch('https://alg.li/doc-ecommerce.json')
	// 	.then(function(respo nse) {
	// 		return response.json()
	// 	})
	// 	.then(function(products) {
	// 		return index.saveObjects(products, {
	// 			autoGenerateObjectIDIfNotExist: true
	// 		})
	// 	})

	// Algolia settings
	void index.setSettings({
		searchableAttributes: ["name", "categories.name", "id"],
		customRanking: ["desc(rating)", "asc(price)"],
		attributesForFaceting: ["categories.name", "id"],
		paginationLimitedTo: 4,
		advancedSyntax: true,
	});

	return (
		<div className={"mt-20"}>
			<div className={"mb-6 flex items-center gap-x-5"}>
				<h3 className={"text-2xl font-bold text-neutral-600"}>Algolia Related products</h3>
				<span className={"pt-2 text-xs font-normal text-gray-500"}>
					Do not miss the proposed offers
				</span>
			</div>

			<InstantSearch
				indexName={process.env.INDEX_NAME}
				searchClient={client}
				future={{
					preserveSharedStateOnUnmount: true,
				}}
				initialUiState={{ dev_nextjs_project: { query: category ?? "" } }}
			>
				<SearchBox hidden />
				<Hits
					transformItems={(items) => items.filter((item) => item.id !== productId)}
					hitComponent={({ hit }: { hit: Product }) => (
						<AlgoliaListItem
							id={hit.id}
							categories={hit.categories}
							images={hit.images}
							name={hit.name}
							price={hit.price}
							rating={hit.rating}
						/>
					)}
					classNames={{
						root: "",
						list: "radius grid w-full grid-cols-4 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1",
						item: "transition-all hover:bg-neutral-50",
					}}
				/>
			</InstantSearch>
		</div>
	);
};
