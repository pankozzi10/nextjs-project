import { type Collection } from "@utils/types";
import { CollectionListItem } from "@molecules/CollectionListItem";

interface CollectionListProps {
	collections: Collection[];
}

export const CollectionList = async ({ collections }: CollectionListProps) => {
	return (
		<ul
			data-testid="products-list"
			className={
				"radius grid w-full grid-cols-3 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1"
			}
		>
			{collections.map((collection, index) => (
				<CollectionListItem
					description={collection.description}
					id={collection.id}
					key={index}
					name={collection.name}
					products={collection.products}
					slug={collection.slug}
				/>
			))}
		</ul>
	);
};
