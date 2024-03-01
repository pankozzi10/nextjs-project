"use client";

import type { UrlObject } from "url";
import Link from "next/link";
import { type ReactNode } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export interface ActiveLinkProps<T extends string> {
	activeClassName: string;
	children: ReactNode;
	className: string;
	exact?: boolean;
	href: UrlObject | __next_route_internal_types__.RouteImpl<T>;
}

export const ActiveLink = <T extends string>({
	activeClassName,
	children,
	className,
	exact,
	href,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const currentPathname = (typeof href === "object" ? href.pathname : href) ?? "";
	const active = exact ? pathname === currentPathname : pathname.startsWith(currentPathname);

	return (
		<Link
			aria-current={active ? "page" : undefined}
			className={clsx(className, active && activeClassName)}
			href={href}
			role="link"
		>
			{children}
		</Link>
	);
};
