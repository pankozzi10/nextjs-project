import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphQL } from "@utils/executeGraphQL";
import { CartGetByIdDocument } from "@gql/graphql";
import { formatMoney } from "@utils/formatMoney";

export default async function CartModalPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { cart } = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item, index) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id + index}>
								<td>{item.product.name}</td>
								<td>quantity: {item.quantity}</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>remove {item.product.id}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<form action={""} className="ml-auto">
				<button
					type="submit"
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
				>
					Order
				</button>
			</form>
		</div>
	);
}
