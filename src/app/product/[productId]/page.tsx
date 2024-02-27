import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { AddProductToCartAction } from "@api/cart";
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
	let data;
	try {
		data = await executeGraphQL({
			query: ProductByIdDocument,
			variables: { id: productId ?? "" },
		});
	} catch {
		return notFound();
	}

	return {
		title: data.product?.name ?? "Product not found",
		description: data.product?.description ?? "",
	};
}

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
	let data, relatedData, filteredRelatedData;

	try {
		data = await executeGraphQL({ query: ProductByIdDocument, variables: { id: productId ?? "" } });
		relatedData = await executeGraphQL({ query: RelatedProductsDocument });

		if (relatedData.products.data.some((product) => product.id === productId)) {
			filteredRelatedData = relatedData.products.data.filter((product) => product.id !== productId);
		} else {
			filteredRelatedData = relatedData.products.data.slice(0, 4);
		}
	} catch {
		return notFound();
	}

	if (!data.product) return notFound();

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
					<form action={AddProductToCartAction}>
						<input type="text" name="productId" value={productId} hidden />
						<AddToCartButton />
					</form>
				</div>
			</div>
			<RelatedProducts products={filteredRelatedData || []} />
		</section>
	);
}
