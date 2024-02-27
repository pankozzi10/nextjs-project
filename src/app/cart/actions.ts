"use server";

import { CartRemoveItemDocument, CartChangeItemQuantityDocument } from "@gql/graphql";
import { executeGraphQL } from "@utils/executeGraphQL";

export const removeItem = (id: string, productId: string) => {
	return executeGraphQL({ query: CartRemoveItemDocument, variables: { id, productId } });
};

export const changeItemQuantity = (id: string, productId: string, quantity: number) => {
	return executeGraphQL({
		query: CartChangeItemQuantityDocument,
		variables: { id, productId, quantity },
	});
};
