"use server";

import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@utils/executeGraphQL";
import { type ReviewFormValues } from "@organisms/ReviewForm/ReviewForm";
import { CreateReviewDocument } from "@gql/graphql";

export const addReviewAction = async (formData: ReviewFormValues, productId: string) => {
	await executeGraphQL({
		query: CreateReviewDocument,
		variables: {
			...formData,
			productId,
		},
	});

	revalidateTag("reviews");
};
