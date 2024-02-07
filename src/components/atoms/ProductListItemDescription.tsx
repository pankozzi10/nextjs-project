interface ProductListItemDescriptionProps {
	category: string;
	name: string;
	price: string;
}

export const ProductListItemDescription = ({
	category,
	name,
	price,
}: ProductListItemDescriptionProps) => {
	return (
		<div className={"flex"}>
			<div>
				<h3>{name}</h3>
				<p>
					<span>Kategoria:</span> {category}
				</p>
				<p>
					<span>Cena:</span> {price}
				</p>
			</div>
		</div>
	);
};
