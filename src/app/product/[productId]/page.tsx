import { type Metadata } from "next";
import { notFound } from "next/navigation";
// import { AlgoliaRelatedProducts } from "@organisms/AlgoliaRelatedProducts";
import { Suspense } from "react";
import { addProductToCartAction } from "@api/cart";
import { ProductByIdDocument, RelatedProductsDocument } from "@gql/graphql";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { Badge } from "@atoms/Badge";
import { ProductPrice } from "@atoms/ProductPrice";
import { RelatedProducts } from "@organisms/RelatedProducts";
import { executeGraphQL } from "@utils/executeGraphQL";
import { StarsRating } from "@atoms/StarsRating";
import { Reviews } from "@organisms/Reviews";

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
					<h1 className={"pt-8 text-4xl"}>{data.product.name}</h1>
					<div className={"pb-8 pt-2"}>
						<StarsRating rating={data.product.rating ?? 0} size={"medium"} />
					</div>
					<ProductPrice price={data.product.price} />
					<div className="py-10">
						<p className="text-base text-gray-700">{data.product.description}</p>
					</div>
					<form action={addProductToCartAction}>
						<input type="text" name="productId" defaultValue={productId} hidden />
						<AddToCartButton testId={"add-to-cart-button"} />
					</form>
				</div>
			</div>

			{/*<Suspense fallback={<div>Loading...</div>}>*/}
			{/*	<AlgoliaRelatedProducts category={data.product.categories[0].name} productId={productId} />*/}
			{/*</Suspense>*/}

			<Suspense fallback={<div>Loading...</div>}>
				<RelatedProducts products={filteredRelatedData || []} />
			</Suspense>
			<Suspense fallback={null}>
				<Reviews productId={productId} />
			</Suspense>
		</section>
	);
}
