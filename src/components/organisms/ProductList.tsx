import { ProductListItem } from "@molecules/ProductListItem";
import { type Product } from "@utils/types";

interface ProductListProps {
	products: Product[];
	testId?: string;
}

export const ProductList = async ({ products, testId = "products-list" }: ProductListProps) => {
	return (
		<ul
			data-testid={testId}
			className={
				"radius grid w-full grid-cols-4 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1"
			}
		>
			{products.map((product, index) => (
				<ProductListItem
					id={product.id}
					key={index}
					categories={product.categories}
					name={product.name}
					price={product.price}
					images={product.images}
				/>
			))}
		</ul>
	);
};
