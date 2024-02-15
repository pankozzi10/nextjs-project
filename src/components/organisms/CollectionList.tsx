import { ProductListItem, type ProductListItemProps } from "@molecules/ProductListItem";

interface CollectionListProps {
	collections: ProductListItemProps[];
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
					key={index}
					category={collection.category}
					title={collection.title}
					price={collection.price}
					image={collection.image}
				/>
			))}
		</ul>
	);
};
