import Link from "next/link";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { ProductListItemDescription } from "@molecules/ProductListItemDescription";
import { type Product } from "@utils/types";

export const ProductListItem = ({ id, categories, name, price, images }: Product) => {
	return (
		<li className={"transition-all hover:bg-neutral-50"}>
			<Link href={`/product/${id}`}>
				<div className={"flex flex-col gap-4 p-6"}>
					<ProductImage alt={`${images[0].alt} image`} src={images[0].url} />
					<ProductListItemDescription name={name} category={categories[0].name} price={price} />
					<AddToCartButton />
				</div>
			</Link>
		</li>
	);
};
