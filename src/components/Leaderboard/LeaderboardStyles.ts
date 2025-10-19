import { StyleSheet } from 'react-native';

export const LeaderBoardListItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		gap: 12,
		paddingVertical: 4,
		paddingHorizontal: 14,
		alignItems: 'center',
		borderRadius: 8,
	},
	innerContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 6,
		alignItems: 'center',
	},
	textContainer: { gap: 6 },
	image: { height: 110 },
	title: { fontSize: 18, fontWeight: '600' },
	text: { fontSize: 16, fontStyle: 'italic' },
	likes: { fontSize: 18, fontWeight: '500' },
});

export const RankIndicatorStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerContainer: {
		borderRadius: 100,
		opacity: 0.8,
		width: 26,
		height: 26,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rank: {
		fontSize: 14,
		fontWeight: '600',
		color: 'white',
	},
});
