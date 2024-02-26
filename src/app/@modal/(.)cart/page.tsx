import { getOrCreateCart } from "@api/cart";
import { formatMoney } from "@utils/formatMoney";
import { Overlay } from "@atoms/Overlay";

export default async function ModalCart() {
	const cart = await getOrCreateCart();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
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
						Pay
					</button>
				</form>
			</div>
		</>
	);
}
