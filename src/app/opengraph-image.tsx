import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Next.js 14 course";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-2xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">Next.js 14</p>
				<p tw="font-serif m-0 p-0 font-black">course</p>
			</div>
		),
		{
			...size,
		},
	);
}
