interface BadgeProps {
	children: string;
}

export const Badge = ({ children }: BadgeProps) => {
	return (
		<div
			className={
				"inline-flex self-start rounded bg-gradient-to-r from-[#D4FC79] from-10% via-[#96E6A1] via-50% to-[#96E6A1] to-90% px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-green-700"
			}
		>
			{children}
		</div>
	);
};
