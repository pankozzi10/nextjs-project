import { ActiveLink } from "@atoms/ActiveLink";

export const Navbar = () => {
	return (
		<header className="border-y border-gray-300">
			<div className={"h-full container mx-auto flex items-center"}>
				<nav className="flex items-center">
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:bottom-[-12px] after:left-0"
						className="relative px-4"
						exact
						href={"/"}
					>
						Home
					</ActiveLink>
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:bottom-[-12px] after:left-0"
						className="relative px-4"
						href="/products"
					>
						All
					</ActiveLink>
				</nav>
			</div>
		</header>
	);
};
