import Image from "next/image";
import { type CSSProperties } from "react";

interface ProductImageProps {
	alt: string;
	height?: CSSProperties["height"];
	src: string;
}

export const ProductImage = ({ alt, src, height = "200px" }: ProductImageProps) => {
	return (
		<div className={`h-350 relative w-full`} style={{ height: height }}>
			<Image src={src} alt={alt} fill className={"object-contain"} />
		</div>
	);
};
