import { type Metadata } from "next";
import { type ProductListItemProps } from "@molecules/ProductListItem";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { Badge } from "@atoms/Badge";
import { ProductPrice } from "@atoms/ProductPrice";

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const getProduct = async (productId: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	return (await response.json()) as ProductListItemProps;
};

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product: ProductListItemProps = await getProduct(params.productId);

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const product: ProductListItemProps = await getProduct(productId);

	return (
		<section className="grid grid-cols-2 gap-x-4">
			<div className="flex items-center justify-center border-r border-gray-300 pr-8">
				<ProductImage alt={`${product.title} image`} src={product.image} height={500} />
			</div>

			<div className={"pl-8"}>
				<Badge>{product.category}</Badge>
				<h1 className={"pb-3 pt-8 text-4xl"}>{product.title}</h1>
				<ProductPrice price={product.price} />
				<div className="py-10">
					<p className="text-base text-gray-700">{product.description}</p>
				</div>
				<AddToCartButton />
			</div>
		</section>
	);
}
