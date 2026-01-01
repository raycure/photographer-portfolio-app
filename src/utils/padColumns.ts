export type Padded<T> = T & { __empty?: true };

export const padColumns = <T extends object>(
	data: readonly T[],
	columns: number,
	makeKey: (index: number) => Partial<T>
): Padded<T>[] => {
	const remainder = data.length % columns;
	if (remainder === 0) return [...data];

	const fillers: Padded<T>[] = Array.from(
		{ length: columns - remainder },
		(_, i) =>
			({
				__empty: true,
				...makeKey(i),
			} as Padded<T>)
	);

	return [...data, ...fillers];
};
