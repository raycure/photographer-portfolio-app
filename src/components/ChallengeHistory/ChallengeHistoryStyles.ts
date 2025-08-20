import { StyleSheet } from 'react-native';

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
	list: {},
	columnStyle: { gap: 16, paddingBlock: 16 },
});
