import { StyleSheet } from 'react-native';

export const LeaderboardHeaderStyles = StyleSheet.create({
	outerContainer: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'flex-end',
	},
	title: { maxWidth: 280 },
	toggleIcon: { height: 28 },
	toggleButton: { width: 50 },
});

export const LeaderboardLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16 },
});
