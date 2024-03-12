import Link from "next/link";
import { addProductToCartAction } from "@api/cart";
import { AddToCartButton } from "@atoms/AddToCartButton";
import { ProductImage } from "@atoms/ProductImage";
import { ProductListItemDescription } from "@molecules/ProductListItemDescription";
import { type Product } from "@utils/types";

export const AlgoliaListItem = ({ id, categories, images, name, price, rating }: Product) => {
	return (
		<div>
			<Link href={`/product/${id}`}>
				<div className={"flex flex-col gap-4 p-6"}>
					<ProductImage alt={`${images[0].alt} image`} src={images[0].url} />
					<ProductListItemDescription
						name={name}
						category={categories[0].name}
						price={price}
						rating={rating}
					/>
					<form action={addProductToCartAction}>
						<input type="text" name="productId" defaultValue={id} hidden />
						<AddToCartButton />
					</form>
				</div>
			</Link>
		</div>
	);
};
