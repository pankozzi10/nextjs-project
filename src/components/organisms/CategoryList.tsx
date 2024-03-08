import { type Category } from "@utils/types";
import { CategoryListItem } from "@molecules/CategoryListItem";

interface CategoryListProps {
	categories: Category[];
}

export const CategoryList = async ({ categories }: CategoryListProps) => {
	return (
		<ul
			className={
				"radius grid w-full grid-cols-3 gap-px overflow-hidden rounded-3xl border border-gray-300 bg-gray-300 [&>li]:bg-white [&>li]:outline-1"
			}
		>
			{categories.map((category, index) => (
				<CategoryListItem
					description={category.description}
					id={category.id}
					key={index}
					name={category.name}
					products={category.products}
					slug={category.slug}
				/>
			))}
		</ul>
	);
};
