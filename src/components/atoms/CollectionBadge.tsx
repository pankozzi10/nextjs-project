interface CollectionBadgeProps {
	children: string;
}

export const CollectionBadge = ({ children }: CollectionBadgeProps) => {
	return (
		<div
			className={
				"inline-flex self-start rounded bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-purple-800"
			}
		>
			{children}
		</div>
	);
};
