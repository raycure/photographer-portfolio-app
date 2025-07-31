import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: 10,
	},
	profilePicture: {
		width: 95,
		height: 95,
		borderRadius: 95 / 2,
		overflow: 'hidden',
		margin: 2,
	},
	spaceBetweenContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	premiumIcon: { position: 'absolute', top: 0, left: 0, zIndex: 1 },
	title: { fontWeight: 'bold', fontSize: 24 },
	text: { fontSize: 16, fontStyle: 'italic' },
	infoContainer: { flex: 1 },
	blockButton: {},
	generalButton: {},
});

export const ProfileActionBarStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonStyle: {
		paddingBlock: 5,
		paddingInline: 16,
		minHeight: 'auto',
	},
});
