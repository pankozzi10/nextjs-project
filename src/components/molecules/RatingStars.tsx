"use client";

import { useEffect, useState } from "react";

interface RatingStarsProps {
	count?: number;
	onChange?: (value: number) => void;
	readOnly?: boolean;
	value?: number;
}

export const RatingStars = ({ count = 5, onChange, value, readOnly }: RatingStarsProps) => {
	const [rate, setRate] = useState<number>(value || count);

	useEffect(() => {
		value && setRate(value);
	}, [value]);

	return (
		<div className="flex flex-col justify-center">
			{/*NOTE :: input for test 4.3*/}
			<input name={"rating"} value={rate} readOnly className={"h-0.5 opacity-0"} />
			<div className={"flex items-center"}>
				{Array(count)
					.fill(0)
					.map((_, index) => (
						<button
							type="button"
							key={index}
							className={readOnly ? "cursor-auto" : "cursor-pointer"}
							onClick={() => {
								if (readOnly) return;

								setRate(index + 1);
								onChange?.(index + 1);
							}}
						>
							<svg
								className={
									index >= rate ? "mr-1 h-4 w-4 text-gray-700" : "mr-1 h-4 w-4 text-amber-300"
								}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						</button>
					))}
			</div>
		</div>
	);
};
