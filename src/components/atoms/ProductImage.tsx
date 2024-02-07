import Image from "next/image";

interface ProductImageProps {
	alt: string;
	height?: number;
	src: string;
	width?: number;
}

export const ProductImage = ({ alt, src, width = 250, height = 250 }: ProductImageProps) => {
	return (
		<div className={"flex"}>
			<Image src={src} alt={alt} width={width} height={height} />
		</div>
	);
};
