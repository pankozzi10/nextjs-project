"use client";

import Link from "next/link";
import { type Collection } from "@utils/types";
import { ProductImage } from "@atoms/ProductImage";
import { CollectionBadge } from "@atoms/CollectionBadge";

export const CollectionListItem = ({ slug, name, description, products }: Collection) => {
	return (
		<li className={"transition-all hover:bg-neutral-50"}>
			<Link href={`/collections/${slug}`}>
				<div className={"flex flex-col gap-4 px-6 py-10"}>
					<CollectionBadge>{name}</CollectionBadge>
					<ProductImage
						alt={`${products[0].images[0].alt} image`}
						src={products[0].images[0].url}
					/>
					<p className={"text-neutral-60 text-sm"}>{description}</p>
				</div>
			</Link>
		</li>
	);
};
