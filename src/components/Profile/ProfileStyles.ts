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
	levelText: { fontStyle: 'italic', fontSize: 16 },
	lowerContainer: { top: -4 },
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
		borderRadius: 6,
		borderWidth: 4,
		borderStyle: 'dashed',
		borderColor: 'white',
	},
	image: { resizeMode: 'cover', flex: 1 },
});

export const ProfileStatisticsStyles = StyleSheet.create({
	outerContainer: {
		height: windowWidth / 2 - 40,
		flexDirection: 'row',
		gap: 10,
	},
	innerContainer: {
		flex: 1,
		gap: 14,
	},
	blockContainer: {
		borderRadius: 18,
	},
	bigBlockContainer: {
		paddingBlock: 16,
		paddingHorizontal: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 0.9,
	},
	sideBlockContainers: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 8,
		flex: 1.1,
		gap: 6,
	},
	levelInfoContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	levelMainText: { fontSize: 20, fontWeight: 'bold' },
	title1: { fontWeight: 'bold', fontSize: 20 },
	title2: { fontWeight: 'bold', fontSize: 18, maxWidth: 100 },
	title3: { fontStyle: 'italic' },
});

export const GalleryGridStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignSelf: 'stretch' },
	columnStyle: { gap: 1 },
});

export const ProfileLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center' },
	innerContainer: {
		paddingHorizontal: 18,
		paddingBottom: 4,
		alignSelf: 'stretch',
		gap: 12,
	},
	lineSeperator: { marginBottom: 1 },
});
