import { formatMoney } from "@utils/formatMoney";

interface ProductPriceProps {
	price: number;
}

export const ProductPrice = ({ price }: ProductPriceProps) => {
	return (
		<p data-testid="product-price" className={"text-xl font-extrabold text-red-600"}>
			{formatMoney(price)}
		</p>
	);
};
