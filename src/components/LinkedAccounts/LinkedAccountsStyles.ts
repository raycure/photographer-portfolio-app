import { StyleSheet } from 'react-native';

export const LinkedAccountListItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		alignItems: 'center',
		height: 50,
		gap: 16,
	},
	text: { fontSize: 16, flexGrow: 1, fontWeight: '500' },
});

export const LinkedAccountsLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16 },
	lineSeperator: { marginVertical: 0 },
});

export const LinkedAccountsHeaderStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		paddingLeft: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	text: { fontSize: 22, fontWeight: '600' },
	button: { bottom: -2 },
});
