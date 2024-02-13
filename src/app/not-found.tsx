import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>
				<Link href="/">Go back</Link>
			</p>
		</div>
	);
}
