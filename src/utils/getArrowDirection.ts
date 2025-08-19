export type ArrowDirection = 'neutral' | 'up' | 'down';

export default function getArrowDirection([newRank, oldRank]: [
	number,
	number
]): ArrowDirection {
	if (newRank < oldRank) return 'up';
	if (newRank > oldRank) return 'down';
	return 'neutral';
}
