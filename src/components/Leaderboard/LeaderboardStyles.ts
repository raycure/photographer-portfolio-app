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
	withArrow: { bottom: -10 },
	innerContainer: {
		borderRadius: 100,
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
export const LeaderBoardGridItemStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		borderRadius: 10,
		overflow: 'hidden',
	},
	rank: { position: 'absolute', zIndex: 1, left: 4, top: 4 },
	image: { width: '100%' },
	innerContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		padding: 4,
	},
});

export const LeaderboardLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1 },
	list: { padding: 10, gap: 10 },
	gapBig: { gap: 10 },
	gapSmall: { gap: 8 },
});

export const LeaderboardPersonalButtonStyles = StyleSheet.create({
	outerContainer: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		borderRadius: 8,
		alignItems: 'center',
		flexDirection: 'row',
		gap: 8,
	},
	text: { fontSize: 16, fontWeight: '600', flex: 1 },
	likeContainer: { flexDirection: 'row', gap: 4, alignItems: 'center' },
	likeText: { fontSize: 16, fontWeight: '500' },
});

export const LeaderboardLikeButtonStyles = StyleSheet.create({
	outerContainer: { flexDirection: 'row', gap: 4, alignItems: 'center' },
	textBig: { fontSize: 18, fontWeight: '600' },
	textMedium: { fontSize: 16 },
});
