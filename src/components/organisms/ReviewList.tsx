import { type Review } from "@gql/graphql";
import { RatingStars } from "@molecules/RatingStars";

interface ReviewListProps {
	reviews?: Omit<Review, "updatedAt" | "product">[];
}
export const ReviewList = async ({ reviews }: ReviewListProps) => {
	return (
		<div className={"mt-20 flex flex-col"}>
			<div className={"mb-6 flex items-center gap-x-5"}>
				<h3 className={"text-2xl font-bold text-neutral-600"}>Product reviews</h3>
				<span className={"pt-2 text-xs font-normal text-gray-500"}>See product opinions</span>
			</div>
			{reviews?.map(({ author, createdAt, description, id, rating, title }) => (
				<div key={id} className="mb-5 flex flex-col border-b border-gray-300 pb-5">
					<div className={"flex gap-x-4"}>
						<span className="font-bold text-gray-700">{author}</span>
						<RatingStars count={5} readOnly value={rating} />
					</div>
					<div className="rtl:space-x-reverse">
						<h3 className="text-md py-3 font-semibold text-gray-700">{title}</h3>
					</div>
					<p className="text-gray-500">{description}</p>
					<div className="mt-3 flex justify-end text-sm text-gray-700">
						<p>
							Reviewed on{" "}
							<time dateTime={createdAt as string}>
								{new Date(createdAt as string).toLocaleDateString()}
							</time>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
