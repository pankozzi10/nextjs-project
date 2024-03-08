import { ReviewForm } from "./ReviewForm/ReviewForm";
import { ReviewList } from "./ReviewList";
import { executeGraphQL } from "@utils/executeGraphQL";
import { ProductReviewsDocument } from "@gql/graphql";

interface ReviewsProps {
	productId?: string;
}

const getReviews = async (productId: string) => {
	try {
		const data = await executeGraphQL({
			query: ProductReviewsDocument,
			variables: { id: productId },
			next: {
				tags: ["reviews"],
			},
		});

		return { reviews: data.product?.reviews || [] };
	} catch (error) {
		return { reviews: null, error };
	}
};

export const Reviews = async ({ productId }: ReviewsProps) => {
	const { reviews } = await getReviews(productId ?? "");
	if (!reviews) return null;

	return (
		<section className="mt-24">
			<ReviewForm productId={productId ?? ""} reviews={reviews} />
			<ReviewList reviews={reviews} />
		</section>
	);
};
