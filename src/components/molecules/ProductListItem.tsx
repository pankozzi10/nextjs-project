import Link from "next/link";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { ProductListItemDescription } from "@atoms/ProductListItemDescription";

export interface ProductListItemProps {
	id: string;
	category: string;
	description?: string;
	image: string;
	longDescription?: string;
	price: number;
	rating?: {
		rate: number;
		count: number;
	};
	title: string;
}

export const ProductListItem = ({ id, category, title, price, image }: ProductListItemProps) => {
	return (
		<li className={"flex flex-col gap-4 p-6 transition-all hover:bg-neutral-50"}>
			<ProductImage alt={`${title} image`} src={image} />
			<Link href={`/product/${id}`}>
				<ProductListItemDescription title={title} category={category} price={price} />
			</Link>
			<AddToCartButton />
		</li>
	);
};
