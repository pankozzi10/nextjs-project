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
	const orderBy = searchParams.get("sortBy");

	return (
		<select
			className="select select-bordered mb-5 ml-auto block"
			defaultValue={orderBy || "DEFAULT"}
			onChange={(e) => {
				const value = e.currentTarget.value;

				// @ts-expect-error FIXME
				router.replace(value === "DEFAULT" ? route : `${route}?orderBy=${e.currentTarget.value}`);
			}}
		>
			<option value={"DEFAULT"}>Default</option>

			{Object.entries(orderBySelect).map(([key, value]) => (
				<option key={key} value={key} data-testid={value.testId}>
					{value.text}
				</option>
			))}
		</select>
	);
};
