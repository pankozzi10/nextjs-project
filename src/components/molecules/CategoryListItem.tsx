import Link from "next/link";
import { type Category } from "@utils/types";
import { CollectionBadge } from "@atoms/CollectionBadge";
import { ProductImage } from "@atoms/ProductImage";

export const CategoryListItem = ({ id, slug, name, products }: Category) => {
	return (
		<li className={"transition-all hover:bg-neutral-50"}>
			<Link href={`/categories/${slug}/${id}`}>
				<div className={"flex flex-col gap-4 px-6 py-10"}>
					<CollectionBadge>{name}</CollectionBadge>
					<ProductImage
						alt={`${products[0].images[0].alt} image`}
						src={products[0].images[0].url}
					/>
				</div>
			</Link>
		</li>
	);
};
