"use server";

import { revalidateTag } from "next/cache";
import { CartRemoveItemDocument, CartChangeItemQuantityDocument } from "@gql/graphql";
import { executeGraphQL } from "@utils/executeGraphQL";

export const removeItem = async (id: string, productId: string) => {
	await executeGraphQL({
		query: CartRemoveItemDocument,
		variables: { id, productId },
		next: { tags: ["cart"] },
	});

	return revalidateTag("/cart");
};

export const changeItemQuantity = async (id: string, productId: string, quantity: number) => {
	await executeGraphQL({
		query: CartChangeItemQuantityDocument,
		variables: { id, productId, quantity },
	});

	return revalidateTag("/cart");
};
