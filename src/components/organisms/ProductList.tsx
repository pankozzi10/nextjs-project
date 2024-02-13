import { ProductListItem, type ProductListItemProps } from "@molecules/ProductListItem";

interface ProductListProps {
	products: ProductListItemProps[];
}

export const ProductList = async ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className={
				"radius grid w-full grid-cols-4 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1"
			}
		>
			{products.map((product, index) => (
				<ProductListItem
					id={product.id}
					key={index}
					category={product.category}
					title={product.title}
					price={product.price}
					image={product.image}
				/>
			))}
		</ul>
	);
};
