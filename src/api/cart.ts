"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@utils/executeGraphQL";
import {
	type Cart,
	CartAddItemDocument,
	CartFindOrCreateDocument,
	CartGetByIdDocument,
	ProductByIdDocument,
} from "@gql/graphql";

export async function addProductToCartAction(formData: FormData) {
	const productId = formData.get("productId");

	if (typeof productId === "string") {
		const cart = (await getOrCreateCart()) as Cart;
		await addProductToCart(cart.id, productId);
	}

	revalidateTag("cart");
}

export async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphQL({
		query: ProductByIdDocument,
		variables: {
			id: productId,
		},
	});

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphQL({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input: { item: { productId: productId, quantity: 1 } },
		},
	});
}

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { cart } = await executeGraphQL({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			// next: { tags: ["cart"] },
		});

		if (cart) {
			return cart;
		}
	}

	const { newCart } = (await executeGraphQL({
		query: CartFindOrCreateDocument,
	})) as { newCart: Cart };

	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
}
