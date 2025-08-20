import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const ChallengeHistoryBlockHeaderStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
	},
	date: { textAlign: 'right' },
	usersText: { fontSize: 22 },
	usersContainer: { flexDirection: 'row', gap: 6, alignItems: 'baseline' },
	sideContainer: { alignItems: 'flex-end' },
});

export const ChallengeHistoryLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, paddingHorizontal: 20 },
	columnStyle: { gap: 16, paddingBlock: 16 },
});

export const ChallengeHistoryBlockItemStyles = StyleSheet.create({
	outerContainer: { borderRadius: 12, overflow: 'hidden' },
	image: { width: windowWidth * 0.25, aspectRatio: 7 / 10 },
});

export const ChallengeHistoryBlockStyles = StyleSheet.create({
	outerContainer: {
		borderRadius: 24,
		paddingBlock: 14,
		paddingHorizontal: 18,
	},
	lineSeperator: {
		height: 2,
		marginTop: 2,
		marginBottom: 10,
	},
	innerContainer: {
		gap: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	badgeIcon: { position: 'absolute', right: -12, top: -8, zIndex: 5 },
});
