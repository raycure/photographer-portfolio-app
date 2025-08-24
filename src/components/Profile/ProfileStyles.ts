import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const headerStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		gap: 10,
	},
	profilePicture: {
		width: 75,
		height: 75,
		borderRadius: 75 / 2,
		overflow: 'hidden',
		margin: 2,
	},
	premiumIcon: { position: 'absolute', top: 2, left: 2, zIndex: 1 },
	title: { fontWeight: 'bold', fontSize: 24 },
	text: { fontSize: 16, fontStyle: 'italic' },
	infoContainer: { flex: 1 },
	levelText: { fontStyle: 'italic', fontSize: 16 },
	lowerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		top: -4,
		gap: 18,
	},
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

export const GalleryGridItemStyles = StyleSheet.create({
	outerContainer: {
		width: (windowWidth - 2) / 3,
		height: ((windowWidth - 2) * 4) / 9,
	},
	addButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		width: (windowWidth - 2) / 3,
		height: ((windowWidth - 2) * 4) / 9,
		margin: 'auto',
	},
	image: { resizeMode: 'cover', flex: 1 },
});

export const ProfileStatisticsStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	innerContainer: {
		flex: 1,
		gap: 8,
	},
	blockContainer: {
		borderRadius: 18,
	},
	bigBlockContainer: {
		padding: 12,
		alignItems: 'center',
		flexDirection: 'column',
		flex: 0.9,
	},
	sideBlockContainers: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 8,
		flex: 1.1,
		gap: 6,
	},
	levelInfoContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	title1: { fontSize: 18 },
	title2: { maxWidth: 100 },
	title3: { fontStyle: 'italic' },
});

export const GalleryGridStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignSelf: 'stretch' },
	columnStyle: { gap: 1, justifyContent: 'space-between' },
});

export const ProfileLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center' },
	innerContainer: {
		paddingHorizontal: 18,
		paddingBottom: 4,
		alignSelf: 'stretch',
		gap: 2,
	},
	lineSeperator: { marginBottom: 1 },
});
