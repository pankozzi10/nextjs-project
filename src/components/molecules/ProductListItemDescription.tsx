import { Badge } from "@atoms/Badge";
import { ProductPrice } from "@atoms/ProductPrice";
import { StarsRating } from "@atoms/StarsRating";

interface ProductListItemDescriptionProps {
	category: string;
	name: string;
	price: number;
	rating?: number | null;
}

export const ProductListItemDescription = ({
	category,
	name,
	price,
	rating,
}: ProductListItemDescriptionProps) => {
	return (
		<div className={"flex flex-col"}>
			<Badge>{category}</Badge>
			<h2 className={"pt-2.5"}>{name}</h2>
			<div className={"pb-4 pt-2"}>
				<StarsRating rating={rating ?? 0} size={"small"} />
			</div>
			<ProductPrice price={price} />
		</div>
	);
};
