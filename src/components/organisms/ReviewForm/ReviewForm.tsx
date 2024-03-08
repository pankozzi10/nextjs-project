"use client";

import { useController, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { addReviewAction } from "./actions";
import { RatingStars } from "@molecules/RatingStars";

interface ReviewFormProps {
	productId: string;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
	const [loading, setLoading] = useState(false);

	const { handleSubmit, register, control, reset } = useForm<ReviewFormValues>({
		mode: "onTouched",
		resolver: yupResolver(ReviewFormSchema),
	});

	const ratingField = useController({
		control,
		name: "rating",
		defaultValue: 3,
	}).field;

	const handleFormSubmit = handleSubmit(async (formData) => {
		try {
			setLoading(true);
			await addReviewAction(formData, productId);
			reset();
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	});

	return (
		<>
			<div className={"mb-6 flex items-center gap-x-5"}>
				<h3 className={"text-2xl font-bold text-neutral-600"}>Product review</h3>
				<span className={"pt-2 text-xs font-normal text-gray-500"}>
					Add your opinion about the product
				</span>
			</div>
			<form onSubmit={handleFormSubmit} data-testid="add-review-form" className={"grid gap-6"}>
				<div className="grid grid-cols-2 gap-x-6">
					<div>
						<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
							Your name
						</label>
						<input
							{...register("author")}
							id="name"
							name={"name"}
							className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-0 focus:border-gray-500"
							placeholder="e.g. John Doe"
						/>
					</div>
					<div>
						<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
							Your e-mail
						</label>
						<input
							{...register("email")}
							id="email"
							name={"email"}
							type="email"
							className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-0 focus:border-gray-500"
							placeholder="e.g. john.doe@company.com"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="rating" className="mb-2 block text-sm font-medium text-gray-900">
						Rate
					</label>
					<RatingStars count={5} onChange={ratingField.onChange} value={ratingField.value} />
				</div>
				<div>
					<label htmlFor="headline" className="mb-2 block text-sm font-medium text-gray-900">
						Headline
					</label>
					<input
						{...register("title")}
						id="headline"
						name={"headline"}
						className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-0 focus:border-gray-500"
						placeholder="Enter headline here..."
					/>
				</div>
				<div>
					<label htmlFor="content" className="mb-2 block text-sm font-medium text-gray-900">
						Content
					</label>
					<textarea
						{...register("description")}
						id="content"
						name={"content"}
						className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-0 focus:border-gray-500"
						placeholder="Enter content here..."
						rows={4}
					/>
				</div>
				<button
					disabled={loading}
					type="submit"
					className="flex w-full items-center justify-center gap-x-2 rounded-md border bg-black px-2 py-2.5 text-white shadow-sm transition-colors hover:bg-green-700"
				>
					Submit review
				</button>
			</form>
		</>
	);
};

const ReviewFormSchema = yup.object({
	author: yup.string().required("Enter your name"),
	description: yup.string().required("Enter content"),
	email: yup.string().email("Email is invalid").required("Enter your email"),
	rating: yup.number().required("Enter rating"),
	title: yup.string().required("Enter headline"),
});

export type ReviewFormValues = yup.InferType<typeof ReviewFormSchema>;
