"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ProductSortBy } from "@gql/graphql";

type PartialRecord<K extends string, T> = {
	[P in K]?: T;
};

const orderBySelect: PartialRecord<ProductSortBy, { text: string; testId?: string }> = {
	NAME: { text: "Name", testId: "sort-by-name" },
	PRICE: { text: "Price", testId: "sort-by-price" },
};

export type OrderSelectProps = { route: string };

export const OrderSelect = ({ route }: OrderSelectProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const orderBy = searchParams.get("orderBy");
	const order = searchParams.get("order");

	const searchParamsValues = Object.fromEntries(searchParams.entries());

	return (
		<>
			<select
				className="select select-bordered mb-5 ml-auto block"
				defaultValue={orderBy || "DEFAULT"}
				onChange={(e) => {
					const urlSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
					const value = e.currentTarget.value;

					if (value) {
						urlSearchParams.set("orderBy", value);
					} else {
						urlSearchParams.delete("orderBy");
					}

					// @ts-expect-error FIXME
					router.replace(`${route}?${urlSearchParams.toString()}`);
				}}
			>
				<option value={"DEFAULT"}>Default</option>

				{Object.entries(orderBySelect).map(([key, value]) => (
					<option key={key} value={key} data-testid={value.testId}>
						{value.text}
					</option>
				))}
			</select>
			<select
				className="select select-bordered mb-5 ml-auto block"
				defaultValue={order || "ASC"}
				onChange={(e) => {
					const urlSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
					const value = e.currentTarget.value;

					if (value) {
						urlSearchParams.set("order", value);
					} else {
						urlSearchParams.delete("order");
					}

					// @ts-expect-error FIXME
					router.replace(`${route}?${urlSearchParams.toString()}`);
				}}
			>
				<option value={"ASC"}>ASC</option>
				<option value={"DESC"}>DESC</option>
			</select>
		</>
	);
};
