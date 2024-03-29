import { ProductList } from "@organisms/ProductList";
import { type Product } from "@utils/types";

interface RelatedProductsProps {
	products: Product[];
}

export const RelatedProducts = async ({ products }: RelatedProductsProps) => {
	return (
		<div className={"mt-20"}>
			<div className={"mb-6 flex items-center gap-x-5"}>
				<h3 className={"text-2xl font-bold text-neutral-600"}>Related products</h3>
				<span className={"pt-2 text-xs font-normal text-gray-500"}>
					Do not miss the proposed offers
				</span>
			</div>
			<ProductList products={products} testId={"related-products"} />
		</div>
	);
};
