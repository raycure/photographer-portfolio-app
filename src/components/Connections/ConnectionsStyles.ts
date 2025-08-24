import { StyleSheet } from 'react-native';

export const ConnectionsHeaderStyles = StyleSheet.create({
	title: {
		flexGrow: 1,
		marginLeft: 8,
		bottom: 2,
		fontSize: 22,
		fontWeight: 'bold',
		textAlignVertical: 'center',
	},
});
export const Styles = StyleSheet.create({});

export const ConnectionsBarStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
	},
	buttonContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBlock: 6,
	},
	buttonContainerActive: { paddingBottom: 4, borderBottomWidth: 2 },
	label: { fontSize: 18 },
});
