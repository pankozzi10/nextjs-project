import { AddToCardButton } from "@atoms/AddToCardButton";
import { ProductImage } from "@atoms/ProductImage";
import { ProductListItemDescription } from "@atoms/ProductListItemDescription";
import { formatMoney } from "@utils/helpers";

export default function Home() {
	return (
			<ul
				data-testid="products-list"
				className={
					"radius grid grid-cols-4 rounded-3xl border border-gray-300 [&>li:nth-child(4n)]:border-0"
				}
			>
				<li className={"border-r border-gray-300 p-6"}>
					<ProductImage alt={"product 1"} src={"/images/image_1.jpg"} />
					<ProductListItemDescription
						name={"Product 1"}
						category={"Logo"}
						price={formatMoney(123 / 100)}
					/>
					<AddToCardButton />
				</li>
				<li className={"border-r border-gray-300 p-6"}>
					<ProductImage alt={"product 2"} src={"/images/image_2.jpg"} />
					<ProductListItemDescription
						name={"Product 2"}
						category={"Logo"}
						price={formatMoney(222 / 100)}
					/>
					<AddToCardButton />
				</li>
				<li className={"border-r border-gray-300 p-6"}>
					<ProductImage alt={"product 3"} src={"/images/image_3.jpg"} />
					<ProductListItemDescription
						name={"Product 3"}
						category={"Logo"}
						price={formatMoney(345 / 100)}
					/>
					<AddToCardButton />
				</li>
				<li className={"border-r border-gray-300 p-6"}>
					<ProductImage alt={"product 4"} src={"/images/image_4.jpg"} />
					<ProductListItemDescription
						name={"Product 4"}
						category={"Logo"}
						price={formatMoney(999 / 100)}
					/>
					<AddToCardButton />
				</li>
			</ul>
	);
}
