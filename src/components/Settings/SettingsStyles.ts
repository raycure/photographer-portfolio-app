import { StyleSheet } from 'react-native';

export const SettingsBlocksStyles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16 },
	innerContainer: {
		marginBlock: 8,
	},
	title: { fontSize: 24, fontWeight: '500' },
});

export const SettingsItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBlock: 10,
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		height: '100%',
	},
	title: {
		fontSize: 20,
	},
	sideTitle: {
		fontSize: 16,
	},
	tintedBackground: {
		width: 46,
		height: 46,
	},
});
