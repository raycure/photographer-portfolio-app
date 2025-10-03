import { StyleSheet } from 'react-native';

export const ConnectionsHeaderStyles = StyleSheet.create({
	title: {
		marginLeft: 8,
		bottom: 2,
		fontSize: 20,
		fontWeight: 'bold',
		textAlignVertical: 'center',
	},
	outerContainer: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

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

export const ConnectionsListStyles = StyleSheet.create({
	listFooter: { height: 40 },
});

export const ConnectionsListItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 8,
		paddingRight: 12,
		paddingVertical: 4,
		gap: 8,
	},
	textContainer: { flex: 1, gap: 4 },
	customButton: {
		paddingVertical: 4,
		paddingInline: 'auto',
		width: 120,
		borderRadius: 8,
	},
	customButtonText: { fontSize: 16, fontWeight: '400' },
	title: { fontSize: 18 },
	subtitle: { fontSize: 15, fontStyle: 'italic' },
});

export const ConnectionsLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1 },
});
