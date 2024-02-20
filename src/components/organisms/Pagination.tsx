import { ActiveLink, type ActiveLinkProps } from "@atoms/ActiveLink";

interface PaginationProps<T extends string> {
	setHref: (page: number) => ActiveLinkProps<T>["href"];
	pageSize: number;
	totalItems: number;
}

export const Pagination = <T extends string>({
	pageSize,
	totalItems,
	setHref,
}: PaginationProps<T>) => {
	const pages = Array.from({ length: Math.ceil(totalItems / pageSize) }, (_, i) => i + 1);

	if (pages.length === 1) return null;

	return (
		<nav className="mt-12 flex justify-center">
			<ul className="flex gap-x-2" aria-label="pagination">
				{pages.map((page) => (
					<li key={page} className={"h-8 w-8"}>
						<ActiveLink
							className="flex h-full w-full items-center justify-center rounded bg-gray-200 text-neutral-900 transition-colors duration-300 hover:bg-gray-300"
							activeClassName="bg-purple-800 hover:bg-purple-800 text-white hover:text-white"
							href={setHref(page)}
						>
							{page}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
