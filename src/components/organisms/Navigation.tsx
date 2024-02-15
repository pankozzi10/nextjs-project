import { ActiveLink } from "@atoms/ActiveLink";
import { Search } from "@molecules/Search";

export const Navbar = () => {
	return (
		<header className="border-y border-gray-300">
			<div className={"container mx-auto flex h-full items-center justify-between gap-x-10"}>
				<nav className="flex h-full items-center">
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:top-full after:left-0"
						className="relative flex h-full items-center px-4"
						exact
						href={"/"}
					>
						Home
					</ActiveLink>
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:top-full after:left-0"
						className="relative flex h-full items-center px-4"
						href="/products"
					>
						All
					</ActiveLink>
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:top-full after:left-0"
						className="relative flex h-full items-center px-4"
						href="/categories"
					>
						Categories
					</ActiveLink>
				</nav>
				<Search />
				<div>Cart</div>
			</div>
		</header>
	);
};
