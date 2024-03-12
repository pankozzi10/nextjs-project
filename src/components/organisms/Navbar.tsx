import { Suspense } from "react";
import { ActiveLink } from "@atoms/ActiveLink";
import { Search } from "@molecules/Search";
import { CartNavigation } from "@atoms/CartNavigation";

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
						href="/categories/hoodies"
					>
						Hoodies
					</ActiveLink>
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:top-full after:left-0"
						className="relative flex h-full items-center text-nowrap px-4"
						href="/categories/t-shirts"
					>
						T-shirts
					</ActiveLink>
					<ActiveLink
						activeClassName="text-purple-800 font-bold after:h-0.5 after:w-full after:bg-purple-800 after:absolute after:top-full after:left-0"
						className="relative flex h-full items-center px-4"
						href="/categories/accessories"
					>
						Accessories
					</ActiveLink>
				</nav>
				<Suspense fallback={null}>
					<Search />
				</Suspense>
				<CartNavigation />
			</div>
		</header>
	);
};
