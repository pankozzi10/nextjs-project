import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-grow items-center justify-center">
			<div className="rounded-lg bg-white p-8 text-center">
				<h1 className="text-5xl font-bold">
					That page <span className={"text-purple-800"}>cannot</span> be found
				</h1>
				<p className="my-8 text-gray-500">
					It looks like nothing was found at this location. <br />
					Maybe try to search for what you are looking for?
				</p>
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
