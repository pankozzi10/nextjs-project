import Image from "next/image";
import { type CSSProperties } from "react";

interface ProductImageProps {
	alt: string;
	height?: CSSProperties["height"];
	src: string;
}

export const ProductImage = ({ alt, src, height = "200px" }: ProductImageProps) => {
	return (
		<figure className={`h-350 relative w-full`} style={{ height: height }}>
			<Image
				src={src}
				alt={alt}
				fill
				className={"object-contain"}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</figure>
	);
};
