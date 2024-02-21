import { ProductListItem } from "@molecules/ProductListItem";
import { type Product } from "@utils/types";

interface CollectionListProps {
	collections: Product[];
}

export const CollectionList = async ({ collections }: CollectionListProps) => {
	return (
		<ul
			data-testid="products-list"
			className={
				"radius grid w-full grid-cols-4 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1"
			}
		>
			{collections.map((collection, index) => (
				<ProductListItem
					id={collection.id}
					categories={collection.categories}
					images={collection.images}
					key={index}
					name={collection.name}
					price={collection.price}
				/>
			))}
		</ul>
	);
};
