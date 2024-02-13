import { formatMoney } from "@utils/helpers";

interface ProductPriceProps {
	price: number;
}

export const ProductPrice = ({ price }: ProductPriceProps) => {
	return <p className={"text-xl font-extrabold text-red-600"}>{formatMoney(price)}</p>;
};
