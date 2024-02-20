import { Badge } from "@atoms/Badge";
import { ProductPrice } from "@atoms/ProductPrice";

interface ProductListItemDescriptionProps {
	category: string;
	name: string;
	price: number;
}

export const ProductListItemDescription = ({
	category,
	name,
	price,
}: ProductListItemDescriptionProps) => {
	return (
		<div className={"flex flex-col"}>
			<Badge>{category}</Badge>
			<h3 className={"py-2.5"}>{name}</h3>
			<ProductPrice price={price} />
		</div>
	);
};
