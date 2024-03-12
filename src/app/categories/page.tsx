import { notFound } from "next/navigation";
import { executeGraphQL } from "@utils/executeGraphQL";
import { CategoriesPageListDocument } from "@gql/graphql";
import { CategoryList } from "@organisms/CategoryList";

export async function generateMetadata() {
	return {
		title: `Categories list`,
		description: "Categories list page with pagination.",
	};
}

export default async function ProductsPage() {
	const data = await executeGraphQL({
		query: CategoriesPageListDocument,
		variables: {
			skip: 0,
			take: 3,
		},
	});

	if (data.categories.data.length === 0) return notFound();

	return (
		<section className="flex flex-col items-center justify-between">
			<CategoryList categories={data.categories.data} />
		</section>
	);
}
