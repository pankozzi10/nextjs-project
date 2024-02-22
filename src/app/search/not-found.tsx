import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-grow items-center justify-center">
			<div className="rounded-lg bg-white p-8 text-center">
				<h1 className="text-5xl font-bold">
					<span className={"text-purple-800"}>No products</span> found
				</h1>
				<p className="my-8 text-gray-500">It looks like nothing was found for your query.</p>
				<Link
					href="/"
					className="mt-4 rounded-md bg-purple-800 px-4 py-2 font-semibold text-white transition-all hover:bg-purple-600"
				>
					Go To Homepage
				</Link>
			</div>
		</div>
	);
}
