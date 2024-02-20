import { type Metadata } from "next";
import { ProductByIdDocument, RelatedProductsDocument } from "@gql/graphql";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { Badge } from "@atoms/Badge";
import { ProductPrice } from "@atoms/ProductPrice";
import { RelatedProducts } from "@organisms/RelatedProducts";
import { executeGraphQL } from "@utils/executeGraphQL";

export type ProductPageParams = { productId?: string };
type ProductPageProps = { params: ProductPageParams };

export async function generateMetadata({
	params: { productId },
}: {
	params: ProductPageParams;
}): Promise<Metadata> {
	const data = await executeGraphQL({
		query: ProductByIdDocument,
		variables: { id: productId ?? "" },
	});

	return {
		title: data.product?.name ?? "Product not found",
		description: data.product?.description ?? "",
	};
}

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
	if (!productId) throw new Error("No id");

	const data = await executeGraphQL({ query: ProductByIdDocument, variables: { id: productId } });
	const relatedData = await executeGraphQL({ query: RelatedProductsDocument });

	if (!data.product) throw new Error("No product");

	return (
		<section>
			<div className="grid grid-cols-2 gap-x-4">
				<div className="flex items-center justify-center border-r border-gray-300 pr-8">
					<ProductImage
						alt={data.product.images[0].alt}
						src={data.product.images[0].url}
						height={400}
					/>
				</div>

				<div className={"pl-8"}>
					<Badge>{data.product.categories[0].name}</Badge>
					<h1 className={"pb-3 pt-8 text-4xl"}>{data.product.name}</h1>
					<ProductPrice price={data.product.price} />
					<div className="py-10">
						<p className="text-base text-gray-700">{data.product.description}</p>
					</div>
					<AddToCartButton />
				</div>
			</div>
			<RelatedProducts products={relatedData.products.data || []} />
		</section>
	);
}
