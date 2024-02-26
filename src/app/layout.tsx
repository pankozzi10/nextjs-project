import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import { clsx } from "clsx";
import "./globals.css";
import { type ReactNode } from "react";
import { Navbar } from "@organisms/Navbar";
import { Footer } from "@atoms/Footer";

const mulish = Mulish({ subsets: ["latin-ext"], variable: "--font-mulish" });
const playfairDisplay = Playfair_Display({
	subsets: ["latin-ext"],
	variable: "--font-playfair-display",
});

export const metadata: Metadata = {
	title: "NextJS 14 - course",
	description: "Created by Bartłomiej Kozyra",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>) {
	return (
		<html lang="en" className={clsx([mulish.variable, playfairDisplay.variable], "h-full")}>
			<body className={clsx([mulish.className, "grid min-h-full grid-rows-[70px_1fr_80px]"])}>
				<Navbar />
				<main className={"container m-auto py-20"}>{children}</main>
				<Footer />
				{modal}
			</body>
		</html>
	);
}
