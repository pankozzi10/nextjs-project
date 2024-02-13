"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { type Route } from "next";
import { clsx } from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

export interface ActiveLinkProps<T extends string> {
	activeClassName: string;
	children: ReactNode;
	className: string;
	exact?: boolean;
	href: Route<T>;
}

export const ActiveLink = <T extends string>({
	activeClassName,
	children,
	className,
	exact,
	href,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const active = exact ? pathname === href : pathname.startsWith(href);
	const searchParams = useSearchParams();

	return (
		<Link
			aria-current={active ? "page" : undefined}
			className={clsx(className, active && activeClassName)}
			// @ts-expect-error FIXME
			href={{ pathname: href, search: searchParams }}
			role="link"
		>
			{children}
		</Link>
	);
};
